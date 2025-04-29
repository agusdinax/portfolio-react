import { useEffect, useState } from 'react';
import avatar from '../assets/avatar.jpg';
import { useTranslation } from 'react-i18next';
import '../styles/styles.css';
import { Menu, X } from 'lucide-react'; // Opcional: para íconos hamburguesa modernos

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // <-- nuevo estado para el menú

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / 100, 1);
      setScrollProgress(progress);

      const sections = ['home', 'about', 'resume', 'cursos', 'portfolio', 'contact'];

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionMiddle = rect.top + rect.height / 2;

          if (sectionMiddle >= 0 && sectionMiddle <= window.innerHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        {/* Botón hamburguesa */}
        <button onClick={toggleMenu} className="navbar-toggler ml-auto border-0" type="button">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Contenedor de links, visible/oculto según estado */}
        <div className={`collapse navbar-collapse mt-sm-20 ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
          
          {/* Links Izquierda */}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><a onClick={() => setIsMenuOpen(false)} href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a></li>
            <li className="nav-item"><a onClick={() => setIsMenuOpen(false)} href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>{t('about')}</a></li>
            <li className="nav-item"><a onClick={() => setIsMenuOpen(false)} href="#resume" className={`nav-link ${activeSection === 'resume' ? 'active' : ''}`}>{t('resume')}</a></li>
          </ul>

          {/* Avatar / Texto Centro */}
          <ul className="navbar-nav brand align-items-center">
            <img
              src={avatar}
              alt="Avatar"
              className="brand-img"
              style={{ opacity: 1 - scrollProgress, transition: 'opacity 0.5s ease' }}
            />
            <li
              className="brand-txt"
              style={{
                opacity: scrollProgress,
                transform: `translateY(${(1 - scrollProgress) * 10}px)`,
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
            >
              <h5 className="brand-title">Agustina Di Natale</h5>
              <div className="brand-subtitle">QA Analyst | Automation Tester | Graphic Designer</div>
            </li>
          </ul>

          {/* Links Derecha */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a onClick={() => setIsMenuOpen(false)} href="#cursos" className={`nav-link ${activeSection === 'cursos' ? 'active' : ''}`}>{t('cursos')}</a></li>
            <li className="nav-item"><a onClick={() => setIsMenuOpen(false)} href="#portfolio" className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}>Portfolio</a></li>
            <li className="nav-item last-item"><a onClick={() => setIsMenuOpen(false)} href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>{t('contacto')}</a></li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
