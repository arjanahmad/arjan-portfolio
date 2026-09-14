import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download, Terminal, Sparkles } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import devAvatar from '../assets/dev_avatar.png';
import devAvatar2 from '../assets/dev_avatar_2.jpg';
import './Hero.css'; 

const roles = [
  "Full Stack Developer",
  "BCA Graduate",
  "React.js Specialist",
  "Security Enthusiast"
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [textOpacity, setTextOpacity] = useState(1);
  const [textY, setTextY] = useState(0);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Alternating images timer (every 3.5 seconds)
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setActiveImageIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3500);
    return () => clearInterval(imageTimer);
  }, []);

  // Mouse Parallax Effect (subtle parallax)
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      setMousePos({ x: x * 6, y: y * 6 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing & Fade Transition
  useEffect(() => {
    let timer;
    const fullText = roles[currentRoleIndex];

    if (!isTypingComplete) {
      if (currentText.length < fullText.length) {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, 75);
      } else {
        setIsTypingComplete(true);
        timer = setTimeout(() => {
          setTextOpacity(0);
          setTextY(-5);
        }, 1800);
      }
    } else {
      timer = setTimeout(() => {
        const nextIndex = (currentRoleIndex + 1) % roles.length;
        setCurrentRoleIndex(nextIndex);
        setCurrentText("");
        setIsTypingComplete(false);
        setTextOpacity(1);
        setTextY(5);
        setTimeout(() => setTextY(0), 50);
      }, 350);
    }

    return () => clearTimeout(timer);
  }, [currentText, isTypingComplete, currentRoleIndex]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section container section-reveal">
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
            <Sparkles size={14} className="hero-badge-icon" />
            <span>BCA Graduate | Aspiring Full Stack Developer</span>
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
            <Terminal size={20} className="inline-terminal-icon" />
            <span className="typing-prefix">Specializing in</span>{' '}
            <span 
              className="typed-text text-gradient-cyan"
              style={{
                opacity: textOpacity,
                transform: `translateY(${textY}px)`,
                transition: 'opacity 0.4s cubic-bezier(0.22, 0.61, 0.36, 1), transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1)',
                display: 'inline-block'
              }}
            >
              {currentText}
            </span>
            <span className="typing-cursor">|</span>
          </motion.h2>

          <motion.p 
            className="hero-desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Building responsive, user-focused web applications with clean code, scalable architecture, and modern frameworks. BCA graduate with hands-on full-stack internship experience and an active interest in cybersecurity.
          </motion.p>

          <motion.div 
            className="hero-status-badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
          >
            <span className="status-badge-dot"></span>
            <span className="status-badge-text">Available for Full Stack Developer Roles</span>
          </motion.div>

          <motion.div 
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a href="https://github.com/arjanahmad" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/arjan-ahmad-srmu" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
            <a href="mailto:arjanahmad7861@gmail.com" className="hero-social-link" aria-label="Email">
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
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline">
              Resume <Download size={16} />
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
          <div 
            className="profile-img-parallax-container"
            style={{ 
              transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
              transition: 'transform 0.2s ease-out'
            }}
          >
            <div className="profile-img-wrapper float-breathe-glow">
              <img 
                src={devAvatar} 
                alt="Arjan Ahmad Developer Avatar 1" 
                className="profile-avatar" 
                style={{
                  opacity: activeImageIndex === 0 ? 1 : 0,
                  transform: activeImageIndex === 0 ? 'scale(1)' : 'scale(0.98)',
                  zIndex: activeImageIndex === 0 ? 3 : 2
                }}
              />
              <img 
                src={devAvatar2} 
                alt="Arjan Ahmad Developer Avatar 2" 
                className="profile-avatar" 
                style={{
                  opacity: activeImageIndex === 1 ? 1 : 0,
                  transform: activeImageIndex === 1 ? 'scale(1)' : 'scale(0.98)',
                  zIndex: activeImageIndex === 1 ? 3 : 2
                }}
              />
              <div className="avatar-ring ring-cyan"></div>
              <div className="avatar-ring ring-violet"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
