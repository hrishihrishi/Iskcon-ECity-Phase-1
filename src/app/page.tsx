// src/app/page.tsx

import BannerSlider from "@/shared/componentsCreatedByMe/BannerSlider";
import EventsAndAnnouncements from "@/shared/componentsCreatedByMe/events-and-announcements";
import { getCalendarEvents } from "@/app/(client_modules)/vaishnava-calendar/service/calendar.server";

export const dynamic = "force-dynamic";

export default async function Home() {
  const calendarEvents = await getCalendarEvents();
  const sampleBannerData = [
    {
      id: 1,
      link: "/contact",
      image: "/images/RK4.jpg",
      title: "Welcome to ISKCON Temple Outreach",
      subtitle:
        "Experience the divine grace of Lord Jagannath, Baladeva, and Subhadra.",
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
      <section className="mx-auto flex flex-col gap-6">
        <div className="overflow-hidden">
          <BannerSlider data={sampleBannerData} autoPlayInterval={6000} />
        </div>
      </section>

      <EventsAndAnnouncements calendarEvents={calendarEvents || []} />
    </main>
  );
}
