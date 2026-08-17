// src/app/(client_modules)/vaishnava-calendar/service/calendar.server.ts

import { VaishnavEvent } from "@/app/(client_modules)/vaishnava-calendar/components/vaishnava-calendar";
import { API_CONFIG } from "@/app/api/config/api.config";

const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3000";

export async function getCalendarEvents() {
  try {
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    const currentDay = new Date().getDate();

    const response = await fetch(
      `${API_BASE_URL}/${API_CONFIG.endpoints.calendar}`,
      {
        method: "POST",
        body: JSON.stringify({ month: currentMonth, year: currentYear }),
        headers: {
          "Content-Type": "application/json",
        },
        // Revalidate cache every hour or prevent build failure
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch calendar events: ${response.statusText}`);
      return [];
    }

    const data = await response.json();
    if (!data || !Array.isArray(data.events)) {
      return [];
    }

    return data.events
      .sort((a: VaishnavEvent, b: VaishnavEvent) => {
        return new Date(a.start).getDate() - new Date(b.start).getDate();
      })
      .filter((event: VaishnavEvent) => {
        return new Date(event.start).getDate() >= currentDay;
      })
      .slice(0, 5);
  } catch (error) {
    console.error("Error fetching calendar events at build/runtime:", error);
    return [];
  }
}
