import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const columnOrder = ['tech', 'data', 'soft'];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <motion.h2
        className="text-3xl font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.6 }}
      >
        {t('skills.title')}
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-3">
        {columnOrder.map((key, index) => {
          const items = t(`skills.columns.${key}.items`, { returnObjects: true });
          return (
            <motion.div
              key={key}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-accent-light dark:text-accent-dark">
                {t(`skills.columns.${key}.title`)}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-300 dark:text-gray-300">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-light dark:bg-accent-dark" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
