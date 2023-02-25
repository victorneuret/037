import type { Dayjs, OpUnitType } from "dayjs";
import dayjs from "dayjs";
import type { TDateRange, TDateRangeType } from "./interfaces";

export const isDateSameOrBetween = (
  date: Dayjs,
  first: Dayjs,
  second: Dayjs,
  unit?: OpUnitType
) => {
  return date.isSameOrAfter(first, unit) && date.isSameOrBefore(second, unit);
};

export const getCurrentRange = (rangeType: TDateRangeType): TDateRange => {
  switch (rangeType) {
    case "week":
      return { start: dayjs().startOf("week"), end: dayjs().endOf("week") };
    case "month":
      return { start: dayjs().startOf("month"), end: dayjs().endOf("month") };
  }
};

export const getNextRange = (
  range: TDateRange,
  rangeType: TDateRangeType
): TDateRange => {
  switch (rangeType) {
    case "week": {
      const next = range.start.add(1, "week");
      return {
        start: next.startOf("week"),
        end: next.endOf("week"),
      };
    }
    case "month": {
      const next = range.start.add(1, "month");
      return {
        start: next.startOf("month"),
        end: next.endOf("month"),
      };
    }
  }
};

export const getPreviousRange = (
  range: TDateRange,
  rangeType: TDateRangeType
): TDateRange => {
  switch (rangeType) {
    case "week": {
      const prev = range.start.subtract(1, "week");
      return {
        start: prev.startOf("week"),
        end: prev.endOf("week"),
      };
    }
    case "month": {
      const prev = range.start.subtract(1, "month");
      return {
        start: prev.startOf("month"),
        end: prev.endOf("month"),
      };
    }
  }
};

export const formatRangeText = (
  range: TDateRange,
  rangeType: TDateRangeType
): string => {
  switch (rangeType) {
    case "week": {
      if (range.start.month() !== range.end.month()) {
        return `${range.start.format("ddd D MMM")} - ${range.end.format(
          "ddd D MMM"
        )}`;
      }
      return `${range.start.format("ddd D")} - ${range.end.format("ddd D")}`;
    }
    case "month": {
      if (range.start.year() !== range.end.year()) {
        return `${range.start.format("MMM D YYY")} - ${range.end.format(
          "MMM D YYY"
        )}`;
      }
      return `${range.start.format("MMM D")} - ${range.end.format("MMM D")}`;
    }
  }
};
