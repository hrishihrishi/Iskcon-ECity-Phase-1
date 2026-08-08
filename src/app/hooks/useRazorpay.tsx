'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { API_CONFIG } from '@/app/api/config/api.config';

/* ------------------------------------------------------------------ */
/*  Razorpay window type shim                                           */
/* ------------------------------------------------------------------ */
interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  order_id: string;
  name?: string;
  description?: string;
  image?: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  theme?: {
    color?: string;
  };
  handler: (response: RazorpaySuccessResponse) => void;
  modal?: {
    ondismiss?: () => void;
  };
}

interface RazorpaySuccessResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => {
      open: () => void;
      on: (event: string, handler: (response: unknown) => void) => void;
    };
  }
}

/* ------------------------------------------------------------------ */
/*  Hook                                                                */
/* ------------------------------------------------------------------ */
type PaymentStatus = 'idle' | 'loading' | 'success' | 'error' | 'cancelled';

interface UseRazorpayReturn {
  initiatePayment: (options: {
    amountInPaise: number;
    currency?: string;
    name?: string;
    description?: string;
    prefill?: RazorpayOptions['prefill'];
  }) => Promise<void>;
  status: PaymentStatus;
  error: string | null;
  reset: () => void;
}

const RAZORPAY_SCRIPT = 'https://checkout.razorpay.com/v1/checkout.js';

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (document.querySelector(`script[src="${RAZORPAY_SCRIPT}"]`)) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = RAZORPAY_SCRIPT;
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

const useRazorpay = (): UseRazorpayReturn => {
  const [status, setStatus] = useState<PaymentStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Pre-load the Razorpay script while the component mounts
    loadRazorpayScript().then((loaded) => {
      scriptLoadedRef.current = loaded;
    });
  }, []);

  const reset = useCallback(() => {
    setStatus('idle');
    setError(null);
  }, []);

  const initiatePayment = useCallback(
    async ({
      amountInPaise,
      currency = 'INR',
      name = 'ISKCON Temple',
      description = 'Seva Donation',
      prefill,
    }: {
      amountInPaise: number;
      currency?: string;
      name?: string;
      description?: string;
      prefill?: RazorpayOptions['prefill'];
    }) => {
      setStatus('loading');
      setError(null);

      try {
        /* ---- 1. Ensure Razorpay script is loaded ---- */
        if (!scriptLoadedRef.current) {
          const loaded = await loadRazorpayScript();
          if (!loaded || typeof window.Razorpay === 'undefined') {
            throw new Error('Failed to load Razorpay SDK. Please check your internet connection.');
          }
          scriptLoadedRef.current = true;
        }

        /* ---- 2. Create order on backend ---- */
        const orderRes = await fetch(API_CONFIG.endpoints.payment.order, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount: amountInPaise, currency }),
        });

        if (!orderRes.ok) {
          const data = await orderRes.json().catch(() => ({}));
          throw new Error((data as { error?: string }).error ?? 'Failed to create payment order.');
        }

        const { order_id, amount, currency: orderCurrency } = (await orderRes.json()) as {
          order_id: string;
          amount: number;
          currency: string;
        };

        /* ---- 3. Open Razorpay checkout modal ---- */
        await new Promise<void>((resolve, reject) => {
          const options: RazorpayOptions = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
            amount,
            currency: orderCurrency,
            order_id,
            name,
            description,
            prefill,
            theme: { color: '#b45309' }, // amber-700 — matches the card theme
            handler: async (response) => {
              /* ---- 4. Verify signature on backend ---- */
              try {
                const verifyRes = await fetch(API_CONFIG.endpoints.payment.callback, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(response),
                });

                if (!verifyRes.ok) {
                  const data = await verifyRes.json().catch(() => ({}));
                  reject(new Error((data as { error?: string }).error ?? 'Signature verification failed.'));
                  return;
                }

                setStatus('success');
                resolve();
              } catch (verifyErr) {
                reject(verifyErr);
              }
            },
            modal: {
              ondismiss: () => {
                setStatus('cancelled');
                reject(new Error('CANCELLED'));
              },
            },
          };

          const rzp = new window.Razorpay(options);

          rzp.on('payment.failed', (response: unknown) => {
            const r = response as { error?: { description?: string } };
            reject(new Error(r?.error?.description ?? 'Payment failed.'));
          });

          rzp.open();
        });
      } catch (err: unknown) {
        if (err instanceof Error && err.message === 'CANCELLED') {
          // Already set to 'cancelled' above; don't set error message
          return;
        }
        const message = err instanceof Error ? err.message : 'Payment failed.';
        setError(message);
        setStatus('error');
      }
    },
    [],
  );

  return { initiatePayment, status, error, reset };
};

export default useRazorpay;
