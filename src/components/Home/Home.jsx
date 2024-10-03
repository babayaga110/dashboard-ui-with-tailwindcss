import { ChevronUpDownIcon } from "@heroicons/react/24/solid";
import * as React from "react";
import Popup from "../UI/Popup/Popup";
import { sortingOptions, orderData } from "../../utils/const";
import Layout from "../../layout/Layout";

const DropdownMenu = ({ title }) => (
  <li className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-200 cursor-pointer text-zinc-500 ">
    <span className="font-medium text-sm">{title}</span>
  </li>
);

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Layout>
      <div className="space-y-5">
        <h1 className="text-xl font-semibold text-zinc-800 mb-10">
          Good afternoon, Erica
        </h1>
        <div className="flex items-center justify-between">
          <h6 className="text-sm font-medium text-zinc-900">Overview</h6>
          <div className="relative">
            <Popup
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              className="absolute z-40 top-[40px] left-[0px] w-full bg-white rounded-xl shadow-md border border-zinc-200"
            >
              <ul className="flex flex-col gap-1 p-2">
                {sortingOptions.map((item, index) => (
                  <DropdownMenu key={index} {...item} />
                ))}
              </ul>
            </Popup>
            <button
              className="border border-zinc-200 rounded-md  shadow-sm px-4 py-2 text-sm flex items-center gap-5 hover:bg-zinc-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              Last Week
              <ChevronUpDownIcon className="size-4" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {orderData.map((item, index) => (
            <div className="py-6 border-t" key={index}>
              <h6 className="text-sm font-medium text-zinc-800 mb-4">
                {item.title}
              </h6>
              <h1 className="text-2xl font-bold text-zinc-800 mb-4">
                {item.value}
              </h1>
              <p className="text-xs text-zinc-500 font-medium">
                <span
                  className={`py-1 px-2 rounded-md ${
                    item.percentage.includes("+")
                      ? "bg-lime-100 text-lime-600"
                      : "bg-red-50 text-red-600"
                  } `}
                >
                  {item.percentage}
                </span>{" "}
                from last week
              </p>
            </div>
          ))}
        </div>

        <div className="overflow-hidden">
          <h4 className="text-sm font-medium text-zinc-900 mb-4">
            Recent Orders
          </h4>
          <div className="overflow-x-auto w-full">
            <table className="table-fixed min-w-[750px] w-full">
              <thead className="w-full">
                <tr className="text-sm font-light text-zinc-500 text-left border-b border-zinc-200">
                  <th className="font-medium text-sm py-2 px-1">
                    Order Number
                  </th>
                  <th className="font-medium text-sm py-2 px-1">
                    Purchase Date
                  </th>
                  <th className="font-medium text-sm py-2 px-1">Customer</th>
                  <th className="font-medium text-sm py-2 px-1">Event</th>
                  <th className="font-medium text-sm py-2 px-1">Amount</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(20)].map((_, index) => (
                  <tr
                    key={index}
                    className="hover:bg-zinc-100 cursor-pointer border-b border-zinc-100"
                  >
                    <td className="py-3 px-1 font-normal text-sm">
                      {3000 + index}
                    </td>
                    <td className="py-3 px-1 font-normal text-sm text-zinc-500">
                      May 20, 2021
                    </td>
                    <td className="py-3 px-1 font-normal text-sm">Erica</td>
                    <td className="py-3 px-1 font-normal text-sm flex items-center gap-2">
                      <img
                        src="./bear-hug-thumb.jpg"
                        alt="Bear Hug: Live in Concert"
                        className="w-6 h-6 rounded-full"
                      />
                      Bear Hug: Live in Concert
                    </td>
                    <td className="py-3 px-1 font-normal text-sm">US $200</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
