import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const RESUME_ASSET_PATH = '/assets/cv_Adam_Hannachi.pdf';

const CvSection = () => {
  const { t } = useTranslation();
  const [resumeAvailable, setResumeAvailable] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch(RESUME_ASSET_PATH, { method: 'HEAD' })
      .then((response) => {
        if (isMounted) {
          setResumeAvailable(response.ok);
        }
      })
      .catch(() => {
        if (isMounted) {
          setResumeAvailable(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const isMissingResume = resumeAvailable === false;
  const downloadButtonClasses = `inline-flex items-center gap-2 rounded-full px-6 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-accent-light/70 focus:ring-offset-2 focus:ring-offset-transparent dark:focus:ring-accent-dark/60 ${
    isMissingResume
      ? 'cursor-not-allowed bg-white/10 text-gray-400'
      : 'bg-accent-light text-white shadow-lg hover:bg-accent-light/90 dark:bg-accent-dark dark:hover:bg-accent-dark/90'
  }`;

  return (
    <div className="space-y-8">
      <motion.h2
        className="text-3xl font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.6 }}
      >
        {t('cvSection.title')}
      </motion.h2>
      <motion.p
        className="max-w-2xl text-sm text-gray-300 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.6 }}
      >
        {t('cvSection.description')}
      </motion.p>
      <motion.div
        className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
      >
        {isMissingResume ? (
          <div className="flex h-[32rem] w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-accent-light/20 via-transparent to-transparent px-6 text-center text-sm text-gray-300 dark:from-accent-dark/20">
            <span className="rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-gray-200">
              {t('cvSection.title')}
            </span>
            <p className="max-w-md text-gray-200">
              {t('cvSection.placeholderNotice')}
            </p>
          </div>
        ) : (
          <iframe title="CV Adam Hannachi" src={RESUME_ASSET_PATH} className="h-[32rem] w-full" />
        )}
      </motion.div>
      <motion.a
        href={isMissingResume ? undefined : RESUME_ASSET_PATH}
        download={isMissingResume ? undefined : ''}
        className={downloadButtonClasses}
        aria-disabled={isMissingResume}
        onClick={(event) => {
          if (isMissingResume) {
            event.preventDefault();
          }
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.6 }}
      >
        {t('cvSection.download')}
      </motion.a>
    </div>
  );
};

export default CvSection;
