import * as React from "react";
import Logo from "../../assets/LogoIcon";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { dropDownMenuItem, sideItems, upcomingEvents } from "../../utils/const";
import Popup from "../UI/Popup/Popup";

const SidebarItem = ({ icon: Icon, title, handleActive }) => (
  <li className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-200 cursor-pointer text-zinc-500" onClick={handleActive}>
    <Icon className="size-5" />
    <span className="font-semibold antialiased text-sm">{title}</span>
  </li>
);

const DropdownMenu = ({ icon: Icon, title }) => (
  <li className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-200 cursor-pointer text-zinc-500 ">
    <Icon className="size-4" />
    <span className="font-medium text-sm">{title}</span>
  </li>
);

const EventItem = ({ title }) => (
  <li className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-200 cursor-pointer text-zinc-600">
    <span className="font-semibold text-sm">{title}</span>
  </li>
);

export default function Sidebar({ handleClose, status }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isActiveIndex, setIsActiveIndex] = React.useState(0);
  const sideBarRef = React.useRef(null);
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
        if (status) {
          handleClose();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sideBarRef]);

  return (
    <div
      ref={sideBarRef}
      className="h-full lg:h-screen rounded-xl lg:rounded-none w-full max-w-[275px] flex flex-col divide-y divide-zinc-200 bg-white shadow-sm lg:shadow-none lg:bg-transparent"
    >
      <div className="p-4">
        <button
          className="flex lg:hidden items-center gap-3 p-1.5 rounded-md hover:bg-zinc-100 cursor-pointer mb-1"
          onClick={handleClose}
        >
          <XMarkIcon
            className="text-zinc-500 size-4
          "
          />
        </button>
        <button className="flex justify-between items-center w-full p-1.5 gap-2 rounded-md hover:bg-zinc-200 cursor-pointer">
          <Logo />
          <span className="mr-auto font-medium text-sm text-zinc-700">
            Neo UI
          </span>
          <ChevronDownIcon className="text-zinc-500 size-3" />
        </button>
      </div>
      <div className="p-4 flex-1 overflow-y-auto flex flex-col gap-10">
        <ul className="relative">
          <span
            className={`absolute inset-y-2 -left-4 w-0.5 h-[1.5rem] rounded-full bg-zinc-950 transition-all duration-500 ease-in-out ${
              isActiveIndex === 0
                ? "top-[5%]"
                : isActiveIndex === 1
                ? "top-[30%]"
                : isActiveIndex === 2
                ? "top-[55%]"
                : isActiveIndex === 3
                ? "top-[80%]"
                : ""
            }`}
          ></span>
          {sideItems.map((item, index) => (
            <SidebarItem key={index} {...item} handleActive={() => setIsActiveIndex(index)} />
          ))}
        </ul>
        <div className="hidden lg:block">
          <h6 className="text-xs text-zinc-500 font-medium ms-2 mb-3">
            Upcoming Events
          </h6>
          <ul>
            {upcomingEvents.map((item, index) => (
              <EventItem key={index} {...item} />
            ))}
          </ul>
        </div>
        <div className="mt-auto mb-0">
          <ul>
            <SidebarItem icon={QuestionMarkCircleIcon} title="Support" />
            <SidebarItem icon={SparklesIcon} title="Changelog" />
          </ul>
        </div>
      </div>
      <div className="p-4 hidden lg:block relative">
        <Popup
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          className="absolute z-40 top-[-170px] left-[20px] w-full bg-white rounded-xl shadow-md border border-zinc-200"
        >
          <ul className="flex flex-col gap-1 p-2">
            {dropDownMenuItem.map((item, index) =>
              index === 0 || index === dropDownMenuItem.length - 2 ? (
                <React.Fragment key={index}>
                  <DropdownMenu {...item} />
                  <li className="bg-zinc-100 w-[90%] h-[1px] mx-auto"></li>
                </React.Fragment>
              ) : (
                <DropdownMenu key={index} {...item} />
              )
            )}
          </ul>
        </Popup>
        <button
          className={`flex items-center w-full p-1.5 pe-2 gap-3 rounded-md hover:bg-zinc-200 cursor-pointer ${
            isOpen ? "bg-zinc-200" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src="/erica.jpg"
            alt="profile"
            className="object-cover w-10 h-10 rounded-md border border-zinc-600"
          />
          <div className="flex flex-col items-start flex-1">
            <h2 className="font-medium text-sm">Erica Frost</h2>
            <p className="text-xs text-zinc-400">erica@example.com</p>
          </div>
          <ChevronUpIcon className="text-zinc-500 size-3" />
        </button>
      </div>
    </div>
  );
}
