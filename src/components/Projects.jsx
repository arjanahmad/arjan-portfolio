import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projectsData = [
    {
      id: 1,
      title: "DropShxre — Real-Time File Sharing Web App",
      isFeatured: true,
      badgeText: "Featured Live Deployed App",
      description: "A modern, high-speed file sharing and transfer platform enabling instant, frictionless file distribution. Built with a focus on real-time usability, clean user experience, and responsive layout performance across desktop and mobile devices.",
      tech: ["React.js", "Web APIs", "JavaScript (ES6+)", "CSS3 / Glassmorphic UI"],
      category: "Featured Apps",
      github: null, // No fake GitHub repo for DropShxre, direct live demo link
      live: "https://dropshxre.netlify.app/"
    },
    {
      id: 2,
      title: "Developer Portfolio Portal",
      isFeatured: false,
      badgeText: "Personal Portfolio",
      description: "A premium, recruiter-friendly developer portfolio built with React, Vite, and Framer Motion. Features dark slate glassmorphism, responsive navigation, career timeline, and verified credential presentation.",
      tech: ["React.js", "Vite", "Framer Motion", "CSS Variables"],
      category: "Web Applications",
      github: "https://github.com/arjanahmad/CODSOFT/tree/main/Portfolio",
      live: "https://arjan-personal-portfolio.netlify.app/"
    },
    {
      id: 3,
      title: "Gaming Portal & Landing Page",
      isFeatured: false,
      badgeText: "Interactive UI",
      description: "A visually immersive gaming landing page showcasing title libraries, interactive hover states, dynamic accent themes, and responsive grid components engineered for modern web users.",
      tech: ["HTML5", "CSS3", "JavaScript", "Framer Motion"],
      category: "Web Applications",
      github: "https://github.com/arjanahmad/CODSOFT/tree/main/Landing-Page",
      live: "https://all-gxmes.netlify.app/"
    },
    {
      id: 4,
      title: "Interactive Calculator Application",
      isFeatured: false,
      badgeText: "Utility Tool",
      description: "A clean mathematical utility web application featuring expression evaluation, operation history logging, custom color themes, and intuitive grid button layouts.",
      tech: ["React.js", "JavaScript", "CSS Grid"],
      category: "Utilities",
      github: "https://github.com/arjanahmad/CODSOFT/tree/main/Calculator",
      live: "https://cxlculxtor.netlify.app/"
    }
  ];

  const categories = ["All", "Featured Apps", "Web Applications", "Utilities"];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="projects-section container section-reveal">
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Deployed web applications showcasing real-time file sharing, responsive interfaces, and clean full-stack logic.
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className={project.isFeatured ? "featured-project-wrapper" : ""}
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
