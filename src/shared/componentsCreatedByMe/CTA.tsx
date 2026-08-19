// components/EventBanner.tsx
import React from 'react';

interface EventBannerProps {
  title?: string;
  date?: string;
  time?: string;
  location?: string;
  onMapClick?: () => void;
  onCallClick?: () => void;
}

export const CTA: React.FC<EventBannerProps> = ({
  title = "JANMASHTAMI",
  date = "FRI, 4 SEP",
  time = "7 AM ",
  location = "Shubh Enclave, Haralur Road",
  onMapClick,
  onCallClick,
}) => {
  return (
    <div className="fixed bottom-3 flex md:hidden lg:hidden items-center justify-between gap-4 rounded-3xl bg-[#2A081A] text-[#F3E5AB] shadow-xl border border-[#4A152D]/50 max-w-md w-full p-2">
      {/* Left Content */}
      <div className="flex flex-col text-left">
        <h2 className="text-sm font-bold tracking-wider uppercase text-[#E5C158] leading-tight">
          {title} <span className="inline-block mx-1">•</span> {date}
        </h2>
        <p className="text-xs text-white/90 font-medium mt-1 leading-snug">
          {time} <span className="inline-block mx-1">•</span> {location}
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