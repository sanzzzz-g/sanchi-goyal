import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Code2 } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export function Footer({ onOpenResume }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#EAE7F0] bg-[#FAF9F6] py-14 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Signature line */}
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-base font-bold text-[#29283A]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#DCD6FF] border border-[#BDB4F5]" />
              <span>{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-xs font-serif italic text-[#777487]">
              “{PERSONAL_INFO.signaturePhrase} {PERSONAL_INFO.supportingPhrase}”
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-[#777487]">
            <a href="#about" className="hover:text-[#29283A] transition-colors">
              About
            </a>
            <a href="#philosophy" className="hover:text-[#29283A] transition-colors">
              Philosophy
            </a>
            <a href="#projects" className="hover:text-[#29283A] transition-colors">
              Projects
            </a>
            <a href="#repositories" className="hover:text-[#29283A] transition-colors">
              Repositories
            </a>
            <a href="#experience" className="hover:text-[#29283A] transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-[#29283A] transition-colors">
              Skills
            </a>
            <button
              onClick={onOpenResume}
              className="hover:text-[#5A4CB5] transition-colors"
            >
              Resume
            </button>
            <a href="#contact" className="hover:text-[#29283A] transition-colors">
              Contact
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-[#777487] hover:text-[#29283A] bg-white rounded-full border border-[#EAE7F0] shadow-soft transition-colors"
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-[#777487] hover:text-[#29283A] bg-white rounded-full border border-[#EAE7F0] shadow-soft transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-[#777487] hover:text-[#D97706] bg-white rounded-full border border-[#EAE7F0] shadow-soft transition-colors"
              title="LeetCode"
              aria-label="LeetCode Profile"
            >
              <Code2 className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#29283A] bg-white hover:bg-[#FAF9F6] border border-[#EAE7F0] rounded-full shadow-soft transition-colors ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#7A6EC2]" />
              <span>Top</span>
            </button>
          </div>
        </div>

        {/* Dynamic year and copyright note */}
        <div className="pt-6 border-t border-[#EAE7F0] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#777487] gap-2">
          <div>
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div>
            Designed with warm ivory, dreamy pastels & clean code.
          </div>
        </div>
      </div>
    </footer>
  );
}
