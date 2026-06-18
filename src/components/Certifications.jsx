import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, Award, ExternalLink } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const certificationsData = [
    {
      id: 1,
      title: "Web Development Internship",
      issuer: "CODSOFT",
      date: "June 2025 - July 2025",
      description: "Successfully completed a intensive internship focused on building real-world web applications. Designed responsive layouts, implemented dynamic features using modern frontend technologies, and collaborated on clean codebases.",
      verifyUrl: "#"
    },
    {
      id: 2,
      title: "Coding Competition Participation",
      issuer: "CodeX",
      date: "October 2025",
      description: "Participated in the CodeX coding competition, solving complex algorithmic challenges and optimizing data structure operations under tight time constraints. Earned recognized ranking for speed and accuracy.",
      verifyUrl: "#"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="certifications" className="certifications-section container">
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Licenses & <span className="text-gradient">Certifications</span>
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Key milestones representing academic excellence, internships, and competitive programming achievements.
        </motion.p>
      </div>

      <div className="certifications-grid">
        {certificationsData.map((cert, idx) => (
          <motion.div
            key={cert.id}
            className="cert-card glass-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
            whileHover={{ y: -5, borderColor: 'rgba(139, 92, 246, 0.3)' }}
          >
            <div className="cert-card-header">
              <div className="cert-icon-wrapper">
                <Award size={28} className="cert-icon" />
              </div>
              <div className="cert-title-area">
                <h3 className="cert-title">{cert.title}</h3>
                <span className="cert-issuer">{cert.issuer}</span>
              </div>
            </div>

            <div className="cert-meta">
              <div className="cert-meta-item">
                <Calendar size={14} />
                <span>{cert.date}</span>
              </div>
              <div className="cert-meta-item verify-badge">
                <ShieldCheck size={14} />
                <span>Verified Credential</span>
              </div>
            </div>

            <p className="cert-desc">{cert.description}</p>

            <div className="cert-actions">
              <a href={cert.verifyUrl} target="_blank" rel="noreferrer" className="btn btn-outline btn-cert-action">
                <span>View Credential</span> <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
