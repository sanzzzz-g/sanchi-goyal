import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  FileText,
  Download,
  Github,
  Linkedin,
  Mail,
  Code2,
  Cpu,
  Layers,
  Database,
  Brain,
  CheckCircle2,
} from 'lucide-react';

interface AboutSectionProps {
  onOpenResume?: () => void;
}

const AREAS_OF_INTEREST = [
  {
    name: 'Full-Stack Web Development',
    icon: Code2,
    bg: 'bg-[#EDE9FE]/70',
    border: 'border-[#DDD6FE]',
    text: 'text-[#5B21B6]',
  },
  {
    name: 'Cloud Computing',
    icon: Cpu,
    bg: 'bg-[#E0F2FE]/70',
    border: 'border-[#BAE6FD]',
    text: 'text-[#0369A1]',
  },
  {
    name: 'Distributed Systems',
    icon: Layers,
    bg: 'bg-[#FCE7F3]/70',
    border: 'border-[#FBCFE8]',
    text: 'text-[#BE185D]',
  },
  {
    name: 'Data Engineering',
    icon: Database,
    bg: 'bg-[#FFEDD5]/70',
    border: 'border-[#FED7AA]',
    text: 'text-[#C2410C]',
  },
  {
    name: 'Applied ML',
    icon: Brain,
    bg: 'bg-[#DCFCE7]/70',
    border: 'border-[#BBF7D0]',
    text: 'text-[#15803D]',
  },
];

const HIGHLIGHTS = [
  { label: '20+ Git Repositories', detail: 'Active builder on GitHub' },
  { label: 'Hackathon Builder', detail: 'Practical solutions under pressure' },
  { label: 'Open-Source Contributor', detail: 'GSSoC 2026 & community tools' },
  { label: '109+ LeetCode Solved', detail: 'Consistent algorithmic practice' },
];

