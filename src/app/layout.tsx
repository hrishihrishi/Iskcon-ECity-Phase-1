import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/componentsCreatedByMe/Navbar";
import Footer from "@/shared/componentsCreatedByMe/Footer";
import EventBar from "@/shared/componentsCreatedByMe/EventBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iskcon-e-city-phase-1-two.vercel.app/"),

  title: {
    template: "%s | ISKCON Electronic City",
    default: "ISKCON Electronic City | Temple, Daily Darshan & Prasadam",
  },

  description:
    "ISKCON Electronic City — your spiritual home in E-City, Bengaluru. Attend daily darshan, Sunday Love Feast, prasadam distribution, Bhakti Yoga classes, and community outreach programs at Electronic City Phase 1, Hosur Road, Karnataka 560100.",

  keywords: [
    "ISKCON",
    "ISKCON Electronic City",
    "ISKCON Bangalore",
    "ISKCON E-City",
    "Temple Electronic City",
    "Bhakti Yoga",
    "Hare Krishna Temple Bengaluru",
    "Sunday Love Feast Bengaluru",
    "Prasadam Distribution Electronic City",
    "ISKCON Hosur Road",
  ],

  authors: [
    {
      name: "ISKCON Electronic City",
      url: "https://iskcon-e-city-phase-1-two.vercel.app/",
    },
  ],
  creator: "ISKCON Electronic City",
  publisher: "ISKCON Electronic City",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    siteName: "ISKCON Electronic City",
    title: "ISKCON Electronic City | Temple, Daily Darshan & Prasadam",
    description:
      "ISKCON Electronic City — your spiritual home in E-City, Bengaluru. Attend daily darshan, Sunday Love Feast, prasadam distribution, Bhakti Yoga classes, and community outreach programs.",
    url: "https://iskcon-e-city-phase-1-two.vercel.app",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ISKCON Electronic City Temple — Bengaluru",
      },
    ],
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "ISKCON Electronic City | Temple, Daily Darshan & Prasadam",
    description:
      "ISKCON Electronic City — daily darshan, Sunday Love Feast, prasadam distribution & Bhakti Yoga in E-City, Bengaluru.",
    images: ["/images/og-image.jpg"],
    site: "@ISKCONECity",
    creator: "@ISKCONECity",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    google: "wozlXd2tV7mptWwzQnWqr5HiR2UZCno6Bq-pFScy3co",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#75bad3]">
        <header className="sticky top-0 z-50 w-full">
          <Navbar />
          <EventBar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
