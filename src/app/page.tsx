// src/app/page.tsx

import type { Metadata } from "next";
import BannerSlider from "@/shared/componentsCreatedByMe/BannerSlider";
import EventsAndAnnouncements from "@/shared/componentsCreatedByMe/events-and-announcements";
import JsonLd from "@/shared/componentsCreatedByMe/JsonLd";
import { getCalendarEvents } from "@/app/(client_modules)/vaishnava-calendar/service/calendar.server";
import { VideoSlider,VideoItem } from "@/shared/componentsCreatedByMe/VideoSlider";
import { sampleVideoData } from "@/data/videoData";
import { sampleBannerData } from "@/data/homeBannerData";

export const dynamic = "force-dynamic";

// ── Page-level metadata (overrides root defaults for the homepage) ────────────
export const metadata: Metadata = {
  alternates: {
    canonical: "https://iskcon-e-city-phase-1-two.vercel.app/",
  },
  openGraph: {
    url: "https://iskcon-e-city-phase-1-two.vercel.app/",
  },
};

// ── PlaceOfWorship + NGO JSON-LD schema ───────────────────────────────────────
const placeOfWorshipSchema = {
  "@context": "https://schema.org",
  "@type": ["PlaceOfWorship", "NGO"],
  name: "ISKCON Electronic City",
  alternateName: [
    "ISKCON E-City",
    "ISKCON Bangalore East",
    "Hare Krishna Temple Electronic City",
  ],
  url: "https://iskcon-e-city-phase-1-two.vercel.app/",
  logo: "https://iskcon-e-city-phase-1-two.vercel.app/logo.png",
  image: "https://iskcon-e-city-phase-1-two.vercel.app/images/RK4.jpg",
  description:
    "Official center of the International Society for Krishna Consciousness (ISKCON) in Electronic City, Bengaluru. Daily darshan, Sunday Love Feast, prasadam distribution, Bhakti Yoga, and community outreach programs.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Electronic City Phase 1, Hosur Road",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560100",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "12.8399",
    longitude: "77.6770",
  },
  telephone: "+91-9876543210",
  email: "info@iskcon-e-city-phase-1-two.vercel.app/",
  openingHours: ["Mo-Su 05:00-13:00", "Mo-Su 16:00-21:00"],
  priceRange: "Free",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Online",
  areaServed: {
    "@type": "City",
    name: "Bengaluru",
  },
  sameAs: [
    "https://www.facebook.com/iskconecity",
    "https://www.instagram.com/iskconecity",
    "https://www.youtube.com/@iskconecity",
    "https://en.wikipedia.org/wiki/International_Society_for_Krishna_Consciousness",
  ],
};

export default async function Home() {
  const calendarEvents = await getCalendarEvents();
  // const sampleBannerData = [
  //   {
  //     id: 1,
  //     link: "/contact",
  //     image: "/images/RK3.jpg",
  //     buttonText: "Visit us",
  //     title: "Welcome to ISKCON Electronic City",
  //     subtitle:
  //       "Experience spiritual bliss and devotion at ISKCON E-City, where ancient wisdom meets modern life.",
  //   },
  //   {
  //     id: 2,
  //     link: "/janmastami",
  //     image: "/images/RK4.jpg",
  //     buttonText: "Read more",
  //     title: "Krishna Janmashtami Festival",
  //     subtitle:
  //       "Witness the grand celebrations of Janmashtami at ISKCON E-City, where devotees from all over Bengaluru gather to celebrate the birth of Lord Krishna. Join us for kirtans, bhajans, discourses, and delicious prasadam.",
  //   },
  //   {
  //     id: 3,
  //     link: "/contact",
  //     image: "/images/RK2.jpg",
  //     buttonText: "Contact us",
  //     title: "Learn Bhagvad Gita, vedas and shastras",
  //     subtitle:
  //       "Learn about ancient Vedic wisdom and its relevance to modern life.",
  //   },
  // ];

  return (
    <main className=" ">
      {/* Structured Data — PlaceOfWorship + NGO */}
      <JsonLd schema={placeOfWorshipSchema} />

      <section className="mx-auto flex flex-col gap-6">
        <div className="overflow-hidden">
          <BannerSlider data={sampleBannerData} autoPlayInterval={6000} />
        </div>
      </section>

      {/* toggle comments to toggle visiblity */}
      {/* <EventsAndAnnouncements calendarEvents={calendarEvents || []} /> */}
        <VideoSlider data={sampleVideoData} />
    </main>
  );
}
