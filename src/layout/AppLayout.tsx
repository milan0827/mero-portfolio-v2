import { Outlet } from "react-router-dom";
import { SidebarProvider } from "../store/store";
import AppSidebar from "./AppSidebar";
import { Suspense } from "react";
import Loading from "../components/loading/Loading";

const AppLayout = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="bg-zinc-800  min-h-screen flex relative">
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            <Outlet />
          </main>
        </SidebarProvider>
      </div>
    </Suspense>
  );
};

export default AppLayout;
