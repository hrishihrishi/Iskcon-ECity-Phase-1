'use client';

import React from 'react';
import useRazorpay from '@/app/hooks/useRazorpay';

interface DonateButtonProps {
  /** Amount in INR (whole rupees). Converted to paise internally. */
  amountInRupees: number;
  sevaName?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function DonateButton({
  amountInRupees,
  sevaName = 'ISKCON Temple',
  description = 'Seva Donation',
  className = '',
  children,
}: DonateButtonProps) {
  const { initiatePayment, status, error, reset } = useRazorpay();

  const isLoading = status === 'loading';
  const isSuccess = status === 'success';
  const isCancelled = status === 'cancelled';
  const isError = status === 'error';

  const handleClick = async () => {
    if (isLoading || isSuccess) return;
    reset();
    await initiatePayment({
      amountInPaise: amountInRupees * 100,
      name: sevaName,
      description,
    });
  };

  return (
    <div className="w-full space-y-2">
      <button
        id={`donate-btn-${sevaName.replace(/\s+/g, '-').toLowerCase()}`}
        onClick={handleClick}
        disabled={isLoading || isSuccess}
        aria-label={`Donate ₹${amountInRupees.toLocaleString('en-IN')} for ${sevaName}`}
        className={[
          'donate-cta-btn relative w-full overflow-hidden rounded-xl px-6 py-4',
          'text-base font-bold uppercase tracking-widest transition-all duration-300',
          'disabled:cursor-not-allowed disabled:opacity-60',
          isSuccess
            ? 'bg-emerald-600 text-white'
            : 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-400 hover:to-orange-500 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] active:scale-[0.98]',
          className,
        ].join(' ')}
      >
        {/* Shimmer animation */}
        {!isSuccess && !isLoading && (
          <span
            aria-hidden="true"
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          />
        )}

        {isLoading && (
          <span className="flex items-center justify-center gap-2">
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Preparing…
          </span>
        )}

        {isSuccess && (
          <span className="flex items-center justify-center gap-2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Payment Successful 🙏
          </span>
        )}

        {!isLoading && !isSuccess && (
          <>
            {children ?? (
              <>
                🙏 Offer Seva — ₹{amountInRupees.toLocaleString('en-IN')}
              </>
            )}
          </>
        )}
      </button>

      {/* Status messages */}
      {isCancelled && (
        <p className="text-center text-xs text-amber-300/80">
          Payment cancelled. You can try again anytime.
        </p>
      )}
      {isError && error && (
        <p className="text-center text-xs text-red-400">
          ⚠️ {error}
        </p>
      )}
    </div>
  );
}
