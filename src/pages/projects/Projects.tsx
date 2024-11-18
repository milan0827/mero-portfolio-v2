import { NavLink } from "react-router-dom";
import AppHeader from "../../components/app-header/AppHeader";
import { useUrlQuery } from "../../hooks/useUrlQuery";
import KheldimTournament from "./KheldimTournament";
import VMS from "./VMS";
import KheldimAdmin from "./KheldimAdmin";
import { useEffect, useState } from "react";

const projectData = [
  {
    id: 1,
    ProjectName: "Kheldim Tournament",
    projectDesc:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quis temporibus provident est, doloremque consectetur porro deleniti? Molestias eum at magni. Voluptatibus quam quibusdam rem suscipit, pariatur saepe aliquam dolores modi commodi odit incidunt quae id maiores nesciunt! Debitis, repudiandae. Officia sint molestiae soluta aliquid necessitatibus repudiandae eos! Laudantium magnam debitis sapiente cumque fuga! Aliquam amet dolore fugit impedit, voluptatem accusamus voluptates eum perferendis aut eveniet quidem temporibus. A asperiores vel soluta quisquam iste corporis alias explicabo culpa corrupti, repellat debitis blanditiis placeat nihil dignissimos consequuntur expedita laboriosam reiciendis. Magnam rerum rem autem eum fugit iste! Voluptatum laboriosam atque ab.",
    query: "kheldim-tournament",
  },
  {
    id: 2,
    ProjectName: "Kheldim Admin",
    projectDesc:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quis temporibus provident est, doloremque consectetur porro deleniti? Molestias eum at magni. Voluptatibus quam quibusdam rem suscipit, pariatur saepe aliquam dolores modi commodi odit incidunt quae id maiores nesciunt! Debitis, repudiandae. Officia sint molestiae soluta aliquid necessitatibus repudiandae eos! Laudantium magnam debitis sapiente cumque fuga! Aliquam amet dolore fugit impedit, voluptatem accusamus voluptates eum perferendis aut eveniet quidem temporibus. A asperiores vel soluta quisquam iste corporis alias explicabo culpa corrupti, repellat debitis blanditiis placeat nihil dignissimos consequuntur expedita laboriosam reiciendis. Magnam rerum rem autem eum fugit iste! Voluptatum laboriosam atque ab.",
    query: "kheldim-admin",
  },
];

const projectTabs = [
  {
    id: 1,
    tabName: "Kheldim Tournament",
    queryString: "kheldim-tournament",
  },
  {
    id: 2,
    tabName: "Kheldim Admin",
    queryString: "kheldim-admin",
  },
  {
    id: 3,
    tabName: "VMS",
    queryString: "vms",
  },
  {
    id: 3,
    tabName: "Septic Tank Nepal",
    queryString: "stn",
  },
];

const Projects = () => {
  const [showProject, setShowProject] = useState(false);
  const { getQuery, setQuery } = useUrlQuery();

  useEffect(() => {
    setTimeout(() => {
      setShowProject(true);
    }, 5000);
  }, []);

  const page = getQuery("page");

  return (
    <div className="max-w-[750px] mx-auto flex flex-col  gap-6 px-5 my-20">
      <div className="flex flex-col gap-6">
        <AppHeader
          variant="primary"
          size="large"
          headingLevel="h2"
          className=""
        >
          Projects
        </AppHeader>
        <ul className="flex gap-2 flex-wrap">
          {projectTabs.map((tab) => (
            <li
              onClick={() =>
                setQuery({ queryKey: "page", queryString: tab.queryString })
              }
              key={tab.id}
              className={`max-w-[150px] w-[150px] text-center  truncate px-4 py-2 rounded-lg cursor-pointer  border border-gray-500/80 bg-zinc-800 p-5 text-gray-300 hover:scale-[1.03] hover:bg-zinc-900 hover:text-white duration-500 transition-all ${
                page === tab.queryString ? "bg-zinc-900" : ""
              } `}
              title={tab.tabName}
            >
              {tab.tabName}
            </li>
          ))}
          <div className="w-full h-[0.5rem] bg-transparent border border-gray-500/50 rounded-full shadow-[5px_0px_10px_10px_rgba(180,_180,_255,_0.05)]"></div>
        </ul>
      </div>
      {page === "" ||
        (page === null && (
          <div className="self-start flex items-center justify-center my-40 mx-auto">
            <AppHeader
              className="text-[#5c9e8a] text-4xl md:text-6xl"
              variant="primary"
            >
              Select a Project
            </AppHeader>
          </div>
        ))}

      {showProject && page === "kheldim-tournament" && <KheldimTournament />}
      {page === "vms" && <VMS />}
      {page === "kheldim-admin" && <KheldimAdmin />}

      {page === "stn" && (
        <div className="self-start flex items-center justify-center my-40 mx-auto">
          <AppHeader
            className="text-[#5c9e8a] text-4xl md:text-6xl"
            variant="primary"
          >
            Coming Soon...
          </AppHeader>
        </div>
      )}
    </div>
  );
};

export default Projects;
