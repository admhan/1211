import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const cards = ['vision', 'missions'];

const Vision = () => {
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
        {t('vision.title')}
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((key, index) => (
          <motion.div
            key={key}
            className="rounded-3xl border border-accent-light/30 bg-white/5 p-8 backdrop-blur-md shadow-lg dark:border-accent-dark/40"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-accent-light dark:text-accent-dark">
              {t(`vision.cards.${key}.title`)}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-300 dark:text-gray-300">
              {t(`vision.cards.${key}.content`)}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Vision;
