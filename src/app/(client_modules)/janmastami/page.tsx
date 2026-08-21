"use client";

import React, { useEffect, useRef } from "react";
import { ScheduleGrid } from "./components/schedule";
import { SevaSlabs } from "./components/sevaSlabs";
import EventBanner from "@/shared/componentsCreatedByMe/CTA";

export default function JanmashtamiPage() {
  const sevaSlabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      sevaSlabsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main className="bg-[#fdfaf1] flex justify-center font-serif pt-10">
        <div className=" bg-[#fffdf8] border border-[#e6d0a1] rounded-2xl shadow-xl p-6 sm:p-10 w-full text-center">
          {/* Location Badge */}
          <div className="inline-block bg-[#f8efd8] text-[#5c2a41] border border-[#e6d0a1] rounded-full px-4 sm:px-6 py-2 text-[10px] sm:text-xs tracking-[0.15em] sm:mb-8">
            • ISKCON ELECTRONIC CITY •
          </div>

          {/* Title Section */}
          <h2 className="text-[#5c2a41] text-2xl sm:text-3xl md:text-4xl italic mb-2">Shree</h2>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#d0a34b] to-[#b3832c] mb-6">
            Krishna
          </h1>

          {/* Subtitle */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 text-[#1c4d43] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-2xl sm:text-3xl md:text-4xl">
            <span className="h-[1px] w-6 sm:w-12 bg-[#1c4d43]"></span>
            Janmashtami
            <span className="h-[1px] w-6 sm:w-12 bg-[#1c4d43]"></span>
          </div>
          <h3 className="text-[#5c2a41] text-lg sm:text-xl md:text-2xl mb-8">Mahamahotsavam 2026</h3>
          <div className="flex items-center justify-center mb-4 text-[#1c4d43] uppercase text-2xl sm:text-3xl md:text-4xl">
            <span className="h-[1px] w-6 sm:w-12 bg-[#1c4d43]"></span>
            ಶ್ರೀಕೃಷ್ಣ ಜನ್ಮಾಷ್ಟಮಿ ಮಹಾಮಹೋತ್ಸವ
            <span className="h-[1px] w-6 sm:w-12 bg-[#1c4d43]"></span>
          </div>

          {/* Date Badge */}
          <div className="inline-flex flex-wrap sm:flex-nowrap justify-center rounded-2xl sm:rounded-full overflow-hidden text-white font-sans text-xs sm:text-sm mb-8 sm:mb-12 shadow-lg">
            <div className="bg-[#31695f] px-4 sm:px-6 py-2.5 sm:py-3 font-semibold">
              4<sup className="text-[10px]">TH</sup> SEP
            </div>
            <div className="bg-[#1c4d43] px-4 sm:px-6 py-2.5 sm:py-3 font-semibold">FRI</div>
            <div className="bg-[#5c2a41] px-4 sm:px-6 py-2.5 sm:py-3 font-semibold tracking-wider">
              4:00 PM - 1:00 AM (mid-night)
            </div>
          </div>

          {/* Description */}
          <p className="text-[#5c2a41] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Celebrate this{" "}
            <span className="italic text-[#8c3554] font-semibold">
              Janmashtami
            </span>{" "}
            at the <span className="italic">ISKCON Center</span> in your
            neighbourhood and receive the blessings of{" "}
            <span className="italic font-semibold">The Supreme Lord.</span>
          </p>
        </div>
      </main>
      {/* <ScheduleGrid /> */}
      <div ref={sevaSlabsRef}>
        <SevaSlabs />
      </div>
    </>
  );
}
