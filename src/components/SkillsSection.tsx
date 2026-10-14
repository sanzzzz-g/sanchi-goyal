import { useState } from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { Search, Sparkles, Check } from 'lucide-react';

export function SkillsSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGroups = SKILL_GROUPS.map((group) => ({
    ...group,
    skills: group.skills.filter((skill) =>
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((group) => group.skills.length > 0);

  return (
    <section id="skills" className="py-24 px-6 border-t border-[#EAE7F0] bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#7A6EC2] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DCD6FF]" />
              <span>TECHNICAL CAPABILITIES · VERIFIED STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#29283A]">
              Skills & Engineering Toolkit.
            </h2>
            <p className="text-base text-[#777487] leading-relaxed">
              Curated programming languages, frameworks, system fundamentals, and operational tools verified through hands-on project implementations.
            </p>
          </div>

          {/* Interactive Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#777487]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search e.g. React, Docker, SQL..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#EAE7F0] rounded-2xl text-xs text-[#29283A] placeholder-[#777487] focus:outline-none focus:border-[#DCD6FF] shadow-soft"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#777487] hover:text-[#29283A]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* 6 Grouped Cards with Pastel Chips */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => (
            <div
              key={group.category}
              className="p-7 rounded-3xl bg-white border border-[#EAE7F0] hover:border-[#DCD6FF] hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#EAE7F0] pb-3">
                  <h3 className="text-base font-bold text-[#29283A] group-hover:text-[#5A4CB5] transition-colors">
                    {group.category}
                  </h3>
                  <span className="text-xs font-mono text-[#777487]">
                    {group.skills.length}
                  </span>
                </div>

                {/* Elegant Interactive Chips */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-xs font-medium text-[#29283A] bg-[#FAF9F6] hover:bg-[#DCD6FF]/40 border border-[#EAE7F0] hover:border-[#DCD6FF] transition-all cursor-default shadow-xs flex items-center gap-1.5"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: group.accent }}
                      />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#EAE7F0] flex items-center justify-between text-[11px] font-mono text-[#777487]">
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-[#10B981]" />
                  <span>Applied in active code</span>
                </span>
                <span className="text-[#5A4CB5]">✦</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
