"use client";

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: `
            group/toast flex items-start gap-3
            rounded-[14px] px-4 py-3.5
            border shadow-sm
            text-sm font-sans
            transition-all duration-300
          `,
          title: "font-medium text-[13px] leading-snug ml-2",
          description: "text-[12px] mt-0.5 leading-relaxed",
          closeButton: `
            !top-3 !right-3 !left-auto
            !size-5 rounded-md
            opacity-40 hover:opacity-80
            hover:bg-black/10 dark:hover:bg-white/10
            transition-opacity
          `,
          actionButton: `
            !rounded-lg !px-3 !py-1.5 !text-xs !font-medium
            !bg-black !text-white
            hover:!opacity-80 !transition-opacity
          `,
          cancelButton: `
            !rounded-lg !px-3 !py-1.5 !text-xs !font-medium
            !bg-black/10 dark:!bg-white/10
            hover:!bg-black/20 !transition-colors
          `,

          success: `
            !bg-green-50 !border-green-200
            dark:!bg-green-950/40 dark:!border-green-800/60
            [&>[data-title]]:!text-green-800 dark:[&>[data-title]]:!text-green-200
            [&>[data-description]]:!text-green-700 dark:[&>[data-description]]:!text-green-300
          `,
          error: `
            !bg-red-50 !border-red-200
            dark:!bg-red-950/40 dark:!border-red-800/60
            [&>[data-title]]:!text-red-800 dark:[&>[data-title]]:!text-red-200
            [&>[data-description]]:!text-red-700 dark:[&>[data-description]]:!text-red-300
          `,
          warning: `
            !bg-amber-50 !border-amber-200
            dark:!bg-amber-950/40 dark:!border-amber-800/60
            [&>[data-title]]:!text-amber-800 dark:[&>[data-title]]:!text-amber-200
            [&>[data-description]]:!text-amber-700 dark:[&>[data-description]]:!text-amber-300
          `,
          info: `
            !bg-blue-50 !border-blue-200
            dark:!bg-blue-950/40 dark:!border-blue-800/60
            [&>[data-title]]:!text-blue-800 dark:[&>[data-title]]:!text-blue-200
            [&>[data-description]]:!text-blue-700 dark:[&>[data-description]]:!text-blue-300
          `,
        },
      }}
      icons={{
        success: (
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400">
            <CircleCheckIcon className="size-4" />
          </span>
        ),
        info: (
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
            <InfoIcon className="size-4" />
          </span>
        ),
        warning: (
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400">
            <TriangleAlertIcon className="size-4" />
          </span>
        ),
        error: (
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400">
            <OctagonXIcon className="size-4" />
          </span>
        ),
        loading: (
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <Loader2Icon className="size-4 animate-spin" />
          </span>
        ),
      }}
      style={
        {
          "--border-radius": "14px",
          "--width": "360px",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
