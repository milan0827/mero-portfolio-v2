import { ReactNode } from "react";
import AppHeader from "../components/app-header/AppHeader";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="bg-zinc-900 relative h-screen min-h-screen flex ">
      <Sidebar />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
