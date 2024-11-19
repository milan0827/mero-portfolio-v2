import AppHeader from "../../components/app-header/AppHeader";
import { useUrlQuery } from "../../hooks/useUrlQuery";
const blogs = [
  {
    id: 1,
    tabName: "Blog 1",
    queryString: "blog-1",
  },
];

const Blogs = () => {
  const { getQuery, setQuery } = useUrlQuery();

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
          {blogs.map((tab) => (
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
              Select a Blog
            </AppHeader>
          </div>
        ))}

      {page === "" && (
        <div className="self-start flex items-center justify-center my-40 mx-auto">
          <AppHeader
            className="text-[#5c9e8a] text-4xl md:text-6xl"
            variant="primary"
          >
            Coming Soon...
          </AppHeader>
        </div>
      )}

      {page === "blog-1" && (
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

export default Blogs;
