import React from 'react';
import { useTranslation } from 'react-i18next';

const skills = [
  { name: 'Katalon', level: 100 },
  { name: 'Playwright', level: 80 },
  { name: 'Selenium', level: 70 },
  { name: 'Postman', level: 90 },
  { name: 'SQL', level: 80 },
  { name: 'Git', level: 80 },
  { name: 'Jenkins', level: 65 },
];

const languages = [
  { nameKey: 'ingles', level: 85 },
  { nameKey: 'espanol', level: 100 },
];

const ProgressBar = ({ level }: { level: number }) => (
  <div className="progress mb-3">
    <div
      className="progress-bar bg-danger"
      role="progressbar"
      style={{ width: `${level}%` }}
      aria-valuenow={level}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  </div>
);

const SkillsCard = () => (
  <div className="card col-12 col-lg-6 mb-4 mb-lg-0">
    <div className="card-header">
      <div className="pull-left">
        <h2 className="mt-lg-4">Skills Testing</h2>
        <span className="line"></span>
      </div>
    </div>
    <div className="card-body pb-2">
      {skills.map((skill, index) => (
        <div key={index}>
          <h6>{skill.name}</h6>
          <ProgressBar level={skill.level} />
        </div>
      ))}
    </div>
  </div>
);

const LanguagesCard = () => {
  const { t } = useTranslation();

  return (
    <div className="card col-12 col-lg-6">
      <div className="card-header">
        <div className="pull-right">
          <h2 className="mt-lg-4">{t('Idiomas')}</h2>
          <span className="line"></span>
        </div>
      </div>
      <div className="card-body pb-lg-4">
        {languages.map((lang, index) => (
          <div key={index}>
            <h6>{t(lang.nameKey)}</h6>
            <ProgressBar level={lang.level} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function SkillsSection() {
  return (
    <div className="container d-flex flex-column flex-lg-row justify-content-between gap-4" id="skills">
      <SkillsCard />
      <LanguagesCard />
    </div>
  );
}
