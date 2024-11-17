import { SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import BlogIcon from "../../assets/icons/BlogIcon";
import HomeIcon from "../../assets/icons/HomeIcon";
import ProjectIcon from "../../assets/icons/ProjectIcon";
import { SidebarListProps } from "../../types/types";
import SkillIcon from "../../assets/icons/SkillIcon";
import ContactIcon from "../../assets/icons/ContactIcon";

const sidebarList: SidebarListProps[] = [
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
    id: 3,
    label: "Blogs",
    link: "/blogs",
    icon: <BlogIcon className="w-[1.35rem] h-[1.35rem] fill-gray-300 " />,
  },
  {
    id: 3,
    label: "Contacts",
    link: "/contacts",
    icon: <ContactIcon className="w-[1.35rem] h-[1.35rem] fill-gray-300 " />,
  },
];

function SidebarLists({
  setIsSidebarListOpen,
  setIsSidebarOpen,
}: {
  isSidebarListOpen?: boolean;
  setIsSidebarListOpen?: React.Dispatch<SetStateAction<boolean>>;
  isSidbarOpen?: boolean;
  setIsSidebarOpen?: React.Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <ul className="relative w-full flex flex-col gap-3">
      {sidebarList.map((list) => {
        return (
          <>
            <li key={list.id}>
              <NavLink
                to={list.link}
                onClick={() => {
                  setIsSidebarOpen?.(true);
                  // setIsSidebarListOpen?.((open) => !open);
                }}
                className="p-5 bg-zinc-800 w-full text-gray-300 rounded-md border-gray-500/80 border flex gap-4 items-center "
              >
                <span>{list.icon}</span>
                <span>{list.label}</span>
              </NavLink>{" "}
            </li>
          </>
        );
      })}
    </ul>
  );
}

export default SidebarLists;
