import { CERTIFICATIONS_DATA, EDUCATION_DATA } from '../data/portfolioData';
import { Award, GraduationCap, CheckCircle2, BookOpen } from 'lucide-react';

export function CertificationsAndEducation() {
  return (
    <section className="py-24 px-6 border-t border-[#EAE7F0] bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#7A6EC2] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DCD6FF]" />
            <span>CREDENTIALS & ACADEMIC GROUNDING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#29283A]">
            Certifications & Education.
          </h2>

          <p className="text-base text-[#777487] leading-relaxed">
            Formal learning certifications in cloud compute, generative AI agents, and networking, combined with core undergraduate computer science study.
          </p>
        </div>

        {/* 2-Column Split: Certifications & Formal Degree */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Certifications (Col 7) */}
          <div className="lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-white border border-[#EAE7F0] shadow-soft space-y-5">
            <div className="flex items-center justify-between border-b border-[#EAE7F0] pb-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#5A4CB5]" />
                <h3 className="text-lg font-bold text-[#29283A]">
                  Verified Certifications
                </h3>
              </div>
              <span className="text-xs font-mono text-[#777487]">5 Credentials</span>
            </div>

            <div className="space-y-3">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.title}
                  className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#EAE7F0] hover:border-[#DCD6FF] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-[#29283A]">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-[#777487]">
                      {cert.issuer} · <span className="font-mono">{cert.category}</span>
                    </p>
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[#5A4CB5] bg-[#DCD6FF]/40 border border-[#DCD6FF] shrink-0 self-start sm:self-auto">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Formal Degree & Coursework (Col 5) */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-white border border-[#EAE7F0] shadow-soft space-y-6">
            <div className="flex items-center gap-2 border-b border-[#EAE7F0] pb-4">
              <GraduationCap className="w-5 h-5 text-[#2563EB]" />
              <h3 className="text-lg font-bold text-[#29283A]">
                Academic Degree
              </h3>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-xs font-mono text-[#5A4CB5] font-semibold">
                  {EDUCATION_DATA.duration}
                </span>
                <span className="text-xs font-mono font-bold text-[#29283A] bg-[#DCD6FF]/40 px-2 py-0.5 rounded-full">
                  CGPA: {EDUCATION_DATA.cgpa}
                </span>
              </div>

              <h4 className="text-base font-bold text-[#29283A]">
                {EDUCATION_DATA.institution}
              </h4>
              <p className="text-xs text-[#777487]">
                {EDUCATION_DATA.degree}
              </p>
            </div>

            <div className="pt-3 border-t border-[#EAE7F0] space-y-2.5">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#777487]">
                <BookOpen className="w-3.5 h-3.5 text-[#5A4CB5]" />
                <span>CORE COURSEWORK</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {EDUCATION_DATA.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 text-[11px] rounded-lg bg-[#FAF9F6] border border-[#EAE7F0] text-[#29283A] font-mono"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
