import AppHeader from "../../components/app-header/AppHeader";
import Typescript from "./../../assets/images/TypeScriptImage.jpeg";
import Drizzle from "./../../assets/images/drizzle.jpeg";
import ExpressJS from "./../../assets/images/express.png";
import Javascript from "./../../assets/images/javascript.png";
import MongoDb from "./../../assets/images/mongodb.webp";
import MySql from "./../../assets/images/mysql.jpeg";
import NextJS from "./../../assets/images/nextjs.png";
import NodeJS from "./../../assets/images/nodejs.jpg";
import Postgresql from "./../../assets/images/postgresql.png";
import ReactJS from "./../../assets/images/reactjs.png";

const mySkills = [
  {
    name: "Typescript",
    image: Typescript,
    id: 1,
  },
  {
    name: "Javascript",
    image: Javascript,
    id: 2,
  },
  {
    name: "React JS",
    image: ReactJS,
    id: 3,
  },
  {
    name: "Next JS",
    image: NextJS,
    id: 4,
  },
  {
    name: "Node JS",
    image: NodeJS,
    id: 5,
  },
  {
    name: "MongoDB",
    image: MongoDb,
    id: 5,
  },
  {
    name: "Express JS",
    image: ExpressJS,
    id: 6,
  },
  {
    name: "MySql",
    image: MySql,
    id: 7,
  },
  {
    name: "Postgresql",
    image: Postgresql,
    id: 8,
  },
  {
    name: "Drizzle ORM",
    image: Drizzle,
    id: 9,
  },
  // "Javascript",
  // "React JS",
  // "Next JS",
  // "Node JS",
  // "MongoDB",
  // "MySQL",
  // "Express",
  // "Postgresql",
  // "Drizzle ORM",
];

const Skills = () => {
  return (
    <div className="max-w-[750px] mx-auto px-5 my-20 flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <AppHeader
          variant="primary"
          size="large"
          headingLevel="h2"
          className=""
        >
          Skills
        </AppHeader>
      </div>
      <div className="w-full h-[0.5rem] bg-transparent border border-gray-500/50 rounded-full shadow-[5px_0px_10px_10px_rgba(180,_180,_255,_0.05)]"></div>

      <ul className="grid grid-cols-[repeat(auto-fit_,minmax(180px_,1fr))] ">
        {mySkills.map((skill) => (
          <li key={skill.id} className="">
            <figure className="relative overflow-hidden lg:[&>figcaption]:hover:translate-x-0  lg:[&>figcaption]:-translate-x-80 lg:[&>figcaption]:transition-all lg:[&>figcaption]:duration-500  ">
              <figcaption className=" absolute w-full h-full flex items-center justify-center lg:bg-gray-200/90 bg-zinc-800/50 text-zinc-50 font-bold uppercase text-2xl lg:text-4xl lg:text-zinc-600">
                {skill.name}
              </figcaption>
              <div className=" h-[10rem] overflow-hidden">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className={`block object-cover object-center  w-full h-full `}
                />
              </div>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
