import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const RESUME_ASSET_PATH = '/assets/cv_Adam_Hannachi.pdf';
const PROFILE_ASSET_PATH = '/assets/photo_profil.jpg';

const createSvgPlaceholder = (initials) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#7c3aed" />
          <stop offset="100%" stop-color="#0ea5e9" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="100" fill="url(#grad)" />
      <text x="50%" y="53%" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="78" fill="#ffffff" font-weight="600">${initials}</text>
    </svg>`
  )}`;

const PROFILE_PLACEHOLDER = createSvgPlaceholder('AH');

const buttonVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + index * 0.1, duration: 0.5, ease: 'easeOut' }
  })
};

const Hero = () => {
  const { t } = useTranslation();
  const tags = t('hero.tags', { returnObjects: true });

  return (
    <section className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
      <div className="space-y-6">
        <motion.p
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-accent-light dark:text-accent-dark"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {t('hero.subtitle')}
        </motion.p>
        <motion.h1
          className="text-4xl font-semibold leading-tight md:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p
          className="max-w-xl text-base text-gray-300 dark:text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        >
          {t('hero.description')}
        </motion.p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-gray-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.08, duration: 0.4, ease: 'easeOut' }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          {[
            { label: t('hero.buttons.cv'), href: RESUME_ASSET_PATH, variant: 'primary', download: true },
            { label: t('hero.buttons.github'), href: 'https://github.com/admhan', variant: 'ghost' },
            { label: t('hero.buttons.linkedin'), href: 'https://linkedin.com/in/adam-hannachi', variant: 'ghost' }
          ].map((button, index) => (
            <motion.a
              key={button.label}
              href={button.href}
              target={button.href.startsWith('http') ? '_blank' : undefined}
              rel={button.href.startsWith('http') ? 'noreferrer' : undefined}
              download={button.download ? '' : undefined}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition ${
                button.variant === 'primary'
                  ? 'bg-accent-light text-white hover:bg-accent-light/90 dark:bg-accent-dark dark:hover:bg-accent-dark/90'
                  : 'border border-white/20 bg-white/5 text-white hover:border-accent-light hover:text-accent-light dark:hover:border-accent-dark dark:hover:text-accent-dark'
              }`}
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              custom={index}
            >
              {button.label}
            </motion.a>
          ))}
        </div>
      </div>
      <motion.div
        className="mx-auto flex h-72 w-72 items-center justify-center rounded-full border border-accent-light/50 bg-gradient-to-br from-accent-light/30 via-transparent to-transparent p-2 dark:border-accent-dark/50 dark:from-accent-dark/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
      >
        <img
          src={PROFILE_ASSET_PATH}
          alt="Adam Hannachi"
          className="h-full w-full rounded-full object-cover"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = PROFILE_PLACEHOLDER;
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
