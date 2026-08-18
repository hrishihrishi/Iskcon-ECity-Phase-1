import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Donate | Support ISKCON Electronic City Sevas & Programs",
  description:
    "Donate to ISKCON Electronic City and support Anna Dana (free meal distribution), deity worship sevas, Bhakti Yoga programs, and community outreach in Bengaluru's Electronic City. Your offering makes a difference.",
  alternates: {
    canonical: "https://iskcon-e-city-phase-1-two.vercel.app/donate",
  },
  openGraph: { url: "https://iskcon-e-city-phase-1-two.vercel.app/donate" },
};

import {
  Mail,
  Phone,
  QrCode,
  ShieldCheck,
  Heart,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { CONTACT_DETAILS } from "@/constants/contactDetails";

interface ExpenseItem {
  category: string;
  monthlyAmount: string;
  percentage: string;
  description: string;
}

const EXPENSE_DATA: ExpenseItem[] = [
  {
    category: "Prasadam Distribution",
    monthlyAmount: "₹1,80,000",
    percentage: "40%",
    description:
      "Free daily sanctified meals for devotees, visitors, and underprivileged communities.",
  },
  {
    category: "Rent & Infrastructure",
    monthlyAmount: "₹1,35,000",
    percentage: "30%",
    description:
      "Main center lease, deity alter maintenance, hall setup, and utility operational costs.",
  },
  {
    category: "Transport & Logistics",
    monthlyAmount: "₹67,500",
    percentage: "15%",
    description:
      "Outreach movement, book distribution vehicles, and event setup logistics.",
  },
  {
    category: "Others & Emergency",
    monthlyAmount: "₹67,500",
    percentage: "15%",
    description:
      "Festival celebrations, guest speaker care, digital outreach, and contingency funds.",
  },
];

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-amber-500/30">
            Support Our Mission
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Empower Spiritual Outreach in E-City
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed">
            Your contributions keep the lamps of wisdom, devotion, and selfless
            service burning continuously. Every contribution directly funds
            local community welfare and spiritual education.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Quote Card */}
        <div className="relative bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-2xl p-8 sm:p-10 shadow-xl overflow-hidden">
          <div className="absolute -right-6 -bottom-6 opacity-10 text-white">
            <Heart size={200} />
          </div>
          <div className="relative z-10 max-w-3xl">
            <p className="text-xl sm:text-2xl font-serif italic leading-relaxed mb-4">
              &ldquo;Whatever you do, whatever you eat, whatever you offer or
              give away, and whatever austerities you perform—do that, O son of
              Kuntī, as an offering unto Me.&rdquo;
            </p>
            <p className="text-amber-200 font-semibold text-sm sm:text-base tracking-wide">
              — Bhagavad Gita 9.27
            </p>
          </div>
        </div>

        {/* Core Content: QR & Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* QR Code Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm text-center flex flex-col items-center">
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl mb-6 shadow-inner">
              <Image
                src="/images/QRcode.png"
                alt="ISKCON Electronic City UPI QR Code"
                width={390}
                height={220}
                className="rounded-lg object-contain mx-auto"
                priority
              />
            </div>

            <div className="w-full pt-6 border-t border-slate-100 space-y-3 text-left">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-500">UPI ID:</span>
                <span className="font-mono font-semibold text-slate-800 bg-slate-100 px-2 py-0.5 rounded">
                  9742395141.eazypay@icici
                </span>
              </div>
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-500">Account Name:</span>
                <span className="font-medium text-slate-800">M/S.ISKCON</span>
              </div>
            </div>
          </div>

          {/* Queries & Motivation Info */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Why Your Contribution Matters
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                At ISKCON Electronic City, we serve as an oasis of spiritual
                nourishment amid the fast-paced tech hub of Bengaluru. Your
                support enables us to expand daily prasadam distribution, host
                transformative youth programs, and maintain a serene sanctuary
                open to all seeking inner peace.
              </p>
            </div>

            {/* Tax Benefits and Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-slate-100">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  className="text-emerald-600 shrink-0 mt-0.5"
                  size={20}
                />
                <div>
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Direct Impact
                  </p>
                  <p className="text-xs text-slate-500">
                    100% of your contribution goes directly to the chosen cause.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="text-amber-600 shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    100% Transparent
                  </p>
                  <p className="text-xs text-slate-500">
                    Funds directly empower community welfare and outreach.
                  </p>
                </div>
              </div>
            </div>

            {/* Queries Section */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                <HelpCircle size={18} className="text-amber-600" />
                Have queries regarding donations or 80G receipts?
              </div>
              <p className="text-xs text-slate-600">
                Contact our treasury desk directly for receipts, bank wire
                transfers, or custom sponsorship inquiries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={`tel:${CONTACT_DETAILS.phone}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 px-4 py-2.5 rounded-lg hover:border-amber-500 hover:text-amber-600 transition-colors shadow-sm"
                >
                  <Phone size={14} /> {CONTACT_DETAILS.phone}
                </a>
                <a
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 px-4 py-2.5 rounded-lg hover:border-amber-500 hover:text-amber-600 transition-colors shadow-sm"
                >
                  <Mail size={14} /> {CONTACT_DETAILS.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Expenses Table Section */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
              Financial Transparency
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
              Monthly Operational Breakdown
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Here is how your contributions help us sustain and run our monthly
              temple operations efficiently.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-50">
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Monthly Allocation</th>
                  <th className="py-3 px-4">Budget Share</th>
                  <th className="py-3 px-4">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                {EXPENSE_DATA.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    <td className="py-4 px-4 font-semibold text-slate-900">
                      {item.category}
                    </td>
                    <td className="py-4 px-4 font-mono font-medium text-amber-700">
                      {item.monthlyAmount}
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-block px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-xs font-semibold border border-amber-200">
                        {item.percentage}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-slate-600 text-xs sm:text-sm">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
