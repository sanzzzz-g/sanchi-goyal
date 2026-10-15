import { useState, useEffect } from 'react';
import { PERSONAL_INFO, FEATURED_PROJECTS, EXPERIENCE_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { X, Printer, Download, Copy, Check, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = async () => {
    const md = `# ${PERSONAL_INFO.name}
${PERSONAL_INFO.eyebrow}
Email: ${PERSONAL_INFO.email} | GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin} | LeetCode: ${PERSONAL_INFO.leetcode}
Location: ${PERSONAL_INFO.location}

## EDUCATION
**${EDUCATION_DATA.institution}**
${EDUCATION_DATA.degree} (${EDUCATION_DATA.duration})
CGPA: ${EDUCATION_DATA.cgpa}
Relevant Coursework: ${EDUCATION_DATA.coursework.join(', ')}

## EXPERIENCE
**${EXPERIENCE_DATA.organization}** — ${EXPERIENCE_DATA.role}
${EXPERIENCE_DATA.period} | ${EXPERIENCE_DATA.department}
- ${EXPERIENCE_DATA.performedWork.join('\n- ')}

## SELECTED PROJECTS
${FEATURED_PROJECTS.map(
  (p) => `### ${p.title} (${p.category})
${p.description}
Technologies: ${p.technologies.join(', ')}
Live Demo: ${p.liveDemoUrl} | Source: ${p.repoUrl}`
).join('\n\n')}

## CERTIFICATIONS
${CERTIFICATIONS_DATA.map((c) => `- ${c.title} (${c.issuer})`).join('\n')}
`;

    try {
      await navigator.clipboard.writeText(md);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white border border-[#EAE7F0] rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with actions */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#FAF9F6] border-b border-[#EAE7F0] shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono text-[#777487]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DCD6FF]" />
            <span className="font-semibold text-[#29283A]">RESUME // SANCHI_GOYAL.PDF</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#29283A] bg-white hover:bg-[#FAF9F6] border border-[#EAE7F0] rounded-full transition-colors"
              title="Copy as Markdown"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  <span className="text-[#10B981]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#7A6EC2]" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <a
              href="/resume.pdf"
              download="Sanchi_Goyal_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#29283A] bg-white hover:bg-[#FAF9F6] border border-[#EAE7F0] rounded-full transition-colors"
              title="Download PDF File"
            >
              <Download className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#29283A] bg-[#DCD6FF] hover:bg-[#CEC5FF] rounded-full transition-all shadow-soft"
              title="Print Document"
            >
              <Printer className="w-3.5 h-3.5 text-[#5A4CB5]" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[#777487] hover:text-[#29283A] rounded-full hover:bg-black/5 transition-colors ml-1"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document */}
        <div className="flex-1 overflow-y-auto p-8 sm:p-12 bg-white" id="printable-resume">
          <div className="max-w-3xl mx-auto space-y-8 text-[#29283A] font-sans">
            {/* Header */}
            <div className="border-b border-[#EAE7F0] pb-6 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h1 className="text-3xl font-extrabold tracking-tight text-[#29283A]">
                  {PERSONAL_INFO.name}
                </h1>
                <span className="text-xs font-mono text-[#5A4CB5] font-semibold">
                  {PERSONAL_INFO.location}
                </span>
              </div>

              <p className="text-sm font-medium text-[#7A6EC2]">
                {PERSONAL_INFO.eyebrow}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#777487] pt-1">
                <span>Email: {PERSONAL_INFO.email}</span>
                <span aria-hidden="true" className="text-[#D8D4E5]">·</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-[#5A4CB5] underline">
                  GitHub
                </a>
                <span aria-hidden="true" className="text-[#D8D4E5]">·</span>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#5A4CB5] underline">
                  LinkedIn
                </a>
                <span aria-hidden="true" className="text-[#D8D4E5]">·</span>
                <a href={PERSONAL_INFO.leetcode} target="_blank" rel="noreferrer" className="hover:text-[#D97706] underline">
                  LeetCode (109+ Solved)
                </a>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold tracking-widest text-[#5A4CB5] uppercase">
                EDUCATION
              </h2>
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-sm">
                  <span className="font-bold text-[#29283A]">
                    {EDUCATION_DATA.institution}
                  </span>
                  <span className="text-xs font-mono text-[#777487]">
                    {EDUCATION_DATA.duration}
                  </span>
                </div>
                <div className="text-xs text-[#7A6EC2] font-semibold">
                  {EDUCATION_DATA.degree} · CGPA: {EDUCATION_DATA.cgpa}
                </div>
                <p className="text-xs text-[#777487] pt-1">
                  <strong>Coursework:</strong> {EDUCATION_DATA.coursework.join(', ')}.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold tracking-widest text-[#5A4CB5] uppercase">
                EXPERIENCE
              </h2>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-sm">
                  <span className="font-bold text-[#29283A]">
                    {EXPERIENCE_DATA.role} — {EXPERIENCE_DATA.organization}
                  </span>
                  <span className="text-xs font-mono text-[#777487]">
                    {EXPERIENCE_DATA.period}
                  </span>
                </div>
                <div className="text-xs font-medium text-[#777487]">
                  {EXPERIENCE_DATA.type} · {EXPERIENCE_DATA.department}
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#777487] pt-1">
                  {EXPERIENCE_DATA.performedWork.map((w, i) => (
                    <li key={i}>{w}</li>
                  ))}
                  {EXPERIENCE_DATA.observedSystems.map((s, i) => (
                    <li key={`s-${i}`}>Audited: {s}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Selected Projects */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono font-bold tracking-widest text-[#5A4CB5] uppercase">
                SELECTED TECHNICAL PROJECTS
              </h2>

              <div className="space-y-3.5">
                {FEATURED_PROJECTS.map((project) => (
                  <div key={project.id} className="space-y-1 border-b border-[#EAE7F0] pb-3 last:border-none">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-[#29283A]">{project.title}</span>
                        <span className="text-xs text-[#777487]">({project.category})</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#5A4CB5]">
                        {project.technologies.slice(0, 3).join(' · ')}
                      </span>
                    </div>

                    <p className="text-xs text-[#777487] leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4 text-[11px] font-mono text-[#777487] pt-1">
                      {project.liveDemoUrl && (
                        <a href={project.liveDemoUrl} target="_blank" rel="noreferrer" className="text-[#5A4CB5] underline">
                          Live Demo
                        </a>
                      )}
                      <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-[#29283A] underline">
                        GitHub Source
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold tracking-widest text-[#5A4CB5] uppercase">
                CERTIFICATIONS & CREDENTIALS
              </h2>
              <ul className="list-disc list-inside space-y-1 text-xs text-[#777487]">
                {CERTIFICATIONS_DATA.map((c) => (
                  <li key={c.title}>
                    <strong className="text-[#29283A]">{c.title}</strong> — {c.issuer}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
