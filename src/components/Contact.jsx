import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const contacts = [
    {
      id: 'email',
      label: t('contact.email'),
      href: 'mailto:adam.hannachi@email.com'
    },
    {
      id: 'github',
      label: t('contact.github'),
      href: 'https://github.com/admhan'
    },
    {
      id: 'linkedin',
      label: t('contact.linkedin'),
      href: 'https://linkedin.com/in/adam-hannachi'
    }
  ];

  return (
    <div className="space-y-8 text-center">
      <motion.h2
        className="text-3xl font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.6 }}
      >
        {t('contact.title')}
      </motion.h2>
      <motion.p
        className="mx-auto max-w-2xl text-sm text-gray-300 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.6 }}
      >
        {t('contact.description')}
      </motion.p>
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {contacts.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white transition hover:border-accent-light hover:text-accent-light hover:shadow-lg hover:shadow-accent-light/30 dark:hover:border-accent-dark dark:hover:text-accent-dark dark:hover:shadow-accent-dark/30"
          >
            {item.label}
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default Contact;
