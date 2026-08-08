import React from 'react';
import Image from 'next/image';
import './donation-card.css';
import DonateButton from './DonateButton';

interface ProgramDetail {
  label: string;
  value: string;
}

interface Full_DonationCardProps {
  title: string;
  description: string;
  image: string;
  color: string; // e.g. "from-amber-900 to-orange-950" or solid color string
  amount: string;
  /** Amount in whole rupees, used by Razorpay checkout */
  amountInRupees?: number;
  badgeText?: string;
  cornerBadge?: string;
  details?: ProgramDetail[];
  features?: { title: string; subtitle: string }[];
}

export default function Full_DonationCard({
  title,
  description,
  image,
  color,
  amount,
  amountInRupees,
  badgeText = "Limited Opportunity",
  cornerBadge = "Only 365 Spots",
  details = [
    { label: "Prasadam Type", value: "Rajbhog Thali" },
    { label: "Frequency", value: "Once per Year" },
    { label: "Duration", value: "Lifetime" },
    { label: "Family Members", value: "Up to 5" }
  ],
  features = []
}: Full_DonationCardProps) {
  return (
    <div className={`donation-card-container relative overflow-hidden flex items-center ${color} text-white`}>
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Dark Gradient Veil for Readability */}
      <div className="absolute inset-0 z-0 bg-black/40"></div>

      {/* Content Layout Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Column: Title, Description & Feature Grid */}
        <div className="flex flex-col space-y-6">
          {badgeText && (
            <div className="self-start">
              <span className="bg-amber-500/30 border border-amber-400/40 text-amber-200 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                ★ {badgeText}
              </span>
            </div>
          )}

          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 leading-tight">{title}</h2>
            <p className="text-neutral-200 text-base md:text-lg max-w-xl leading-relaxed">{description}</p>
          </div>

          {/* Optional Feature Grid */}
          {features.length > 0 && (
            <div className="grid grid-cols-2 gap-3 pt-2">
              {features.map((feat, idx) => (
                <div key={idx} className="glass-panel p-3 rounded-xl">
                  <h4 className="font-semibold text-sm text-amber-200">{feat.title}</h4>
                  <p className="text-xs text-neutral-300">{feat.subtitle}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Glassmorphism Details Card & Big Rectangle Button */}
        <div className="glass-panel rounded-2xl p-6 md:p-8 relative shadow-2xl">
          
          {/* Corner Badge */}
          {cornerBadge && (
            <span className="absolute -top-3 right-6 bg-red-600 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-md tracking-widest">
              {cornerBadge}
            </span>
          )}

          <h3 className="text-xl font-serif font-bold text-amber-100 mb-6">Program Details</h3>

          {/* Details List */}
          <div className="space-y-4 mb-8">
            {details.map((detail, index) => (
              <div key={index} className="flex justify-between items-center text-sm border-b border-white/10 pb-3">
                <span className="text-neutral-300">{detail.label}</span>
                <span className="font-semibold text-amber-200">{detail.value}</span>
              </div>
            ))}
          </div>

          {/* Amount Display */}
          <div className="amount-button-box w-full rounded-xl p-4 text-center shadow-inner mb-4">
            <span className="block text-xs uppercase tracking-widest text-neutral-300 mb-1">
              One-time Contribution
            </span>
            <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {amount}
            </div>
            <span className="block text-[10px] text-neutral-300 mt-1">
              Limited to devotees only
            </span>
          </div>

          {/* Razorpay Checkout Button */}
          {amountInRupees && amountInRupees > 0 ? (
            <DonateButton
              amountInRupees={amountInRupees}
              sevaName={title}
              description={title}
            />
          ) : (
            <div className="amount-button-box w-full rounded-xl p-4 text-center cursor-default shadow-inner">
              <span className="text-sm text-neutral-300">Contact us to donate</span>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}