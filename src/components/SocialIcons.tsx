import { FaLinkedin, FaGithub, FaBehance, FaGlobe } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const socialLinks = [
  { href: 'https://www.linkedin.com/in/agusdinax/', icon: <FaLinkedin />, title: 'LinkedIn', id: 'linkedin-tooltip' },
  { href: 'https://github.com/agusdinax', icon: <FaGithub />, title: 'GitHub', id: 'github-tooltip' },
  { href: 'https://www.behance.net/agusdinax', icon: <FaBehance />, title: 'Behance', id: 'behance-tooltip' },
  { href: 'https://agusdinaportfolio.000webhostapp.com/', icon: <FaGlobe />, title: 'Web Personal', id: 'web-tooltip' },
];

const SocialIcons: React.FC = () => (
  <>
    <ul className="social-icons pt-3">
      {socialLinks.map(({ href, icon, title, id }) => (
        <li key={href} className="social-item">
          <a
            className="social-link"
            href={href}
            data-tooltip-id={id}
            data-tooltip-content={title}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </a>
          <Tooltip id={id} place="top" />
        </li>
      ))}
    </ul>
  </>
);

export default SocialIcons;
