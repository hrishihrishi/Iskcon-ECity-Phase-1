import { VaishnavEvent } from "@/app/(client_modules)/vaishnava-calendar/components/vaishnava-calendar";
import axiosFetcher from "../../../../service/api.service";

export const fetchCalendarEvents = async (
  url: string,
  { arg }: { arg: string },
) => {
  const events = (await axiosFetcher("POST")(url, { arg })) as {
    events: VaishnavEvent[];
  };

  return events;
};
