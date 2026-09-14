import { motion } from 'framer-motion';
import { Terminal, ShieldAlert, Cpu, Lock, CheckCircle2, Flame } from 'lucide-react';
import './Exploring.css';

const explorationTopics = [
  {
    id: 1,
    title: "Kali Linux & OS Administration",
    icon: <Terminal size={22} className="explore-icon icon-cyan" />,
    badge: "Active Environment",
    description: "Hands-on self-learning with Kali Linux OS distributions, shell scripting, package management, and terminal workflow efficiency.",
    skills: ["Bash Shell", "System Navigation", "Linux Permissions", "CLI Toolsets"]
  },
  {
    id: 2,
    title: "Ethical Hacking Fundamentals",
    icon: <ShieldAlert size={22} className="explore-icon icon-violet" />,
    badge: "Bootcamp Certified",
    description: "Completed Physics Wallah Ethical Hacking Bootcamp. Exploring security methodologies, footprinting, and web application security standards.",
    skills: ["OWASP Awareness", "Network Basics", "Vulnerability Concepts", "Defensive Protocols"]
  },
  {
    id: 3,
    title: "Security Tools & Analysis",
    icon: <Cpu size={22} className="explore-icon icon-cyan" />,
    badge: "Tool Exploration",
    description: "Actively practicing basic security analysis using industry tools in controlled lab environments for security awareness.",
    skills: ["Nmap Basics", "Wireshark Packet Analysis", "Security Scanning", "Log Inspection"]
  },
  {
    id: 4,
    title: "Defensive Software Design",
    icon: <Lock size={22} className="explore-icon icon-violet" />,
    badge: "Secure Coding",
    description: "Integrating security awareness into web development — focusing on input sanitization, authentication safety, and CORS controls.",
    skills: ["Input Validation", "HTTPS & Headers", "API Safety", "Data Privacy"]
  }
];

const Exploring = () => {
  return (
    <section id="exploring" className="exploring-section container section-reveal">
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Currently <span className="text-gradient">Exploring</span>
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Active self-learning and growth areas focused on cybersecurity, Linux, and defensive engineering.
        </motion.p>
      </div>

      {/* Modern Terminal Preview Widget */}
      <motion.div 
        className="terminal-widget glass-card"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <span className="terminal-title">arjan@security-lab:~ /exploring</span>
          <div className="terminal-badge">
            <Flame size={13} className="flame-icon" />
            <span>Active Exploration</span>
          </div>
        </div>
        <div className="terminal-body">
          <p className="terminal-line">
            <span className="prompt">$</span> <span className="cmd">cat learning_focus.json</span>
          </p>
          <pre className="terminal-output">
{`{
  "developer": "Arjan Ahmad",
  "degree": "BCA Graduate (SRMU)",
  "primary_focus": "Full Stack Web Development (React / Node / Web APIs)",
  "growing_interest": "Cybersecurity & Linux Systems",
  "active_learning": ["Kali Linux CLI", "Network Vulnerability Basics", "Ethical Hacking"],
  "status": "Continuously Learning & Building"
}`}
          </pre>
        </div>
      </motion.div>

      {/* Grid of exploration topics */}
      <div className="exploring-grid">
        {explorationTopics.map((topic, index) => (
          <motion.div
            key={topic.id}
            className="explore-card glass-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <div className="explore-card-header">
              <div className="explore-icon-box">
                {topic.icon}
              </div>
              <div className="explore-title-wrap">
                <span className="explore-badge">{topic.badge}</span>
                <h3 className="explore-title">{topic.title}</h3>
              </div>
            </div>

            <p className="explore-desc">{topic.description}</p>

            <div className="explore-skills-tags">
              {topic.skills.map((skill, idx) => (
                <span key={idx} className="explore-tag">
                  <CheckCircle2 size={12} className="tag-check" />
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Exploring;
