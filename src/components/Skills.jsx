import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Terminal,
  Wrench,
  Cpu,
  Globe,
  Shield,
  ChevronDown,
  Check
} from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    id: "frontend",
    title: "Front-End Development",
    icon: <Code2 size={22} className="cat-icon text-cyan" />,
    badge: "Core Focus",
    skills: [
      { name: "HTML", highlight: "Semantic markup & structure" },
      { name: "CSS", highlight: "Flexbox, Grid & responsive design" },
      { name: "JavaScript", highlight: "ES6+, DOM manipulation & logic" },
      { name: "Responsive Web Design", highlight: "Mobile-first & cross-device layouts" }
    ]
  },
  {
    id: "programming",
    title: "Programming & Core Concepts",
    icon: <Terminal size={22} className="cat-icon text-violet" />,
    badge: "Algorithmic Foundation",
    skills: [
      { name: "Core Java", highlight: "OOP fundamentals & application syntax" },
      { name: "Object-Oriented Programming (OOP)", highlight: "Inheritance, polymorphism, encapsulation" },
      { name: "Data Structures and Algorithms (DSA)", highlight: "Arrays, lists, searching & sorting" },
      { name: "Functions and Programming Logic", highlight: "Modular architecture & problem solving" }
    ]
  },
  {
    id: "tools",
    title: "Development Tools & Version Control",
    icon: <Wrench size={22} className="cat-icon text-cyan" />,
    badge: "Workflow & Tooling",
    skills: [
      { name: "Git", highlight: "Branching, committing & version tracking" },
      { name: "GitHub", highlight: "Remote repositories & collaboration" },
      { name: "Visual Studio Code", highlight: "Extensions, debugging & custom setups" },
      { name: "IntelliJ IDEA", highlight: "Java development & code analysis" }
    ]
  },
  {
    id: "os-linux",
    title: "Operating Systems & Linux",
    icon: <Cpu size={22} className="cat-icon text-violet" />,
    badge: "Learning Area",
    skills: [
      { name: "Kali Linux", highlight: "Active learning path & command navigation" },
      { name: "Basic Linux environment familiarity", highlight: "CLI navigation, permissions & basic shell" }
    ]
  },
  {
    id: "web-concepts",
    title: "Web Concepts & Engineering",
    icon: <Globe size={22} className="cat-icon text-cyan" />,
    badge: "Web Engineering",
    skills: [
      { name: "Web fundamentals", highlight: "HTTP/HTTPS, DOM, client-server model" },
      { name: "Debugging", highlight: "Runtime error identification & tracing" },
      { name: "Browser-based troubleshooting", highlight: "DevTools inspection & network analysis" },
      { name: "Basic development workflow", highlight: "Component organization & agile practices" }
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Fundamentals",
    icon: <Shield size={22} className="cat-icon text-violet" />,
    badge: "Defensive Awareness",
    skills: [
      { name: "Cybersecurity fundamentals", highlight: "Basic network & software protection principles" },
      { name: "Security awareness", highlight: "Safe user data & vulnerability prevention" },
      { name: "Basic vulnerability concepts", highlight: "Input sanitization & defense against common flaws" },
      { name: "Ethical hacking learning path", highlight: "Foundational coursework & lab curiosity" }
    ]
  }
];

const Skills = () => {
  // Support toggling individual category expansion
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (id) => {
    setExpandedCategories(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleCategory(id);
    }
  };

  return (
    <section id="skills" className="skills-section section-reveal">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill-badge">
            <span className="badge-dot"></span>
            <span>Skill Architecture</span>
          </div>
          <h2 className="section-title">
            Technical & Professional <span className="text-gradient">Competencies</span>
          </h2>
          <p className="section-subtitle">
            Six focused categories covering front-end development, core programming, developer tools, Linux, web concepts, and cybersecurity.
          </p>
        </div>

        {/* Exactly Six Compact Category Cards Grid */}
        <div className="skills-six-grid">
          {skillCategories.map((category, idx) => {
            const isExpanded = !!expandedCategories[category.id];

            return (
              <motion.div
                key={category.id}
                className={`skill-compact-card glass-card ${isExpanded ? 'is-expanded' : ''}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
              >
                {/* Clickable Header for Expand/Collapse */}
                <div
                  className="skill-card-clickable-header"
                  onClick={() => toggleCategory(category.id)}
                  onKeyDown={(e) => handleKeyDown(e, category.id)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                  aria-label={`${category.title} category. Click to ${isExpanded ? 'collapse' : 'reveal'} skills.`}
                >
                  <div className="cat-icon-container">
                    {category.icon}
                  </div>

                  <div className="cat-header-text">
                    <span className="cat-badge-label">{category.badge}</span>
                    <h3 className="cat-heading">{category.title}</h3>
                    <span className="cat-skill-count">
                      {category.skills.length} skills • {isExpanded ? 'Click to collapse' : 'Click to reveal'}
                    </span>
                  </div>

                  <div className={`cat-expand-arrow ${isExpanded ? 'arrow-rotated' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </div>

                {/* Expandable Skills List */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      key="skills-tray"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="cat-skills-dropdown"
                    >
                      <div className="cat-dropdown-divider"></div>
                      <div className="cat-skills-list">
                        {category.skills.map((skill, sIdx) => (
                          <div key={sIdx} className="skill-item-row">
                            <div className="skill-check-circle">
                              <Check size={12} className="check-icon" />
                            </div>
                            <div className="skill-info">
                              <span className="skill-label">{skill.name}</span>
                              <small className="skill-highlight-text">{skill.highlight}</small>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
