import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import devAvatar from '../assets/dev_avatar.png';
import devAvatar2 from '../assets/dev_avatar_2.png';
import './Hero.css'; 

const roles = ["Web Developer", "React Developer", "Problem Solver", "Tech Enthusiast"];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [textOpacity, setTextOpacity] = useState(1);
  const [textY, setTextY] = useState(0);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Alternating images timer (every 3 seconds)
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setActiveImageIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(imageTimer);
  }, []);

  // Mouse Parallax Effect (subtle 5-8px parallax)
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      setMousePos({ x: x * 6, y: y * 6 }); // 6px maximum movement
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth Typing & Fade Transition
  useEffect(() => {
    let timer;
    const fullText = roles[currentRoleIndex];

    if (!isTypingComplete) {
      if (currentText.length < fullText.length) {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, 80);
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
      }, 400);
    }

    return () => clearTimeout(timer);
  }, [currentText, isTypingComplete, currentRoleIndex]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
            A passionate{' '}
            <span 
              className="typed-text"
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
            Turning ideas into functional web experiences through clean code, modern technologies, and continuous learning. Focused on building responsive applications, solving real-world problems, and growing as a developer every day.
          </motion.p>

          <motion.div 
            className="hero-status-badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
          >
            <span className="status-badge-dot"></span>
            <span className="status-badge-text">Available for Full Stack Developer Opportunities</span>
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
          <div 
            className="profile-img-parallax-container"
            style={{ 
              transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
              transition: 'transform 0.2s ease-out',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div className="profile-img-wrapper float-breathe-glow">
              <img 
                src={devAvatar} 
                alt="Arjan Ahmad Avatar 1" 
                className="profile-avatar" 
                style={{
                  opacity: activeImageIndex === 0 ? 1 : 0,
                  transform: activeImageIndex === 0 ? 'scale(1)' : 'scale(0.98)',
                  zIndex: activeImageIndex === 0 ? 3 : 2
                }}
              />
              <img 
                src={devAvatar2} 
                alt="Arjan Ahmad Avatar 2" 
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
