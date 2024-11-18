import { Link } from "react-router-dom";
import AppHeader from "../../components/app-header/AppHeader";
import Cards from "../../components/cards/Cards";
import TechStackTags from "../../components/techstack-tags/TechStackTags";
import { projects } from "../../constant/data";
import Kheldim from "./../../assets/images/kheldim.png";

const Home = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-5 my-20 flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <AppHeader
          variant="primary"
          size="large"
          headingLevel="h2"
          className=""
        >
          Milan Rokaya
        </AppHeader>
        <AppHeader variant="secondary" size="small">
          Full Stack developer
        </AppHeader>
      </div>
      <div className="w-full h-[0.5rem] bg-transparent border border-gray-500/50 rounded-full shadow-[5px_0px_10px_10px_rgba(180,_180,_255,_0.05)]"></div>
      <p className="text-gray-300">
        Hello! I am Milan Rokaya, a fullstack engineer with over 1.5 years of
        experience in building user-focused web applications. Proficient in
        React, Node.js, and Next.js, I excel in creating seamless front-end
        interfaces and efficient back-end systems. Passionate about learning, I
        deliver impactful digital solutions that solve real-world problems
        effectively.
      </p>

      <div className="flex flex-col gap-6">
        <AppHeader
          headingLevel="h3"
          variant="primary"
          size="medium"
          className="border-b border-gray-500/50 pb-2"
        >
          My recent works
        </AppHeader>
        <p className="text-gray-300">Here are the list of recent works</p>
        {projects.map((project) => (
          <Cards
            companyName={project.companyName}
            image={project.image}
            projectDesc={project.projectDescription}
            projectTitle={project.projectName}
            techStack={project.techStack}
            render={(v: string) => <TechStackTags title={v} />}
          />
        ))}

        <Link
          to="/projects"
          className="self-end bg-gray-300 px-4 py-2 rounded-lg text-zinc-900  hover:bg-zinc-200 transition-all duration-300"
        >
          See all works
        </Link>
      </div>

      <div>
        <AppHeader
          headingLevel="h3"
          variant="primary"
          size="medium"
          className="border-b border-gray-500/50 pb-2"
        >
          Find me on
        </AppHeader>
      </div>
    </div>
  );
};

export default Home;
