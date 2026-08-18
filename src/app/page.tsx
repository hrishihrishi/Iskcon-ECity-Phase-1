// src/app/page.tsx

import type { Metadata } from "next";
import BannerSlider from "@/shared/componentsCreatedByMe/BannerSlider";
import EventsAndAnnouncements from "@/shared/componentsCreatedByMe/events-and-announcements";
import JsonLd from "@/shared/componentsCreatedByMe/JsonLd";
import { getCalendarEvents } from "@/app/(client_modules)/vaishnava-calendar/service/calendar.server";

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
  logo: "https://iskcon-e-city-phase-1-two.vercel.app//logo.png",
  image: "https://iskcon-e-city-phase-1-two.vercel.app//images/RK4.jpg",
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
  const sampleBannerData = [
    {
      id: 1,
      link: "/contact",
      image: "/images/RK4.jpg",
      title: "Welcome to ISKCON Electronic City",
      subtitle:
        "Experience the divine grace of Lord Jagannath, Baladeva, and Subhadra at our temple in E-City, Bengaluru.",
    },
    {
      id: 2,
      link: "/donate",
      image: "/images/RK3.jpg",
      title: "Annual Rath Yatra Festival",
      subtitle:
        "Participate in the grand chariot procession and receive boundless spiritual blessings.",
    },
    {
      id: 3,
      link: "/donate",
      image: "/images/RK2.jpg",
      title: "Divine Mahaprasadam Distribution",
      subtitle:
        "Support our Anna Dan and prasadam distribution sevas reaching thousands daily.",
    },
  ];

  return (
    <main className="min-h-screen bg-blue-500">
      {/* Structured Data — PlaceOfWorship + NGO */}
      <JsonLd schema={placeOfWorshipSchema} />

      <section className="mx-auto flex flex-col gap-6">
        <div className="overflow-hidden">
          <BannerSlider data={sampleBannerData} autoPlayInterval={6000} />
        </div>
      </section>

      <EventsAndAnnouncements calendarEvents={calendarEvents || []} />
    </main>
  );
}
