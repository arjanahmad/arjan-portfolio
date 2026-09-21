import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Globe, CheckCircle2, FileText, Layers } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  const getCardHeaderGradient = (id) => {
    switch(id) {
      case 1:
        return 'linear-gradient(135deg, rgba(6, 182, 212, 0.28) 0%, rgba(59, 130, 246, 0.28) 50%, rgba(139, 92, 246, 0.28) 100%)';
      case 2:
        return 'linear-gradient(135deg, rgba(16, 185, 129, 0.28) 0%, rgba(6, 182, 212, 0.28) 100%)';
      case 3:
        return 'linear-gradient(135deg, rgba(99, 102, 241, 0.28) 0%, rgba(168, 85, 247, 0.28) 100%)';
      case 4:
        return 'linear-gradient(135deg, rgba(249, 115, 22, 0.28) 0%, rgba(239, 68, 68, 0.28) 100%)';
      case 5:
        return 'linear-gradient(135deg, rgba(56, 189, 248, 0.28) 0%, rgba(59, 130, 246, 0.28) 100%)';
      default:
        return 'linear-gradient(135deg, rgba(6, 182, 212, 0.28) 0%, rgba(139, 92, 246, 0.28) 100%)';
    }
  };

  const getProjectIcon = (id) => {
    switch(id) {
      case 1:
        return <FileText size={32} className="project-banner-icon text-cyan" />;
      case 2:
        return <Globe size={32} className="project-banner-icon text-green" />;
      case 3:
        return <Layers size={32} className="project-banner-icon text-violet" />;
      default:
        return <Sparkles size={32} className="project-banner-icon text-cyan" />;
    }
  };

  return (
    <motion.article 
      layout
      className="project-saas-card glass-card"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      {/* Banner / Visual Top */}
      <div 
        className="project-card-banner"
        style={{ background: getCardHeaderGradient(project.id) }}
      >
        <div className="banner-top-row">
          <span className={`project-status-pill ${project.badgeType}`}>
            {project.badgeType === 'live' && <span className="live-pulse-dot"></span>}
            {project.badgeType === 'featured' && <Sparkles size={12} className="sparkle-ico" />}
            {project.badgeText}
          </span>
          <span className="project-period">{project.period}</span>
        </div>
        <div className="banner-visual-center">
          {getProjectIcon(project.id)}
        </div>
      </div>

      {/* Card Body */}
      <div className="project-card-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-summary">{project.summary}</p>

        {/* Highlight Bullets */}
        <ul className="project-feature-list">
          {project.highlights.map((bullet, bIdx) => (
            <li key={bIdx} className="feature-item">
              <CheckCircle2 size={15} className="feature-check-icon" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Tech Badges */}
        <div className="project-tech-row">
          {project.tech.map((t, tIdx) => (
            <span key={tIdx} className="tech-tag">{t}</span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="project-actions-row">
          {project.live && (
            <a 
              href={project.live} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-primary btn-action"
              aria-label={`Open Live Demo for ${project.title}`}
            >
              <span>Live Demo</span>
              <ExternalLink size={15} />
            </a>
          )}

          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-outline btn-action"
              aria-label={`View Source Code for ${project.title} on GitHub`}
            >
              <FiGithub size={15} />
              <span>Code</span>
            </a>
          )}

          {!project.live && !project.github && (
            <span className="internal-tag">Personal Portfolio Project</span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
