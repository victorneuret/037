import type { Dayjs } from "dayjs";

export interface ICalendarProps {
  events: TCalendarEvent[];
}

export type TCalendarEvent = {
  label: string;
  dateRange: TDateRange;
};

export type TDateRange = {
  start: Dayjs;
  end: Dayjs;
};

export type TDateRangeType = "week" | "month";
