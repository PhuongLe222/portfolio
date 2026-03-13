"use client";
import { Briefcase, CircleUser, House, Mails } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "@ui";
import { cn } from "@/lib/utils";

// nav data
export const navData = [
  { name: "Home", path: "/", icon: House },
  { name: "About", path: "/#about", icon: CircleUser },
  { name: "Work", path: "/#work", icon: Briefcase },
  {
    name: "Contact",
    path: "/#contact",
    icon: Mails,
  },
];

const Nav = ({ className }: { className?: string }) => {
  const router = useRouter();

  const handleNavClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();

    if (path === "/") {
      // Navigate to home page
      router.push("/");
      return;
    }

    // Extract section ID from path (e.g., "/#about" -> "about")
    const sectionId = path.replace("/#", "");

    // Check if we're already on the home page
    if (window.location.pathname === "/") {
      // We're on home page, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // We're on a different page, navigate to home first then scroll
      router.push("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  };

  return (
    <nav
      className={cn(
        "flex flex-col items-center xl:justify-center gap-y-2 lg:gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen",
        className,
      )}
    >
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 xl:h-max py-4 xl:py-8 bg-primary/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map(({ path, icon: Icon, name }, i) => (
          <Link
            className={`flex items-center text-primary-active hover:text-secondary transition-all duration-300`}
            href={path}
            key={i}
            onClick={(e) => handleNavClick(path, e)}
          >
            {/* tolltip */}
            <Tooltip>
              <TooltipTrigger className="group relative cursor-pointer">
                <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative rounded-full bg-surface/50 backdrop-blur-xl p-2 flex items-center justify-center transition-all duration-300">
                  <Icon className="size-6 text-sub-text group-hover:text-primary transition-colors" />
                </div>
              </TooltipTrigger>
              <TooltipContent side="left" align="center" className="text-md">
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
