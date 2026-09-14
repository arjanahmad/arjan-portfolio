import { motion } from 'framer-motion';
import { GraduationCap, Target, Shield, Heart, CheckCircle2 } from 'lucide-react';
import './About.css';

const About = () => {
  const cards = [
    {
      icon: <Target className="about-icon icon-cyan" size={24} />,
      title: "Career Focus",
      content: "BCA graduate dedicated to building modern full-stack web applications. Seeking an entry-level Full Stack Developer role to deliver responsive, maintainable frontend interfaces and reliable backend systems."
    },
    {
      icon: <GraduationCap className="about-icon icon-violet" size={24} />,
      title: "Education",
      institution: "Shri Ramswaroop Memorial University (SRMU)",
      degree: "Bachelor of Computer Applications (BCA)",
      duration: "2023 - 2026 | Lucknow, India",
      content: "Core fundamentals in Computer Science, Database Management Systems (DBMS), Web Development, and Object-Oriented Programming (Java / C++)."
    },
    {
      icon: <Shield className="about-icon icon-cyan" size={24} />,
      title: "Security & Exploration",
      content: "Actively deepening knowledge in cybersecurity fundamentals, Linux operating environments (Kali Linux), ethical hacking basics, and web application security standards."
    },
    {
      icon: <Heart className="about-icon icon-violet" size={24} />,
      title: "Key Strengths",
      bullets: [
        "Full-stack web application development with React & Web APIs.",
        "Proactive self-learner adapt at picking up new frameworks fast.",
        "Strong problem-solving foundation in Data Structures & OOP.",
        "Collaborative mindset with clear technical communication."
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.12,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="about" className="about-section container section-reveal">
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Aspiring full-stack software developer committed to clean code, responsive design, and continuous security learning.
        </motion.p>
      </div>

      <div className="about-intro-grid">
        <motion.div 
          className="about-bio glass-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="bio-title">Developer Mindset & Background</h3>
          <p className="bio-text">
            I am a <strong>Bachelor of Computer Applications (BCA)</strong> graduate from Shri Ramswaroop Memorial University with a passion for building user-centric web applications. My practical experience spans modern JavaScript, React.js, HTML/CSS, and backend concepts, enhanced through hands-on virtual internships at <strong>CodeAlpha</strong> and <strong>CodSoft</strong>.
          </p>
          <p className="bio-text">
            In addition to full-stack web development, I have a strong interest in <strong>cybersecurity and Linux administration</strong>. I regularly explore system architecture, ethical hacking fundamentals, and Kali Linux toolsets to build applications with security in mind from day one.
          </p>
        </motion.div>
      </div>

      <div className="about-cards-grid">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className="about-card glass-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
          >
            <div className="about-card-header">
              {card.icon}
              <h3 className="about-card-title">{card.title}</h3>
            </div>
            
            {card.degree && (
              <div className="about-education-details">
                <span className="edu-degree">{card.degree}</span>
                <span className="edu-institution">{card.institution}</span>
                <span className="edu-duration">{card.duration}</span>
              </div>
            )}

            {card.content && <p className="about-card-desc">{card.content}</p>}

            {card.bullets && (
              <ul className="about-bullets">
                {card.bullets.map((bullet, index) => (
                  <li key={index} className="about-bullet-item">
                    <CheckCircle2 size={16} className="bullet-icon" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
