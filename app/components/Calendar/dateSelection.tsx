import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import dayjs from "dayjs";
import React from "react";
import {
  formatRangeText,
  getCurrentRange,
  getNextRange,
  getPreviousRange,
} from "./dateFunctions";
import type { TDateRange, TDateRangeType } from "./interfaces";

export interface IDateSelection {
  rangeType: TDateRangeType;
  dateRange: TDateRange;
  onDateRangeAction: (action: "_previous" | "_today" | "_next") => void;
}

const DateSelection = ({
  rangeType,
  dateRange,
  onDateRangeAction,
}: IDateSelection) => {
  return (
    <div className="flex items-center">
      <button
        className="group hover:bg-neutral-700 hover:bg-opacity-20 rounded-full h-9 w-10 h-9 flex justify-center items-center"
        onClick={() => onDateRangeAction("_previous")}
      >
        <ChevronLeftIcon className="text-neutral-200 text-opacity-90 h-6 w-6 -ml-[2px] group-hover:text-opacity-100" />
      </button>
      <button
        disabled={dayjs().isBetween(dateRange.start, dateRange.end)}
        className={`${
          dayjs().isBetween(dateRange.start, dateRange.end)
            ? "bg-neutral-900 cursor-not-allowed"
            : "group bg-neutral-700"
        }  rounded-small border border-border py-2 px-4 focus:outline-none focus:ring-1 focus:ring-neutral-50 focus:ring-opacity-75`}
        onClick={() => onDateRangeAction("_today")}
      >
        <text
          className={`text-neutral-50 font-medium text-opacity-90 group-hover:text-opacity-100`}
        >
          Today
        </text>
      </button>
      <button
        className=" group hover:bg-neutral-700 hover:bg-opacity-20 rounded-full h-10 w-9 h-9 flex justify-center items-center"
        onClick={() => onDateRangeAction("_next")}
      >
        <ChevronRightIcon className="text-neutral-200 text-opacity-90 h-6 w-6 -mr-[2px] group-hover:text-opacity-100" />
      </button>

      <text className="text-neutral-50 ml-4">
        {formatRangeText(dateRange, rangeType)}
      </text>
    </div>
  );
};

export default DateSelection;
