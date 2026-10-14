import { PHILOSOPHY_CARDS } from '../data/portfolioData';
import { Compass, Sparkles, Hammer, ArrowRight } from 'lucide-react';

export function CuriositySection() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Compass className="w-5 h-5 text-[#5A4CB5]" />;
      case 1:
        return <Sparkles className="w-5 h-5 text-[#2563EB]" />;
      case 2:
      default:
        return <Hammer className="w-5 h-5 text-[#DB2777]" />;
    }
  };

  return (
    <section id="philosophy" className="py-24 px-6 border-t border-[#EAE7F0] bg-[#FAF9F6] relative overflow-hidden">
      {/* Decorative floating shapes in background */}
      <div
        className="absolute top-12 right-12 w-64 h-64 rounded-full bg-[#DCD6FF]/25 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-[#F8DCE8]/25 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#EAE7F0] rounded-full text-xs font-mono tracking-wider text-[#7A6EC2] shadow-soft">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7A6EC2]" />
            <span>PERSONAL PHILOSOPHY</span>
          </div>

          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#29283A]">
              Curiosity, Compiled.
            </h2>
            <p className="text-lg sm:text-xl font-serif italic text-[#777487]">
              An ever-evolving collection of ideas, experiments, and things I love building.
            </p>
          </div>
        </div>

        {/* 3 Animated Feature Cards with Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {PHILOSOPHY_CARDS.map((card, idx) => (
            <div
              key={card.number}
              className="p-8 rounded-3xl bg-white border border-[#EAE7F0] hover:border-[#DCD6FF] hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between space-y-6 group relative"
            >
              {/* Card top bar */}
              <div className="flex items-center justify-between">
                <div
                  className="p-3 rounded-2xl border border-black/[0.04] transition-transform group-hover:scale-105"
                  style={{ backgroundColor: `${card.accent}60` }}
                >
                  {getIcon(idx)}
                </div>
                <span className="text-xs font-mono font-bold tracking-widest text-[#777487]">
                  {card.number}
                </span>
              </div>

              {/* Phase & Quote */}
              <div className="space-y-3">
                <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium text-[#29283A] bg-[#FAF9F6] border border-[#EAE7F0]">
                  {card.phase}
                </div>
                <h3 className="text-xl font-bold text-[#29283A] group-hover:text-[#5A4CB5] transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-[#777487] leading-relaxed font-normal">
                  &ldquo;{card.quote}&rdquo;
                </p>
              </div>

              {/* Bottom tag */}
              <div className="pt-4 border-t border-[#EAE7F0] flex items-center justify-between text-xs font-mono text-[#777487]">
                <span>{card.badge}</span>
                <ArrowRight className="w-4 h-4 text-[#7A6EC2] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Creative Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#DCD6FF]/20 via-[#D9EAFB]/20 to-[#F8DCE8]/20 border border-[#EAE7F0] shadow-soft text-center space-y-3 max-w-3xl mx-auto">
          <p className="text-xs font-mono tracking-widest text-[#7A6EC2] uppercase">
            THE GUIDING PRINCIPLE
          </p>
          <p className="text-lg sm:text-xl font-medium text-[#29283A] font-serif italic text-balance">
            &ldquo;Software becomes meaningful when it solves real friction in human workflows. That begins with genuine curiosity and ends with reliable execution.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
