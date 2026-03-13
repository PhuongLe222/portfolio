import React, { useEffect, memo } from "react";
import { FileText, Code, ArrowUpRight, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SectionHeader } from "./section-header";
import Image from "next/image";
import { statsData } from "@/lib/constants";
import Link from "next/link";
import { Button, CTAButton } from "@/components/ui";

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
      {/* Gradient backgrounds - desktop only */}
      <div className="absolute -inset-6 opacity-25 z-0 hidden sm:block">
        <div className="absolute inset-0 bg-linear-to-r from-primary via-primary-active to-primary-hover rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-linear-to-l from-gradient-fuchsia via-gradient-rose to-gradient-pink rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-linear-to-t from-gradient-blue via-gradient-cyan to-gradient-teal rounded-full blur-2xl animate-float opacity-50" />
      </div>

      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-foreground/10 rounded-full z-20 transition-all duration-700 group-hover:border-foreground/40 group-hover:scale-105" />

          {/* Overlay effects - desktop only */}
          <div className="absolute inset-0 bg-linear-to-t from-gradient-purple-light via-transparent to-gradient-blue-light z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />

          <Image
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="Lê Thị Kim Phượng - Front-End Developer"
            width={320}
            height={320}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            priority
            quality={90}
          />

          {/* Advanced hover effects - desktop only */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-foreground/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 bg-linear-to-bl from-transparent via-foreground/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
            <div className="absolute inset-0 rounded-full border-8 border-foreground/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </div>
  </div>
));

ProfileImage.displayName = "ProfileImage";

const SummaryCard = memo(
  ({
    icon: Icon,
    value,
    label,
    description,
    animation,
  }: {
    icon: React.ComponentType<{ className?: string }>;
    value: number | string;
    label: string;
    description: React.ReactNode;
    animation: string;
  }) => (
    <div
      data-aos={animation}
      data-aos-duration={1300}
      className="relative group"
    >
      <div className="relative z-10 bg-background/70 backdrop-blur-lg rounded-2xl p-6 border border-accent/30 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
        <div
          className={`absolute -z-10 inset-0 bg-linear-to-br from-primary to-primary-active opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
        ></div>

        <div className="flex items-center justify-between mb-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-foreground/10 transition-transform group-hover:rotate-6">
            <Icon className="w-8 h-8" />
          </div>
          <span
            className="text-4xl font-bold"
            data-aos="fade-up-left"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom"
          >
            {value}
          </span>
        </div>

        <div>
          <p
            className="text-sm uppercase tracking-wider text-sub-text mb-2"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-anchor-placement="top-bottom"
          >
            {label}
          </p>
          <div className="flex items-center justify-between">
            <p
              className="text-xs text-sub-text flex-1"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
            >
              {description}
            </p>
            <ArrowUpRight className="w-4 h-4 text-sub-text/50 group-hover:text-sub-text transition-colors" />
          </div>
        </div>
      </div>
    </div>
  ),
);
SummaryCard.displayName = "SummaryCard";

export const About = () => {
  // Optimized AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false,
      });
    };

    initAOS();

    // Debounced resize handler
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div className="px-[5%] lg:px-[10%] lg:py-[5%]" id="about">
      <SectionHeader
        title="About Me"
        description={
          <>
            <Sparkles className="w-5 h-5 text-primary" />
            Transforming ideas into digital experiences
            <Sparkles className="w-5 h-5 text-primary" />{" "}
          </>
        }
      />

      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-muted">
                Hello, I&apos;m
              </span>
              <span
                className="block mt-2 text-sub-text"
                data-aos="fade-right"
                data-aos-duration="1300"
              >
                Lê Thị Kim Phượng
              </span>
            </h2>

            <p
              className="text-base sm:text-lg lg:text-xl text-sub-text leading-relaxed text-justify pb-4 sm:pb-0"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              An E-commerce graduate from the University of Information
              Technology with a strong passion for Front-End development. I
              specialize in building responsive and user-centered web
              applications using React, Next.js, and Tailwind CSS. I focus on
              creating clean, scalable, and high-performance digital experiences
              while continuously improving my technical skills through
              real-world projects.
            </p>

            {/* Quote Section */}
            <div
              className="relative bg-linear-to-br from-primary/5 via-transparent to-primary-muted/5 border border-linear-to-r border-primary/30 rounded-2xl p-4 my-6 backdrop-blur-md shadow-2xl overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1700"
            >
              {/* Floating orbs background */}
              <div className="absolute top-2 right-4 w-16 h-16 bg-linear-to-r from-primary/20 to-primary-muted/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-2 w-12 h-12 bg-linear-to-r from-primary-muted/20 to-primary/20 rounded-full blur-lg"></div>

              {/* Quote icon */}
              <div className="absolute top-3 left-4 text-primary/30 opacity-30">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="var(--primary)"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              <blockquote className="text-sub-text text-center lg:text-left italic font-medium text-sm relative z-10 pl-6">
                &quot;Leveraging AI as a professional tool, not a
                replacement.&quot;
              </blockquote>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
              <Link href="#" className="w-full lg:w-auto">
                <Button
                  data-aos="fade-up"
                  data-aos-duration="800"
                  size="lg"
                  className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-linear-to-r from-primary to-primary-muted text-foreground font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl "
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
                </Button>
              </Link>
              <div data-aos="fade-up" data-aos-duration="1000">
                <CTAButton
                  variant="outline"
                  href="/#work"
                  className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 h-12 px-6 has-[>svg]:px-4 rounded-lg border border-primary/50 text-primary font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-primary/10 "
                >
                  <Code className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects
                </CTAButton>
              </div>
            </div>
          </div>

          <ProfileImage />
        </div>

        <Link href="#work-experience">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
            {statsData.map((stat) => (
              <SummaryCard key={stat.label} {...stat} />
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
};
