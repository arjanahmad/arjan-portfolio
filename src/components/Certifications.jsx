import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, Award, ExternalLink } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const certificationsData = [
    {
      id: 1,
      title: "Web Development Internship",
      issuer: "CODSOFT",
      date: "May 2026 - June 2026",
      description: "Successfully completed a intensive internship focused on building real-world web applications. Designed responsive layouts, implemented dynamic features using modern frontend technologies, and collaborated on clean codebases.",
      verifyUrl: "https://drive.google.com/file/d/164MRX91FBB9OZTwzdnzxQPDcnSlGNfvh/view?usp=drive_link"
    },
    {
      id: 2,
      title: "Coding Competition Participation",
      issuer: "CodeX",
      date: "February 2026",
      description: "Participated in the CodeX coding competition, solving complex algorithmic challenges and optimizing data structure operations under tight time constraints. Earned recognized ranking for speed and accuracy.",
      verifyUrl: "https://drive.google.com/file/d/1801Vp51hxu33gSdfYCm7K7pFTfc4IVMb/view?usp=drive_link"
    },
    
     {
  id: 3,
  title: "Cybersecurity Workshop: Hack With Smile",
  issuer: "Shri Ramswaroop Memorial University (SRMU)",
  date: "February 2026",
  description: "Participated in the 'Hack With Smile' Cybersecurity Workshop during VIVEKA: The Intelligence 5.0 Techfest, gaining exposure to cybersecurity concepts, ethical hacking, and security best practices.",
  verifyUrl: "https://drive.google.com/file/d/1Ta9IYNJsUhZHY_KRw5364e1f0dlvlBvi/view?usp=drive_link"
},
  
     {
     
  id: 4,
  title: "Esports & Gaming Competition Participation",
  issuer: "Tech Fusion Club, SRMU",
  date: "March 2024",
  description: "Participated in a university-level esports competition, demonstrating strategic thinking, teamwork, quick decision-making, and adaptability in a competitive environment.",
  verifyUrl: "https://drive.google.com/file/d/1ZrgdxhCKO5xQkT4P8pECj0jzhFM5_CJx/view?usp=sharing"
},
{
  id: 5,
  title: "Esports & Gaming Competition Participation",
  issuer: "Tech Fusion Club, SRMU",
  date: "February 2026",
  description: "Participated in a university-level Free Fire esports competition during VIVEKA: The Intelligence 5.0, demonstrating strategic thinking, teamwork, adaptability, and quick decision-making in a highly competitive environment.",
  verifyUrl: "https://drive.google.com/file/d/1bEHwqBwho3kkWEIFR5j64vyBtdPdjoUa/view?usp=sharing"
},

{
  id: 6,
  title: "Top Lyria Artist – Music Night Edition",
  issuer: "Google Student Ambassador Program",
  date: "June 2026",
  description: "Recognized for creativity and innovation in AI-powered music generation using Google Lyria. Demonstrated strong prompt engineering skills, creative thinking, and the ability to transform ideas into unique musical experiences during Music Night Edition.",
  verifyUrl: "https://drive.google.com/file/d/1MI8h7jrfl5HnAsNzuTPrtVv0tYQ-9Tjf/view?usp=sharing"
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
    <section id="certifications" className="certifications-section container section-reveal">
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
