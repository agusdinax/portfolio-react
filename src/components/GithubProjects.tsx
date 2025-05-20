import  { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { FaGithub } from 'react-icons/fa';  // Importar el ícono de GitHub

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  fork: boolean;  // Añadir la propiedad 'fork' aquí
};

const specificRepos = ['CounterApp', 'CalculadoraApp', 'qa-playwright-allure', 'qa-selenium-python-allure', 'GROOVY-RESTASSURED-TESTNG-API'];

const GithubProjects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetch('https://api.github.com/users/agusdinax/repos')
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter((repo: Repo) => specificRepos.includes(repo.name) && !repo.fork);
        setRepos(filtered);
      })
      .catch(error => console.error('Error fetching repos:', error));
  }, []);

  return (
    <section className="section bg-dark text-light py-5" id="github-projects">
      <div className="container">
        <h2 className="mb-2">{t('gitp')}</h2>
        <div className="row">
          {repos.map(repo => (
            <div className="col-md-6 col-lg-4 mb-2" key={repo.id}>
              <div className="card h-100 bg-secondary text-light">
                <div className="card-body">
                  <h5 className="card-title">{repo.name}</h5>
                  <p className="card-text">{repo.description || 'Sin descripción'}</p>
                  <p className="text-warning">{repo.language}</p>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">
                    <FaGithub className="mr-2" /> {t('gith')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GithubProjects;
