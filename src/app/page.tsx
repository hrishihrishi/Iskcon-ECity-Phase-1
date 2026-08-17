import BannerSlider from "@/shared/componentsCreatedByMe/BannerSlider";
import EventsAndAnnouncements from "@/shared/componentsCreatedByMe/events-and-announcements";
import { getCalendarEvents } from "@/app/(client_modules)/vaishnava-calendar/service/calendar.server";
import DonationCard from "./(client_modules)/seva/components/DonationCard";
import { SEVA_ITEMS } from "@/data/donation";
import Footer from "@/shared/componentsCreatedByMe/Footer";

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

  console.log("SEVA_ITEMS[0]:", SEVA_ITEMS[0]); // Log the first item of SEVA_ITEMS to verify its structure
  console.log("...SEVA_ITEMS[0]:", {...SEVA_ITEMS[0]}); // Log the first item of SEVA_ITEMS to verify its structure

  
  return (
    <main className="min-h-screen bg-blue-500">
      <section className="mx-auto flex flex-col gap-6">
        

        <div className="overflow-hidden">
          <BannerSlider data={sampleBannerData} autoPlayInterval={6000} />
        </div>

        {/* <div className="rounded-[32px] border border-orange-200/70 bg-white/80 p-2 shadow-[0_25px_70px_-25px_rgba(154,52,18,0.28)] md:p-3">
          <DonationCard {...SEVA_ITEMS[0]} />
        </div> */}
      </section>

      <EventsAndAnnouncements calendarEvents={calendarEvents} />
    </main>
  );
}
