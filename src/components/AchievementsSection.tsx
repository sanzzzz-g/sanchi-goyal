import { ACHIEVEMENTS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { Trophy, GitPullRequest, Code2, Plane, ArrowUpRight } from 'lucide-react';

export function AchievementsSection() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <GitPullRequest className="w-5 h-5 text-[#5A4CB5]" />;
      case 1:
        return <Trophy className="w-5 h-5 text-[#2563EB]" />;
      case 2:
        return <Code2 className="w-5 h-5 text-[#D97706]" />;
      case 3:
      default:
        return <Plane className="w-5 h-5 text-[#DB2777]" />;
    }
  };

  return (
    <section className="py-24 px-6 border-t border-[#EAE7F0] bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#7A6EC2] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F8DCE8]" />
            <span>COMMUNITY MILESTONES & CHALLENGES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#29283A]">
            Achievements & Open Source.
          </h2>

          <p className="text-base text-[#777487] leading-relaxed">
            Tangible milestones across collaborative open-source ecosystems, algorithmic challenge problem sets, and hackathon prototypes.
          </p>
        </div>

        {/* 4 Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS_DATA.map((item, idx) => (
            <div
              key={item.title}
              className="p-8 rounded-3xl bg-white border border-[#EAE7F0] hover:border-[#DCD6FF] hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className="p-3 rounded-2xl border border-black/[0.04]"
                    style={{ backgroundColor: `${item.accent}50` }}
                  >
                    {getIcon(idx)}
                  </div>

                  <span className="px-3 py-1 rounded-full text-[11px] font-mono text-[#29283A] bg-[#FAF9F6] border border-[#EAE7F0]">
                    {item.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#29283A] group-hover:text-[#5A4CB5] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#777487] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAE7F0] flex items-center justify-between text-xs font-mono">
                <span className="text-[#5A4CB5] font-semibold">{item.highlight}</span>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[#29283A] hover:text-[#5A4CB5] underline transition-colors"
                  >
                    <span>View Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[#777487]">✦ Verified</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
