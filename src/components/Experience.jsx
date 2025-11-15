import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();
  const items = t('experience.items', { returnObjects: true });

  return (
    <div className="space-y-8">
      <motion.h2
        className="text-3xl font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.6 }}
      >
        {t('experience.title')}
      </motion.h2>
      <div className="relative border-l border-white/10 pl-6">
        {items.map((item, index) => (
          <motion.div
            key={`${item.title}-${index}`}
            className="relative mb-10 ml-2 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg last:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="absolute -left-[2.15rem] top-6 h-3 w-3 rounded-full bg-accent-light shadow-lg shadow-accent-light/40 dark:bg-accent-dark dark:shadow-accent-dark/40" />
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-light/40 bg-black/40 text-sm font-semibold uppercase tracking-wide text-accent-light dark:border-accent-dark/50 dark:bg-white/10 dark:text-accent-dark">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-400 dark:text-gray-400">{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
