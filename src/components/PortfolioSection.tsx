import React, { useState } from "react";
import portfolioData from "../assets/portfolioData.json"; 
import { useTranslation } from "react-i18next";

// Importación de imágenes
import advertising1 from "../assets/advertising-1.jpg";
import advertising2 from "../assets/advertising-2.jpg";
import advertising3 from "../assets/advertising-3.jpg"; 
import advertising4 from "../assets/advertising-4.jpg"; 
import advertising5 from "../assets/advertising-5.jpg"; 
import advertising6 from "../assets/advertising-6.jpg"; 
import branding1 from "../assets/branding-1.jpg";
import branding2 from "../assets/branding-2.jpg";
import branding3 from "../assets/branding-3.jpg";
import branding4 from "../assets/branding-4.jpg";
import branding5 from "../assets/branding-5.jpg";
import branding6 from "../assets/branding-6.jpg";
import web1 from "../assets/web-1.jpg";
import web2 from "../assets/web-2.jpg";
import web3 from "../assets/web-3.jpg";
import web4 from "../assets/web-4.png";
import web5 from "../assets/web-5.png";
import web6 from "../assets/web-6.png";
import foto1 from "../assets/foto-1.jpg";
import foto2 from "../assets/foto-2.jpg";
import foto3 from "../assets/foto-3.jpg";
import foto4 from "../assets/foto-4.jpg";
import foto5 from "../assets/foto-5.jpg";
import foto6 from "../assets/foto-6.jpg";

type PortfolioItem = {
  id: string;
  titleKey: string;
  subtitleKey: string;
  image: string;
  category: string;
};

const categories = [
  { label: "social", filter: "redes" },
  { label: "Posters", filter: "posters" },
  { label: "Branding", filter: "branding" },
  { label: "Foto", filter: "foto" },
];

const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("redes");
  const { t } = useTranslation();

  const handleFilter = (category: string) => {
    setActiveFilter(category);
  };

  const imageMapping: { [key: string]: string[] } = {
    redes: [web1, web2, web3, web4, web5, web6],  
    posters: [advertising1, advertising2, advertising3, advertising4, advertising5, advertising6], 
    branding: [ branding1, branding2, branding3, branding4, branding5, branding6],  
    foto: [foto1, foto2, foto3, foto4, foto5, foto6],   
  };

  return (
    <section className="section bg-custom-gray" id="portfolio">
      <div className="container">
        <h2 className="mb-5">
          <span className="text-danger">{t("portfolio")}</span>
          <span className="line"></span>
        </h2>

        <div className="portfolio">
          <div className="filters">
            {categories.map((cat) => (
              <a
                key={cat.label}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleFilter(cat.filter);
                }}
                className={activeFilter === cat.filter ? "active" : ""}
              >
                {t(cat.label)}
              </a>
            ))}
          </div>

          <div className="portfolio-container row">
            {portfolioData
              .filter(
                (item: PortfolioItem) =>
                  activeFilter === item.category
              )
              .map((item: PortfolioItem, index) => (
                <div
                  key={item.id}
                  className={`col-md-6 col-lg-4 ${item.category}`}
                >
                  <div className="portfolio-item">
                    <img
                      src={imageMapping[item.category]?.[index % imageMapping[item.category].length] || ""}
                      className="img-fluid"
                      alt={t(item.titleKey)}
                    />
                    <div className="content-holder">
                      <a
                        className="img-popup"
                        href={imageMapping[item.category]?.[index % imageMapping[item.category].length] || ""}
                      ></a>
                      <div className="text-holder">
                        <h6 className="title">{t(item.titleKey)}</h6>
                        <p className="subtitle">{t(item.subtitleKey)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
