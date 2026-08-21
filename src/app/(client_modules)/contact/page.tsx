import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";
import TEMPLE from "@/data/contactDetails";

export const metadata: Metadata = {
  title: "Contact Us | Visit ISKCON Electronic City Temple",
  description:
    "Get in touch with ISKCON Electronic City. Find our address at Electronic City Phase 1, Hosur Road, Bengaluru 560100, phone number, email, and social media links. Visit us for daily darshan and programs.",
  alternates: {
    canonical: "https://iskcon-e-city-phase-1-two.vercel.app/contact",
  },
  openGraph: { url: "https://iskcon-e-city-phase-1-two.vercel.app/contact" },
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen  text-[#221b00]">
      {/* Hero Header Section */}
      <section className="bg-[#75bad3] text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          {/* <span className="uppercase tracking-widest text-xs font-bold bg-white/20 px-4 py-1.5 rounded-full inline-block mb-4">
            Connect With The Temple
          </span> */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Contact Us
          </h1>
          <p className="text-amber-100 text-base md:text-lg max-w-2xl mx-auto">
            We would love to hear from you. Visit our temple, participate in
            programs, ask spiritual inquiries.
          </p>
        </div>
      </section>

      {/* Bhagavad Gita Quote Section */}
      <section className="max-w-4xl mx-auto px-4 -mt-8 relative z-20 mb-8">
        <div className="bg-white rounded-2xl p-8 border border-amber-900/10 shadow-[0_4px_20px_rgba(200,77,0,0.05)] text-center">
          <p className="text-xs font-bold text-[#e8621a] tracking-wider uppercase mb-2">
            Bhagavad Gita As It Is • 9.14
          </p>
          <blockquote className="text-lg md:text-xl italic font-serif text-[#221b00] mb-3">
            &ldquo;Always chanting My glories, endeavoring with great
            determination, bowing down before Me, these great souls perpetually
            worship Me with devotion.&rdquo;
          </blockquote>
          <div className="w-16 h-0.5 bg-[#e8621a] mx-auto"></div>
        </div>
      </section>

      {/* Main Content Grid: Info & Google Maps */}
      <section className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Left Column: Contact Information & Socials */}
        <div className="flex flex-col justify-between space-y-8">
          <div className="bg-white rounded-2xl p-8 border border-amber-900/10 shadow-sm">
            <h2 className="text-2xl font-bold font-serif text-[#221b00] mb-6">
              Temple Information
            </h2>

            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="bg-[#f7d2be] p-3 rounded-full text-[#745849] mt-1 shrink-0">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#221b00]">Address</h3>
                  <p className="text-[#4f453f] text-sm mt-1">
                    {TEMPLE.CENTRE_ADDRESS}
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <div className="bg-[#f7d2be] p-3 rounded-full text-[#745849] mt-1 shrink-0">
                  <FaPhoneAlt className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#221b00]">
                    Phone Support
                  </h3>
                  <p className="text-[#4f453f] text-sm mt-1">
                    {TEMPLE.PHONE_NUMBER} (Avadhut Nimai)
                  </p>
                  <p className="text-[#4f453f] text-sm mt-1">
                    {TEMPLE.PHONE_NUMBER_2} (Ravikumar Singh)
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <div className="bg-[#f7d2be] p-3 rounded-full text-[#745849] mt-1 shrink-0">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#221b00]">
                    Email Address
                  </h3>
                  <p className="text-[#4f453f] text-sm mt-1">
                    {TEMPLE.EMAIL}
                  </p>
                </div>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-8 pt-8 border-t border-amber-900/10">
              <h3 className="font-semibold text-[#221b00] mb-4">
                Follow Our Outreach Channels
              </h3>
              <div className="flex space-x-4">
                <Link
                  href={TEMPLE.FACEBOOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#fff3d2] text-[#745849] hover:bg-[#e8621a] hover:text-white p-3 rounded-full transition-colors duration-200"
                >
                  <FaFacebook className="w-5 h-5" />
                </Link>
                <Link
                  href={TEMPLE.INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#fff3d2] text-[#745849] hover:bg-[#e8621a] hover:text-white p-3 rounded-full transition-colors duration-200"
                >
                  <FaInstagram className="w-5 h-5" />
                </Link>
                <Link
                  href={TEMPLE.YOUTUBE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#fff3d2] text-[#745849] hover:bg-[#e8621a] hover:text-white p-3 rounded-full transition-colors duration-200"
                >
                  <FaYoutube className="w-5 h-5" />
                </Link>
                <Link
                  href={TEMPLE.TWITTER_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#fff3d2] text-[#745849] hover:bg-[#e8621a] hover:text-white p-3 rounded-full transition-colors duration-200"
                >
                  <FaTwitter className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Google Maps Embed */}
        <div className="bg-white rounded-2xl p-4 border border-amber-900/10 shadow-sm h-[450px] lg:h-full min-h-[400px] overflow-hidden flex flex-col">
          <h2 className="text-xl font-bold font-serif text-[#221b00] mb-4 px-2">
            Find Us on Map
          </h2>
          <div className="w-full flex-1 rounded-xl overflow-hidden relative">
            <iframe
              title="ISKCON Temple Location"
              src={TEMPLE.MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Donation CTA Section */}
      {/* <section className="bg-[#303030] text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-[#e8621a]/20 text-[#e8621a] p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6">
            <FaHeart className="w-6 h-6 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Support Our Seva & Outreach Programs</h2>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-8 text-lg">
            Your generous contributions help us distribute sacred literature, run prasadam distribution programs, and maintain temple outreach activities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/seva" 
              className="bg-[#e8621a] hover:bg-[#d05615] text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all text-center uppercase tracking-wider text-sm"
            >
              Contribute to Seva Now
            </Link>
            <Link 
              href="/blog" 
              className="bg-transparent border border-neutral-600 hover:border-amber-400 text-white font-bold px-8 py-4 rounded-full transition-all text-center uppercase tracking-wider text-sm"
            >
              Explore Our Blogs
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}
