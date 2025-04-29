import  { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { FaGear, FaHand } from "react-icons/fa6";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { BsWindowSplit } from "react-icons/bs";
import { FaPaintBrush, FaRegFileCode, FaProjectDiagram  } from "react-icons/fa";

const servicesData = [
  {
    title: "service1.title",
    description: "service1.description",
    icon: "FaGear",
    socials: [
      {
        id: "Katalon",
        icon: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Katalon-logo-vector.svg"
      },
      {
        id: "Postman",
        icon: "https://www.svgrepo.com/show/354202/postman-icon.svg"
      },
      {
        id: "Playwright",
        icon: "https://www.svgrepo.com/show/191941/theatre-drama.svg"
      },
      {
        id: "JMeter",
        icon: "https://www.svgrepo.com/show/329945/apachejmeter.svg"
      },
      {
        id: "Cypress",
        icon: "https://www.svgrepo.com/show/330247/cypress.svg"
      },
      {
        id: "Appium",
        icon: "https://www.svgrepo.com/show/353413/appium.svg"
      }
    ]
  },
  {
    title: "service2.title",
    description: "service2.description",
    icon: "FaHand",
    socials: [
      {
        id: "Jira",
        icon: "https://www.svgrepo.com/show/473672/jira.svg",
      },
      {
        id: "Trello",
        icon: "https://www.svgrepo.com/show/409327/trello.svg",
      },
      {
        id: "Xray",
        icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/5/xray-for-jira-ehlprq39608no8nw52j489.png/xray-for-jira-8c7ael4m5zn9xoplv4xzs9.png?_a=DATAdtAAZAA0",
      }, 
      {
        id: "Cucumber",
        icon: "https://www.svgrepo.com/show/373538/cucumber.svg",
      }, 
      {
        id: "TestLink",
        icon: "https://www.devopsschool.com/blog/wp-content/uploads/2022/03/testlink.png",
      },
      {
        id: "SQL",
        icon: "https://www.svgrepo.com/show/127001/sql-file-format.svg",
      }
    ]
  },
  {
    title: "service3.title",
    description: "service3.description",
    icon: "FaRegFileCode",
    socials: [
      {
        id: "React",
        icon: "https://www.svgrepo.com/show/503536/react.svg",
      },
      {
        id: "Nodejs",
        icon: "https://www.svgrepo.com/show/508935/nodejs02.svg",
      },
      {
        id: "FastAPI",
        icon: "https://www.svgrepo.com/show/330413/fastapi.svg",
      },
      {
        id: "Angular",
        icon: "https://www.svgrepo.com/show/503165/angular.svg",
      },
      {
        id: "Javascript",
        icon: "https://www.svgrepo.com/show/353925/javascript.svg",
      }
      ,
      {
        id: "Python",
        icon: "https://www.svgrepo.com/show/374016/python.svg",
      }
    ]
  },
  {
    title: "service4.title",
    description: "service4.description",
    icon: "BsWindowSplit",
    socials: [
      {
        id: "Photoshop",
        icon: "https://www.svgrepo.com/show/373968/photoshop.svg",
      },
      {
        id: "Illustrator",
        icon: "https://www.svgrepo.com/show/53799/illustrator.svg",
      }, 
      {
        id: "Dimension",
        icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Adobe_Dimension_Logo.svg",
      }, 
      {
        id: "Corel",
        icon: "https://www.svgrepo.com/show/508791/corel-painter.svg",
      }, 
      {
        id: "Figma",
        icon: "https://www.svgrepo.com/show/448222/figma.svg",
      },
      {
        id: "InDesign",
        icon: "https://www.svgrepo.com/show/303188/indesign-cc-logo.svg",
      }
    ]
  },
  {
    title: "service5.title",
    description: "service5.description",
    icon: "FaPaintBrush",
    socials: [
      {
        id: "Instagram",
        icon: "https://www.svgrepo.com/show/452229/instagram-1.svg",
      },
      {
        id: "Facebook",
        icon: "https://www.svgrepo.com/show/475647/facebook-color.svg",
      },
      {
        id: "Whatsapp Business",
        icon: "https://cdn.worldvectorlogo.com/logos/whatsapp-business-bg.svg",
      },
      {
        id: "Meta Business",
        icon: "https://cdn.worldvectorlogo.com/logos/meta-3.svg",
      },
      {
        id: "Google Ads",
        icon: "https://cdn.worldvectorlogo.com/logos/google-ads-2.svg",
      }
      ,
      {
        id: "Google Analytics",
        icon: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg",
      }
    ]
  },
  {
    title: "service6.title",
    description: "service6.description",
    icon: "FaProjectDiagram",
    socials: [
      {
        id: "Jira",
        icon: "https://www.svgrepo.com/show/473672/jira.svg",
      },
      {
        id: "Trello",
        icon: "https://www.svgrepo.com/show/409327/trello.svg",
      },
      {
        id: "Gitlab",
        icon: "https://cdn.worldvectorlogo.com/logos/gitlab-3.svg",
      },
      {
        id: "Confluence",
        icon: "https://cdn.worldvectorlogo.com/logos/confluence-1.svg",
      },
      {
        id: "Notion",
        icon: "https://cdn.worldvectorlogo.com/logos/notion-1-1.svg",
      },
      {
        id: "Excel",
        icon: "https://cdn.worldvectorlogo.com/logos/excel-4.svg",
      },
    ]
  }
];

type Social = {
  id: string;
  icon: string;
};

type Service = {
  title: string;
  description: string;
  icon: string;
  socials: Social[];
};

const ServiceCards = () => {
  const [services, setServices] = useState<Service[]>([]); 
  const { t } = useTranslation();

  useEffect(() => {
    setServices(servicesData); 
  }, []);

  const renderIcon = (icon: string) => {
    switch(icon) {
      case "FaGear":
        return <FaGear />
      case "FaHand":
        return <FaHand/>
      case "BsWindowSplit":
        return <BsWindowSplit/>
      case "FaPaintBrush":
        return <FaPaintBrush />
      case "FaRegFileCode":
        return <FaRegFileCode />
        case "FaProjectDiagram":
        return <FaProjectDiagram />
      default:
        return null;
    }
  };

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="mb-5">
          <span className="text-danger">{t('services')}</span>
          <span className="line"></span>
        </h2>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4 col-sm-4" key={index}>
              <div className="card mb-5">
                <div className="card-header has-icon">
                  <i className="ti-settings text-danger">
                    {renderIcon(service.icon)}
                  </i>
                </div>
                <div className="card-body px-4 py-3">
                  <h5 className="mb-3 card-title text-dark">{t(service.title)}</h5>
                  <div className="mt-20">
                  {t(service.description)
                    .split('\n')
                    .map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                </div>
                  <ul className="social-icons pt-3">
                    <div className="d-flex justify-content-center">
                      {service.socials.map((social, idx) => (
                        <li className="social-item" key={idx}>
                            <img
                             data-tooltip-id={social.id}
                             data-tooltip-content={social.id}
                              src={social.icon}
                              alt={social.id}
                              width="45"
                              height="30"
                            />
                          <Tooltip id={social.id} place="top" />
                        </li>
                      ))}
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;