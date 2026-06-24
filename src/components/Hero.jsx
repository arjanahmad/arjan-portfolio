import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import devAvatar from '../assets/dev_avatar.png';
import './Hero.css'; 
const roles = ["Web Developer", "React Developer", "Problem Solver", "Tech Enthusiast"];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section container">
      <div className="hero-grid">
        <motion.div 
          className="hero-text-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            BCA Graduate | Aspiring Full Stack Developer
          </motion.div>
          
          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Hi, I'm <span className="text-gradient">Arjan Ahmad</span>
          </motion.h1>

          <motion.h2 
            className="hero-typing-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            A passionate <span className="typed-text">{currentText}</span>
            <span className="typing-cursor">|</span>
          </motion.h2>

          <motion.p 
            className="hero-desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Turning ideas into functional web experiences through clean code, modern technologies, and continuous learning. Focused on building responsive applications, solving real-world problems, and growing as a developer every day.
            {/*Welcome to my space. I specialize in designing and building clean, high-performance web applications, 
            focusing on modern architectures, responsive layouts, and robust user experiences.*/}
          </motion.p>

          <motion.div 
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
            <a href="mailto:arjan.ahmad@example.com" className="hero-social-link" aria-label="Email">
              <Mail size={20} />
            </a>
          </motion.div>

          <motion.div 
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <button className="btn btn-primary" onClick={() => handleScrollTo('projects')}>
              View Projects <ArrowRight size={16} />
            </button>
            <a href="/resume.pdf" download className="btn btn-outline">
              Download Resume <Download size={16} />
            </a>
            <button className="btn btn-outline" onClick={() => handleScrollTo('contact')}>
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image-content"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="profile-img-wrapper">
            <img src={devAvatar} alt="Arjan Ahmad Avatar" className="profile-avatar" />
            <div className="avatar-ring ring-cyan"></div>
            <div className="avatar-ring ring-violet"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
