import Banner from "@/componentsZero/Banner";
import Donation from "@/componentsZero/Donation";
import EventsAndAnnouncements from "@/componentsZero/events-and-announcements";
import Full_DonationCard from "@/componentsZero/Full_DonationCard";
import { getCalendarEvents } from "@/lib/calendar.server";

export default async function Home() {
  const calendarEvents = await getCalendarEvents();
  return (
    <div>
      
      <Banner />
      <section className="w-full">
        <Full_DonationCard
          title="Lifetime Jagannath Rajbhog Seva"
          description="An eternal connection with Lord Jagannath through His divine prasadam. Receive the supreme blessings of the Lord for you and your family."
          image="/images/iskcon-prasadam.jpg" 
          color="bg-gradient-to-br from-amber-950 via-orange-900 to-red-950"
          amount="₹ 51,001"
          badgeText="Limited Opportunity"
          cornerBadge="Only 365 Spots"
          details={[
            { label: "Prasadam Type", value: "Rajbhog Thali" },
            { label: "Frequency", value: "Once per Year" },
            { label: "Duration", value: "Lifetime" },
            { label: "Family Members", value: "Up to 5" }
          ]}
          features={[
            { title: "Annual Rajbhog Prasadam", subtitle: "For your family, once a year for lifetime" },
            { title: "Special Darshan", subtitle: "Priority access during major festivals" },
            { title: "Kitchen Seva", subtitle: "Opportunity to serve in Lord's kitchen" },
            { title: "Temple Ceremonies", subtitle: "Participation in special pujas" }
          ]}
        />
      </section>
      <EventsAndAnnouncements calendarEvents={calendarEvents} />
    </div>
  );
}