export function AboutSection({ onOpenResume }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 px-6 border-t border-[#EAE7F0] bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Photograph in Refined Pastel Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center order-1 lg:order-1"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:sticky lg:top-28">
              {/* Delicate ambient pastel halo behind the portrait frame */}
              <div
                className="absolute -inset-3.5 rounded-[2.5rem] bg-gradient-to-br from-[#DCD6FF]/45 via-[#F8DCE8]/40 to-[#D9EAFB]/45 blur-2xl opacity-80 -z-10"
                aria-hidden="true"
              />

              {/* Refined portrait frame */}
              <div className="relative rounded-[2rem] bg-white p-3.5 sm:p-4 border border-[#EAE7F0] transition-all duration-300 shadow-soft hover:shadow-soft-hover">
                {/* Inner portrait container preserving natural aspect ratio without cropping */}
                <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6] flex items-center justify-center border border-[#EAE7F0]/60 shadow-inner">
                  {/* Permanent Static Photograph */}
                  <img
                    src="/images/sanchi-about.jpg"
                    alt="Sanchi Goyal — About Me portrait"
                    className="w-full h-full object-contain relative z-10 select-none"
                    loading="lazy"
                  />
                </div>

                {/* Portrait Caption & Status */}
                <div className="mt-4 px-2 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-sans font-bold text-[#29283A] text-sm">
                        {PERSONAL_INFO.name}
                      </h3>
                      <p className="text-xs text-[#777487] font-medium">
                        B.Tech CSE @ VIT Chennai · 2022 – 2026
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-[#DCD6FF]/40 text-[#5A4CB5] border border-[#DCD6FF]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5A4CB5] animate-pulse" />
                      Builder
                    </span>
                  </div>

                  {/* Highlights Grid */}
                  <div className="pt-3 border-t border-[#EAE7F0] grid grid-cols-2 gap-2 text-xs">
                    {HIGHLIGHTS.map((item) => (
                      <div
                        key={item.label}
                        className="p-2 rounded-xl bg-[#FAF9F6] border border-[#EAE7F0]/80"
                      >
                        <div className="font-semibold text-[#29283A] flex items-center gap-1">
                          <span className="text-[#7A6EC2] text-[10px]">✦</span>
                          <span>{item.label}</span>
                        </div>
                        <p className="text-[10px] text-[#777487] mt-0.5 truncate">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Introduction & Detailed Profile */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8 order-2 lg:order-2"
          >
            {/* Section Eyebrow */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#7A6EC2] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DCD6FF]" />
                <span>About Me · The Person Behind the Code</span>
              </div>

              {/* Exact User Requested Heading */}
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#29283A] text-balance">
                A little about the person behind the projects.
              </h2>
            </div>

            {/* Exact User Requested Introduction */}
            <div className="p-6 rounded-3xl bg-white border border-[#EAE7F0] shadow-soft space-y-4">
              <p className="text-base sm:text-lg text-[#3E3C4E] leading-relaxed font-normal">
                I'm Sanchi Goyal, a Computer Science and Engineering student at VIT Chennai who enjoys turning curiosity into meaningful software. I love exploring new technologies, building practical applications, and solving real-world problems through thoughtful engineering. From full-stack projects to data-driven systems, I learn by doing and continually seek out challenges that push my technical and creative boundaries.
              </p>
            </div>

            {/* Academic Journey Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#EAE7F0] shadow-soft space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#EDE9FE] border border-[#DDD6FE] text-[#5B21B6] shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#7A6EC2] uppercase">
                    <span>Degree & Academic Focus</span>
                    <span>·</span>
                    <span className="font-semibold text-[#29283A]">2022 – 2026</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#29283A]">
                    Pursuing B.Tech in CSE at VIT Chennai
                  </h3>
                  <p className="text-sm text-[#777487] leading-relaxed">
                    Vellore Institute of Technology (VIT), Chennai. Maintaining an 8.74 CGPA with strong academic grounding in Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Computer Networks, and Operating Systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Areas of Interest */}
            <div className="p-6 rounded-3xl bg-white border border-[#EAE7F0] shadow-soft space-y-3.5">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#7A6EC2]">
                  Areas of Interest & Technical Focus
                </h3>
                <span className="text-xs font-mono text-[#777487]">5 Core Domains</span>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-1">
                {AREAS_OF_INTEREST.map((area) => {
                  const Icon = area.icon;
                  return (
                    <div
                      key={area.name}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 hover:-translate-y-0.5 ${area.bg} ${area.border} ${area.text}`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{area.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Personal Note / Outside Tech */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-white via-white to-[#F8DCE8]/20 border border-[#EAE7F0] shadow-soft space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#7A6EC2] tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#DB2777]" />
                <span>Beyond the Terminal · Community & Problem Solving</span>
              </div>
              <p className="text-sm text-[#777487] leading-relaxed">
                Outside of architecting systems and writing code, I actively participate in tech communities, hackathons, and open-source initiatives. I enjoy breaking down complex mathematical and algorithmic puzzles, mentoring peers, and discovering how thoughtful software engineering can solve tangible everyday challenges.
              </p>
            </div>

            {/* Interactive Actions & Social Profiles */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              {/* Resume Buttons */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#29283A] bg-[#DCD6FF] hover:bg-[#CEC5FF] rounded-full transition-all shadow-soft active:scale-[0.98]"
                >
                  <FileText className="w-4 h-4 text-[#5A4CB5]" />
                  <span>View Resume</span>
                </button>

                <a
                  href={PERSONAL_INFO.resumePath}
                  download="Sanchi_Goyal_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#555268] bg-white hover:bg-[#FAF9F6] border border-[#EAE7F0] hover:border-[#DCD6FF] rounded-full transition-all shadow-soft"
                >
                  <Download className="w-3.5 h-3.5 text-[#777487]" />
                  <span>Download CV</span>
                </a>
              </div>

              {/* Social / Profile Links */}
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub Profile"
                  className="p-2.5 rounded-full bg-white border border-[#EAE7F0] hover:border-[#DCD6FF] hover:bg-[#FAF9F6] text-[#29283A] hover:text-[#5A4CB5] transition-all shadow-soft"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn Profile"
                  className="p-2.5 rounded-full bg-white border border-[#EAE7F0] hover:border-[#DCD6FF] hover:bg-[#FAF9F6] text-[#29283A] hover:text-[#2563EB] transition-all shadow-soft"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  title="Email Sanchi"
                  className="p-2.5 rounded-full bg-white border border-[#EAE7F0] hover:border-[#DCD6FF] hover:bg-[#FAF9F6] text-[#29283A] hover:text-[#DB2777] transition-all shadow-soft"
                >
                  <Mail className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  title="LeetCode Profile"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white border border-[#EAE7F0] hover:border-[#DCD6FF] hover:bg-[#FAF9F6] text-xs font-mono font-medium text-[#29283A] hover:text-[#D97706] transition-all shadow-soft"
                >
                  <span>LeetCode</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#777487]" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
