import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import './contact.css';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-orange-50/30 text-neutral-800">
      
      {/* Hero Header Section */}
      <section className="iskcon-gradient-bg text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="uppercase tracking-widest text-xs font-semibold bg-white/20 px-3 py-1 rounded-full inline-block mb-4">
            Connect With The Temple
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Contact ISKCON Outreach</h1>
          <p className="text-orange-100 text-lg max-w-2xl mx-auto">
            We would love to hear from you. Visit our temple, participate in our programs, or reach out with your spiritual inquiries.
          </p>
        </div>
      </section>

      {/* Bhagavad Gita Quote Section */}
      <section className="max-w-4xl mx-auto px-4 -mt-8 relative z-20 mb-16">
        <div className="bg-white rounded-2xl p-8 iskcon-card-shadow border sacred-border text-center">
          <p className="text-xs font-bold text-orange-600 tracking-wider uppercase mb-2">Bhagavad Gita As It Is • 9.14</p>
          <blockquote className="text-lg md:text-xl italic font-serif text-neutral-700 mb-3">
            &ldquo;Always chanting My glories, endeavoring with great determination, bowing down before Me, these great souls perpetually worship Me with devotion.&rdquo;
          </blockquote>
          <div className="w-16 h-0.5 bg-orange-500 mx-auto"></div>
        </div>
      </section>

      {/* Main Content Grid: Info Form & Google Maps */}
      <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        
        {/* Left Column: Contact Information & Socials */}
        <div className="flex flex-col justify-between space-y-8">
          <div className="bg-white rounded-2xl p-8 iskcon-card-shadow border sacred-border">
            <h2 className="text-2xl font-bold font-serif text-orange-900 mb-6">Temple Information</h2>
            
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600 mt-1">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Address</h3>
                  <p className="text-neutral-600 text-sm mt-1">
                    ISKCON Temple Complex, Hare Krishna Hill, Main Road, Outreach Division, India
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600 mt-1">
                  <FaPhoneAlt className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Phone Support</h3>
                  <p className="text-neutral-600 text-sm mt-1">+91 (080) 1234-5678 / +91 98765 43210</p>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600 mt-1">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Email Address</h3>
                  <p className="text-neutral-600 text-sm mt-1">outreach@iskcon-temple.org</p>
                </div>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-8 pt-8 border-t border-neutral-100">
              <h3 className="font-semibold text-neutral-900 mb-4">Follow Our Outreach Channels</h3>
              <div className="flex space-x-4">
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-orange-100 text-orange-600 hover:bg-orange-600 hover:text-white p-3 rounded-full transition-colors duration-200">
                  <FaFacebook className="w-5 h-5" />
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-orange-100 text-orange-600 hover:bg-orange-600 hover:text-white p-3 rounded-full transition-colors duration-200">
                  <FaInstagram className="w-5 h-5" />
                </Link>
                <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-orange-100 text-orange-600 hover:bg-orange-600 hover:text-white p-3 rounded-full transition-colors duration-200">
                  <FaYoutube className="w-5 h-5" />
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-orange-100 text-orange-600 hover:bg-orange-600 hover:text-white p-3 rounded-full transition-colors duration-200">
                  <FaTwitter className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Google Maps Embed */}
        <div className="bg-white rounded-2xl p-4 iskcon-card-shadow border sacred-border h-[450px] lg:h-full min-h-[400px] overflow-hidden flex flex-col">
          <h2 className="text-xl font-bold font-serif text-orange-900 mb-4 px-2">Find Us on Map</h2>
          <div className="w-full flex-1 rounded-xl overflow-hidden relative">
            <iframe
              title="ISKCON Temple Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.597371584067!2d77.550!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzMnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
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
      <section className="bg-amber-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ff9933_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-orange-500/20 text-orange-400 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6">
            <FaHeart className="w-6 h-6 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Support Our Seva & Outreach Programs</h2>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-8 text-lg">
            Your generous contributions help us distribute sacred literature, run prasadam distribution programs, and maintain temple outreach activities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/donate" 
              className="iskcon-gradient-bg text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:opacity-95 transition-all transform hover:-translate-y-0.5 text-center"
            >
              Contribute to Seva Now
            </Link>
            <Link 
              href="/blog" 
              className="bg-transparent border border-neutral-700 hover:border-orange-500 text-white font-semibold px-8 py-4 rounded-full transition-all text-center"
            >
              Explore Our Blogs
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}