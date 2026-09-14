import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Sparkles, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  const getPlaceholderStyle = (id, isFeatured) => {
    if (isFeatured) {
      return 'linear-gradient(135deg, rgba(6, 182, 212, 0.35) 0%, rgba(139, 92, 246, 0.35) 100%)';
    }
    switch(id) {
      case 2:
        return 'linear-gradient(135deg, rgba(56, 189, 248, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)';
      case 3:
        return 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(249, 115, 22, 0.2) 100%)';
      case 4:
        return 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)';
      default:
        return 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)';
    }
  };

  return (
    <motion.div 
      className={`project-card glass-card ${project.isFeatured ? 'featured-card' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="project-card-image">
        <div 
          className="project-card-bg"
          style={{ background: getPlaceholderStyle(project.id, project.isFeatured) }}
        />
        <div className="project-placeholder-overlay">
          {project.badgeText && (
            <span className={`project-badge-tag ${project.isFeatured ? 'badge-featured' : ''}`}>
              {project.isFeatured && <Sparkles size={12} className="badge-sparkle" />}
              {project.badgeText}
            </span>
          )}
          <span className="project-icon-placeholder">
            {project.isFeatured ? <Globe size={36} /> : project.title.charAt(0)}
          </span>
        </div>
      </div>

      <div className="project-card-content">
        <div className="project-header-row">
          <h3 className="project-card-title">{project.title}</h3>
          {project.isFeatured && (
            <span className="live-status-pill">
              <span className="live-dot"></span> Live Project
            </span>
          )}
        </div>

        <p className="project-card-description">{project.description}</p>
        
        <div className="project-card-tech">
          {project.tech.map((t, idx) => (
            <span key={idx} className="tech-tag">{t}</span>
          ))}
        </div>

        <div className="project-card-actions">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-project-action" aria-label="GitHub Repository">
              <FiGithub size={16} /> <span>Code</span>
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary btn-project-action" aria-label="Live Demo">
              <FiExternalLink size={16} /> <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
