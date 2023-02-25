import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

export interface IPopOverMenu {
  label: string;
  className?: string;
  options: { label: string; description: string; icon: JSX.Element }[];
  onSelected: (label: string) => void;
}

const PopOverMenu = ({
  label,
  className,
  options,
  onSelected,
}: IPopOverMenu) => {
  return (
    <Popover className={"relative " + className}>
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? "" : "text-opacity-90"}
                inline-flex items-center rounded-small bg-neutral-700 border-border px-3 py-2 font-medium text-neutral-50 hover:text-opacity-100 focus:outline-none focus:ring-1 focus:ring-neutral-50 focus:ring-opacity-75`}
          >
            <span>{label}</span>
            <ChevronDownIcon
              className={`${open ? "" : "text-opacity-70"}
              ${open ? "-rotate-180 transform" : ""}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-opacity-80`}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute -left-4 z-50 p-4 mt-2 max-w-sm lg:max-w-3xl w-[300px] bg-neutral-700 shadow-medium rounded-small border border-border">
              <div className="flex flex-col gap-4">
                {options.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => onSelected(item.label)}
                    className="-m-3 flex items-center rounded-lg p-2 pr-2 transition duration-150 ease-in-out hover:bg-neutral-600 rounded-small hover:cursor-pointer"
                  >
                    <div className="flex h-10 w-10 items-center justify-center sm:h-12 sm:w-12">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-neutral-50">
                        {item.label}
                      </p>
                      <p className="text-sm text-neutral-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default PopOverMenu;
