"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Calendar, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { cn } from "@/lib/utils";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Lecle Company",
    period: "Aug 2022 – June 2024",
    type: "Full-time",
    location: "Ho Chi Minh City",
    logo: "/company/lecle.png",
    year: "2022",
    description:
      "Korean company specializing in blockchain, AI, and outsourcing.",
    highlights: [
      "Built core frontend architecture with deep learning-integrated UI using HTML, CSS, and JavaScript",
      "Developed an internal UI library that boosted team productivity and component reuse across projects",
      "Shipped a fully responsive website that drove a significant uplift in mobile traffic",
    ],
    skills: ["ReactJS", "SCSS", "SWR", "Jotai", "TypeScript"],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "VBI Academy – GFI Group",
    period: "Jun 2024 – Present",
    type: "Full-time",
    location: "Ho Chi Minh City",
    logo: "/company/vbi.png",
    year: "2024",
    description: "Leading blockchain and Web3 education provider in Vietnam.",
    highlights: [
      "Owned frontend architecture for key product modules — AI features, blog platform, and user dashboard",
      "Reduced page load times via code splitting, lazy loading, image/video optimization, and advanced caching",
      "Collaborated closely with design and backend teams to ship production-ready features on tight schedules",
    ],
    skills: [
      "ReactJS",
      "NextJS",
      "Tailwind CSS",
      "Zustand",
      "SWR",
      "React Hook Form",
    ],
  },
];

const COLORS = [
  { hex: "#22d3ee", gradient: "135deg, #22d3ee, #0ea5e9" }, // cyan → sky
  { hex: "#818cf8", gradient: "135deg, #818cf8, #a78bfa" }, // indigo → violet
  { hex: "#60a5fa", gradient: "135deg, #60a5fa, #818cf8" }, // blue → indigo
  { hex: "#2dd4bf", gradient: "135deg, #2dd4bf, #34d399" }, // teal → emerald
  { hex: "#fb923c", gradient: "135deg, #fb923c, #f59e0b" }, // orange → amber
];

const getColor = (id: number) => COLORS[id % COLORS.length];

const rgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
};

