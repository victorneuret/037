import dayjs from "dayjs";
import { formatRangeText, isDateSameOrBetween } from "./dateFunctions";
import type { TCalendarEvent, TDateRange } from "./interfaces";

export interface IWeeklyCalendar {
  range: TDateRange;
  events: TCalendarEvent[];
}

const WeeklyCalendar = ({ range, events }: IWeeklyCalendar) => {
  console.log(range.start.format("DD MM YYYY"), range.end.format("DD MM YYYY"));
  console.log(events[0].dateRange.start.format("DD MM YYYY"));
  return (
    <>
      <div className="z-0 flex-1 w-full flex h-full absolute rounded-medium">
        <div className="h-full flex-1 rounded-l-medium" />
        <div className="h-full flex-1 rounded-medium" />
        <div className="h-full flex-1" />
        <div className="h-full flex-1 rounded-medium" />
        <div className="h-full flex-1" />
        <div className="h-full flex-1 rounded-medium" />
        <div className="h-full flex-1 rounded-r-medium" />
      </div>

      <div className="hidden">
        <div className="basis-1/7" />
        <div className="basis-2/7" />
        <div className="basis-3/7" />
        <div className="basis-4/7" />
        <div className="basis-5/7" />
        <div className="basis-6/7" />
      </div>
      <div className="z-10 flex justify-around my-4">
        {[...Array(7).keys()].map((index) => (
          <div key={index} className="text-neutral-50 basis-1/7">
            <h3 className="text-center">
              {range.start.weekday(index).format("dddd DD")}
            </h3>
          </div>
        ))}
      </div>

      {events
        .filter(
          (event) =>
            isDateSameOrBetween(
              event.dateRange.start,
              range.start,
              range.end,
              "day"
            ) ||
            isDateSameOrBetween(
              event.dateRange.end,
              range.start,
              range.end,
              "day"
            )
        )
        .map((event, index) => {
          const daysBefore = event.dateRange.start.isBefore(range.start)
            ? 0
            : Math.abs(event.dateRange.start.diff(range.start, "day"));
          const daysAfter = event.dateRange.end.isAfter(range.end)
            ? 0
            : Math.abs(event.dateRange.end.diff(range.end, "day"));

          return (
            <div key={index} className="z-20 flex py-1">
              <div className={`basis-${daysBefore}/7`} />
              <div className={`basis-${7 - daysBefore - daysAfter}/7`}>
                <div
                  className={`box border-border h-20 bg-neutral-700 flex flex-col p-2 ${
                    daysBefore === 0 &&
                    event.dateRange.start.isBefore(range.start) &&
                    "rounded-l-none"
                  } ${
                    daysAfter === 0 &&
                    event.dateRange.end.isAfter(range.end) &&
                    "rounded-r-none"
                  }`}
                >
                  <text className="text-neutral-50">{event.label}</text>
                  <text className="text-neutral-50">
                    {formatRangeText(event.dateRange, "week")}
                  </text>
                </div>
              </div>
              <div className={`basis-${daysAfter}/7`} />
            </div>
          );
        })}
      {/* <div className="z-20 flex justify-around py-1">
        <div className="basis-0/7" />
        <div className="basis-3/7">
          <div className="box border-border h-20 bg-neutral-700" />
        </div>
        <div className="basis-4/7" />
      </div>
      <div className="z-20 flex justify-around py-1">
        <div className="basis-3/7" />
        <div className="basis-1/7">
          <div className="box border-border h-20 bg-neutral-700" />
        </div>
        <div className="basis-3/7" />
      </div>
      <div className="z-20 flex justify-around py-1">
        <div className="basis-3/7" />
        <div className="basis-4/7">
          <div className="box border-border h-20 bg-neutral-700" />
        </div>
        <div className="basis-0/7" />
      </div> */}
    </>
  );
};

export default WeeklyCalendar;
