import React, { SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import { SidebarListProps } from "../../types/types";

const SidebarList = ({
  lists,
  setIsOpenSidebar,
}: {
  lists: SidebarListProps[];
  setIsOpenSidebar: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <ul className="text-white gap-3 flex flex-col">
      {lists.map((list) => (
        <li key={list.id}>
          <NavLink
            to={!list.items ? list.link : "#"}
            onClick={() => {
              setIsOpenSidebar(false);
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
export default SidebarList;
