import './i18n';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ResumeSection from './components/ResumeSection';
import CursosTable from './components/CursosTable';
import SkillsSection from './components/SkillsSection';
import ServiceCards from './components/ServiceCards';
import CallToAction from './components/CallToAction';
import PortfolioSection from './components/PortfolioSection';
import GithubProjects from './components/GithubProjects';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar/>
      <Home/>
      <ResumeSection />
      <SkillsSection/>
      <CursosTable />
      <ServiceCards/>
      <CallToAction/>
      <PortfolioSection/>
      <GithubProjects/>
      <ContactForm/>
    </div>
  );
}

export default App;
