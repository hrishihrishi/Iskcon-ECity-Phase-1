import DonateButton from "@/shared/componentsCreatedByMe/DonateButton";
import { SevaCardData } from "@/data/donation";
import img1 from "@/images/bhagwatam.png"

export default function DonationCard(seva: SevaCardData) {
  return (
    <article
      key={seva.id}
      className="relative rounded-2xl border border-amber-900/10 shadow-[0_4px_20px_rgba(200,77,0,0.05)] overflow-hidden w-full transition-shadow hover:shadow-md"
    >
      {/* Background Image Tag */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "https://images.unsplash.com/photo-1600044720461-d22e3ce66369?q=80&w=2071&auto=format&fit=crop"
 }}
      />

      {/* Translucent Content Overlay */}
      <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row justify-between items-start bg-[#fff8ef]/85 backdrop-blur-sm h-full w-full">
        
        {/* Left Column: Details & Actions */}
        <div className="flex-grow max-w-3xl w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className={`w-10 h-[1px] ${seva.lineBg}`}></span>
            <span
              className={`${seva.categoryColor} font-bold text-xs uppercase tracking-wider`}
            >
              {seva.category}
            </span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#221b00] mb-6">
            {seva.title}
          </h2>
          <p className="text-[#4f453f] text-base md:text-lg leading-relaxed mb-8">
            {seva.description}
          </p>

          {/* Incentive Banner (Already Translucent) */}
          <div className="bg-[#feedb7]/60 rounded-xl p-5 border border-amber-900/10 mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-amber-800 text-xl font-bold">★</span>
              <span className="text-[#221b00] font-medium text-sm md:text-base">
                {seva.incentive}
              </span>
            </div>
          </div>

          {/* Actions Row with Razorpay DonateButton */}
          <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
            <div className="w-full sm:w-auto min-w-[220px]">
              <DonateButton
                amountInRupees={seva.amountInRupees}
                sevaName={seva.title}
                description={seva.description}
                className="bg-[#e8621a] hover:bg-[#d05615] text-white font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-full shadow-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                Donate ₹{seva.amountInRupees.toLocaleString("en-IN")} →
              </DonateButton>
            </div>
            <button
              type="button"
              className="w-full sm:w-auto bg-[#fff8ef] hover:bg-[#fff3d2] text-[#221b00] border border-amber-900/20 font-semibold text-sm uppercase tracking-wider py-4 px-8 rounded-full transition-colors duration-300"
            >
              Know More
            </button>
          </div>
        </div>

        {/* Right Column: Top Donors Panel (Already Translucent) */}
        <div className="w-full md:w-80 shrink-0 bg-[#fff3d2]/80 p-6 rounded-xl border border-amber-900/10 mt-4 md:mt-0 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4 text-[#221b00] font-bold">
            <span className="text-amber-800">👥</span>
            <span>Top Donors</span>
          </div>
          <ul className="space-y-3 mb-5">
            {seva.topDonors.map((donor, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full ${donor.badgeBg} ${donor.badgeText} flex items-center justify-center font-bold text-xs`}
                >
                  {donor.initials}
                </div>
                <span className="text-[#4f453f] text-sm font-medium">
                  {donor.name}
                </span>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="text-[#745849] hover:text-amber-800 text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
          >
            View All Donors →
          </a>
        </div>
      </div>
    </article>
  );
}