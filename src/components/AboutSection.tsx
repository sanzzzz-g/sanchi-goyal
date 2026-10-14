import { PERSONAL_INFO, ABOUT_INFO_CARDS } from '../data/portfolioData';
import { GraduationCap, Code, GitPullRequest, Sparkles, ArrowUpRight } from 'lucide-react';

export function AboutSection() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <GraduationCap className="w-5 h-5 text-[#5A4CB5]" />;
      case 1:
        return <Code className="w-5 h-5 text-[#2563EB]" />;
      case 2:
        return <GitPullRequest className="w-5 h-5 text-[#DB2777]" />;
      case 3:
      default:
        return <Sparkles className="w-5 h-5 text-[#D97706]" />;
    }
  };

  return (
    <section id="about" className="py-24 px-6 border-t border-[#EAE7F0] bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#7A6EC2] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DCD6FF]" />
            <span>About Me · The Person Behind the Code</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#29283A]">
            A little about the person behind the projects.
          </h2>

          <p className="text-base sm:text-lg text-[#777487] leading-relaxed font-normal text-balance">
            {PERSONAL_INFO.aboutDetailed}
          </p>
        </div>

        {/* 4 Compact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_INFO_CARDS.map((card, idx) => (
            <div
              key={card.title}
              className="p-6 rounded-2xl bg-white border border-[#EAE7F0] hover:border-[#DCD6FF] hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div
                    className="p-2.5 rounded-xl border border-black/[0.04]"
                    style={{ backgroundColor: `${card.accent}40` }}
                  >
                    {getIcon(idx)}
                  </div>
                  <span className="text-xs font-mono text-[#777487]">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-[#29283A] group-hover:text-[#5A4CB5] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs font-medium text-[#7A6EC2]">
                    {card.detail}
                  </p>
                </div>

                <p className="text-xs text-[#777487] leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EAE7F0] text-[11px] font-mono text-[#777487] flex items-center justify-between">
                <span>Verified Foundation</span>
                <span className="text-[#5A4CB5]">✦</span>
              </div>
            </div>
          ))}
        </div>

        {/* VIT Academic Banner */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#EAE7F0] shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="text-xs font-mono uppercase text-[#7A6EC2] tracking-wider">
              ACADEMIC ENVIRONMENT
            </div>
            <h4 className="text-base sm:text-lg font-bold text-[#29283A]">
              Vellore Institute of Technology (VIT Chennai)
            </h4>
            <p className="text-xs sm:text-sm text-[#777487] max-w-2xl">
              Studying Computer Science and Engineering (August 2024 – May 2028). Building solid grounding in algorithm optimization, relational modeling, and systems thinking.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#29283A] bg-[#DCD6FF] hover:bg-[#CEC5FF] rounded-full transition-all shadow-soft whitespace-nowrap"
          >
            <span>View GitHub Repositories</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#5A4CB5]" />
          </a>
        </div>
      </div>
    </section>
  );
}
