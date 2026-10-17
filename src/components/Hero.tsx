import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Code2, FileText, ArrowDown, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setIstTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: true,
          hour: '2-digit',
          minute: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-32 pb-16 px-6 overflow-hidden bg-mesh-pastel bg-pastel-dots">
      {/* Soft floating pastel ambient orbs */}
      <div
        className="absolute top-16 left-12 w-72 h-72 rounded-full bg-[#DCD6FF]/40 blur-3xl pointer-events-none animate-float-slow"
        aria-hidden="true"
      />
      <div
        className="absolute top-36 right-16 w-80 h-80 rounded-full bg-[#F8DCE8]/40 blur-3xl pointer-events-none animate-float-delayed"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-1/3 w-64 h-64 rounded-full bg-[#D9EAFB]/40 blur-3xl pointer-events-none animate-pulse-subtle"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Editorial Typography & Introduction */}
        <div className="lg:col-span-7 space-y-6 order-1">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur-sm border border-[#EAE7F0] rounded-full text-[11px] font-mono tracking-wider text-[#777487] shadow-soft">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7A6EC2]" />
            <span>{PERSONAL_INFO.eyebrow}</span>
          </div>

          {/* Main Heading & Signature Phrases */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#29283A]">
              {PERSONAL_INFO.signatureHeading}
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#29283A] leading-tight text-balance">
              <span className="text-[#5A4CB5] font-serif italic font-normal">
                {PERSONAL_INFO.signaturePhrase}
              </span>{' '}
              <span>{PERSONAL_INFO.supportingPhrase}</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#777487] font-normal leading-relaxed max-w-xl text-balance">
            {PERSONAL_INFO.description}
          </p>

          {/* Location & Institution strip */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#777487] pt-1">
            <div className="flex items-center gap-1.5 text-[#29283A]">
              <MapPin className="w-3.5 h-3.5 text-[#7A6EC2]" />
              <span>India ({istTime ? `${istTime} IST` : 'UTC+5:30'})</span>
            </div>
            <span aria-hidden="true" className="text-[#D8D4E5]">·</span>
            <span>{PERSONAL_INFO.institution}</span>
            <span aria-hidden="true" className="text-[#D8D4E5]">·</span>
            <span className="font-mono text-[#5A4CB5]">CGPA {PERSONAL_INFO.cgpa}</span>
          </div>

          {/* CTAs and Links */}
          <div className="pt-3 flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-[#29283A] bg-[#DCD6FF] hover:bg-[#CEC5FF] active:scale-[0.98] rounded-full transition-all shadow-soft"
            >
              Explore My Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 text-xs sm:text-sm font-medium text-[#29283A] bg-white hover:bg-[#FAF9F6] active:scale-[0.98] border border-[#EAE7F0] hover:border-[#DCD6FF] rounded-full transition-all shadow-soft"
            >
              Let&apos;s Connect
            </a>

            <button
              onClick={onOpenResume}
              className="px-4 py-3 text-xs sm:text-sm font-medium text-[#777487] hover:text-[#29283A] bg-white/60 hover:bg-white border border-[#EAE7F0] rounded-full transition-all inline-flex items-center gap-1.5 shadow-soft cursor-pointer"
              title="Open Resume"
            >
              <FileText className="w-4 h-4 text-[#7A6EC2]" />
              <span>Resume</span>
            </button>

            {/* Profile Icons */}
            <div className="flex items-center gap-1.5 pl-2 border-l border-[#EAE7F0]">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 text-[#777487] hover:text-[#29283A] hover:bg-white rounded-full transition-colors"
                title="GitHub @sanzzzz-g"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 text-[#777487] hover:text-[#29283A] hover:bg-white rounded-full transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 text-[#777487] hover:text-[#D97706] hover:bg-white rounded-full transition-colors"
                title="LeetCode Profile (109+ Solved)"
                aria-label="LeetCode Profile"
              >
                <Code2 className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Personal Portrait in Softly Rounded Pastel Frame */}
        <div className="lg:col-span-5 relative order-2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-sm sm:max-w-md"
          >
            {/* Delicate ambient pastel glow behind the portrait frame */}
            <div
              className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-[#DCD6FF]/40 via-[#F8DCE8]/30 to-[#D9EAFB]/40 blur-2xl opacity-75 -z-10"
              aria-hidden="true"
            />

            {/* Softly rounded portrait frame */}
            <div className="relative rounded-[2rem] bg-white p-3.5 sm:p-4 border border-[#EAE7F0] transition-all duration-300 shadow-soft hover:shadow-soft-hover">
              {/* Inner portrait container preserving natural aspect ratio without cropping */}
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6] flex items-center justify-center border border-[#EAE7F0]/60">
                {/* Embedded Permanent Photograph */}
                <img
                  src="/images/about-sanchi.png"
                  alt="Sanchi Goyal — Computer Science and Engineering student at VIT Chennai"
                  className="w-full h-full object-contain relative z-10 select-none"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              {/* Understated caption & badge */}
              <div className="mt-3.5 px-2 flex items-center justify-between text-xs font-mono text-[#777487]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#DCD6FF]" />
                  <span className="font-sans font-semibold text-[#29283A] text-xs">
                    Sanchi Goyal
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#7A6EC2] bg-[#DCD6FF]/35 border border-[#DCD6FF]/50 px-2.5 py-0.5 rounded-full">
                  Curiosity, Compiled.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Understated scroll indicator */}
      <div className="max-w-6xl mx-auto w-full pt-12 flex items-center justify-center">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-xs font-mono text-[#777487] hover:text-[#5A4CB5] transition-colors group"
          aria-label="Scroll to About section"
        >
          <span className="tracking-wider">SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:text-[#5A4CB5]" />
        </a>
      </div>
    </section>
  );
}
