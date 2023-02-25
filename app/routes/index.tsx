import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Calendar from "~/components/Calendar";
import type { TCalendarEvent } from "~/components/Calendar/interfaces";
import dayjs from "dayjs";

export default function Example() {
  const events: TCalendarEvent[] = [
    {
      label: "Formula 1",
      dateRange: { start: dayjs("2023-02-05"), end: dayjs("2023-02-06") },
    },
    {
      label: "Formula 1",
      dateRange: { start: dayjs("2023-02-13"), end: dayjs("2023-02-16") },
    },
    {
      label: "World Rally Championship",
      dateRange: { start: dayjs("2023-02-14"), end: dayjs("2023-02-16") },
    },
    {
      label: "Formula Drift",
      dateRange: { start: dayjs("2023-02-16"), end: dayjs("2023-02-20") },
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <div className="w-full bg-neutral-800 border-b border-border p-4 pb-20">
        <h1 className="font-extrabold text-primary-200">037</h1>
      </div>
      <div className="relative flex-1 flex flex-col mx-10 -mt-12 mb-8 box bg-neutral-800 px-8 pb-8 shadow-small">
        <Calendar events={events} />
      </div>
    </div>
  );
}
