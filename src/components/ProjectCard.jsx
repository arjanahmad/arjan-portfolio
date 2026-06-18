import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  // SVG background styling matching project theme
  const getPlaceholderStyle = (id) => {
    switch(id) {
      case 1:
        return 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)';
      case 2:
        return 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(249, 115, 22, 0.2) 100%)';
      case 3:
        return 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)';
      default:
        return 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.1) 100%)';
    }
  };

  const getAccentColor = (id) => {
    switch(id) {
      case 1: return 'var(--primary-cyan)';
      case 2: return '#ef4444'; // red for gaming
      case 3: return '#10b981'; // green for utility/calc
      default: return 'var(--primary-cyan)';
    }
  };

  return (
    <motion.div 
      className="project-card glass-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div 
        className="project-card-image" 
        style={{ background: getPlaceholderStyle(project.id) }}
      >
        <div className="project-placeholder-overlay">
          <span className="project-badge-tag" style={{ backgroundColor: getAccentColor(project.id) }}>
            {project.category}
          </span>
          <span className="project-icon-placeholder" style={{ color: getAccentColor(project.id) }}>
            {project.title.charAt(0)}
          </span>
        </div>
      </div>

      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>
        
        <div className="project-card-tech">
          {project.tech.map((t, idx) => (
            <span key={idx} className="tech-tag">{t}</span>
          ))}
        </div>

        <div className="project-card-actions">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-project-action" aria-label="GitHub Repository">
            <FiGithub size={16} /> <span>Code</span>
          </a>
          <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary btn-project-action" aria-label="Live Demo">
            <FiExternalLink size={16} /> <span>Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );

};

export default ProjectCard;
