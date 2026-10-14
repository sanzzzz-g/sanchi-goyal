import { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Github, Linkedin, Code2, Copy, Check, Send, Sparkles, MapPin } from 'lucide-react';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMsg('Please provide your name, email address, and a message.');
      return;
    }

    setIsSubmitting(true);

    const subjectEncoded = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name} via Portfolio`
    );
    const bodyEncoded = encodeURIComponent(
      `Hi Sanchi,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMsg('Opening your email client with your message drafted...');
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    }, 600);
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-[#EAE7F0] bg-[#FAF9F6] relative overflow-hidden">
      {/* Delicate ambient glow */}
      <div
        className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-[#DCD6FF]/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-1/4 w-72 h-72 rounded-full bg-[#F8DCE8]/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#7A6EC2] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DCD6FF]" />
            <span>LET&apos;S CONNECT · DIRECT OUTREACH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#29283A]">
            Have an idea? Let&apos;s make it real.
          </h2>

          <p className="text-base sm:text-lg text-[#777487] leading-relaxed">
            I&apos;m always excited to explore interesting problems, build meaningful software, and connect with people who love creating things.
          </p>
        </div>

        {/* 2-Column Split: Direct Contact & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-[#EAE7F0] shadow-soft space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-mono text-[#777487] uppercase tracking-wider">
                  DIRECT EMAIL ADDRESS
                </div>
                <div className="flex items-center justify-between gap-3 p-3.5 bg-[#FAF9F6] border border-[#EAE7F0] rounded-2xl">
                  <span className="font-mono text-xs sm:text-sm text-[#29283A] select-all truncate">
                    {PERSONAL_INFO.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-[#777487] hover:text-[#5A4CB5] transition-colors rounded-lg shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-[#10B981]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copied && (
                  <p className="text-xs font-mono text-[#10B981]">
                    ✓ Email address copied to clipboard!
                  </p>
                )}
              </div>

              <div className="space-y-3 pt-3 border-t border-[#EAE7F0] text-xs text-[#777487]">
                <div className="flex items-center gap-2.5 text-[#29283A]">
                  <MapPin className="w-4 h-4 text-[#7A6EC2]" />
                  <span>Located in India · Open to Remote & On-site Opportunities</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#7A6EC2]" />
                  <span>Typical response within 24 hours</span>
                </div>
              </div>

              {/* Profiles strip */}
              <div className="space-y-2 pt-3 border-t border-[#EAE7F0]">
                <div className="text-xs font-mono text-[#777487] uppercase tracking-wider">
                  CONNECT ON PLATFORMS
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-2xl bg-[#FAF9F6] hover:bg-white border border-[#EAE7F0] hover:border-[#DCD6FF] transition-all text-center flex flex-col items-center gap-1 text-[#29283A] text-xs font-medium"
                  >
                    <Github className="w-4 h-4 text-[#777487]" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-2xl bg-[#FAF9F6] hover:bg-white border border-[#EAE7F0] hover:border-[#DCD6FF] transition-all text-center flex flex-col items-center gap-1 text-[#29283A] text-xs font-medium"
                  >
                    <Linkedin className="w-4 h-4 text-[#777487]" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-2xl bg-[#FAF9F6] hover:bg-white border border-[#EAE7F0] hover:border-[#DCD6FF] transition-all text-center flex flex-col items-center gap-1 text-[#29283A] text-xs font-medium"
                  >
                    <Code2 className="w-4 h-4 text-[#D97706]" />
                    <span>LeetCode</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Email Trigger Card */}
            <div className="p-6 rounded-3xl bg-[#DCD6FF]/25 border border-[#DCD6FF] flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <div className="text-xs font-mono text-[#5A4CB5] font-bold">PREFER DIRECT MAIL?</div>
                <p className="text-xs text-[#29283A]">Click to open default mail client</p>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-4 py-2 text-xs font-semibold text-[#29283A] bg-white hover:bg-[#FAF9F6] rounded-full transition-all shadow-soft shrink-0"
              >
                Send Mail →
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE7F0] shadow-soft space-y-4"
            >
              <h3 className="text-xl font-bold text-[#29283A]">
                Send a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-[#777487]">
                    YOUR NAME *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Sharma"
                    className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#EAE7F0] rounded-2xl text-xs text-[#29283A] placeholder-[#777487] focus:outline-none focus:border-[#DCD6FF] transition-all font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-[#777487]">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#EAE7F0] rounded-2xl text-xs text-[#29283A] placeholder-[#777487] focus:outline-none focus:border-[#DCD6FF] transition-all font-sans"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-mono text-[#777487]">
                  SUBJECT
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Internship Opportunity / Open-Source Collaboration"
                  className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#EAE7F0] rounded-2xl text-xs text-[#29283A] placeholder-[#777487] focus:outline-none focus:border-[#DCD6FF] transition-all font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono text-[#777487]">
                  YOUR MESSAGE *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me what you're working on, or what problem you'd like to collaborate on..."
                  className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#EAE7F0] rounded-2xl text-xs text-[#29283A] placeholder-[#777487] focus:outline-none focus:border-[#DCD6FF] transition-all font-sans resize-none"
                />
              </div>

              {statusMsg && (
                <div className="p-3 rounded-2xl bg-[#DCD6FF]/30 border border-[#DCD6FF] text-xs font-mono text-[#5A4CB5]">
                  {statusMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-[#29283A] bg-[#DCD6FF] hover:bg-[#CEC5FF] active:scale-[0.98] rounded-full transition-all shadow-soft disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5 text-[#5A4CB5]" />
                <span>{isSubmitting ? 'Composing...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
