"use client";

import { useEffect, useState, useCallback } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Boxes, Building2 } from "lucide-react";
import CardProject from "./project/project-card";
import TechStackIcon from "./tech-icon";
import ProjectDetails from "./project/project-detail";
import { projects } from "./project/projectData";
import { SectionHeader } from "./section-header";
import Experience from "./experience";
import { techStacks } from "@/lib/constants";

interface Project {
  id: string | number;
  Title: string;
  Description: string;
  Img: string;
  Link: string;
  Github?: string;
  TechStack?: string[];
  Features?: string[];
}

export default function Work() {
  const [activeTab, setActiveTab] = useState("projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const handleProjectDetails = useCallback((project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  }, []);

  const handleCloseDialog = useCallback(() => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  }, []);

  return (
    <div
      className="md:px-[10%] px-[5%] w-full bg-background overflow-hidden"
      id="work"
    >
      <SectionHeader
        title="Portfolio Showcase"
        description="Explore my journey through my experiences, projects, and technical
          expertise. Each section represents a milestone in my continuous
          learning path."
      />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        {/* Tabs Navigation */}
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-linear-to-br from-violet-500/5 via-blue-500/5 to-transparent backdrop-blur-sm md:px-4">
          <div className="absolute inset-0 bg-linear-to-r from-violet-500/3 to-blue-500/3" />
          <TabsList className="relative z-10 grid w-full grid-cols-3 bg-transparent p-2 h-auto gap-2">
            <TabsTrigger
              value="projects"
              className="flex flex-col gap-2 py-4 px-6 text-slate-400 hover:text-white transition-all duration-300 data-[state=active]:bg-gradient-to-br data-[state=active]:from-violet-500/20 data-[state=active]:to-blue-500/20 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-violet-500/20 rounded-lg border border-transparent data-[state=active]:border-white/10 hover:bg-white/5 group"
            >
              <Code className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-data-[state=active]:text-violet-300" />
              <span className="hidden md:block text-sm md:text-base font-semibold">
                Projects
              </span>
            </TabsTrigger>

            <TabsTrigger
              value="experience"
              className="flex flex-col gap-2 py-4 px-6 text-slate-400 hover:text-white transition-all duration-300 data-[state=active]:bg-gradient-to-br data-[state=active]:from-violet-500/20 data-[state=active]:to-blue-500/20 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-violet-500/20 rounded-lg border border-transparent data-[state=active]:border-white/10 hover:bg-white/5 group"
            >
              <Building2 className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-data-[state=active]:text-violet-300" />
              <span className="hidden md:block text-sm md:text-base font-semibold">
                Professional Experience
              </span>
            </TabsTrigger>

            <TabsTrigger
              value="techstack"
              className="flex flex-col gap-2 py-4 px-6 text-slate-400 hover:text-white transition-all duration-300 data-[state=active]:bg-gradient-to-br data-[state=active]:from-violet-500/20 data-[state=active]:to-blue-500/20 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-violet-500/20 rounded-lg border border-transparent data-[state=active]:border-white/10 hover:bg-white/5 group"
            >
              <Boxes className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-data-[state=active]:text-violet-300" />
              <span className="hidden md:block text-sm md:text-base font-semibold">
                Tech Stack
              </span>
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Tab Contents */}
        <div className="mt-8">
          <TabsContent value="projects" className="mt-0 outline-none">
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                {projects.map((project, index) => (
                  <div
                    key={project.id || index}
                    data-aos={
                      index % 3 === 0
                        ? "fade-up-right"
                        : index % 3 === 1
                          ? "fade-up"
                          : "fade-up-left"
                    }
                    data-aos-duration={
                      index % 3 === 0
                        ? "1000"
                        : index % 3 === 1
                          ? "1200"
                          : "1000"
                    }
                  >
                    <CardProject
                      Img={project.Img}
                      Title={project.Title}
                      Description={project.Description}
                      Link={project.Link}
                      id={project.id}
                      onDetailsClick={handleProjectDetails}
                      projectData={project}
                    />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="experience" className="mt-0 outline-none">
            <Experience />
          </TabsContent>

          <TabsContent value="techstack" className="mt-0 outline-none">
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                {techStacks.map((stack, index) => (
                  <div
                    key={index}
                    data-aos={
                      index % 3 === 0
                        ? "fade-up-right"
                        : index % 3 === 1
                          ? "fade-up"
                          : "fade-up-left"
                    }
                    data-aos-duration={
                      index % 3 === 0
                        ? "1000"
                        : index % 3 === 1
                          ? "1200"
                          : "1000"
                    }
                  >
                    <TechStackIcon
                      techStackIcon={stack.icon}
                      language={stack.language}
                    />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>

      {/* Project Details Dialog */}
      <ProjectDetails
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        project={selectedProject}
      />
    </div>
  );
}
