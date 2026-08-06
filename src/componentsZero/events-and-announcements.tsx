"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getDay, getMonthName } from "@/lib/utils";
import { VaishnavEvent } from "@/components/vaishnava-calendar";

interface EventsAndAnnouncementsProps {
  calendarEvents: VaishnavEvent[];
}

const carouselItems = [
  {
    id: 1,
    image: "/images/govardhan.svg",
    alt: "Happy Govardhan Puja",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=600&width=800",
    alt: "Event Announcement 2",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=600&width=800",
    alt: "Event Announcement 3",
  },
];

const EventsAndAnnouncements: React.FC<EventsAndAnnouncementsProps> = ({
  calendarEvents = [],
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section className="py-16 bg-purple-100">
      <div className="flex flex-col md:flex-row gap-8 container">
        <div className="flex-1">
          <div className="relative w-full h-full">
            <Image
              src={"/images/govardhan.svg"}
              alt="Happy Govardhan Puja"
              className="object-contain"
              fill
            />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-purple-900 mb-4 text-center uppercase">
            Upcoming Events
          </h2>
          {calendarEvents.length > 0 ? (
            <div className="space-y-4">
              {calendarEvents.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-purple-200 p-4 rounded-lg"
                >
                  <div className="bg-purple-900 text-white p-2 rounded-lg text-center min-w-[60px]">
                    <div className="text-2xl font-bold">
                      {getDay(item.start.toLocaleString())}
                    </div>
                    <div className="text-sm">
                      {getMonthName(item.start.toLocaleString())}
                    </div>
                  </div>
                  <div className="text-purple-900 font-semibold">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-purple-900">
              No upcoming events found.
            </div>
          )}
          <div className="mt-6 text-center">
            <Link href={"/iskcon/vaishnava-calendar"}>
              <Button
                variant="outline"
                className="bg-purple-900 text-white uppercase"
              >
                View Vaishnava Calendar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsAndAnnouncements;
