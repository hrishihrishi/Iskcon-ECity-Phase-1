'use client';
import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './banner.css';

interface BannerItem {
  id: string | number;
  link: string;
  image: string;
  title?: string;
  subtitle?: string;
}

interface BannerSliderProps {
  data: BannerItem[];
  autoPlayInterval?: number;
}

export default function BannerSlider({ data, autoPlayInterval = 5000 }: BannerSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!data || data.length === 0) return;
    const slideTimer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, autoPlayInterval);
    return () => clearInterval(slideTimer);
  }, [data.length, autoPlayInterval]);

  if (!data || data.length === 0) return null;

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#5974cc] z-5">
      <div className="relative h-[500px] w-full md:h-[620px]">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 banner-fade-slide ${
              index === currentIndex ? 'pointer-events-auto z-10 opacity-100' : 'pointer-events-none z-0 opacity-0'
            }`}
          >
            <Banner link={item.link} image={item.image} title={item.title} subtitle={item.subtitle} />
          </div>
        ))}
      </div>

      <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-3.5 text-white backdrop-blur-md transition-all hover:-translate-y-1/2 hover:bg-orange-600/90"
        aria-label="Previous Slide"
      >
        <FaChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-3.5 text-white backdrop-blur-md transition-all hover:-translate-y-1/2 hover:bg-orange-600/90"
        aria-label="Next Slide"
      >
        <FaChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === currentIndex ? 'w-8 bg-orange-500' : 'w-2.5 bg-white/70 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}