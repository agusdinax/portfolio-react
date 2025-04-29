import React from 'react';
import { useTranslation } from 'react-i18next';
import SocialIcons from './SocialIcons';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const calculateAge = (birthDate: string): number => {
    const today = new Date();
    const birth = new Date(birthDate);
  
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();
  
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
  
    return age;
  };


  return (
    <div className="container-fluid">
      <section id="about" className="row about-section">
        
        {/* Sección Quién soy */}
        <div className="col-lg-4 about-card">
          <h3>{t('whoT')}</h3>
          <span className="line mb-5"></span>
          <h5 className="mb-3">{t('andMore')}</h5>
          <div className="mt-20">
            {t('me1')
              .split('\n')
              .map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
          </div>
          <button className="btn btn-outline-danger">
            <i className="icon-down-circled2"></i>
            <a href={t('cvDownload')}>
            {t('cv')}
            </a>
          </button>
        </div>

        {/* Info personal */}
        <div className="col-lg-4 about-card">
          <h3>{t('meTitle')}</h3>
          <span className="line mb-5"></span>
          <ul className="mt40 info list-unstyled">
            <li><span>{t('years')}: {calculateAge("1996-10-23")} {t('age')}</span></li>
            <li><span>Email: agusdinatale96@gmail.com</span></li>
            <li><span>{t('Telefono')}</span></li>
            <li><span>{t('Dirección')}</span></li>
            <li><span>{t('food')}</span></li>
            <li><span>{t('hobbie')}</span></li>
            <li><span>{t('sport')}</span></li>
          </ul>
          <div className="pt-3">
            <SocialIcons />
          </div>
        </div>

    {/* Herramientas */}
    <div className="col-lg-4 about-card">
      <h3>{t('tools')}</h3>
      <span className="line mb-5"></span>

      {[
        { icon: 'fa-desktop', title: t('tool1'), text: 'Katalon - Selenium - Cypress - Playwright - Appium - UFT - WebdriverIO - Sikulix' },
        { icon: 'fa-rss', title: t('tool2'), text: 'Postman - JMeter - Soap UI - Newman - Rest Assured' },
        { icon: 'fa-cogs', title: t('tool3'), text: 'Jira - Trello - Confluence - Atlassian' },
        { icon: 'fa-bookmark', title: t('tool4'), text: 'Testlink - TestRail - Zephyr - Xray - AgileTest' },
        { icon: 'fa-globe', title: t('tool5'), text: 'Jenkins - Github Actions' },
        { icon: 'fa-code', title: 'Front-End', text: 'HTML5 - CSS3 - Javascript - React - Angular' },
        { icon: 'fa-database', title: 'Back-End', text: 'Java - PHP - Python - Groovy - SQL - Express - FastAPI - MongoDB' },
        { icon: 'fa-paint-brush', title: t('tool6'), text: 'Adobe Photoshop - Illustrator - Dimension' },
      ].map((item, index) => (
        <div className="row" key={index}>
         <div className="col-1 pt-1">
          <i className={`fas ${item.icon}`} style={{ color: '#c61aff', fontSize: '24px' }}></i>
        </div>
          <div className="col-10 ml-auto mr-3">
            <h6>{item.title}</h6>
            <p className="subtitle">{item.text}</p>
            {index < 7 && <hr />}
          </div>
        </div>
      ))}
    </div>

      </section>
    </div>
  );
};

export default Home;
