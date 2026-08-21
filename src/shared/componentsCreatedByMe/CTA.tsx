"use client";

import React from 'react';
import TEMPLE from '@/data/contactDetails';

interface EventBannerProps {
  title?: string;
  date?: string;
  time?: string;
  location?: string;
  onMapClick?: () => void;
  onCallClick?: () => void;
}

export const CTA: React.FC<EventBannerProps> = ({
  title = TEMPLE.CTA_TITLE,
  date = TEMPLE.CTA_DATE,
  time = TEMPLE.CTA_TIME,
  location = 'Sunshine Smart Kids School',
  onMapClick = () => {
    if (typeof window !== 'undefined') {
      window.open(TEMPLE.JANMASHTAMI_GMAPS_LINK, '_blank');
    }
  },
  onCallClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = `tel:${TEMPLE.PHONE_NUMBER}`;
    }
  },
}) => {
  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 flex md:hidden lg:hidden items-center justify-between gap-4 rounded-3xl bg-[#2A081A] text-[#F3E5AB] shadow-xl border border-[#4A152D]/50 max-w-md w-full p-2">
      {/* Left Content */}
      <div className="flex flex-col text-left">
        <h2 className="text-xs font-bold tracking-wider text-[#E5C158] leading-tight">
          {title} <span className="hidden sm:inline-block mx-1">•</span> <span className="block sm:inline text-xs">{date}</span>
        </h2>
        <p className="text-xs text-white/90 font-medium mt-1 leading-snug">
          {time} 
          {/* {location} */}
        </p>
      </div>

      {/* Right Action Buttons */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={onMapClick}
          className="rounded-full bg-[#E5C158] px-4 py-2 text-xs font-semibold text-[#2A081A] transition hover:bg-[#d4b047] active:scale-95"
        >
          Map
        </button>
        <button
          onClick={onCallClick}
          className="rounded-full bg-[#E5C158] px-4 py-2 text-xs font-semibold text-[#2A081A] transition hover:bg-[#d4b047] active:scale-95"
        >
          Call
        </button>
      </div>
    </div>
  );
};

export default CTA;