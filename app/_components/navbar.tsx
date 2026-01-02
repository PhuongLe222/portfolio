"use client";
import { Briefcase, CircleUser, House, Mails } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./common";

// nav data
export const navData = [
  { name: "Home", path: "/", Icon: <House /> },
  { name: "About", path: "/#about", Icon: <CircleUser /> },
  { name: "Work", path: "/#work", Icon: <Briefcase /> },
  {
    name: "Contact",
    path: "/#contact",
    Icon: <Mails />,
  },
];

const Nav = () => {  
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, i) => (
          <Link
            className={`relative flex items-center group hover:text-accent transition-all duration-300`}
            href={link.path}
            key={i}
          >
            {/* tolltip */}
            <Tooltip>
              <TooltipTrigger> {link.Icon}</TooltipTrigger>
              <TooltipContent side="left" align="center">
                <p>{link.name}</p>
              </TooltipContent>
            </Tooltip>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
