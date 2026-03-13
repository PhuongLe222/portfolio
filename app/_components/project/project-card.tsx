import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";

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

interface CardProjectProps {
  Img: string;
  Title: string;
  Description: string;
  Link?: string;
  id?: string | number;
  onDetailsClick?: (project: Project) => void;
  projectData?: Project;
}

const CardProject = ({
  Img,
  Title,
  Description,
  Link: ProjectLink,
  id,
  onDetailsClick,
  projectData,
}: CardProjectProps) => {
  const handleLiveDemo = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (!ProjectLink) {
      console.log("ProjectLink kosong");
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };

  const handleDetails = () => {
    if (!id || !onDetailsClick || !projectData) {
      console.log("ID kosong atau onDetailsClick tidak tersedia");
      alert("Project details are not available");
      return;
    }
    onDetailsClick(projectData);
  };

  return (
    <div className="group relative w-full">
      <div className="absolute inset-0 rounded-xl bg-linear-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

      <div className="relative overflow-hidden rounded-xl bg-linear-to-br from-background/80 to-surface backdrop-blur-lg border border-foreground/20 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
        <div className="relative p-5 z-10">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={Img}
              alt={Title}
              width={600}
              height={200}
              className="w-full h-full object-cover aspect-16/8 transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="mt-4 space-y-3">
            <h3 className="text-xl font-semibold bg-linear-to-r from-primary via-primary-active to-primary-hover bg-clip-text text-transparent">
              {Title}
            </h3>

            <p className="text-sub-text/60 text-sm leading-relaxed line-clamp-2">
              {Description}
            </p>

            <div className="pt-4 flex items-center justify-between">
              {id ? (
                <Button
                  onClick={handleDetails}
                  variant="outline"
                  className="bg-transparent"
                >
                  <span className="text-sm font-medium">Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <span className="text-sub-text/60 text-sm">
                  Details Not Available
                </span>
              )}
              {ProjectLink && (
                <Link
                  href={ProjectLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors duration-200"
                >
                  <span className="text-sm font-medium">Live Site</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>

          <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
