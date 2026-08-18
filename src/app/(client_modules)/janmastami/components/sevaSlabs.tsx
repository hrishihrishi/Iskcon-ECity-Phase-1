
import Image from 'next/image';
import React from 'react';

type SevaSlabsProps = {
  imageUrl?: string;
  altText?: string;
};

export function SevaSlabs({ 
  imageUrl = '/images/JanmastamiDonation.jpg', 
  altText = 'Janmashtami Seva Slabs and Opportunities' 
}: SevaSlabsProps) {
  return (
    <section className="w-full bg-[#fdfaf1] py-12 px-4 sm:px-8 font-serif">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-[#5c2a41] text-3xl sm:text-4xl font-bold">
            ★  Contribution & Opportunities  ★
          </h2>
          {/* <div className="text-[#d0a34b] text-xl mt-1">★</div> */}
        </div>

        {/* Image Container */}
        <div className="relative w-full rounded-3xl overflow-hidden border border-[#e6d0a1] shadow-xl bg-[#fffdf8]">
          <Image
            src={imageUrl} 
            alt={altText}
            width={1200}
            height={800}
            className="w-full h-auto object-cover block"
            priority
          />
        </div>

      </div>
    </section>
  );
}