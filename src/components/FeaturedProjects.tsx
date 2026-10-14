import { FEATURED_PROJECTS, FeaturedProject } from '../data/portfolioData';
import { ExternalLink, Github, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface FeaturedProjectsProps {
  onSelectProject?: (project: FeaturedProject) => void;
}

export function FeaturedProjects({ onSelectProject }: FeaturedProjectsProps) {
  const getAccentBg = (accent: string) => {
    switch (accent) {
      case 'powder':
        return 'bg-[#D9EAFB]/30 border-[#D9EAFB] text-[#1E40AF]';
      case 'lavender':
        return 'bg-[#DCD6FF]/35 border-[#DCD6FF] text-[#5A4CB5]';
      case 'blush':
        return 'bg-[#F8DCE8]/35 border-[#F8DCE8] text-[#9D174D]';
      case 'peach':
      default:
        return 'bg-[#F8E3D7]/40 border-[#F8E3D7] text-[#9A3412]';
    }
  };

  return (
    <section id="projects" className="py-24 px-6 border-t border-[#EAE7F0] bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#7A6EC2] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DCD6FF]" />
              <span>SELECTED WORKS · FEATURED APPLICATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#29283A]">
              Ideas, Made Real.
            </h2>
            <p className="text-base text-[#777487] leading-relaxed">
              Real-world systems, environmental analytics platforms, and user interface engines built with clean architecture, verified live deployments, and tested code.
            </p>
          </div>

          <a
            href="#repositories"
            className="text-xs font-mono text-[#5A4CB5] hover:underline flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>Explore all GitHub repos</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Featured Projects Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <article
              key={project.id}
              className="rounded-3xl bg-white border border-[#EAE7F0] hover:border-[#DCD6FF] hover:shadow-soft-hover transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              {/* Visual Thumbnail */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#FAF9F6]">
                <img
                  src={project.imagePath}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[11px] font-mono font-medium border backdrop-blur-md shadow-sm ${getAccentBg(
                      project.accentColor
                    )}`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Tech stack */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#777487]">
                    {project.technologies.map((tech, i) => (
                      <span key={tech} className="flex items-center gap-2">
                        <span className="text-[#29283A]">{tech}</span>
                        {i < project.technologies.length - 1 && (
                          <span aria-hidden="true" className="text-[#D8D4E5]">·</span>
                        )}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-[#29283A] group-hover:text-[#5A4CB5] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#7A6EC2]">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-[#777487] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2 border-t border-[#EAE7F0]">
                    {project.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#29283A]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5A4CB5] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-5 border-t border-[#EAE7F0] flex items-center justify-between gap-4">
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#29283A] bg-[#DCD6FF] hover:bg-[#CEC5FF] rounded-full transition-all shadow-soft"
                  >
                    <span>View Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#5A4CB5]" />
                  </a>

                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#777487] hover:text-[#29283A] bg-[#FAF9F6] hover:bg-white border border-[#EAE7F0] rounded-full transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Source</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
