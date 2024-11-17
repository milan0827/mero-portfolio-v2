import { useState } from "react";
import { NavLink } from "react-router-dom";

interface SidebarListProps {
  id: string;
  link: string;
  label: string;
  items?: SidebarListProps[];
}

const sidebarList: SidebarListProps[] = [
  {
    id: "1",
    link: "home",
    label: "Home",
  },
  {
    id: "2",
    link: "projects",
    label: "projects",
    items: [
      {
        id: "2A",
        link: "kheldim",
        label: "Kheldim Tournament",
      },
      {
        id: "2B",
        link: "vms",
        label: "Visitor Management System",
      },
      {
        id: "2B",
        link: "channakya-base",
        label: "Channakya Base",
      },
    ],
  },
];

const Sidebar = ({ lists = sidebarList }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="text-white">
      <ul>
        {lists.map((list) => {
          return (
            <>
              <li>
                <NavLink
                  to={list.link}
                  onClick={() => setIsOpen((open) => !open)}
                >
                  {list.label}
                </NavLink>{" "}
              </li>
              {isOpen && list?.items && list.items.length > 0 ? (
                <Sidebar lists={list.items} />
              ) : null}
            </>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
