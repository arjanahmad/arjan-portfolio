import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: "AI Resume Builder with ATS Score Optimization",
    badgeText: "Resume Flagship",
    badgeType: "featured",
    period: "2025 | Personal Project",
    summary: "Dynamic web-based resume builder featuring real-time preview, live editing, and automated ATS compatibility scoring.",
    highlights: [
      "Real-time preview & live template editing with immediate visual feedback.",
      "Algorithmic keyword matching system to measure and optimize ATS ranking scores.",
      "Engineered with clean responsive layout for frictionless mobile and desktop creation."
    ],
    tech: ["JavaScript (ES6+)", "HTML5", "CSS3", "ATS Scoring Algorithm", "DOM APIs"],
    category: "Web Applications",
    github: "https://github.com/arjanahmad",
    live: null // Local / personal project repository
  },
  {
    id: 2,
    title: "DropShxre — Real-Time File Sharing Web App",
    badgeText: "Live Deployed Platform",
    badgeType: "live",
    period: "Featured Production App",
    summary: "A modern, high-speed file distribution platform enabling instant, frictionless file transfers across connected devices.",
    highlights: [
      "Engineered for high-speed file exchange with real-time UI status updates.",
      "Responsive, clean glassmorphic aesthetic designed for seamless mobile usability.",
      "Production deployment with active uptime and optimized asset loading."
    ],
    tech: ["React.js", "JavaScript (ES6+)", "Web APIs", "CSS3", "Netlify"],
    category: "Featured Apps",
    github: null,
    live: "https://dropshxre.netlify.app/"
  },
  {
    id: 3,
    title: "Personal Developer Portfolio & Brand Platform",
    badgeText: "Production Website",
    badgeType: "featured",
    period: "Personal Platform",
    summary: "A recruiter-friendly developer portfolio showcasing career milestones, verified credentials, and dual-theme tokens.",
    highlights: [
      "Custom dual-theme token architecture (SaaS Light Mode + Deep Slate Dark Mode).",
      "Interactive floating navbar, verified credentials integration, and Call Me Now CTA.",
      "Fully responsive across all breakpoints with zero horizontal layout shift."
    ],
    tech: ["React 19", "Vite", "Framer Motion", "CSS Design Tokens"],
    category: "Web Applications",
    github: "https://github.com/arjanahmad/CODSOFT/tree/main/Portfolio",
    live: "https://arjanahmad.website/"
  },
  {
    id: 4,
    title: "Interactive Gaming Portal & Landing Page",
    badgeText: "Live Web Experience",
    badgeType: "live",
    period: "Interactive UI",
    summary: "An immersive gaming library landing page showcasing game collections, animated hover cards, and dynamic theme accents.",
    highlights: [
      "Dynamic interactive showcase catalog with modern fluid layout.",
      "Cross-browser performance optimization and micro-interaction responsiveness.",
      "Clean CSS animations and accessible UI components."
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
    category: "Web Applications",
    github: "https://github.com/arjanahmad/CODSOFT/tree/main/Landing-Page",
    live: "https://all-gxmes.netlify.app/"
  },
  {
    id: 5,
    title: "Mathematical Expression & Utility Calculator",
    badgeText: "Utility Application",
    badgeType: "utility",
    period: "Web Utility Tool",
    summary: "A clean mathematical utility web application featuring expression evaluation, operation history logging, and custom themes.",
    highlights: [
      "Accurate multi-operator evaluation and calculation state management.",
      "Operation log memory with clean responsive grid keypad layout.",
      "Zero-latency input feedback with keyboard navigation support."
    ],
    tech: ["React.js", "JavaScript", "CSS Grid", "State Management"],
    category: "Utilities",
    github: "https://github.com/arjanahmad/CODSOFT/tree/main/Calculator",
    live: "https://cxlculxtor.netlify.app/"
  }
];

const categories = ["All", "Featured Apps", "Web Applications", "Utilities"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="projects-section section-reveal">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill-badge">
            <span className="badge-dot"></span>
            <span>Featured Engineering</span>
          </div>
          <h2 className="section-title">
            Featured Projects & <span className="text-gradient">Applications</span>
          </h2>
          <p className="section-subtitle">
            Real-world web applications built with a focus on usability, clean code, real-time feedback, and responsive layout.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="projects-card-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
