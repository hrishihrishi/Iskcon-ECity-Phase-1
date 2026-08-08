import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      body as {
        razorpay_order_id?: string;
        razorpay_payment_id?: string;
        razorpay_signature?: string;
      };

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: 'Missing required fields: razorpay_order_id, razorpay_payment_id, razorpay_signature.' },
        { status: 400 },
      );
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET!;
    const generatedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (generatedSignature !== razorpay_signature) {
      return NextResponse.json(
        { success: false, error: 'Payment signature verification failed.' },
        { status: 400 },
      );
    }

    // Signatures match — payment is authentic.
    // Add any post-payment business logic here (e.g. update DB, send email).
    return NextResponse.json({ success: true, payment_id: razorpay_payment_id });
  } catch (err: unknown) {
    console.error('[Razorpay] verify-payment error:', err);
    const message =
      err instanceof Error ? err.message : 'Failed to verify payment.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
