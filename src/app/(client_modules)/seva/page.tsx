'use client';

import React from 'react';
import DonateButton from '@/shared/componentsCreatedByMe/DonateButton';
import DonationCard from './components/DonationCard';
import { SEVA_ITEMS } from '@/data/donation';

export default function SevaPage() {
  return (
    <main className="min-h-screen bg-[#fff8ef] text-[#221b00] pt-24 md:pt-32 px-5 md:px-8 max-w-7xl mx-auto w-full pb-16">
      {/* Header Section */}
      <header className="text-center mb-12 max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#f7d2be] text-[#745849] mb-6 shadow-sm">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
          </svg>
        </div>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#221b00] leading-tight mb-6 italic">
          &ldquo;If one offers Me with love and devotion a leaf, a flower, fruit or water, I will accept it.&rdquo;
        </h1>
        <p className="text-sm md:text-base text-[#4f453f] font-semibold uppercase tracking-widest">
          — Bhagavad Gita 9.26
        </p>
      </header>

      {/* Seva Cards List */}
      <div className="flex flex-col gap-10 w-full">
        {SEVA_ITEMS.map((seva) => (
          <DonationCard key={seva.id} {...seva} />
        ))}
      </div>
    </main>
  );
}
