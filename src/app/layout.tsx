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
  title: "Iskcon Ecity",
  description: "Hare Krishna Hare Krishna, Krishna Krishna Hare Hare, Hare Rama Hare Rama, Rama Rama Hare Hare",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased `}
    >
      <body className="min-h-full flex flex-col bg-[#75bad3] ">
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
