import React from 'react';
import { useTranslation } from 'react-i18next';

const ResumeSection: React.FC = () => {

  const { t } = useTranslation();

  return (
    <section id="resume" className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <div className="container flex-grow-1">
        <h2 className="mb-3" style={{ marginTop: '20px' }}>
          <span className="text-danger">{t('my')}</span>
          <span className="line"></span>
        </h2>
        <div className="row g-4">
          {/* Sección de Experiencia Laboral */}
          <div className="col-md-4 col-lg-4 d-flex">
            <div className="card w-100">
              <div className="card-header">
                <div className="mt-lg-4">
                  <h2>{t('laboral')}</h2>
                  <span className="line"></span>
                </div>
              </div>
              <div className="card-body">
                <h3 className="text-danger">QA Automation Ssr</h3>
                <h4 className="subtitle">TSOFT</h4>
                <h6 className="subtitle">{t('mesWork1')}</h6>
                <div className="mt-20">
                  {t('br1')
                    .split('\n')
                    .map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                </div>
              </div>
              <hr />
              <div className="card-body">
                <h3 className="text-danger">QA Analyst</h3>
                <h4 className="subtitle">Unitech</h4>
                <h6 className="subtitle">{t('mesWork')}</h6>
                <div className="mt-20">
                  {t('br2')
                    .split('\n')
                    .map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sección de Educación */}
          <div className="col-md-4 col-lg-4 d-flex">
            <div className="card w-100">
              <div className="card-header">
                <div className="mt-lg-4">
                  <h2>{t('education')}</h2>
                  <span className="line"></span>
                </div>
              </div>
              <div className="card-body">
                <h3 className="text-danger">{t('front')}</h3>
                <h4>{t('untref')}</h4>
                <p className="subtitle">2025 - 2025</p>
                <p>{t('descruntref')}</p>
                <hr />
                <h3 className="text-danger">{t('tudai')}</h3>
                <h4>{t('university')}</h4>
                <p className="subtitle">2021 - 2023</p>
                <p>{t('descrtudai')}</p>
                <hr />
                <h3 className="text-danger">{t('grap')}</h3>
                <h4>IPAT Tandil</h4>
                <p className="subtitle">2017 - 2021</p>
                <p>{t('descripat')}</p>
              </div>
            </div>
          </div>

          {/* Sección de Experiencia */}
          <div className="col-md-4 col-lg-4 d-flex">
            <div className="card w-100">
              <div className="card-header">
                <div className="mt-2">
                  <h3>{t('myexp')}</h3>
                  <span className="line"></span>
                </div>
              </div>
              <div className="card-body">
              <div className="mt-20">
                  {t('aboutxp')
                    .split('\n')
                    .map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
