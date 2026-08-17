"use client";
import useCalendarApi from "@/app/hooks/useCalendarApi";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import VaishnavaCalendar, {
  VaishnavEvent,
} from "@/app/(client_modules)/vaishnava-calendar/components/vaishnava-calendar";
import { useState } from "react";

const VaishnavaCalendarPage = () => {
  const [events, setEvents] = useState<VaishnavEvent[]>([]);
  const { fetchCalendarEventsByMonthAndYear } = useCalendarApi();
  const [showDialog, setShowDialog] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState<VaishnavEvent[]>([]);

  const handleMonthChange = async (month: number, year: number) => {
    setEvents([]);
    const payload = JSON.stringify({ month, year });
    const response = await fetchCalendarEventsByMonthAndYear(payload);

    if (response) {
      setEvents(response.events || []);
    }
  };

  const handleDateClick = (events: VaishnavEvent[]) => {
    setSelectedEvents(events);
    setShowDialog(true);
  };

  const selectedDate = selectedEvents[0]?.start;
  //format selected Date to show in this format 12th January 2021

  const formattedSelectedDate = new Date(selectedDate).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  );

  const handleDialogOpenChange = (open: boolean) => {
    setSelectedEvents([]);
    setShowDialog(open);
  };

  return (
    <main className="min-h-screen bg-[#fff8ef] text-[#221b00]">
      {/* Page Header */}
      <section className="bg-[#745849] text-white py-12 md:py-16 px-5 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-200 block mb-2">
            ISKCON Electronic City
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
            Vaishnava Calendar
          </h1>
          <p className="text-amber-100 text-sm md:text-base max-w-md mx-auto">
            Festival dates and Ekadasi observances according to the Vaishnava tradition.
            Click any date to see the day&apos;s spiritual significance.
          </p>
        </div>
      </section>

      {/* Calendar Container */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-xs font-semibold text-[#4f453f]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#e8621a] inline-block"></span>
            Ekadasi
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#745849] inline-block"></span>
            Festival
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#feedb7] border border-amber-900/20 inline-block"></span>
            Auspicious Day
          </div>
        </div>

        {/* Calendar Card */}
        <div className="bg-white rounded-2xl border border-amber-900/10 shadow-sm overflow-hidden p-4 md:p-6">
          <VaishnavaCalendar
            events={events}
            onChangeMonth={handleMonthChange}
            onDateClick={handleDateClick}
          />
        </div>
      </div>

      {/* Events Dialog — unchanged business logic */}
      <Dialog open={showDialog} onOpenChange={handleDialogOpenChange}>
        <DialogContent className="bg-white border border-amber-900/10 rounded-2xl shadow-2xl max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl md:text-2xl text-[#745849] mb-2">
              {formattedSelectedDate}
            </DialogTitle>
            <div className="border-t border-amber-900/10 pt-4">
              <ul className="space-y-2">
                {selectedEvents.map((event) => (
                  <li
                    key={event.id}
                    className="flex items-start gap-3 text-[#221b00] text-sm md:text-base"
                  >
                    <span className="mt-1 w-2 h-2 rounded-full bg-[#e8621a] shrink-0"></span>
                    {event.title}
                  </li>
                ))}
              </ul>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default VaishnavaCalendarPage;
