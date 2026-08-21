"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import Banner from "./Banner";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./banner.css";

interface BannerItem {
  id: string | number;
  link: string;
  image: string;
  buttonText: string;
  title?: string;
  subtitle?: string;
}

interface BannerSliderProps {
  data: BannerItem[];
  autoPlayInterval?: number;
}

export default function BannerSlider({
  data,
  autoPlayInterval = 5000,
}: BannerSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const getSlideWidth = useCallback(() => {
    if (!sliderRef.current) return 0;
    return sliderRef.current.clientWidth;
  }, []);

  const handleScroll = useCallback(() => {
    if (!sliderRef.current) return;
    const { scrollLeft } = sliderRef.current;
    const slideWidth = getSlideWidth();
    if (slideWidth > 0) {
      const index = Math.round(scrollLeft / slideWidth);
      setActiveIndex(index);
    }
  }, [getSlideWidth]);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const slideWidth = getSlideWidth();
    const scrollAmount = direction === "left" ? -slideWidth : slideWidth;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const scrollToSlide = (index: number) => {
    if (!sliderRef.current) return;
    const slideWidth = getSlideWidth();
    sliderRef.current.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!data || data.length === 0 || isHovered) return;

    const interval = setInterval(() => {
      if (!sliderRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 5) {
        sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scroll("right");
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [data?.length, autoPlayInterval, isHovered]);

  if (!data || data.length === 0) return null;

  return (
    <div
      className="relative w-full overflow-hidden bg-[#5974cc] z-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-none scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="w-full flex-shrink-0 snap-start h-[500px] md:h-[620px]"
          >
            <Banner
              link={item.link}
              image={item.image}
              buttonText={item.buttonText}
              title={item.title}
              subtitle={item.subtitle}
            />
          </div>
        ))}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          scroll("left");
        }}
        className="hidden md:block absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-3.5 text-white backdrop-blur-md transition-all hover:-translate-y-1/2 hover:bg-orange-600/90"
        aria-label="Previous Slide"
      >
        <FaChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          scroll("right");
        }}
        className="hidden md:block absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-3.5 text-white backdrop-blur-md transition-all hover:-translate-y-1/2 hover:bg-orange-600/90"
        aria-label="Next Slide"
      >
        <FaChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === activeIndex
                ? "w-8 bg-orange-500"
                : "w-2.5 bg-white/70 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

