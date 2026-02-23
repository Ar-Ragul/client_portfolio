
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { SelectedWorks } from './components/SelectedWorks';
import { Travel } from './components/Travel';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { PlanningAssistant } from './components/PlanningAssistant';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ExperienceArchive } from './components/ExperienceArchive';
import { TourShowcase } from './components/TourShowcase';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isPlanningOpen, setIsPlanningOpen] = useState(false);
  const [planningDefaults, setPlanningDefaults] = useState<{ category?: string; vision?: string }>({});
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedTourTitle, setSelectedTourTitle] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background color interpolation for next-gen vibe
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["#ffffff", "#f8f9fa", "#f0f2f5", "#e9ecef", "#f8f9fa", "#ffffff"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openPlanning = (category?: string, vision?: string) => {
    setPlanningDefaults({ category, vision });
    setIsPlanningOpen(true);
  };
  
  const closePlanning = () => {
    setIsPlanningOpen(false);
    setPlanningDefaults({});
  };
  
  const openProject = (id: string) => setSelectedProjectId(id);
  const closeProject = () => setSelectedProjectId(null);

  const openArchive = () => setIsArchiveOpen(true);
  const closeArchive = () => setIsArchiveOpen(false);

  const openTour = (title: string) => setSelectedTourTitle(title);
  const closeTour = () => setSelectedTourTitle(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      ref={containerRef}
      style={{ backgroundColor }}
      className="flex flex-col min-h-screen transition-colors duration-1000"
    >
      <Header isScrolled={scrolled} onOpenPlanning={() => openPlanning()} />
      <main>
        <section id="home">
          <Hero onOpenPlanning={() => openPlanning()} onViewWork={() => scrollToSection('portfolio')} />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <SelectedWorks onProjectClick={openProject} onSeeAllClick={openArchive} />
        </section>
        <section id="travel">
          <Travel 
            onViewTour={openTour}
            onPlanTour={(tour) => openPlanning('Curated Travel', `I am interested in planning the ${tour}.`)} 
          />
        </section>
        <section id="contact">
          <FinalCTA onOpenPlanning={() => openPlanning()} />
        </section>
      </main>
      <Footer />
      
      <PlanningAssistant 
        isOpen={isPlanningOpen} 
        onClose={closePlanning} 
        defaults={planningDefaults}
      />
      <ProjectShowcase projectId={selectedProjectId} onClose={closeProject} />
      <ExperienceArchive 
        isOpen={isArchiveOpen} 
        onClose={closeArchive} 
        onSelectProject={(id) => {
          closeArchive();
          openProject(id);
        }}
      />
      <TourShowcase 
        tourTitle={selectedTourTitle} 
        onClose={closeTour} 
        onPlan={(title) => {
          closeTour();
          openPlanning('Curated Travel', `I am interested in planning the ${title}.`);
        }}
      />
    </motion.div>
  );
};

export default App;
