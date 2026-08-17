"use client";

import * as React from "react";
import Link from "next/link";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { getDay, getMonthName } from "@/lib/utils";
import { VaishnavEvent } from "@/app/(client_modules)/vaishnava-calendar/components/vaishnava-calendar";

interface EventsAndAnnouncementsProps {
  calendarEvents: VaishnavEvent[];
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Sub-component for individual event card with live countdown
const EventCard: React.FC<{ item: VaishnavEvent }> = ({ item }) => {
  const eventDate = React.useMemo(() => new Date(item.start), [item.start]);

  const [timeLeft, setTimeLeft] = React.useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = eventDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const day = getDay(eventDate.toLocaleString());
  const month = getMonthName(eventDate.toLocaleString());

  return (
    <div className="group relative flex w-full flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-md md:flex-row md:items-center md:p-6">
      {/* Event Details Section */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Date Badge */}
        <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-stone-900 text-white shadow-sm transition-colors duration-300 group-hover:bg-amber-600 sm:h-20 sm:w-20">
          <span className="text-xl font-extrabold sm:text-2xl">{day}</span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 group-hover:text-amber-100 sm:text-xs">
            {month}
          </span>
        </div>

        {/* Title & Info */}
        <div className="space-y-1">
          <h3 className="text-base font-bold text-stone-900 sm:text-lg lg:text-xl">
            {item.title}
          </h3>
          <p className="flex items-center gap-1.5 text-xs text-stone-500 sm:text-sm">
            <Calendar className="h-3.5 w-3.5 text-amber-600" />
            {eventDate.toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Countdown Timer Section */}
      <div className="flex items-center justify-between gap-4 border-t border-stone-100 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex flex-col items-center justify-center rounded-lg bg-amber-50 px-2.5 py-1.5 border border-amber-200/50 min-w-[48px]">
            <span className="text-base font-bold text-amber-900 sm:text-lg">
              {String(timeLeft.days).padStart(2, "0")}
            </span>
            <span className="text-[9px] font-semibold uppercase text-amber-700">
              Days
            </span>
          </div>
          <span className="text-sm font-bold text-amber-400">:</span>

          <div className="flex flex-col items-center justify-center rounded-lg bg-amber-50 px-2.5 py-1.5 border border-amber-200/50 min-w-[48px]">
            <span className="text-base font-bold text-amber-900 sm:text-lg">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="text-[9px] font-semibold uppercase text-amber-700">
              Hrs
            </span>
          </div>
          <span className="text-sm font-bold text-amber-400">:</span>

          <div className="flex flex-col items-center justify-center rounded-lg bg-amber-50 px-2.5 py-1.5 border border-amber-200/50 min-w-[48px]">
            <span className="text-base font-bold text-amber-900 sm:text-lg">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="text-[9px] font-semibold uppercase text-amber-700">
              Mins
            </span>
          </div>
          <span className="text-sm font-bold text-amber-400">:</span>

          <div className="flex flex-col items-center justify-center rounded-lg bg-amber-50 px-2.5 py-1.5 border border-amber-200/50 min-w-[48px]">
            <span className="text-base font-bold text-amber-900 sm:text-lg">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className="text-[9px] font-semibold uppercase text-amber-700">
              Secs
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventsAndAnnouncements: React.FC<EventsAndAnnouncementsProps> = ({
  calendarEvents = [],
}) => {
  return (
    <section className="w-full bg-stone-50/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-amber-900">
              <Clock className="h-3.5 w-3.5 text-amber-600" />
              Upcoming Events
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-stone-900 sm:text-3xl lg:text-4xl">
              Join the temple calendar & celebrate with us
            </h2>
          </div>

          <Link href="/vaishnava-calendar">
            <Button
              variant="outline"
              className="inline-flex items-center gap-2 rounded-full border-stone-300 bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-800 shadow-sm transition-all hover:bg-stone-900 hover:text-white"
            >
              View Full Calendar
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Event Banner List */}
        {calendarEvents.length > 0 ? (
          <div className="space-y-4">
            {calendarEvents.slice(0, 5).map((item, index) => (
              <EventCard key={index} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-white p-12 text-center text-stone-500">
            <Calendar className="mb-3 h-10 w-10 text-stone-400" />
            <p className="text-base font-semibold">No upcoming events found.</p>
            <p className="text-xs text-stone-400">
              Check back later for upcoming festival dates.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsAndAnnouncements;
