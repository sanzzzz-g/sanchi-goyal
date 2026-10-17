import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CuriositySection } from './components/CuriositySection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { RepositoryExplorer } from './components/RepositoryExplorer';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsSection } from './components/SkillsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ResearchSection } from './components/ResearchSection';
import { CertificationsAndEducation } from './components/CertificationsAndEducation';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#29283A] selection:bg-[#DCD6FF] selection:text-[#29283A]">
      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Experience */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. About Me */}
        <AboutSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* 3. Personal Philosophy: Curiosity, Compiled. */}
        <CuriositySection />

        {/* 4. Verified Featured Projects */}
        <FeaturedProjects />

        {/* 5. Live GitHub Repository Explorer */}
        <RepositoryExplorer />

        {/* 6. Systems Engineering Internship Experience */}
        <ExperienceTimeline />

        {/* 7. Verified Technical Skills */}
        <SkillsSection />

        {/* 8. Achievements & Open Source */}
        <AchievementsSection />

        {/* 9. Research & Cloud Architecture */}
        <ResearchSection />

        {/* 10. Certifications & Academic Degree */}
        <CertificationsAndEducation />

        {/* 11. Contact Outreach */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
