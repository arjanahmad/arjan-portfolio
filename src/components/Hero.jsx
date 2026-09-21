import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, PhoneCall, Mail, Sparkles, Code, CheckCircle2, Shield } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import devAvatar from '../assets/dev_avatar.png';
import devAvatar2 from '../assets/dev_avatar_2.jpg';
import './Hero.css';

const roles = [
  "Frontend Developer",
  "BCA Graduate (SRMU)",
  "Web Application Builder",
  "UI & Usability Specialist",
  "Cybersecurity Enthusiast"
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Subtle image crossfade every 4 seconds
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setActiveImageIndex((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(imageTimer);
  }, []);

  // Role typing effect
  useEffect(() => {
    let timer;
    const fullText = roles[currentRoleIndex];

    if (!isTypingComplete) {
      if (currentText.length < fullText.length) {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, 70);
      } else {
        setIsTypingComplete(true);
        timer = setTimeout(() => {
          setIsTypingComplete(false);
          setCurrentText("");
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2200);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isTypingComplete, currentRoleIndex]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 90;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column: Personal Positioning & Call-to-Actions */}
          <motion.div 
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            {/* Live Status Badge */}
            <div className="hero-status-pill">
              <span className="live-status-dot"></span>
              <span className="hero-status-text">Available for Frontend & Full-Stack Roles</span>
            </div>

            <h1 className="hero-heading">
              Hi, I'm <span className="text-gradient">Arjan Ahmad</span>
            </h1>

            <div className="hero-role-row">
              <span className="role-prefix">Specialized in</span>
              <span className="role-dynamic text-gradient-cyan">
                {currentText}
                <span className="role-cursor">|</span>
              </span>
            </div>

            <p className="hero-summary">
              BCA graduate from <strong>Shri Ramswaroop Memorial University</strong> with hands-on 
              internship experience at <strong>CodeAlpha</strong> and <strong>CodSoft</strong>. 
              I design and build fast, responsive, and accessible web applications with clean code, modern JavaScript (ES6+), React, and intuitive UI/UX.
            </p>

            {/* Quick Metrics Bar */}
            <div className="hero-quick-metrics">
              <div className="metric-badge">
                <CheckCircle2 size={14} className="metric-icon" />
                <span>BCA Graduate '26</span>
              </div>
              <div className="metric-badge">
                <Code size={14} className="metric-icon" />
                <span>2+ Internships</span>
              </div>
              <div className="metric-badge">
                <Shield size={14} className="metric-icon" />
                <span>Security Aware</span>
              </div>
            </div>

            {/* Primary & Secondary CTA System */}
            <div className="hero-cta-group">
              {/* High-priority Call Me Now action */}
              <a 
                href="tel:+916388451366" 
                className="btn btn-call hero-btn-call"
                aria-label="Direct Phone Call to Arjan Ahmad"
              >
                <PhoneCall size={18} />
                <span>Call Me Now</span>
              </a>

              {/* Secondary CTA: Projects */}
              <button 
                className="btn btn-primary" 
                onClick={() => handleScrollTo('projects')}
                aria-label="View Projects Section"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </button>

              {/* Secondary CTA: Resume Download */}
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline"
                download="Arjan_Ahmad_Resume.pdf"
                aria-label="Download Official Resume PDF"
              >
                <Download size={16} />
                <span>Resume</span>
              </a>
            </div>

            {/* Quick Contact & Social Strip */}
            <div className="hero-contact-strip">
              <span className="strip-label">Direct Connect:</span>
              <div className="strip-links">
                <a 
                  href="tel:+916388451366" 
                  className="quick-link phone-link" 
                  title="Direct Call"
                >
                  <PhoneCall size={15} />
                  <span>+91 6388451366</span>
                </a>
                <a 
                  href="mailto:arjanahmad7861@gmail.com" 
                  className="quick-link email-link" 
                  title="Send Email"
                >
                  <Mail size={15} />
                  <span>arjanahmad7861@gmail.com</span>
                </a>
                <a 
                  href="https://github.com/arjanahmad" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="quick-social" 
                  aria-label="GitHub Profile"
                >
                  <FiGithub size={17} />
                </a>
                <a 
                  href="https://linkedin.com/in/arjan-ahmad-srmu" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="quick-social" 
                  aria-label="LinkedIn Profile"
                >
                  <FiLinkedin size={17} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Showcase Card */}
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <div className="avatar-card-container">
              <div className="avatar-frame">
                <img 
                  src={devAvatar} 
                  alt="Arjan Ahmad - Frontend Developer" 
                  className="avatar-photo" 
                  style={{
                    opacity: activeImageIndex === 0 ? 1 : 0,
                    zIndex: activeImageIndex === 0 ? 2 : 1
                  }}
                />
                <img 
                  src={devAvatar2} 
                  alt="Arjan Ahmad - Software Developer" 
                  className="avatar-photo" 
                  style={{
                    opacity: activeImageIndex === 1 ? 1 : 0,
                    zIndex: activeImageIndex === 1 ? 2 : 1
                  }}
                />
              </div>

              {/* Floating Highlight Chips */}
              <div className="floating-badge badge-top-right glass-card">
                <Sparkles size={16} className="badge-sparkle-icon" />
                <div>
                  <strong>CodeX Top Performer</strong>
                  <small>SRMU Techfest</small>
                </div>
              </div>

              <div className="floating-badge badge-bottom-left glass-card">
                <Code size={16} className="badge-code-icon" />
                <div>
                  <strong>Modern Web Stack</strong>
                  <small>React • JavaScript • CSS3</small>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
