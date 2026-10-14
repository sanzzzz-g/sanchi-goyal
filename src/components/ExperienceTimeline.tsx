import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Briefcase, CheckCircle2, ShieldCheck, Building2, Calendar, FileSpreadsheet } from 'lucide-react';

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-[#EAE7F0] bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#7A6EC2] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DCD6FF]" />
            <span>VERIFIED PROFESSIONAL EXPERIENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#29283A]">
            Engineering in Industrial & Enterprise Systems.
          </h2>

          <p className="text-base text-[#777487] leading-relaxed">
            Real-world vocational systems engineering at one of India&apos;s major public sector enterprises, balancing IT asset auditing with enterprise infrastructure analysis.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#DCD6FF] space-y-8">
          {/* Timeline Node */}
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#DCD6FF] border-2 border-white shadow-sm" />

          <div className="p-8 rounded-3xl bg-white border border-[#EAE7F0] shadow-soft space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#EAE7F0] pb-6">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-medium text-[#5A4CB5] bg-[#DCD6FF]/40 border border-[#DCD6FF]">
                    {EXPERIENCE_DATA.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#29283A]">
                  {EXPERIENCE_DATA.role}
                </h3>
                <div className="flex items-center gap-2 text-sm font-semibold text-[#7A6EC2]">
                  <Building2 className="w-4 h-4" />
                  <span>{EXPERIENCE_DATA.organization}</span>
                  <span className="text-[#D8D4E5]">·</span>
                  <span className="text-[#777487] font-normal">{EXPERIENCE_DATA.department}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-[#777487] bg-[#FAF9F6] px-3.5 py-1.5 rounded-full border border-[#EAE7F0] shrink-0 self-start">
                <Calendar className="w-3.5 h-3.5 text-[#7A6EC2]" />
                <span>{EXPERIENCE_DATA.period}</span>
              </div>
            </div>

            {/* Split Breakdown: Work Performed vs Observed Systems */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
              {/* Work Personally Performed */}
              <div className="space-y-4 p-6 rounded-2xl bg-[#D9EAFB]/20 border border-[#D9EAFB]">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1E40AF]">
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>DIRECT ENGINEERING & AUDITING WORK</span>
                </div>

                <div className="space-y-3">
                  {EXPERIENCE_DATA.performedWork.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#29283A] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Observed & Documented Systems */}
              <div className="space-y-4 p-6 rounded-2xl bg-[#DCD6FF]/20 border border-[#DCD6FF]">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#5A4CB5]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>ENTERPRISE SYSTEMS & OBSERVATIONS</span>
                </div>

                <div className="space-y-3">
                  {EXPERIENCE_DATA.observedSystems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#29283A] leading-relaxed">
                      <Briefcase className="w-4 h-4 text-[#7A6EC2] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantitative Footnote */}
            <div className="pt-4 border-t border-[#EAE7F0] flex flex-wrap items-center justify-between text-xs font-mono text-[#777487] gap-3">
              <span>Audited 1,906 PC/UPS units across 19 projects</span>
              <span>400 Procurement units assessed</span>
              <span>SAP ERP modules evaluated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
