import { NavLink } from "react-router-dom";
import BlogIcon from "../assets/icons/BlogIcon";
import ContactIcon from "../assets/icons/ContactIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import ProjectIcon from "../assets/icons/ProjectIcon";
import SkillIcon from "../assets/icons/SkillIcon";
import { SidebarListProps } from "../types/types";
import App from "../App";
import { SetStateAction, useEffect, useState } from "react";
import ArrowRightIcon from "../assets/icons/ArrowRightIcon";
import CrossIcon from "../assets/icons/CrossIcon";
import ExpandIcon from "../assets/icons/ExpandIcon";
import AppHeader from "../components/app-header/AppHeader";

const sidebarLists: SidebarListProps[] = [
  {
    id: 1,
    label: "Home",
    link: "/home",
    icon: <HomeIcon className="w-[1.35rem] h-[1.35rem] fill-gray-300 " />,
  },
  {
    id: 2,
    label: "Projects",
    link: "/projects",
    icon: <ProjectIcon className="w-[1.35rem] h-[1.35rem] fill-gray-300 " />,
  },
  {
    id: 3,
    label: "Skills",
    link: "/skills",
    icon: <SkillIcon className="w-[1.35rem] h-[1.35rem] fill-gray-300 " />,
  },
  {
    id: 4,
    label: "Blogs",
    link: "/blogs",
    icon: <BlogIcon className="w-[1.35rem] h-[1.35rem] fill-gray-300 " />,
  },
  {
    id: 5,
    label: "Contacts",
    link: "/contacts",
    icon: <ContactIcon className="w-[1.35rem] h-[1.35rem] fill-gray-300 " />,
  },
];

const AppSidebar = () => {
  const [isOopenSidebar, setIsOpenSidebar] = useState(false);

  useEffect(() => {
    isOopenSidebar
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [isOopenSidebar]);

  return (
    <>
      <div className="fixed right-5 top-4 z-[1000] lg:invisible lg:hidden lg:opacity-0">
        {isOopenSidebar ? (
          <button
            onClick={() => setIsOpenSidebar(false)}
            className="rounded-md border border-gray-500/80 p-1 transition-all duration-300 hover:bg-zinc-900"
          >
            <CrossIcon className="h-8 w-8 fill-slate-200" />
          </button>
        ) : (
          <button
            onClick={() => setIsOpenSidebar(true)}
            className="rounded-md border border-gray-500/80 p-1 transition-all duration-300 hover:bg-zinc-900"
          >
            <ExpandIcon className="h-8 w-8 fill-slate-200" />
          </button>
        )}
      </div>
      <nav
        className={`fixed ${
          !isOopenSidebar ? "  invisible opacity-0 -translate-x-80" : null
        } lg:block lg:visible lg:opacity-100 lg:sticky top-0 lg:w-[22rem] lg:border-r lg:border-gray-500/80  [backdrop-filter:blur(15px);]  w-full h-screen bg-zinc-900/80 p-5 translate-x-0 md:translate-x-[none] transition-all duration-500 min-h-screen  `}
      >
        <AppHeader headingLevel="h2" className="flex flex-col">
          <span className="text-xl text-gray-200"> Milan Rokaya</span>
          <span className="text-sm text-gray-400">Fullstack Developer</span>
        </AppHeader>
        <AppSidebarList
          lists={sidebarLists}
          setIsOpenSidebar={setIsOpenSidebar}
        />
      </nav>
    </>
  );
};

const AppSidebarList = ({
  lists,
  setIsOpenSidebar,
}: {
  lists: SidebarListProps[];
  setIsOpenSidebar: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: number]: boolean }>(
    {}
  );

  const toggleSubmenu = (id: number) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <ul className="text-white gap-3 flex flex-col">
      {lists.map((list) => (
        <li
          onClick={() => (list.items ? toggleSubmenu(list.id) : null)}
          key={list.id}
          className={`hover:${() =>
            list.items ? toggleSubmenu(list.id) : null}`}
        >
          <NavLink
            to={!list.items ? list.link : "#"}
            onClick={() => {
              list.items ? null : setIsOpenSidebar(true);
            }}
            className=" w-full rounded-md border border-gray-500/80 bg-zinc-800 p-5 text-gray-300 hover:scale-[1.03] hover:bg-zinc-900 hover:text-white duration-500 transition-all flex items-center gap-4"
          >
            <span>{list.icon}</span>
            {list.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default AppSidebar;
