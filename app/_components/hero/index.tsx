import { Button, CTAButton } from "@/components/ui";
import { TypingText } from "./typing-text";
import { ExternalLink, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import Link from "next/link";
import { Computer } from "./computer";

const MainTitle = () => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-foreground/70 via-mute-foreground to-foreground/70 bg-clip-text text-transparent">
          Frontend
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-primary-active to-secondary blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
          Developer
        </span>
      </span>
    </h1>
  </div>
);

export const Hero = () => {
  return (
    <div className="min-h-screen bg-background py-2 w-full" id="Home">
      <div className="relative z-10 transition-all duration-1000">
        <div className="container mx-auto min-h-dvh">
          <div className="flex flex-col lg:flex-row items-center justify-center md:h-dvh overflow-auto no-scrollbar md:justify-between px-4 sm:px-6 lg:px-20 gap-0 sm:gap-8 lg:gap-16">
            {/* Left Column */}
            <div
              className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 lg:mt-0"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="space-y-4 sm:space-y-6">
                <p
                  className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Hello, I Am{" "}
                  <strong className="text-primary font-bold">Phuong Le</strong>{" "}
                  !
                </p>
                <MainTitle />
                <TypingText
                  words={[
                    "Tech Enthusiast",
                    "Motivated by Growth and New Challenges",
                  ]}
                />
                <p
                  className="hidden md:block text-base md:text-lg text-sub-text max-w-xl leading-relaxed font-light"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  Crafting clean, responsive, and user-focused web interfaces
                  with modern technologies.
                </p>

                {/* CTA Buttons */}
                <div
                  className="flex flex-row gap-3 w-full justify-start"
                  data-aos="fade-up"
                  data-aos-delay="1400"
                >
                  <CTAButton
                    href="#Portofolio"
                    text="Projects"
                    icon={ExternalLink}
                  />
                  <CTAButton href="#Contact" text="Contact" icon={Mail} />
                </div>

                {/* Social Links */}
                <div
                  className="hidden sm:flex gap-4 justify-start"
                  data-aos="fade-up"
                  data-aos-delay="1600"
                >
                  {SOCIAL_LINKS.map(({ link, icon: Icon }, index) => (
                    <Button
                      size="icon-xl"
                      variant="ghost"
                      asChild
                      key={index}
                      className="relative group"
                    >
                      <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                        <div className="relative rounded-xl bg-surface/50 backdrop-blur-xl p-2 flex items-center justify-center border border-foreground/10 group-hover:border-foreground/20 transition-all duration-300">
                          <Icon className="size-6 text-sub-text group-hover:text-foreground transition-colors" />
                        </div>
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <Computer />
          </div>
        </div>
      </div>
    </div>
  );
};
