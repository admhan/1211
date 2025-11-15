import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const resolveImageSrc = (image) => {
  if (!image) {
    return `data:image/svg+xml;utf8,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 180">
        <defs>
          <linearGradient id="card" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#312e81" />
            <stop offset="100%" stop-color="#7c3aed" />
          </linearGradient>
        </defs>
        <rect width="300" height="180" rx="24" fill="url(#card)" />
        <text x="50%" y="55%" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="26" fill="#e0e7ff" font-weight="600">Adam Hannachi</text>
        <text x="50%" y="70%" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="16" fill="#c7d2fe">Portfolio</text>
      </svg>`
    )}`;
  }

  if (/^https?:\/\//i.test(image)) {
    return image;
  }

  return `/assets/${image}`;
};

const Portfolio = ({ projects, wipProjects, currentLang }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('completed');

  const data = useMemo(() => {
    const mapProject = (project) => ({
      ...project,
      imageSrc: resolveImageSrc(project.image),
      content: project.translations[currentLang] || project.translations.fr
    });

    return {
      completed: projects.map(mapProject),
      wip: wipProjects.map(mapProject)
    };
  }, [projects, wipProjects, currentLang]);

  const tabs = [
    { id: 'completed', label: t('portfolio.tabs.completed') },
    { id: 'wip', label: t('portfolio.tabs.wip') }
  ];

  return (
    <div className="space-y-8">
      <motion.h2
        className="text-3xl font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.6 }}
      >
        {t('portfolio.title')}
      </motion.h2>
      <div className="flex flex-wrap gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              activeTab === tab.id
                ? 'bg-accent-light text-white shadow-lg shadow-accent-light/50 dark:bg-accent-dark dark:shadow-accent-dark/40'
                : 'border border-white/10 bg-white/5 text-gray-200 hover:border-accent-light hover:text-accent-light dark:hover:border-accent-dark dark:hover:text-accent-dark'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
          }}
          className="grid gap-6 md:grid-cols-2"
        >
          {data[activeTab].map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg"
            >
              <div className="relative h-40 overflow-hidden bg-black/30">
                <img
                  src={project.imageSrc}
                  alt={project.content.title}
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = resolveImageSrc();
                  }}
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h3 className="text-lg font-semibold text-white dark:text-white">{project.content.title}</h3>
                  <p className="mt-2 text-sm text-gray-300 dark:text-gray-300">{project.content.description}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-3">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-wide text-gray-200 transition hover:border-accent-light hover:text-accent-light dark:hover:border-accent-dark dark:hover:text-accent-dark"
                    >
                      GitHub
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-wide text-gray-200 transition hover:border-accent-light hover:text-accent-light dark:hover:border-accent-dark dark:hover:text-accent-dark"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
