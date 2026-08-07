import useSWRMutation from "swr/mutation";
import { API_CONFIG } from "../api/config/api.config";
import { fetchCalendarEvents } from "@/app/(client_modules)/vaishnava-calendar/service/calendar.service";

const useCalendarApi = () => {
  const { trigger: fetchCalendarEventsByMonthAndYear, error } = useSWRMutation(
    API_CONFIG.endpoints.calendar,
    fetchCalendarEvents,
  );

  return {
    fetchCalendarEventsByMonthAndYear,
    error,
  };
};

export default useCalendarApi;
