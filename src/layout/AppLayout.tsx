import { Outlet } from "react-router-dom";
import { SidebarProvider } from "../store/store";
import AppSidebar from "./AppSidebar";

const AppLayout = () => {
  return (
    <div className="bg-zinc-800  min-h-screen flex relative">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default AppLayout;
