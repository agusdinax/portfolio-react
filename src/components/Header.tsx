import React from 'react';
import SocialIcons from './SocialIcons';
import LanguageSelector from './LanguageSelector';
import HeaderContent from './HeaderContent';
import '../styles/styles.css';

const Header: React.FC = () => {
  return (
    <section id="home">
    <header className="header">
      <div className="container">
        <SocialIcons />
        <LanguageSelector />
        <HeaderContent />
      </div>
    </header>
    </section>
  );
};

export default Header;
