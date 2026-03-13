"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-surface hover:text-surface-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
        "icon-xl": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

const CTAButton = ({
  href,
  text,
  icon: Icon,
  className,
  variant = "highlight",
  children,
}: {
  href?: string;
  text?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"] | "highlight";
  children?: React.ReactNode;
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    if (!href) return;

    e.preventDefault();

    if (href === "/") {
      // Navigate to home page
      router.push("/");
      return;
    }

    // Check if href is a page path (starts with /#)
    if (href.startsWith("/#")) {
      // Extract section ID from path (e.g., "/#about" -> "about")
      const sectionId = href.replace("/#", "");

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
    } else {
      // External link or regular href, navigate normally
      if (href.startsWith("http")) {
        window.open(href, "_blank", "noopener noreferrer");
      } else {
        router.push(href);
      }
    }
  };

  const buttonContent = (
    <div
      className="group relative w-32 lg:w-40 cursor-pointer"
      onClick={handleClick}
    >
      <div className="absolute -inset-0.5 bg-linear-to-r from-primary to-primary-active rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
      <div className="relative h-10 bg-surface backdrop-blur-xl rounded-lg border border-background/10 leading-none overflow-hidden">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-linear-to-r from-primary/20 to-primary-active/20"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300">
          <span className="bg-linear-to-r from-sub-text to-foreground bg-clip-text text-transparent font-medium z-10">
            {text}
          </span>
          {Icon && (
            <Icon
              className={`w-4 h-4 text-sub-text ${
                text === "Contact"
                  ? "group-hover:translate-x-1"
                  : "group-hover:rotate-45"
              } transform transition-all duration-300 z-10`}
            />
          )}
        </span>
      </div>
    </div>
  );

  if (variant === "highlight") {
    return buttonContent;
  }

  return (
    <Button variant={variant} className={className} onClick={handleClick}>
      {children}
    </Button>
  );
};

export { Button, buttonVariants, CTAButton };
