'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface BannerProps {
  link: string;
  image: string;
  title?: string;
  subtitle?: string;
}

export default function Banner({ link, image, title, subtitle }: BannerProps) {
  const router = useRouter();

  const handleBannerClick = () => {
    router.push(link);
  };

  return (
    <div 
      onClick={handleBannerClick}
      className="relative w-full h-[500px] md:h-[600px] cursor-pointer overflow-hidden group"
    >
      <Image 
        src={image} 
        alt={title || "ISKCON Temple Banner"} 
        fill 
        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-12 text-white">
        {title && <h2 className="text-3xl md:text-5xl font-bold font-serif mb-3">{title}</h2>}
        {subtitle && <p className="text-base md:text-lg text-neutral-200 max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  );
}