import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const navOrder = ['about', 'vision', 'skills', 'experience', 'portfolio', 'cv', 'contact'];

const Navbar = ({ sections, onToggleTheme, theme }) => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  const themeLabel = theme === 'dark' ? t('theme.light') : t('theme.dark');
  const nextLanguage = i18n.language.startsWith('fr') ? 'EN' : 'FR';

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-colors duration-300 ${
        isScrolled ? 'bg-black/60 shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="text-lg font-semibold tracking-wide text-accent-light dark:text-accent-dark">
          {t('navbar.brand')}
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navOrder.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="text-gray-300 transition hover:text-white dark:text-gray-200 dark:hover:text-white"
            >
              {sections[key]}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm text-white shadow-inner transition hover:border-accent-light hover:text-accent-light dark:hover:border-accent-dark dark:hover:text-accent-dark"
            aria-label={themeLabel}
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M12 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm0 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm9-4a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM6 13a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm12.657-6.657a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0ZM7.464 16.95a1 1 0 0 1 0 1.415l-.707.707a1 1 0 0 1-1.414-1.415l.707-.707a1 1 0 0 1 1.414 0Zm12.486 2.121a1 1 0 0 1-1.415 0l-.707-.707a1 1 0 1 1 1.415-1.414l.707.707a1 1 0 0 1 0 1.414ZM5.172 5.172a1 1 0 0 1 1.415 0l.707.707A1 1 0 1 1 5.88 7.293l-.707-.707a1 1 0 0 1 0-1.414Zm6.828 15.828a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79Z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex h-9 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 text-sm font-medium text-white transition hover:border-accent-light hover:text-accent-light dark:hover:border-accent-dark dark:hover:text-accent-dark"
            aria-label={t('language.switch')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm0 0a12 12 0 0 1 3 9 12 12 0 0 1-3 9m0-18a12 12 0 0 0-3 9 12 12 0 0 0 3 9M3.6 9h16.8M3.6 15h16.8"
              />
            </svg>
            {nextLanguage}
          </button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
