import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, currency = 'INR', receipt } = body as {
      amount: number;
      currency?: string;
      receipt?: string;
    };

    if (!amount || amount < 100) {
      return NextResponse.json(
        { error: 'Amount must be at least 100 paise (₹1).' },
        { status: 400 },
      );
    }

    const order = await razorpay.orders.create({
      amount,          // in paise
      currency,
      receipt: receipt ?? `receipt_${Date.now()}`,
    });

    return NextResponse.json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (err: unknown) {
    console.error('[Razorpay] create-order error:', err);
    const message =
      err instanceof Error ? err.message : 'Failed to create Razorpay order.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
