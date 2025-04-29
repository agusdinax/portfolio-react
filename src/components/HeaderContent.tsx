import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaDownload } from 'react-icons/fa';

const HeaderContent: React.FC = () => {
  const { t } = useTranslation();
  
    return (
    <div className="header-content">
      <h4 className="header-subtitle">{t('welcome')}</h4>
      <h2 className="header-title">Agustina Di Natale</h2>
      <h5 className="header-mono">{t('andMore')}</h5>
      <button className="btn btn-primary btn-rounded">
      <a className="btn btn-outline-danger flex items-center gap-2"
        href={t('cvDownload')}
        target="_blank"
        rel="noopener noreferrer"> <FaDownload />
        {t('cv')}
        </a>
      </button>
    </div>
  );
};
  export default HeaderContent;
  