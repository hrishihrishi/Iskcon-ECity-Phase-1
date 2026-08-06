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
    <div className="relative w-full overflow-hidden shadow-2xl bg-neutral-900">
      
      {/* Slides Viewport */}
      <div className="relative w-full h-[500px] md:h-[600px]">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 banner-fade-slide ${
              index === currentIndex ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <Banner link={item.link} image={item.image} title={item.title} subtitle={item.subtitle} />
          </div>
        ))}
      </div>

      {/* Navigation Arrow Controls */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-orange-600 text-white p-3.5 rounded-full transition-colors backdrop-blur-sm"
        aria-label="Previous Slide"
      >
        <FaChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-orange-600 text-white p-3.5 rounded-full transition-colors backdrop-blur-sm"
        aria-label="Next Slide"
      >
        <FaChevronRight className="w-5 h-5" />
      </button>

      {/* Pagination Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === currentIndex ? 'bg-orange-500 w-8' : 'bg-white/50 w-2.5 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}