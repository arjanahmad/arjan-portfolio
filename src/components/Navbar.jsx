import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { name: 'Home', targetId: 'home' },
  { name: 'About', targetId: 'about' },
  { name: 'Experience', targetId: 'experience' },
  { name: 'Skills', targetId: 'skills' },
  { name: 'Projects', targetId: 'projects' },
  { name: 'Certifications', targetId: 'certifications' },
  { name: 'Exploring', targetId: 'exploring' },
  { name: 'Contact', targetId: 'contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -40% 0px',
      threshold: 0.15
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const element = document.getElementById(link.targetId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      navLinks.forEach((link) => {
        const element = document.getElementById(link.targetId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(targetId);
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
    <header className="navbar-wrapper">
      <nav className={`navbar-floating ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="navbar-inner">
          <a 
            href="#home" 
            className="navbar-brand" 
            onClick={(e) => handleLinkClick(e, 'home')}
            aria-label="Arjan Ahmad Homepage"
          >
            <div className="brand-badge">AA</div>
            <span className="brand-name">
              ARJAN <span className="text-gradient">AHMAD</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-menu" role="menubar">
            {navLinks.map((link) => {
              const isActive = activeSection === link.targetId;
              return (
                <li key={link.name} className="nav-item" role="none">
                  <a
                    href={`#${link.targetId}`}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, link.targetId)}
                    role="menuitem"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activePill"
                        className="active-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Controls: Call Me Now + Theme Toggle + Mobile Menu Icon */}
          <div className="navbar-actions">
            <a 
              href="tel:+916388451366" 
              className="navbar-call-btn" 
              aria-label="Call Arjan Ahmad Now at +91 6388451366"
            >
              <PhoneCall size={14} className="call-icon-pulse" />
              <span>Call Me Now</span>
            </a>

            <button 
              className="theme-toggle-btn" 
              onClick={toggleTheme} 
              aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Mobile Hamburger Icon */}
            <button 
              className="nav-hamburger" 
              onClick={() => setIsOpen(!isOpen)} 
              aria-expanded={isOpen}
              aria-label="Toggle Mobile Navigation Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="mobile-drawer"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="mobile-nav-list">
                {navLinks.map((link) => (
                  <li key={link.name} className="mobile-nav-item">
                    <a
                      href={`#${link.targetId}`}
                      className={`mobile-nav-link ${activeSection === link.targetId ? 'active' : ''}`}
                      onClick={(e) => handleLinkClick(e, link.targetId)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mobile-drawer-footer">
                <a href="tel:+916388451366" className="mobile-call-action">
                  <PhoneCall size={16} />
                  <span>Call: +91 6388451366</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
