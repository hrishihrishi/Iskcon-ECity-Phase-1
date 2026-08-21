
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

// type SevaSlabsProps = {
//   imageUrl?: string;
//   altText?: string;
// };

export function SevaSlabs(
  // { 
  // imageUrl = '/images/JanmastamiDonation.jpg', 
  // altText = 'Janmashtami Seva Slabs and Opportunities' 
// }: SevaSlabsProps
){
  const donationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(()=>{
      donationRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 5500)
    return ()=> clearTimeout(timer);
  }, []);
  
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
        <div className="relative w-full rounded-3xl overflow-hidden border border-[#e6d0a1] shadow-xl bg-[#fffdf8] lg:grid grid-cols-2 lg:gap-[2vw] px-2 lg:px-6 lg:py-6">
          <Image
            src={"/images/Welcome_Kit.jpg"}
            alt="Janmashtami Seva Slabs and Opportunities"
            width={1200}
            height={800}
            className="w-full h-auto object-cover block pb-4"
            priority
          />
          <div ref={donationRef}>
          <Image
            src={"/images/JanmastamiDonation.jpg"}
            alt="Janmashtami Seva Slabs and Opportunities"
            width={1200}
            height={800}
            className="w-full h-auto object-cover block"
            priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}