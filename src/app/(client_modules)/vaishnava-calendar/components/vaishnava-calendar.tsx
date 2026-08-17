'use client';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';

import { EventSourceInput } from '@fullcalendar/core/index.js';

export interface VaishnavEvent {
  title: string;
  start: Date | string;
  allDay: boolean;
  id: number;
  text?: string;
  prio?: number;
  dispItem?: number;
  fasttype?: number;
  fastsubject?: string;
  spec?: string;
}

type Props = {
  events: VaishnavEvent[];
  onChangeMonth?: (month: number, year: number) => void;
  onDateClick?: (events: VaishnavEvent[]) => void;
};

const VaishnavaCalendar: React.FC<Props> = ({
  events,
  onChangeMonth,
  onDateClick,
}) => {
  const handleDateClick = (arg: DateClickArg) => {
    const clickedEvents = events?.filter((event) => {
      return event.start === arg.dateStr;
    });
    onDateClick && onDateClick(clickedEvents);
  };
  return (
    <div className="relative">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        events={events as EventSourceInput}
        nowIndicator={true}
        height={'1200px'}
        dateClick={handleDateClick}
        eventClassNames={(arg) => {
          return arg.event.title.toLowerCase().includes('ekadasi')
            ? ['ekadasi']
            : [''];
        }}
        datesSet={(arg) => {
          const currentMonth = arg.view.currentStart.getMonth() + 1;
          const currentYear = arg.view.currentStart.getFullYear();
          onChangeMonth && onChangeMonth(currentMonth, currentYear);
        }}
        eventClick={(arg) => {
          const clickedDate = arg.event.startStr;
          const clickedEvents = events.filter((event) => {
            return event.start === clickedDate;
          });

          onDateClick && onDateClick(clickedEvents);
        }}
      />

      {events.length === 0 && (
        <div className="absolute flex w-full h-2/3 justify-center bg-[#fff8ef]/80 backdrop-blur-sm items-center top-14 left-0 z-10 rounded-2xl">
          <div className="flex flex-col items-center gap-3 animate-pulse text-center">
            <div className="w-12 h-12 rounded-full bg-[#f7d2be] flex items-center justify-center text-[#745849] text-2xl">
              🪷
            </div>
            <p className="text-[#745849] font-serif font-bold text-lg uppercase tracking-widest">
              Loading events…
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VaishnavaCalendar;
