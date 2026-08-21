'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface BannerProps {
  link: string;
  image: string;
  buttonText: string;
  title?: string;
  subtitle?: string;
}

export default function Banner({ link, image, buttonText, title, subtitle }: BannerProps) {
  const router = useRouter();

  const handleBannerClick = () => {
    router.push(link);
  };

  return (
    <div
      onClick={handleBannerClick}
      className="group relative h-[500px] w-full cursor-pointer overflow-hidden md:h-[620px]"
    >
      <Image
        src={image}
        alt={title || 'ISKCON Temple Banner'}
        fill
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      <div className="absolute inset-0 flex items-end banner-text">
        <div className="w-full p-8 text-white md:p-12 text-center">
          <span className="mb-4 inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-orange-200 backdrop-blur-sm">
            {buttonText}
          </span>
          {title && <h2 className="mb-3 max-w-3xl font-serif text-3xl font-bold leading-tight md:text-5xl">{title}</h2>}
          {subtitle && <p className="max-w-2xl text-base leading-7 text-neutral-200 md:text-lg">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}