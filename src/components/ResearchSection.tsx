import { RESEARCH_DATA } from '../data/portfolioData';
import { BookOpen, Server, Database, Activity, Eye, ArrowRight } from 'lucide-react';

export function ResearchSection() {
  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Database className="w-4 h-4 text-[#2563EB]" />;
      case 1:
        return <Server className="w-4 h-4 text-[#D97706]" />;
      case 2:
        return <Eye className="w-4 h-4 text-[#5A4CB5]" />;
      case 3:
        return <Database className="w-4 h-4 text-[#10B981]" />;
      case 4:
      default:
        return <Activity className="w-4 h-4 text-[#DB2777]" />;
    }
  };

  return (
    <section className="py-24 px-6 border-t border-[#EAE7F0] bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#7A6EC2] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DCD6FF]" />
            <span>RESEARCH INQUIRY · ARCHITECTURE DESIGN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#29283A]">
            {RESEARCH_DATA.sectionTitle}
          </h2>

          <p className="text-base text-[#777487] leading-relaxed">
            Exploring serverless architectures, event-driven compute pipelines, and computer vision integration for institutional monitoring.
          </p>
        </div>

        {/* Research Feature Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE7F0] shadow-soft space-y-8">
          <div className="space-y-3">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium text-[#7A6EC2] bg-[#DCD6FF]/40 border border-[#DCD6FF]">
              {RESEARCH_DATA.statusBadge}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#29283A]">
              {RESEARCH_DATA.title}
            </h3>

            <p className="text-sm sm:text-base text-[#777487] leading-relaxed max-w-3xl">
              {RESEARCH_DATA.summary}
            </p>
          </div>

          {/* Architecture Pipeline Flow Diagram */}
          <div className="space-y-4 pt-4 border-t border-[#EAE7F0]">
            <div className="text-xs font-mono uppercase text-[#777487] tracking-wider">
              PROPOSED SERVERLESS ARCHITECTURE PIPELINE
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {RESEARCH_DATA.architecturePipeline.map((step, idx) => (
                <div
                  key={step.step}
                  className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#EAE7F0] hover:border-[#DCD6FF] transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-xl bg-white border border-[#EAE7F0]">
                        {getStepIcon(idx)}
                      </div>
                      <span className="text-[11px] font-mono text-[#777487]">
                        0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <div className="text-xs font-mono text-[#5A4CB5] font-semibold">
                        {step.service}
                      </div>
                      <div className="text-xs font-bold text-[#29283A]">
                        {step.step.replace(/^\d+\.\s*/, '')}
                      </div>
                    </div>

                    <p className="text-[11px] text-[#777487] leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
