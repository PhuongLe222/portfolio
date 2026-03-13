import { Code, Facebook, Github, Globe, Layers, Linkedin } from "lucide-react";
import { calculateExperience } from "./utils";

export const TYPING_SPEED = 100;
export const ERASING_SPEED = 50;
export const PAUSE_DURATION = 2000;
export const WORDS = ["Network & Telecom Student", "Tech Enthusiast"];
export const TECH_STACK = ["React", "Javascript", "Node.js", "Tailwind"];
export const SOCIAL_LINKS = [
  {
    icon: Github,
    label: "GitHub",
    link: "https://github.com/PhuongLe222",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/ph%C6%B0%E1%BB%A3ng-l%C3%AA-6b5bb124b",
  },
  {
    icon: Facebook,
    label: "Facebook",
    link: "https://facebook.com/kkimphuong22",
  },
];

export const statsData = [
  {
    icon: Code,
    value: 4,
    label: "Total Projects",
    description: "Innovative web solutions crafted",
    animation: "fade-right",
  },
  {
    icon: Layers,
    value: 12,
    label: "Skills Mastered",
    description: "Modern web technologies",
    animation: "fade-up",
  },
  {
    icon: Globe,
    value: calculateExperience(new Date("2022-08-01")),
    label: "Years of Experience",
    description: "Continuous learning journey",
    animation: "fade-left",
  },
] as const;

export const techStacks = [
  { icon: "/tech/html.svg", language: "HTML" },
  { icon: "/tech/css.svg", language: "CSS" },
  { icon: "/tech/javascript.svg", language: "JavaScript" },
  { icon: "/tech/reactjs.svg", language: "ReactJS" },
  { icon: "/tech/nextjs.svg", language: "NextJS" },
  { icon: "/tech/axios.svg", language: "Axios" },
  { icon: "/tech/swr.svg", language: "SWR" },
  { icon: "/tech/zustand.svg", language: "Zustand" },
  { icon: "/tech/MUI.svg", language: "Material UI" },
  { icon: "/tech/shadcn-ui.svg", language: "ShadCN UI" },
  { icon: "/tech/tailwind.svg", language: "Tailwind CSS" },
  { icon: "/tech/zod.svg", language: "Zod" },
];
