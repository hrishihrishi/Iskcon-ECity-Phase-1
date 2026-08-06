// lib/calendar.server.ts
import { VaishnavEvent } from "@/components/vaishnava-calendar";
import { API_CONFIG } from '@/app/config/api.config';

const API_BASE_URL = process.env.API_BASE_URL;

export async function getCalendarEvents() {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const currentDay = new Date().getDate();
  
  const response = await fetch( `${API_BASE_URL}/${API_CONFIG.endpoints.calendar}`, {
    method: 'POST',
    body: JSON.stringify({ month: currentMonth, year: currentYear }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  const data = await response.json();
  return data.events
    .sort((a: VaishnavEvent, b: VaishnavEvent) => {
      return new Date(a.start).getDate() - new Date(b.start).getDate();
    })
    .filter((event: VaishnavEvent) => {
      return new Date(event.start).getDate() >= currentDay;
    })
    .slice(0, 5);
}