import dayjs from "dayjs";
import React from "react";
import DaysListIcon from "~/icons/DaysListIcon";
import ListIcon from "~/icons/ListIcon";
import MapIcon from "~/icons/MapIcon";
import MonthCalendarIcon from "~/icons/MonthCalendarIcon";
import WeekCalendarIcon from "~/icons/WeekCalendarIcon";
import type { IPopOverMenu } from "../PopOverMenu";
import PopOverMenu from "../PopOverMenu";
import {
  getCurrentRange,
  getNextRange,
  getPreviousRange,
} from "./dateFunctions";
import DateSelection from "./dateSelection";
import type { ICalendarProps, TDateRange, TDateRangeType } from "./interfaces";
import WeeklyCalendar from "./WeeklyCalendar";

const viewTypes: IPopOverMenu["options"] = [
  {
    label: "Week Calendar",
    description: "View as a weekly calendar",
    icon: <WeekCalendarIcon height={28} width={28} color="#e2e8f0" />,
  },
  {
    label: "Month Calendar",
    description: "View as a monthly calendar",
    icon: <MonthCalendarIcon height={28} width={28} color="#e2e8f0" />,
  },
  {
    label: "Days List",
    description: "View as a daily list",
    icon: <DaysListIcon height={28} width={28} color="#e2e8f0" />,
  },
  {
    label: "List",
    description: "View as an event list",
    icon: <ListIcon height={28} width={28} color="#e2e8f0" />,
  },
  {
    label: "Map",
    description: "View as a map",
    icon: <MapIcon height={28} width={28} color="#e2e8f0" />,
  },
];

const Calendar = ({ events }: ICalendarProps) => {
  const rangeType: TDateRangeType = "week";
  const [dateRange, setDateRange] = React.useState<TDateRange>(() =>
    getCurrentRange(rangeType)
  );

  const updateRange = React.useCallback(
    (action: "_previous" | "_today" | "_next") => {
      console.log(action);
      switch (action) {
        case "_previous":
          setDateRange(getPreviousRange(dateRange, rangeType));
          break;
        case "_today":
          setDateRange(getCurrentRange(rangeType));
          break;
        case "_next":
          setDateRange(getNextRange(dateRange, rangeType));
          break;
      }
    },
    [dateRange]
  );

  return (
    <div className="relative flex-1 flex flex-col">
      <div className="my-4 w-full flex gap-4">
        <PopOverMenu
          label="View Types"
          className="ml-1"
          options={viewTypes}
          onSelected={() => {}}
        />
        <DateSelection
          rangeType={rangeType}
          dateRange={dateRange}
          onDateRangeAction={updateRange}
        />
      </div>
      <div className="relative flex-1 flex flex-col box shadow-small">
        <WeeklyCalendar range={dateRange} events={events} />
      </div>
    </div>
  );
};

export default Calendar;
