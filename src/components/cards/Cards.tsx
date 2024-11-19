import { forwardRef } from "react";
import AppHeader from "../app-header/AppHeader";

interface CardsProps<T> {
  image: string;
  projectTitle: string;
  projectDesc: string;
  techStack: string[];
  companyName: string;
  render: T;
}

const Cards = forwardRef(
  (
    {
      image,
      projectTitle,
      projectDesc,
      techStack,
      companyName,
      render,
    }: CardsProps<any>,
    ref
  ) => {
    return (
      <div
        className="flex flex-col gap-4 border border-gray-500/50 p-8 rounded-2xl min-w-[300px] shadow-[5px_0px_10px_rgba(180,_180,_255,_0.1)] bg-zinc-900/80"
        ref={ref as never}
      >
        <div className="flex  items-center gap-4">
          <img src={image} alt="" className="w-10 rounded-full" />
          <AppHeader variant="primary" size="small" className="flex flex-col">
            <span className="leading-4">{projectTitle}</span>
            <span className="text-sm font-normal text-gray-400">
              {companyName}
            </span>
          </AppHeader>
        </div>
        <p className="text-gray-300">{projectDesc}</p>

        <div className="flex gap-2 flex-wrap ">{techStack.map(render)}</div>
      </div>
    );
  }
);

export default Cards;
