import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projectsData = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A premium, modern, and fully responsive developer portfolio built with React, Vite, and Framer Motion. Features customizable details, dark navy themes, and seamless section scrolling.",
      tech: ["React.js", "Vite", "Framer Motion", "CSS"],
      category: "Web",
      github: "https://github.com/arjanahmad/CODSOFT/tree/main/Portfolio",
      live: "https://arjan-personal-portfolio.netlify.app/"
    },
    {
      id: 2,
      title: "Gaming Landing Page",
      description: "A visually immersive, high-impact gaming landing page featuring game libraries, hover states, and fully responsive grid components styled for gamers.",
      tech: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      category: "Web",
      github: "https://github.com/arjanahmad/CODSOFT/tree/main/Landing-Page",
      live: "https://all-gxmes.netlify.app/."
    },
    {
      id: 3,
      title: "Calculator App",
      description: "A clean math utility app with expression parsing, custom UI modes, responsive grid buttons, and detailed operation tracking history logs.",
      tech: ["React.js", "CSS"],
      category: "Utility",
      github: "https://github.com/arjanahmad/CODSOFT/tree/main/Calculator",
      live: "https://cxlculxtor.netlify.app/"
    }
  ];

  const categories = ["All", "Web", "Utility"];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="projects-section container">
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Featured <span className="text-gradient">Projects</span>
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A selection of web development projects representing full-stack flows, user experiences, and responsive systems.
        </motion.p>
      </div>

      <div className="projects-filter-bar">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div 
        layout 
        className="projects-container-grid"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
