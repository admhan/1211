import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/30 py-6 text-center text-xs text-gray-400 dark:bg-black/40">
      <p>
        {t('footer.madeWith')} {year}
      </p>
    </footer>
  );
};

export default Footer;
