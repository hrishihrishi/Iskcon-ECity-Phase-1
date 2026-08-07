import BannerSlider from "@/shared/componentsCreatedByMe/BannerSlider";
import Banner from "@/shared/componentsCreatedByMe/BannerSlider";
import Donation from "@/shared/componentsCreatedByMe/Donation";
import EventsAndAnnouncements from "@/shared/componentsCreatedByMe/events-and-announcements";
import Full_DonationCard from "@/shared/componentsCreatedByMe/Full_DonationCard";
import { getCalendarEvents } from "@/app/(client_modules)/vaishnava-calendar/service/calendar.server";
// import jagannathWelcome from "@public/images/jagannath-welcomes-you.jpg";

export default async function Home() {
  const calendarEvents = await getCalendarEvents();
  const sampleBannerData = [
    {
      id: 1,
      link: "/contact",
      image: "/images/jagannath-welcomes-you.jpg",
      title: "Welcome to ISKCON Temple Outreach",
      subtitle:
        "Experience the divine grace of Lord Jagannath, Baladeva, and Subhadra.",
    },
    {
      id: 2,
      link: "/donate",
      image: "/images/rath-yatra-1.jpg",
      title: "Annual Rath Yatra Festival",
      subtitle:
        "Participate in the grand chariot procession and receive boundless spiritual blessings.",
    },
    {
      id: 3,
      link: "/donate",
      image: "/images/jagannath-mahaprasadam.jpg",
      title: "Divine Mahaprasadam Distribution",
      subtitle:
        "Support our Anna Dan and prasadam distribution sevas reaching thousands daily.",
    },
  ];
  return (
    <div>
      <section className="w-full">
        <BannerSlider data={sampleBannerData} autoPlayInterval={6000} />
        <Full_DonationCard
          title="Lifetime Jagannath Rajbhog Seva"
          description="An eternal connection with Lord Jagannath through His divine prasadam. Receive the supreme blessings of the Lord for you and your family."
          image="/images/jagannath-mahaprasadam.jpg"
          color="bg-gradient-to-br from-amber-950 via-orange-900 to-red-950"
          amount="₹ 51,001"
          badgeText="Limited Opportunity"
          cornerBadge="Only 365 Spots"
          details={[
            { label: "Prasadam Type", value: "Rajbhog Thali" },
            { label: "Frequency", value: "Once per Year" },
            { label: "Duration", value: "Lifetime" },
            { label: "Family Members", value: "Up to 5" },
          ]}
          features={[
            {
              title: "Annual Rajbhog Prasadam",
              subtitle: "For your family, once a year for lifetime",
            },
            {
              title: "Special Darshan",
              subtitle: "Priority access during major festivals",
            },
            {
              title: "Kitchen Seva",
              subtitle: "Opportunity to serve in Lord's kitchen",
            },
            {
              title: "Temple Ceremonies",
              subtitle: "Participation in special pujas",
            },
          ]}
        />
      </section>
      <EventsAndAnnouncements calendarEvents={calendarEvents} />
    </div>
  );
}
