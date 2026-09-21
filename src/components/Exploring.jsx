import { motion } from 'framer-motion';
import { Terminal, ShieldAlert, Cpu, Lock, CheckCircle2, Flame } from 'lucide-react';
import './Exploring.css';

const explorationTopics = [
  {
    id: 1,
    title: "Kali Linux & CLI Administration",
    icon: <Terminal size={22} className="explore-icon text-cyan" />,
    badge: "Active Environment",
    description: "Practicing Linux file hierarchy navigation, permissions management, Bash shell scripting, and terminal workflow efficiency.",
    skills: ["Bash Shell", "CLI Toolsets", "Permissions & Users", "Package Management"]
  },
  {
    id: 2,
    title: "Ethical Hacking Fundamentals",
    icon: <ShieldAlert size={22} className="explore-icon text-violet" />,
    badge: "Bootcamp Certified",
    description: "Completed Physics Wallah Ethical Hacking Bootcamp. Exploring network topologies, vulnerability concepts, and defensive protocols.",
    skills: ["OWASP Top 10 Awareness", "Network Basics", "Vulnerability Scans", "Defensive Protocols"]
  },
  {
    id: 3,
    title: "Security Tools & Analysis",
    icon: <Cpu size={22} className="explore-icon text-cyan" />,
    badge: "Lab Practice",
    description: "Hands-on familiarity with core security analysis utilities in controlled local environments for defensive awareness.",
    skills: ["Nmap Basics", "Wireshark Packet Analysis", "Security Auditing", "Log Inspection"]
  },
  {
    id: 4,
    title: "Defensive Web Engineering",
    icon: <Lock size={22} className="explore-icon text-violet" />,
    badge: "Secure Architecture",
    description: "Integrating defensive security principles directly into frontend applications — input sanitization, safe state handling, and CORS awareness.",
    skills: ["Input Validation", "Data Sanitization", "HTTPS Best Practices", "API Security"]
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
            <span>Continuous Learning</span>
          </div>
          <h2 className="section-title">
            Currently <span className="text-gradient">Exploring</span>
          </h2>
          <p className="section-subtitle">
            Self-directed growth areas focused on cybersecurity awareness, Linux environments, and defensive engineering.
          </p>
        </div>

        {/* Interactive Terminal Preview Widget */}
        <motion.div 
          className="terminal-widget-box glass-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="terminal-header-bar">
            <div className="terminal-dots-cluster">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <span className="terminal-label">arjan@security-lab:~ /exploring</span>
            <div className="terminal-active-tag">
              <Flame size={13} className="flame-icon" />
              <span>Active Exploration</span>
            </div>
          </div>
          <div className="terminal-body-content">
            <p className="terminal-cmd-line">
              <span className="t-prompt">arjan@security-lab:~$</span> <span className="t-command">cat learning_profile.json</span>
            </p>
            <pre className="terminal-code-block">
{`{
  "developer": "Arjan Ahmad",
  "education": "BCA Graduate (Shri Ramswaroop Memorial University)",
  "primary_domain": "Frontend Web Development (JavaScript / React / Modern CSS)",
  "security_interest": "Cybersecurity Fundamentals & Defensive Architecture",
  "active_practice": [
    "Kali Linux Terminal Navigation & Shell Scripting",
    "Web Application Vulnerability Analysis & Input Sanitization",
    "Network Protocol Basics & Ethical Hacking Standards"
  ],
  "learning_mindset": "Building software with security & usability from day one"
}`}
            </pre>
          </div>
        </motion.div>

        {/* Grid of exploration topics */}
        <div className="exploring-cards-grid">
          {explorationTopics.map((topic, idx) => (
            <motion.div
              key={topic.id}
              className="explore-card-saas glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <div className="explore-card-top">
                <div className="explore-icon-box">
                  {topic.icon}
                </div>
                <span className="explore-badge-pill">{topic.badge}</span>
              </div>

              <h3 className="explore-card-title">{topic.title}</h3>
              <p className="explore-card-desc">{topic.description}</p>

              <div className="explore-tags-list">
                {topic.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="explore-tag-chip">
                    <CheckCircle2 size={13} className="chip-check-icon" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exploring;
