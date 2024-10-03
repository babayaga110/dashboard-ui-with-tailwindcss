import * as React from "react";
import Sidebar from "../components/Navbar/Sidebar";
import MainLayout from "./MainLayout";
import Navbar from "../components/Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div className="h-full lg:h-screen flex flex-col lg:flex-row justify-between antialiased  bg-zinc-100 font-sans">
      <div className="hidden lg:block ">
        <Sidebar />
      </div>
      <div className="lg:hidden">
        <Navbar />
      </div>
      <div className="flex-1 p-0 lg:py-2 lg:pe-4 overflow-y-auto">
        <MainLayout>{children}</MainLayout>
      </div>
    </div>
  );
}
