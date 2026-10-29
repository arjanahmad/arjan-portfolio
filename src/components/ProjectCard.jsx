import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Sparkles,
  Globe,
  CheckCircle2,
  FileText,
  Layers,
  Gamepad2,
  Calculator,
  ChevronDown
} from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleExpand();
    }
  };

  const getProjectIcon = (id) => {
    switch (id) {
      case 1:
        return <FileText size={22} className="project-icon text-cyan" />;
      case 2:
        return <Globe size={22} className="project-icon text-green" />;
      case 3:
        return <Layers size={22} className="project-icon text-violet" />;
      case 4:
        return <Gamepad2 size={22} className="project-icon text-cyan" />;
      case 5:
        return <Calculator size={22} className="project-icon text-violet" />;
      default:
        return <Sparkles size={22} className="project-icon text-cyan" />;
    }
  };

  return (
    <motion.article
      layout
      className={`project-compact-card glass-card ${isExpanded ? 'is-expanded' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
    >
      {/* Compact Default State: Header with Name, Icon, Badge, Arrow */}
      <div
        className="project-card-compact-header"
        onClick={toggleExpand}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-expanded={isExpanded}
        aria-label={`${project.title}. Click to ${isExpanded ? 'collapse' : 'expand'} project details.`}
      >
        <div className="project-header-left">
          <div className="project-icon-box">
            {getProjectIcon(project.id)}
          </div>
          <div className="project-title-meta">
            <div className="project-badge-row">
              <span className={`project-pill ${project.badgeType}`}>
                {project.badgeType === 'live' && <span className="live-dot"></span>}
                {project.badgeText}
              </span>
              <span className="project-category-tag">{project.category}</span>
            </div>
            <h3 className="project-name">{project.title}</h3>
          </div>
        </div>

        <div className="project-header-right">
          <span className="project-expand-hint">
            {isExpanded ? 'Hide Details' : 'Details'}
          </span>
          <div className={`project-expand-arrow ${isExpanded ? 'arrow-active' : ''}`}>
            <ChevronDown size={18} />
          </div>
        </div>
      </div>

      {/* Expandable Details on Click */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="project-expanded-content"
          >
            <div className="project-content-divider"></div>

            {/* Description */}
            <p className="project-full-summary">{project.summary}</p>

            {/* Features / Highlights */}
            <div className="project-features-block">
              <h4 className="project-subheading">Key Highlights & Architecture:</h4>
              <ul className="project-features-list">
                {project.highlights.map((bullet, bIdx) => (
                  <li key={bIdx} className="project-feature-item">
                    <CheckCircle2 size={15} className="feature-check" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="project-tech-block">
              <h4 className="project-subheading">Technologies Used:</h4>
              <div className="project-tech-tags">
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>

            {/* Actions: Live Demo + GitHub */}
            <div className="project-actions-block">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-sm-action"
                  aria-label={`Open Live Demo for ${project.title}`}
                >
                  <span>Live Demo</span>
                  <ExternalLink size={14} />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-sm-action"
                  aria-label={`View Source Code for ${project.title} on GitHub`}
                >
                  <FiGithub size={15} />
                  <span>View Code</span>
                </a>
              )}

              {!project.live && !project.github && (
                <span className="internal-tag">Personal Portfolio Project</span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

export default ProjectCard;
