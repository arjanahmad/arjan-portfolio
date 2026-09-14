import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Exploring from '../components/Exploring';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="home-page-layout">
      {/* Logical career story sequence */}
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Exploring />
      <Contact />
    </div>
  );
};

export default Home;
