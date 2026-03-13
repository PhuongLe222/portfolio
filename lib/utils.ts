import { clsx, type ClassValue } from "clsx"
import { Variants } from "framer-motion";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const staggerContainer = (
  staggerChildren?: number,
  delayChildren?: number
): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const calculateExperience = (startDate: Date): number => {
  const today = new Date();
  return (
    today.getFullYear() -
    startDate.getFullYear() -
    (today <
    new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate())
      ? 1
      : 0)
  );
};

export const toSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");