function ExperienceCard({ exp }: { exp: (typeof experiences)[0] }) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const { hex, gradient } = getColor(exp.id);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      className="relative group cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Cursor spotlight */}
      {hovered && (
        <div
          className="absolute pointer-events-none rounded-2xl z-0"
          style={{
            width: 340,
            height: 340,
            left: mousePos.x - 170,
            top: mousePos.y - 170,
            background: `radial-gradient(circle, ${rgba(hex, 0.18)} 0%, transparent 70%)`,
            filter: "blur(20px)",
          }}
        />
      )}

      {/* Glow border ring */}
      <div
        className="absolute -inset-px rounded-2xl z-0 transition-opacity duration-500"
        style={{
          background: `linear-gradient(${gradient})`,
          opacity: hovered ? 0.28 : 0,
          filter: "blur(1px)",
        }}
      />

      {/* Card */}
      <div
        className="relative z-10 rounded-2xl overflow-hidden border transition-all duration-500"
        style={{
          background: "var(--surface)",
          borderColor: hovered ? rgba(hex, 0.5) : "rgba(255,255,255,0.07)",
          boxShadow: hovered
            ? `0 20px 60px -10px ${rgba(hex, 0.3)}, 0 0 0 1px ${rgba(hex, 0.2)}, inset 0 1px 0 rgba(255,255,255,0.05)`
            : "0 2px 20px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.03)",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
        }}
      >
        {/* Gradient bar + shimmer */}
        <div className="relative h-0.75 w-full overflow-hidden">
          <div
            className="absolute inset-0 origin-left transition-transform duration-700 ease-out"
            style={{
              background: `linear-gradient(${gradient})`,
              transform: hovered ? "scaleX(1)" : "scaleX(0.4)",
            }}
          />
          <div
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent transition-transform duration-700"
            style={{
              transform: hovered ? "translateX(400%)" : "translateX(-400%)",
            }}
          />
        </div>

        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-5 gap-3">
            <div className="flex items-center gap-4">
              <div className="relative shrink-0">
                <div
                  className="absolute -inset-1.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: rgba(hex, 0.15), filter: "blur(8px)" }}
                />
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={48}
                  height={48}
                  className="relative rounded-lg object-cover"
                />
              </div>

              <div>
                <p
                  className="font-bold text-base leading-tight mb-1 transition-colors duration-300"
                  style={{
                    color: hovered ? hex : "var(--foreground)",
                  }}
                >
                  {exp.role}
                </p>
                <p className="text-muted-foreground text-[13px]">
                  {exp.company}
                </p>
              </div>
            </div>

            <span
              className="text-[10px] shrink-0 font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border transition-all duration-300"
              style={{
                color: hex,
                borderColor: rgba(hex, 0.3),
                background: rgba(hex, 0.1),
                boxShadow: hovered ? `0 0 14px ${rgba(hex, 0.4)}` : "none",
              }}
            >
              {exp.type}
            </span>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 mb-4">
            {[
              { Icon: Calendar, label: exp.period },
              { Icon: MapPin, label: exp.location },
            ].map(({ Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-1.5 text-[11px] font-mono text-sub-text/50 hover:text-sub-text transition-colors"
              >
                <Icon className="w-3 h-3" />
                {label}
              </span>
            ))}
          </div>

          {/* Description */}
          <div
            className="mb-5 px-3.5 py-2.5 rounded-xl text-[12px] italic leading-relaxed border-l-2 text-muted-foreground"
            style={{
              background: rgba(hex, 0.06),
              borderLeftColor: rgba(hex, 0.65),
            }}
          >
            {exp.description}
          </div>

          {/* Highlights */}
          <ul className="space-y-3 mb-5">
            {exp.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3 group/item">
                <div
                  className="mt-0.5 shrink-0 w-5 h-5 rounded-md flex items-center justify-center border transition-all duration-300 group-hover/item:scale-110"
                  style={{
                    background: rgba(hex, 0.1),
                    borderColor: rgba(hex, 0.25),
                  }}
                >
                  <ChevronRight
                    className="w-3 h-3 transition-transform duration-200 group-hover/item:translate-x-0.5"
                    style={{ color: hex }}
                  />
                </div>
                <span className="text-[13px] leading-relaxed text-sub-text/60 group-hover/item:text-foreground transition-colors duration-200">
                  {h}
                </span>
              </li>
            ))}
          </ul>

          {/* Skills */}
          <div
            className="pt-4 border-t flex flex-wrap gap-2"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            {exp.skills.map((s) => (
              <span
                key={s}
                className="text-[10px] font-mono px-2.5 py-1.5 rounded-lg border hover:scale-105 transition-all duration-300 cursor-default"
                style={{
                  color: hex,
                  borderColor: rgba(hex, 0.25),
                  background: rgba(hex, 0.08),
                  boxShadow: hovered ? `0 0 10px ${rgba(hex, 0.2)}` : "none",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  return (
    <section
      id="work"
      className="relative bg-background overflow-hidden pt-4 pb-8"
    >
      <div className="relative">
        {/* Center line — desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-px">
          <div
            className="w-px h-full"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, var(--border) 20%, var(--primary) 50%, var(--border) 80%, transparent 100%)",
              opacity: 0.2,
            }}
          />
        </div>

        {/* Left line — mobile */}
        <div
          className="md:hidden absolute left-1.75 top-0 bottom-0 w-px"
          style={{ background: "var(--border)", opacity: 0.15 }}
        />

        <div className="space-y-16">
          {[...experiences].reverse().map((exp, index) => {
            const isEven = index % 2 === 0;
            const { hex, gradient } = getColor(exp.id);
            return (
              <div
                key={exp.id}
                className={cn(
                  "relative flex items-start",
                  isEven ? "md:flex-row" : "md:flex-row-reverse",
                )}
                data-aos={isEven ? "fade-right" : "fade-left"}
                data-aos-delay={index * 120}
              >
                {/* Center dot + year — desktop */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-20 top-6">
                  <div className="relative">
                    <div
                      className="absolute -inset-2 rounded-full animate-ping opacity-20"
                      style={{ background: hex }}
                    />
                    <div
                      className="relative w-5 h-5 rounded-full border-2 z-10"
                      style={{
                        background: `linear-gradient(${gradient})`,
                        borderColor: "var(--background)",
                        boxShadow: `0 0 16px ${rgba(hex, 0.7)}, 0 0 32px ${rgba(hex, 0.3)}`,
                      }}
                    />
                  </div>
                  <div
                    className="px-3 py-1 rounded-full border text-[10px] font-mono font-semibold"
                    style={{
                      color: hex,
                      borderColor: rgba(hex, 0.3),
                      background: rgba(hex, 0.1),
                    }}
                  >
                    {exp.year}
                  </div>
                </div>

                {/* Mobile dot */}
                <div
                  className="md:hidden absolute left-0 top-7 w-3.5 h-3.5 rounded-full border-2 z-10 shrink-0"
                  style={{
                    background: `linear-gradient(${gradient})`,
                    borderColor: "var(--background)",
                    boxShadow: `0 0 10px ${rgba(hex, 0.6)}`,
                  }}
                />

                <div className="hidden md:block w-1/2" />

                <div className="pl-8 md:pl-0 w-full md:w-1/2">
                  <ExperienceCard exp={exp} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
