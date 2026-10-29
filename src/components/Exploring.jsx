import { motion } from 'framer-motion';
import { Store, Shield } from 'lucide-react';
import './Exploring.css';

const exploringCards = [
  {
    id: 1,
    title: "Freelancing & Local Business Websites",
    icon: <Store size={24} className="explore-icon text-cyan" />,
    badge: "Community Initiative",
    description: "I am reaching out to local shops and businesses to offer free website development, helping them establish an online presence while improving my practical development experience.",
    tag: "Practical Experience & Web Building"
  },
  {
    id: 2,
    title: "Cybersecurity & Kali Linux",
    icon: <Shield size={24} className="explore-icon text-violet" />,
    badge: "Continuous Learning",
    description: "I am exploring Kali Linux and strengthening my understanding of cybersecurity fundamentals, with a long-term goal of pursuing ethical hacking.",
    tag: "Security Fundamentals & Lab Exploration"
  }
];

const Exploring = () => {
  return (
    <section id="exploring" className="exploring-section section-reveal">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill-badge">
            <span className="badge-dot"></span>
            <span>Continuous Growth</span>
          </div>
          <h2 className="section-title">
            Currently <span className="text-gradient">Exploring</span>
          </h2>
          <p className="section-subtitle">
            Current self-directed learning paths and practical initiatives to expand development and technical capabilities.
          </p>
        </div>

        {/* Compact Two-Card Layout */}
        <div className="exploring-two-card-grid">
          {exploringCards.map((card, idx) => (
            <motion.div
              key={card.id}
              className="explore-minimal-card glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.12 }}
            >
              <div className="explore-card-top-bar">
                <div className="explore-icon-circle">
                  {card.icon}
                </div>
                <span className="explore-pill">{card.badge}</span>
              </div>

              <h3 className="explore-heading">{card.title}</h3>
              <p className="explore-text">{card.description}</p>

              <div className="explore-footer-tag">
                <span className="explore-subtag">{card.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exploring;
