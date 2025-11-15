import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Vision from './components/Vision.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Portfolio from './components/Portfolio.jsx';
import CvSection from './components/CvSection.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

import projects from './data/projects.json';
import wipProjects from './data/wip.json';

const THEME_STORAGE_KEY = 'adam-hannachi-theme';

const App = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language.split('-')[0];
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme);
      return;
    }

    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;
    root.classList.remove('dark');
    document.body.classList.remove('light');

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      document.body.classList.add('light');
    }

    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const sectionTitles = useMemo(
    () => ({
      about: t('sections.about'),
      vision: t('sections.vision'),
      skills: t('sections.skills'),
      experience: t('sections.experience'),
      portfolio: t('sections.portfolio'),
      cv: t('sections.cv'),
      contact: t('sections.contact')
    }),
    [t]
  );

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-background-dark text-white' : 'bg-background-light text-gray-900'}`}>
      <span id="top" />
      <Navbar
        sections={sectionTitles}
        onToggleTheme={toggleTheme}
        theme={theme}
      />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-16 pt-32 md:px-10">
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="vision">
          <Vision />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="portfolio">
          <Portfolio projects={projects} wipProjects={wipProjects} currentLang={currentLanguage} />
        </section>
        <section id="cv">
          <CvSection />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
