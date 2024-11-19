import { Link } from "react-router-dom";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import LinkedInIcon from "../../assets/icons/LinkedInIcon";
import AppHeader from "../../components/app-header/AppHeader";
import Cards from "../../components/cards/Cards";
import TechStackTags from "../../components/techstack-tags/TechStackTags";
import { projects } from "../../constant/data";
import { useEffect, useRef, useState } from "react";
import GithubIcon from "../../assets/icons/GithubIcon";
import Kheldim2 from "./../../assets/images/kheldim-2.png";
import Kheldim1 from "./../../assets/images/kheldim-1.png";

const Home = () => {
  return (
    <>
      <div className="max-w-[750px] mx-auto px-5 my-20 flex flex-col gap-6">
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
          interfaces and efficient back-end systems. Passionate about learning,
          I deliver impactful digital solutions that solve real-world problems
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
              render={(v: string) => <TechStackTags title={v} key={v} />}
              key={project.id}
            />
          ))}

          <Link
            to="/projects"
            className="self-end bg-gray-300 px-4 py-2 rounded-lg text-zinc-900  hover:bg-zinc-200 transition-all duration-300"
          >
            See all works
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          <AppHeader
            headingLevel="h3"
            variant="primary"
            size="medium"
            className="border-b border-gray-500/50 pb-2"
          >
            Find me on
          </AppHeader>
          <div className="flex gap-4 items-center flex-wrap">
            <Link
              to="https://www.linkedin.com/in/milan-rokaya-368330237/"
              className="flex gap-2 border-gray-500/50 border shadow-[5px_0px_10px_rgba(180,_180,_255,_0.1)] items-center justify-center py-2 px-6 rounded-lg bg-zinc-900/80 hover:bg-zinc-200 transition-all duration-300 [&>span]:hover:text-zinc-900 [&>svg]:hover:fill-zinc-900/80 [&>*]:transition-all [&>*]:duration-300"
            >
              <LinkedInIcon className="w-[1.35rem] h-[1.35rem] fill-gray-300 " />
              <span className="text-gray-300 ">LinkedIn</span>
            </Link>
            <Link
              to="https://www.facebook.com/meMil4n"
              className="flex gap-2 border-gray-500/50 border shadow-[5px_0px_10px_rgba(180,_180,_255,_0.1)] items-center justify-center py-2 px-6 rounded-lg bg-zinc-900/80 hover:bg-zinc-200 transition-all duration-300 [&>span]:hover:text-zinc-900 [&>svg]:hover:fill-zinc-900/80 [&>*]:transition-all [&>*]:duration-300"
            >
              <FacebookIcon className="w-[1.35rem] h-[1.35rem] fill-gray-300 " />
              <span className="text-gray-300 ">Facebook</span>
            </Link>
            <Link
              to="https://github.com/milan0827"
              className="flex gap-2 border-gray-500/50 border shadow-[5px_0px_10px_rgba(180,_180,_255,_0.1)] items-center justify-center py-2 px-6 rounded-lg bg-zinc-900/80 hover:bg-zinc-200 transition-all duration-300 [&>span]:hover:text-zinc-900 [&>svg]:hover:fill-zinc-900/80 [&>*]:transition-all [&>*]:duration-300"
            >
              <GithubIcon className="w-[1.35rem] h-[1.35rem] fill-gray-300 " />
              <span className="text-gray-300 ">Github</span>
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            <AppHeader
              headingLevel="h3"
              variant="primary"
              size="medium"
              className="border-b border-gray-500/50 pb-2"
            >
              Let's talk
            </AppHeader>
            <p className="text-gray-300">
              Need help on Project or collaborate with me? Contact me at{" "}
              <Link
                to="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXDzgtplcZLnGrpBkHZsbxshqxZDmdnbWkVCFQHvMFbQWSPGwcVCqzxpPMqMSvpjnTkdD"
                className="underline text-[#5c9e8a]"
              >
                milanrokaya2014@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { Home };
