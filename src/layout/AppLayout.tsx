import { Suspense, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import ResumeIcon from "../assets/icons/ResumeIcon";
import Loading from "../components/loading/Loading";
import { SidebarProvider } from "../store/store";
import AppSidebar from "./AppSidebar";

const AppLayout = () => {
  const [isResumeMenu, setIsResumeMenu] = useState(false);

  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current?.contains(e.target as Node))
        setIsResumeMenu(true);
    }

    document.addEventListener("click", handleClick, false);

    return () => document.removeEventListener("click", handleClick, false);
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div className="bg-zinc-800  min-h-screen flex relative">
        <SidebarProvider>
          <div
            className="fixed bottom-10 right-5 resume-group "
            ref={ref as never}
          >
            <div className="relative">
              <button
                className="w-[3.5rem] h-[3.5rem]  bg-red-500 flex items-center justify-center rounded-full animate-bounce resume-btn "
                title="Resume"
                onClick={() => setIsResumeMenu((open) => !open)}
              >
                <ResumeIcon className="w-[2rem] h-[2rem] fill-white" />
              </button>
              <div
                className={`absolute -left-[9.5rem]  flex flex-col items-start gap-1 -top-16 bg-zinc-900/90 rounded-md p-1  ${
                  !isResumeMenu ? "" : "opacity-0 invisible"
                } transition-opacity duration-200 ease-in-out resume-menu`}
              >
                <a
                  href="/milan_resume.pdf"
                  target="_blank"
                  className="text-white text-nowrap bg-red-500 hover:bg-red-700 transition-all duration-300  p-2 rounded-md w-full"
                  download
                >
                  Download resume
                </a>
                <a
                  href="/milan_resume.pdf"
                  target="_blank"
                  className="text-white text-nowrap bg-red-500 p-2 rounded-md w-full text-start hover:bg-red-700 transition-all duration-300"
                >
                  View resume
                </a>
              </div>
            </div>
          </div>
          <AppSidebar />
          <main className="w-full bg-grid-black/[0.2] ">
            <div className="fixed pointer-events-none inset-0 flex items-center justify-center"></div>
            <Outlet />
          </main>
        </SidebarProvider>
      </div>
    </Suspense>
  );
};

export default AppLayout;
