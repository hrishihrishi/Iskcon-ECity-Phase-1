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
    <nav className="bg-[#4b1d3f] text-[#ebd197] px-4 py-3 md:px-8 font-serif shadow-md w-full">
      <div className="max-w-9xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Top/Left Branding */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <h1 className="flex items-center justify-center w-full text-lg md:text-2xl font-bold tracking-wide md:hidden">
            Shree Krishna Janmashtami
          </h1>
        </div>

        {/* Desktop Title */}
        <h1 className="hidden md:block sm:text-2xl md:text-4xl lg:text-4xl font-bold tracking-wide text-left">
          Shree Krishna Janmashtami
        </h1>

        {/* Live Countdown & CTA */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 w-full md:w-auto">
          <div className="font-sans flex items-center gap-2 pr-4 text-2xl">
            <span><strong className="text-3xl font-serif">{timeLeft.days}</strong>d</span>
            <span><strong className="text-3xl font-serif">{timeLeft.hours}</strong>h</span>
            <span><strong className="text-3xl font-serif">{timeLeft.minutes}</strong>m</span>
            <span><strong className="text-3xl font-serif">{timeLeft.seconds}</strong>s</span>
          </div>

          <button 
          onClick={() => {window.location.href = '/janmastami'}}
            
          className="bg-gradient-to-r from-[#e3b964] via-[#f4d485] to-[#e3b964] text-black px-5 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-2xl md:text-2xl hover:opacity-90 transition-opacity">
            See programme &rarr;
          </button>
        </div>

      </div>
    </nav>
  );
}