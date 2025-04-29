import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang); // Cambia el idioma usando i18next
  };

  return (
    <div className="language-selector">
      <div className="lang-button-container">
        <span
          id="es-lang"
          className={`lang-btn ${i18n.language === 'espanol' ? 'chosen' : ''}`}
          title="Español"
          onClick={() => changeLang('espanol')}
        >
          ES
        </span>
        <span
          id="en-lang"
          className={`lang-btn ${i18n.language === 'english' ? 'chosen' : ''}`}
          title="English"
          onClick={() => changeLang('english')}
        >
          EN
        </span>
      </div>
    </div>
  );
};

export default LanguageSelector;
