import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, Award, ExternalLink, FileCheck } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const certificationsData = [
    {
      id: 1,
      title: "Full Stack Development Internship Certificate",
      issuer: "CodeAlpha",
      date: "10 June 2026 – 10 July 2026",
      issueDate: "11 July 2026",
      certId: "Student ID: CA/DF1/132132",
      description: "Certificate of Completion awarded for active participation and work in the CodeAlpha Virtual Internship Program in Full Stack Development.",
      verifyUrl: "https://drive.google.com/file/d/164MRX91FBB9OZTwzdnzxQPDcnSlGNfvh/view?usp=drive_link"
    },
    {
      id: 2,
      title: "Ethical Hacking Bootcamp Certificate",
      issuer: "Physics Wallah",
      date: "19th August 2026",
      certId: "NO: fa4e7b83-4d50-4632-af87-8ec757ebcbef",
      description: "Successfully completed the Ethical Hacking Bootcamp Program covering security concepts, network vulnerabilities, and defensive protocols.",
      verifyUrl: "https://drive.google.com/file/d/1801Vp51hxu33gSdfYCm7K7pFTfc4IVMb/view?usp=drive_link"
    },
    {
      id: 3,
      title: "Buildathon Certificate of Participation",
      issuer: "Tech4Hack @ Thoughtworks Technology",
      date: "01st August 2026",
      certId: "Buildathon AI Participation",
      description: "Recognized for effort and enthusiasm toward learning AI during the Tech4Hack Buildathon hosted at Thoughtworks Technology.",
      verifyUrl: "https://drive.google.com/file/d/1801Vp51hxu33gSdfYCm7K7pFTfc4IVMb/view?usp=drive_link"
    },
    {
      id: 4,
      title: "Web Development Internship Certificate",
      issuer: "CodSoft",
      date: "May 2026 – June 2026",
      description: "Successfully completed a web development internship focused on building real-world web applications and responsive frontend user interfaces.",
      verifyUrl: "https://drive.google.com/file/d/164MRX91FBB9OZTwzdnzxQPDcnSlGNfvh/view?usp=drive_link"
    },
    {
      id: 5,
      title: "Top Lyria Artist – Music Night Edition",
      issuer: "Google Student Ambassador Program",
      date: "June 2026",
      description: "Recognized for creativity and innovation in AI-powered music generation using Google Lyria during the Google Ambassador program.",
      verifyUrl: "https://drive.google.com/file/d/1MI8h7jrfl5HnAsNzuTPrtVv0tYQ-9Tjf/view?usp=sharing"
    },
    {
      id: 6,
      title: "Cybersecurity Workshop: Hack With Smile",
      issuer: "Shri Ramswaroop Memorial University (SRMU)",
      date: "February 2026",
      description: "Participated in the cybersecurity workshop during VIVEKA 5.0 Techfest, exploring hands-on security concepts and ethical hacking fundamentals.",
      verifyUrl: "https://drive.google.com/file/d/1Ta9IYNJsUhZHY_KRw5364e1f0dlvlBvi/view?usp=drive_link"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.45,
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
          Verified <span className="text-gradient">Certifications</span>
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Official completion credentials from internships, hackathons, and security bootcamps.
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
                <Award size={26} className="cert-icon" />
              </div>
              <div className="cert-title-area">
                <h3 className="cert-title">{cert.title}</h3>
                <span className="cert-issuer">{cert.issuer}</span>
              </div>
            </div>

            <div className="cert-meta">
              <div className="cert-meta-item">
                <Calendar size={13} />
                <span>{cert.date}</span>
              </div>
              <div className="cert-meta-item verify-badge">
                <ShieldCheck size={13} />
                <span>Verified Credential</span>
              </div>
            </div>

            {cert.certId && (
              <div className="cert-id-tag">
                <FileCheck size={13} />
                <span>{cert.certId}</span>
              </div>
            )}

            <p className="cert-desc">{cert.description}</p>

            <div className="cert-actions">
              <a href={cert.verifyUrl} target="_blank" rel="noreferrer" className="btn btn-outline btn-cert-action">
                <span>View Certificate Document</span> <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
