// EventBar.tsx
'use client';

import React, { useState, useEffect } from 'react';

export default function EventBar() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-09-04T16:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    // <div className="w-full p-[2px] animate-conic-gold rounded-lg">
    // <div className="w-full p-[2px] animate-gold-shimmer shadow-xl shadow-amber-500/20">
    <div className="w-full p-[2px] animate-aura-gold z-5">
      <nav className="bg-[#4b1d3f] text-[#FFD700] px-3 py-2 md:px-8 font-serif shadow-md w-full">
      <div className="max-w-9xl mx-auto flex flex-row items-center justify-between gap-2 md:gap-4">
        
        {/* Title */}
<h1 className="text-md sm:text-sm md:text-4xl font-bold tracking-wide text-left rounded-lg">          Shree Krishna Janmashtami
        </h1>

        {/* Live Countdown & CTA */}
        <div className="flex items-center justify-end gap-2 md:gap-6">
          <div className="font-sans flex items-center gap-1 md:gap-2 text-xs md:text-2xl">
            <span><strong className="text-sm md:text-3xl font-serif">{timeLeft.days}</strong>d</span>
            <span><strong className="text-sm md:text-3xl font-serif">{timeLeft.hours}</strong>h</span>
            <span><strong className="text-sm md:text-3xl font-serif">{timeLeft.minutes}</strong>m</span>
            <span><strong className="text-sm md:text-3xl font-serif">{timeLeft.seconds}</strong>s</span>
          </div>

          <button 
            onClick={() => { window.location.href = '/janmastami'; }}
            aria-label="See programme"
            className="bg-gradient-to-r from-[#e3b964] via-[#f4d485] to-[#e3b964] text-black px-2.5 py-1 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-2xl hover:opacity-90 transition-opacity flex items-center justify-center"
          >
            <span className="hidden md:inline mr-1">See programme</span> &rarr;
          </button>
        </div>

      </div>
    </nav>
    </div>
  );
}