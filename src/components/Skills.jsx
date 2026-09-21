import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Wrench, Globe, Shield, Users, Check } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: <Code2 size={20} className="cat-icon text-cyan" />,
    badge: "Core Expertise",
    description: "Engineering clean, semantic, responsive, and cross-browser compliant user interfaces.",
    skills: [
      { name: "HTML5", highlight: "Semantic & Accessible" },
      { name: "CSS3", highlight: "Flexbox, Grid & Modern Layouts" },
      { name: "JavaScript (ES6+)", highlight: "Async, DOM & Modern Syntax" },
      { name: "Responsive Web Design", highlight: "Mobile-First Architecture" },
      { name: "React.js", highlight: "Hooks, Components & State" }
    ]
  },
  {
    id: "programming",
    title: "Programming & Logic",
    icon: <Terminal size={20} className="cat-icon text-violet" />,
    badge: "Algorithmic Foundation",
    description: "Strong structural programming, object-oriented concepts, and algorithmic reasoning.",
    skills: [
      { name: "Core Java", highlight: "OOP Principles & Classes" },
      { name: "Basic DSA", highlight: "Arrays, Strings, Stacks & Queues" },
      { name: "Object-Oriented Programming", highlight: "Inheritance, Polymorphism & Abstraction" },
      { name: "Algorithmic Thinking", highlight: "CodeX Competition Top Performer" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Version Control",
    icon: <Wrench size={20} className="cat-icon text-cyan" />,
    badge: "Developer Workflow",
    description: "Industry-standard development workflows, command-line usage, and version control.",
    skills: [
      { name: "Git", highlight: "Branching, Merging & History" },
      { name: "GitHub", highlight: "Repositories & Open Collaboration" },
      { name: "VS Code", highlight: "Extensions, Debugging & Custom Configs" },
      { name: "Chrome DevTools", highlight: "DOM Inspection, Network & Profiling" }
    ]
  },
  {
    id: "web-concepts",
    title: "Web Concepts & Engineering",
    icon: <Globe size={20} className="cat-icon text-violet" />,
    badge: "Production Standards",
    description: "Ensuring web applications are fast, cross-device reliable, and easily maintainable.",
    skills: [
      { name: "Cross-Browser Compatibility", highlight: "Chrome, Firefox, Safari & Edge" },
      { name: "Performance Optimization", highlight: "Asset Sizing, Lazy Loading & Rendering" },
      { name: "Debugging", highlight: "Runtime Inspection & Error Handling" },
      { name: "Web APIs & REST Basics", highlight: "Fetch, JSON & Asynchronous Integration" }
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Fundamentals",
    icon: <Shield size={20} className="cat-icon text-cyan" />,
    badge: "Security Aware",
    description: "Applying foundational security awareness to prevent standard web application vulnerabilities.",
    skills: [
      { name: "Cybersecurity Fundamentals", highlight: "SRMU VIVEKA Workshop" },
      { name: "System Security", highlight: "Authentication & Safe State Practices" },
      { name: "Vulnerability Analysis", highlight: "Input Sanitization & Injection Defense" },
      { name: "Risk Mitigation", highlight: "Defensive Coding Principles" }
    ]
  },
  {
    id: "professional",
    title: "Professional Competencies",
    icon: <Users size={20} className="cat-icon text-violet" />,
    badge: "Workplace Ready",
    description: "Collaborative, communicative, and methodical mindset proven in remote internship settings.",
    skills: [
      { name: "Problem Solving", highlight: "Analytical breakdown of technical issues" },
      { name: "Logical Reasoning", highlight: "Structured decision-making" },
      { name: "Technical Communication", highlight: "Documentation & clear project articulation" },
      { name: "Adaptability & Learning", highlight: "Rapid tool adoption & builder mindset" },
      { name: "Time Management", highlight: "Delivering sprint tasks on schedule" },
      { name: "Teamwork", highlight: "Effective collaboration in remote teams" }
    ]
  }
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCategories = activeTab === "all"
    ? skillCategories
    : skillCategories.filter(c => c.id === activeTab);

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
            Curated skills backed by BCA coursework, coding competitions, virtual internships, and hands-on web projects.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-tab-bar">
          <button 
            className={`skill-tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Skills
          </button>
          <button 
            className={`skill-tab ${activeTab === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveTab('frontend')}
          >
            Frontend
          </button>
          <button 
            className={`skill-tab ${activeTab === 'programming' ? 'active' : ''}`}
            onClick={() => setActiveTab('programming')}
          >
            Programming & DSA
          </button>
          <button 
            className={`skill-tab ${activeTab === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveTab('tools')}
          >
            Tools
          </button>
          <button 
            className={`skill-tab ${activeTab === 'cybersecurity' ? 'active' : ''}`}
            onClick={() => setActiveTab('cybersecurity')}
          >
            Cybersecurity
          </button>
          <button 
            className={`skill-tab ${activeTab === 'professional' ? 'active' : ''}`}
            onClick={() => setActiveTab('professional')}
          >
            Professional
          </button>
        </div>

        {/* Skills Grid */}
        <div className="skills-category-grid">
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              className="skill-category-card glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <div className="cat-card-header">
                <div className="cat-icon-wrap">
                  {category.icon}
                </div>
                <div className="cat-meta-title">
                  <span className="cat-badge-pill">{category.badge}</span>
                  <h3 className="cat-title">{category.title}</h3>
                </div>
              </div>

              <p className="cat-desc">{category.description}</p>

              {/* Skill Chips List */}
              <div className="skill-chips-group">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-chip-item">
                    <div className="chip-header">
                      <Check size={13} className="chip-check" />
                      <span className="chip-name">{skill.name}</span>
                    </div>
                    <small className="chip-highlight">{skill.highlight}</small>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
