import { Link, Outlet } from "react-router-dom";
import { SidebarProvider } from "../store/store";
import AppSidebar from "./AppSidebar";
import { Suspense, useEffect, useRef, useState } from "react";
import Loading from "../components/loading/Loading";
import ResumeIcon from "../assets/icons/ResumeIcon";

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
            className="fixed bottom-10 right-5 resume-group [&>.resume-menu]:flex [&>.resume-menu]:visible [&>.resume-menu]:opacity-100"
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
                  isResumeMenu ? "invisible opacity-0 " : ""
                } transition-opacity duration-200 ease-in-out`}
              >
                <a
                  href="/milan_resume.pdf"
                  target="_blank"
                  className="text-white text-nowrap bg-red-500 p-2 rounded-md w-full"
                  download
                >
                  Download resume
                </a>
                <a
                  href="/milan_resume.pdf"
                  target="_blank"
                  className="text-white text-nowrap bg-red-500 p-2 rounded-md w-full text-start"
                >
                  View resume
                </a>
              </div>
            </div>
          </div>
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
