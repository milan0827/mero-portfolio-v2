import { useState } from "react";
import CrossIcon from "../../assets/icons/CrossIcon";
import ExpandIcon from "../../assets/icons/ExpandIcon";
import AppHeader from "../app-header/AppHeader";
import SidebarLists from "../sidebar-lists/SidebarLists";

const Sidebar = () => {
  const [isSidebarListOpen, setIsSidebarListOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <div className="absolute z-[1000] right-5 top-4 md:hidden md:invisible md:opacity-0">
        {isSidebarOpen ? (
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-1 border-gray-500/80 border rounded-md hover:bg-zinc-900 transition-all duration-300 "
          >
            <ExpandIcon className="w-8 h-8 fill-slate-200" />
          </button>
        ) : (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-1 border-gray-500/80 border rounded-md hover:bg-zinc-900 transition-all duration-300 "
          >
            <CrossIcon className="w-8 h-8 fill-slate-200" />
          </button>
        )}
      </div>
      {/* // bg-[linear-gradient(to_right_,#000000c1_98%,#000000c1_20%,#ffffff1a)] */}
      <nav
        className={`absolute top-0 ${
          isSidebarOpen ? " invisible opacity-0 -translate-x-80" : null
        } md:block md:visible md:opacity-100 md:static md:w-[25rem] md:border-r md:border-gray-500/80  [backdrop-filter:blur(15px);]  w-full h-screen bg-zinc-900/80 p-5 translate-x-0 md:translate-x-[none] transition-all duration-500 `}
      >
        <AppHeader headingLevel="h2" className="flex flex-col">
          <span className="text-xl text-gray-200"> Milan Rokaya</span>
          <span className="text-sm text-gray-400">Fullstack Developer</span>
        </AppHeader>
        <SidebarLists
          isSidebarListOpen={isSidebarListOpen}
          setIsSidebarListOpen={setIsSidebarListOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </nav>
    </>
  );
};

export default Sidebar;
