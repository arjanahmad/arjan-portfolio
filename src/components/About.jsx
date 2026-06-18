import { motion } from 'framer-motion';
import { GraduationCap, Target, Award, Heart, CheckCircle2 } from 'lucide-react';
import './About.css';

const About = () => {
  const cards = [
    {
      icon: <Target className="about-icon icon-cyan" size={24} />,
      title: "Career Objective",
      content: "BCA graduate seeking to leverage technical knowledge and developer skills in a Full Stack Developer role. Committed to building robust, accessible, and high-performance applications while staying updated with cybersecurity best practices and modern cloud architectures."
    },
    {
      icon: <GraduationCap className="about-icon icon-violet" size={24} />,
      title: "Education",
      institution: "Shri Ramswaroop Memorial University (SRMU)",
      degree: "Bachelor of Computer Applications (BCA)",
      duration: "Class of 2026 | Lucknow, India",
      content: "Focused on core computer science concepts, database management, web design, and structured programming. Actively participated in technical societies and projects."
    },
    {
      icon: <Award className="about-icon icon-cyan" size={24} />,
      title: "Strengths",
      bullets: [
        "Rapid technology adaptation & continuous self-learning.",
        "Analytical debugging & structured problem solving.",
        "High attention to details in UX and responsive web structures.",
        "Collaborative communicator and dedicated team player."
      ]
    },
    {
      icon: <Heart className="about-icon icon-violet" size={24} />,
      title: "Interests",
      bullets: [
        "Full-Stack Architecture & Modern SaaS Platforms.",
        "Cybersecurity, Network Security, and ethical web penetration testing.",
        "Open-source software contribution and community developer meetups.",
        "Exploring emerging AI, LLMs integration in web interfaces."
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="about" className="about-section container">
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
          An aspiring developer bridging design aesthetics with logical, secure engineering.
        </motion.p>
      </div>

      <div className="about-intro-grid">
        <motion.div 
          className="about-bio glass-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="bio-title">Hello, I'm Arjan Ahmad</h3>
          <p className="bio-text">
            I am a highly motivated computer applications graduate specializing in web engineering. I believe in 
            crafting web experiences that aren't just visually engaging, but also highly performant, accessible, and secure. 
            Throughout my academic journey, I have focused on mastering HTML, CSS, JavaScript, and React while keeping a strong foundation 
            in core programming principles and systems.
          </p>
          <p className="bio-text">
            Beyond regular coding, I'm deeply fascinated by IT infrastructures and cybersecurity, analyzing how protocols operate and 
            engineering components with defense-in-depth in mind. I love to design responsive modules and build products that bring solutions 
            to real-world user problems.
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
