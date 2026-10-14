import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileText, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Projects', href: '#projects' },
    { name: 'Repositories', href: '#repositories' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#EAE7F0] py-3.5 shadow-soft'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-8">
        {/* Brand Zone */}
        <a
          href="#"
          className="text-base font-bold tracking-tight text-[#29283A] hover:text-[#7A6EC2] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#DCD6FF] border border-[#BDB4F5] group-hover:scale-110 transition-transform" />
          <span className="font-sans font-semibold tracking-tight">{PERSONAL_INFO.name}</span>
        </a>

        {/* Clean Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-[#777487]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#29283A] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#DCD6FF] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions Zone */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-[#29283A] bg-white hover:bg-[#FAF9F6] border border-[#EAE7F0] hover:border-[#DCD6FF] rounded-full transition-all shadow-soft"
          >
            <FileText className="w-3.5 h-3.5 text-[#7A6EC2]" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#29283A] bg-[#DCD6FF] hover:bg-[#CEC5FF] active:scale-[0.98] rounded-full transition-all shadow-soft whitespace-nowrap"
          >
            <Sparkles className="w-3 h-3 text-[#5A4CB5]" />
            <span>Let&apos;s Connect</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#777487] hover:text-[#29283A] rounded-lg hover:bg-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#EAE7F0] bg-[#FAF9F6]/98 backdrop-blur-xl px-6 py-5 space-y-4 shadow-soft">
          <div className="flex flex-col space-y-2.5 text-sm font-medium text-[#29283A]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-2 rounded-lg hover:bg-[#DCD6FF]/20 text-[#777487] hover:text-[#29283A] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#EAE7F0] flex items-center gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-[#29283A] bg-white border border-[#EAE7F0] rounded-full"
            >
              <FileText className="w-3.5 h-3.5 text-[#7A6EC2]" />
              <span>View Resume</span>
            </button>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-[#777487] hover:text-[#29283A] bg-white border border-[#EAE7F0] rounded-full"
              title="GitHub Profile"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
