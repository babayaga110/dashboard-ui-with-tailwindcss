import { Bars2Icon } from "@heroicons/react/24/solid";
import * as React from "react";
import { dropDownMenuItem } from "../../utils/const";
import Popup from "../UI/Popup/Popup";
import Sidebar from "./Sidebar";

const DropdownMenu = ({ icon: Icon, title }) => (
  <li className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-200 cursor-pointer text-zinc-500 ">
    <Icon className="size-4" />
    <span className="font-medium text-sm">{title}</span>
  </li>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
    setIsClosing(false);
   document.body.style.overflow = "hidden";
   document.body.style.height = "100vh";

  };

  const handleCloseSidebar = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsSidebarOpen(false); 
      setIsClosing(false); 
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }, 500); 
  };

  return (
    <div className="flex justify-between items-center py-2 px-4 bg-white shadow-sm">
      <button
        className="flex items-center gap-3 p-1.5 rounded-md hover:bg-zinc-100 cursor-pointer"
        onClick={handleOpenSidebar}
      >
        <Bars2Icon className="text-gray-500 size-5" />
      </button>
      <div className="relative flex-1">
        <Popup
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          className="absolute z-40 top-[45px] left-auto right-0 w-full max-w-[250px] bg-white rounded-xl shadow-md border border-zinc-200"
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
          className={`flex items-center p-1.5 gap-3 rounded-md hover:bg-zinc-200 cursor-pointer ms-auto ${
            isOpen ? "bg-zinc-200" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src="/erica.jpg"
            alt="profile"
            className="object-cover w-7 h-7 rounded-md "
          />
        </button>
      </div>
      {isSidebarOpen && (
        <dialog
          open={isSidebarOpen}
          className="bg-black/30 fixed top-0 left-0 w-screen h-screen p-5 z-50"
        >
          <div
            className={`h-[90%] ${
              isClosing ? "animate-navClose" : "animate-navOpen"
            }`}
          >
            <Sidebar handleClose={handleCloseSidebar} status={isSidebarOpen} />
          </div>
        </dialog>
      )}
    </div>
  );
}
