export interface Project {
  id: number;
  created_at: string;
  Title: string;
  Description: string;
  Img: string;
  Link: string;
  Github: string;
  Features: string[];
  TechStack: string[];
}

export const projects: Project[] = [
  {
    "id": 1,
    "created_at": "2025-10-01T00:00:00.000000+00:00",
    "Title": "Agripos",
    "Description": "Agripos is an agricultural POS and operations management platform built for retail agents and distributors. The platform streamlines day-to-day operations including employee management, inventory tracking, and sales analytics across multiple branches.",
    "Img": "/projects/agripos.png",
    "Link": "",
    "Github": "",
    "Features": [
      "Employee, salary, shift, and work schedule management modules",
      "Inventory and sales analytics dashboards with stock reports and top-selling product analytics",
      "Secure authentication flows (login/logout) with multi-branch agency switching",
      "RESTful API integration with server state management via TanStack Query",
      "Form validation with Zod and responsive UI components"
    ],
    "TechStack": [
      "React.js",
      "TanStack Table",
      "TanStack Form",
      "TanStack Query",
      "Zustand",
      "Axios",
      "Zod",
      "Tailwind CSS"
    ]
  },
  {
    "id": 2,
    "created_at": "2024-06-01T00:00:00.000000+00:00",
    "Title": "OpenEdu",
    "Description": "OpenEdu is an e-learning and e-commerce web platform developed for VBI Academy – the leading blockchain and Web3 education provider in Vietnam. The platform supports course management, news publishing, and AI-powered features for an interactive learning experience.",
    "Img": "/projects/openedu.png",
    "Link": "https://openedu.net/vi",
    "Github": "",
    "Features": [
      "News Feed module for dynamic display and management of news and announcements",
      "Post creation, editing, and publishing with role-based access control for admins and authors",
      "AI Agent feature for searching, generating images, and creating presentation slides via natural language",
      "Intuitive chat UI for real-time conversation and dynamic content generation",
      "Performance optimization via code splitting, minification, image/video optimization, and caching"
    ],
    "TechStack": [
      "ReactJS",
      "NextJS",
      "Tailwind CSS",
      "Zustand",
      "SWR",
      "React Hook Form"
    ]
  },
  {
    "id": 3,
    "created_at": "2024-05-01T00:00:00.000000+00:00",
    "Title": "Stayge",
    "Description": "Stayge is an online meeting platform that enables users to create and manage virtual meetings. The frontend was developed based on wireframes and design specifications, delivering a smooth and responsive user experience.",
    "Img": "/projects/stayge.png",
    "Link": "",
    "Github": "",
    "Features": [
      "Create and manage online meetings",
      "Responsive user interfaces based on wireframes and design specifications",
      "Real-time state management with Preact Signals"
    ],
    "TechStack": [
      "ReactJS",
      "Tailwind CSS",
      "React Query",
      "Preact Signal"
    ]
  },
  {
    "id": 4,
    "created_at": "2023-08-01T00:00:00.000000+00:00",
    "Title": "Livere",
    "Description": "Livere is a comment plugin platform developed at Lecle Company. The project focused on building modular, reusable components and implementing account and content moderation features to support scalable integration across multiple pages.",
    "Img": "/projects/livere.png",
    "Link": "https://livere.com/",
    "Github": "",
    "Features": [
      "Withdraw account feature for user fund management",
      "Banned word management including creating, suggesting keywords, and deleting entries",
      "Modular components easily integrated across multiple pages"
    ],
    "TechStack": [
      "ReactJS",
      "SCSS",
      "SWR",
      "Jotai"
    ]
  }
]