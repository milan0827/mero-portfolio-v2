import Kheldim from "./../assets/images/kheldim.png";
import Channakya from "./../assets/images/channakaya.png";

export const projects = [
  {
    id: 1,
    projectName: "Kheldim Tournaments",
    companyName: "Awakened Devs",
    projectDescription:
      "Developed a platform for booking futsal and organizing tournament of different sports.",
    techStack: ["Nextjs", "Firebase", "Postgresql", "Redis", "Drizzle ORM"],
    image: Kheldim,
  },
  {
    id: 2,
    projectName: "Kheldim Admin",
    companyName: "Awakened Devs",
    projectDescription:
      "Developed a platform for sports bookings, payments, and tournament management.",
    techStack: [
      "ReactJS",
      "Firebase",
      "Postgresql",
      "Redis",
      "Drizzle ORM",
      "React Table",
    ],
    image: Kheldim,
  },
  {
    id: 3,
    projectName: "Visitor Management System",
    companyName: "Channakya Software Pvt. Ltd.",
    projectDescription:
      "Tracks, registers, and manages visitors efficiently, enhancing security and experience.",
    techStack: ["ReactJS", "Knex", "Redis", "Graphql", "React Table"],
    image: Channakya,
  },
];
