// src/components/VideoSlider.tsx
'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { VideoCard } from './VideoCard';

export interface VideoItem {
  id: string | number;
  videoUrl: string;
  title?: string;
}

interface VideoSliderProps {
  data: VideoItem[];
}

export const VideoSlider: React.FC<VideoSliderProps> = ({ data }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  // Helper to determine single card scroll width based on breakpoint
  const getCardWidth = useCallback(() => {
    if (!sliderRef.current) return 0;
    const { clientWidth } = sliderRef.current;
    if (window.innerWidth >= 1024) return clientWidth / 3;
    if (window.innerWidth >= 768) return clientWidth / 2;
    return clientWidth;
  }, []);

  // Update visible card count on mount and window resize
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) setVisibleCards(3);
      else if (window.innerWidth >= 768) setVisibleCards(2);
      else setVisibleCards(1);
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // Track scroll position to update active indicator dot
  const handleScroll = useCallback(() => {
    if (!sliderRef.current) return;
    const { scrollLeft } = sliderRef.current;
    const cardWidth = getCardWidth();
    if (cardWidth > 0) {
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  }, [getCardWidth]);

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const cardWidth = getCardWidth();
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Direct scroll when clicking an indicator dot
  const scrollToSlide = (index: number) => {
    if (!sliderRef.current) return;
    const cardWidth = getCardWidth();
    sliderRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (!sliderRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 5) {
        sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scroll('right');
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered, data.length, getCardWidth]);

  // Calculate total pages for dots (Total cards - visible cards + 1)
  const totalDots = Math.max(1, data.length - visibleCards + 1);

  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl text-white pt-6 md:text-3xl lg:text-6xl font-bold underline decoration-wavy">
          Featured Videos
        </h1>
      </div>

      <div 
        className="relative w-full max-w-9xl mx-auto px-4 py-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Navigation Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white text-black hover:bg-green-100 shadow-lg backdrop-blur-sm transition-all focus:outline-none px-8"
          aria-label="Previous Video"
        >
          &#10094;
        </button>

        {/* Slider Container */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none py-4 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {data.map((item) => (
            <VideoCard key={item.id} videoUrl={item.videoUrl} title={item.title} />
          ))}
        </div>

        {/* Right Navigation Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white text-black hover:bg-green-100 shadow-lg backdrop-blur-sm transition-all focus:outline-none px-8"
          aria-label="Next Video"
        >
          &#10095;
        </button>

        {/* Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 focus:outline-none ${
                activeIndex === index
                  ? 'w-8 bg-white'
                  : 'w-3 bg-gray-400 hover:bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};