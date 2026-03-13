import {
  X,
  ExternalLink,
  Github,
  Code2,
  Star,
  Layers,
  Layout,
  Globe,
  Package,
  Cpu,
  Code,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

const TECH_ICONS = {
  React: Globe,
  Tailwind: Layout,
  Express: Cpu,
  Python: Code,
  Javascript: Code,
  HTML: Code,
  CSS: Code,
  default: Package,
};

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

interface ProjectDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const TechBadge = ({ tech }: { tech: keyof typeof TECH_ICONS }) => {
  const Icon = TECH_ICONS[tech] || TECH_ICONS["default"];
  return (
    <div className="group relative overflow-hidden px-3 py-2 bg-linear-to-r from-blue-600/10 to-purple-600/10 rounded-lg border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-default">
      <div className="absolute inset-0 bg-linear-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
      <div className="relative flex items-center gap-1.5">
        <Icon className="w-3.5 h-3.5 text-blue-400 group-hover:text-blue-300 transition-colors" />
        <span className="text-xs font-medium text-blue-300/90 group-hover:text-blue-200 transition-colors">
          {tech}
        </span>
      </div>
    </div>
  );
};

const FeatureItem = ({ feature }: { feature: string }) => {
  return (
    <li className="group flex items-start space-x-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
      <div className="relative mt-2">
        <div className="absolute -inset-1 bg-linear-to-r from-blue-600/20 to-purple-600/20 rounded-full blur group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
        <div className="relative w-1.5 h-1.5 rounded-full bg-linear-to-r from-blue-400 to-purple-400 group-hover:scale-125 transition-transform duration-300" />
      </div>
      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
        {feature}
      </span>
    </li>
  );
};

const ProjectStats = ({ project }: { project: Project }) => {
  const techStackCount = project?.TechStack?.length || 0;
  const featuresCount = project?.Features?.length || 0;

  return (
    <div className="grid grid-cols-2 gap-3 p-3 bg-background rounded-xl overflow-hidden relative">
      <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 to-purple-900/20 opacity-50 blur-2xl z-0" />
      <div className="relative z-10 flex items-center space-x-2 bg-white/5 p-2 rounded-lg border border-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-lg">
        <div className="bg-background p-1.5 rounded-full">
          <Code2 className="text-primary w-4 h-4" strokeWidth={1.5} />
        </div>
        <div className="grow">
          <div className="text-lg font-semibold text-sub-text">
            {techStackCount}
          </div>
          <div className="text-xs">Technologies</div>
        </div>
      </div>

      <div className="relative z-10 flex items-center space-x-2 bg-white/5 p-2 rounded-lg border border-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-lg">
        <div className="bg-background p-1.5 rounded-full">
          <Layers className="text-primary w-4 h-4" strokeWidth={1.5} />
        </div>
        <div className="grow">
          <div className="text-lg font-semibold text-purple-200">
            {featuresCount}
          </div>
          <div className="text-xs">Contributions</div>
        </div>
      </div>
    </div>
  );
};

const ProjectDetails = ({ isOpen, onClose, project }: ProjectDetailsProps) => {
  if (!project) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="md:max-w-5xl max-h-[90vh] bg-background border border-foreground/20 text-foreground overflow-y-auto">
        <DialogHeader className="relative">
          <DialogTitle className="text-2xl md:text-3xl font-bold bg-linear-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent pr-12">
            {project.Title}
          </DialogTitle>
        </DialogHeader>

        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="relative h-1 w-16">
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-full blur-sm" />
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-sm md:text-base text-gray-300/90 leading-relaxed">
                  {project.Description}
                </p>
              </div>

              <ProjectStats project={project} />

              <div className="flex flex-wrap gap-2 md:gap-3">
                {project.Link && (
                  <Link
                    href={project.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center space-x-1.5 px-4 py-2.5 bg-linear-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 text-blue-300 rounded-xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 backdrop-blur-xl overflow-hidden text-sm"
                  >
                    <div className="absolute inset-0 translate-y-full bg-linear-to-r from-blue-600/10 to-purple-600/10 transition-transform duration-300 group-hover:translate-y-[0%]" />
                    <ExternalLink className="relative w-4 h-4 group-hover:rotate-12 transition-transform" />
                    <span className="relative font-medium">Live Site</span>
                  </Link>
                )}

                {project.Github && (
                  <Link
                    href={project.Github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center space-x-1.5 px-4 py-2.5 bg-linear-to-r from-purple-600/10 to-pink-600/10 hover:from-purple-600/20 hover:to-pink-600/20 text-purple-300 rounded-xl transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 backdrop-blur-xl overflow-hidden text-sm"
                  >
                    <div className="absolute inset-0 translate-y-full bg-linear-to-r from-purple-600/10 to-pink-600/10 transition-transform duration-300 group-hover:translate-y-[0%]" />
                    <Github className="relative w-4 h-4 group-hover:rotate-12 transition-transform" />
                    <span className="relative font-medium">Github</span>
                  </Link>
                )}
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white/90 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-blue-400" />
                  Technologies Used
                </h3>
                {project.TechStack && project.TechStack.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {project.TechStack.map((tech, index) => (
                      <TechBadge
                        key={index}
                        tech={tech as keyof typeof TECH_ICONS}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-400 opacity-50">
                    No technologies added.
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-xl group">
                <div className="absolute inset-0 bg-linear-to-t from-[#030014] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src={project.Img}
                  alt={project.Title}
                  width={640}
                  height={360}
                  className="w-full h-48 md:h-64 object-cover transform transition-transform duration-700 will-change-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 transition-colors duration-300 rounded-xl" />
              </div>

              <div className="bg-white/2 backdrop-blur-xl rounded-xl p-6 border border-white/10 space-y-4 hover:border-white/20 transition-colors duration-300 group">
                <h3 className="text-lg font-semibold text-white/90 flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 group-hover:rotate-20 transition-transform duration-300" />
                  Key Contributions
                </h3>
                {project.Features && project.Features.length > 0 ? (
                  <ul className="list-none space-y-1">
                    {project.Features.map((feature, index) => (
                      <FeatureItem key={index} feature={feature} />
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 opacity-50">No features added.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetails;
