import { Code, Facebook, Github, Globe, Layers, Linkedin } from "lucide-react";
import { calculateExperience } from "./utils";

export const TYPING_SPEED = 100;
export const ERASING_SPEED = 50;
export const PAUSE_DURATION = 2000;
export const WORDS = ["Network & Telecom Student", "Tech Enthusiast"];
export const TECH_STACK = ["React", "Javascript", "Node.js", "Tailwind"];
export const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/PhuongLe2810" },
  { icon: Linkedin, link: "/" },
  { icon: Facebook, link: "https://www.facebook.com/kkimphuong22" },
];

export const statsData = [
  {
    icon: Code,
    value: 5,
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
