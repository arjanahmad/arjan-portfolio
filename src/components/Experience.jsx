import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Award,
  ExternalLink,
  MapPin,
  ChevronDown
} from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    company: "CodeAlpha",
    role: "Full Stack Development Intern",
    mode: "Virtual / Remote Internship",
    duration: "10 June 2026 – 10 July 2026",
    issueDate: "11 July 2026",
    studentId: "CA/DF1/132132",
    badge: "Official Certificate Issued",
    shortSummary: "Engineered responsive full-stack modules and client-side interfaces in a structured remote program.",
    description: "Completed an intensive virtual internship in Full Stack Development. Built responsive client-side interfaces and scalable frontend architecture while collaborating on code structure and module integration.",
    responsibilities: [
      "Engineered responsive full-stack modules using modern JavaScript (ES6+) and web concepts.",
      "Designed and integrated clean user interfaces prioritizing cross-device usability.",
      "Conducted code debugging, state management handling, and performance optimization.",
      "Awarded official Certificate of Completion (Student ID: CA/DF1/132132)."
    ],
    tech: ["JavaScript (ES6+)", "HTML5", "CSS3", "React.js", "Git"],
    verifyUrl: "https://drive.google.com/file/d/14iVg6byzUjMURBxQDYN_vAHxgOlrcoip/view?usp=sharing"
  },
  {
    id: 2,
    company: "CodSoft",
    role: "Web Development Intern",
    mode: "Virtual / Remote Internship",
    duration: "May 2026 – June 2026",
    issueDate: "June 2026",
    badge: "Internship Completed",
    shortSummary: "Developed interactive web utilities, responsive landing pages, and modular frontend components.",
    description: "Completed structured web development internship program focusing on building interactive digital tools, responsive web pages, and maintainable frontend layouts.",
    responsibilities: [
      "Developed interactive client-side applications including custom calculators, landing pages, and portfolio portals.",
      "Ensured mobile-first responsiveness and cross-browser compatibility across modern browsers.",
      "Practiced clean code modularity, Git workflow commits, and DOM manipulation efficiency."
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "React.js", "Vite", "GitHub"],
    verifyUrl: "https://drive.google.com/file/d/164MRX91FBB9OZTwzdnzxQPDcnSlGNfvh/view?usp=drive_link"
  }
];

const Experience = () => {
  // Track open entries - allow multiple or individual toggle
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleExpand(id);
    }
  };

  return (
    <section id="experience" className="experience-section section-reveal">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill-badge">
            <span className="badge-dot"></span>
            <span>Career Milestones</span>
          </div>
          <h2 className="section-title">
            Practical <span className="text-gradient">Internship Experience</span>
          </h2>
          <p className="section-subtitle">
            Structured development experience delivering production web interfaces and verified code solutions.
          </p>
        </div>

        {/* Experience Compact Interactive Timeline */}
        <div className="experience-timeline-container">
          <div className="timeline-central-guide"></div>

          <div className="experience-cards-wrapper">
            {experiences.map((exp, idx) => {
              const isExpanded = expandedId === exp.id;

              return (
                <motion.div
                  key={exp.id}
                  className={`experience-entry ${isExpanded ? 'is-active' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.12 }}
                >
                  {/* Timeline Pin */}
                  <div className="timeline-pin-wrapper">
                    <div className={`timeline-pin ${isExpanded ? 'active-pin' : ''}`}>
                      <Briefcase size={16} />
                    </div>
                  </div>

                  {/* Compact Interactive Card */}
                  <div
                    className={`exp-content-card glass-card exp-interactive-card ${isExpanded ? 'expanded' : ''}`}
                    onClick={() => toggleExpand(exp.id)}
                    onKeyDown={(e) => handleKeyDown(e, exp.id)}
                    tabIndex={0}
                    role="button"
                    aria-expanded={isExpanded}
                    aria-label={`${exp.role} at ${exp.company}. Click to ${isExpanded ? 'collapse' : 'expand'} details.`}
                  >
                    {/* Collapsed Header Summary View */}
                    <div className="exp-card-header-interactive">
                      <div className="exp-header-main">
                        <div className="exp-company-tag-row">
                          <span className="exp-company-name">{exp.company}</span>
                          <span className="exp-remote-badge">
                            <MapPin size={12} /> {exp.mode}
                          </span>
                        </div>
                        <h3 className="exp-role-title">{exp.role}</h3>

                        <div className="exp-meta-strip">
                          <div className="exp-meta-pill">
                            <Calendar size={13} />
                            <span>{exp.duration}</span>
                          </div>
                          {exp.studentId && (
                            <div className="exp-meta-pill cert-id-pill">
                              <Award size={13} />
                              <span>ID: {exp.studentId}</span>
                            </div>
                          )}
                        </div>

                        {/* Brief Summary (always visible in collapsed state) */}
                        <p className="exp-short-summary">{exp.shortSummary}</p>
                      </div>

                      {/* Expand Action Indicator */}
                      <div className="exp-expand-indicator-wrapper">
                        <span className="exp-expand-hint">
                          {isExpanded ? 'Hide Details' : 'View Details'}
                        </span>
                        <div className={`exp-chevron-circle ${isExpanded ? 'chevron-rotated' : ''}`}>
                          <ChevronDown size={18} />
                        </div>
                      </div>
                    </div>

                    {/* Expandable Deep Details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="exp-expanded-body"
                          onClick={(e) => e.stopPropagation()} // Prevent collapse when clicking links/buttons inside
                        >
                          <div className="exp-divider"></div>

                          <p className="exp-narrative">{exp.description}</p>

                          {/* Responsibilities Bullets */}
                          <div className="exp-responsibilities">
                            <h4 className="resp-heading">Key Contributions:</h4>
                            <ul className="resp-list">
                              {exp.responsibilities.map((item, rIdx) => (
                                <li key={rIdx} className="resp-item">
                                  <CheckCircle2 size={15} className="resp-check-icon" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Card Footer: Tech tags + View Certificate link */}
                          <div className="exp-card-footer">
                            <div className="exp-tech-tags">
                              {exp.tech.map((t, tIdx) => (
                                <span key={tIdx} className="tech-tag">{t}</span>
                              ))}
                            </div>

                            {exp.verifyUrl && (
                              <a
                                href={exp.verifyUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-outline exp-credential-btn"
                                aria-label={`View Certificate for ${exp.company} Internship`}
                              >
                                <span>View Certificate</span>
                                <ExternalLink size={14} />
                              </a>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
