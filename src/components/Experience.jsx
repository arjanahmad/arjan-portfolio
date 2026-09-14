import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Award, ExternalLink, ShieldCheck } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    company: "CodeAlpha",
    role: "Full Stack Development Intern",
    program: "CodeAlpha Virtual Internship Program",
    duration: "10 June 2026 – 10 July 2026",
    issueDate: "11 July 2026",
    studentId: "CA/DF1/132132",
    badge: "Official Certificate",
    description: "Completed an intensive virtual internship in Full Stack Development with high dedication and active participation. Engineered full-stack web modules, implemented clean application logic, and delivered responsive user interfaces.",
    highlights: [
      "Built responsive full-stack components using modern JavaScript and web frameworks.",
      "Applied structured software design patterns for scalable frontend-backend integration.",
      "Collaborated on code optimization, state management, and user interface responsiveness.",
      "Awarded Official Certificate of Completion (Student ID: CA/DF1/132132)."
    ],
    techTags: ["Full Stack", "React.js", "JavaScript", "HTML5/CSS3", "Git"],
    verifyUrl: "https://drive.google.com/file/d/164MRX91FBB9OZTwzdnzxQPDcnSlGNfvh/view?usp=drive_link"
  },
  {
    id: 2,
    company: "CodSoft",
    role: "Web Development Intern",
    program: "CodSoft Web Development Internship Program",
    duration: "May 2026 – June 2026",
    issueDate: "June 2026",
    badge: "Completed Internship",
    description: "Participated in a structured web development internship program focusing on building real-world digital solutions, interactive web pages, and responsive frontend systems.",
    highlights: [
      "Developed interactive client-side applications including portfolio portals and web utility applications.",
      "Focused on cross-browser compatibility, modern CSS styling, and component reusability.",
      "Implemented clean DOM manipulation, state logic, and user-friendly interface design."
    ],
    techTags: ["React.js", "JavaScript (ES6+)", "CSS3", "HTML5", "Vite"],
    verifyUrl: "https://drive.google.com/file/d/164MRX91FBB9OZTwzdnzxQPDcnSlGNfvh/view?usp=drive_link"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section container section-reveal">
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Practical <span className="text-gradient">Experience</span>
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Internships and practical development journeys demonstrating real-world full-stack execution.
        </motion.p>
      </div>

      <div className="experience-timeline">
        <div className="timeline-line"></div>
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id}
            className="timeline-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-dot-wrapper">
              <div className="timeline-dot">
                <Briefcase size={16} />
              </div>
            </div>

            <div className="experience-card glass-card">
              <div className="exp-card-header">
                <div className="exp-company-info">
                  <span className="exp-company">{exp.company}</span>
                  <h3 className="exp-role">{exp.role}</h3>
                  <span className="exp-program">{exp.program}</span>
                </div>
                <div className="exp-badge-container">
                  <span className="exp-badge">
                    <ShieldCheck size={14} />
                    {exp.badge}
                  </span>
                </div>
              </div>

              <div className="exp-meta">
                <div className="exp-meta-item">
                  <Calendar size={14} />
                  <span>{exp.duration}</span>
                </div>
                {exp.studentId && (
                  <div className="exp-meta-item student-id">
                    <Award size={14} />
                    <span>ID: {exp.studentId}</span>
                  </div>
                )}
              </div>

              <p className="exp-desc">{exp.description}</p>

              <ul className="exp-highlights">
                {exp.highlights.map((item, idx) => (
                  <li key={idx} className="exp-highlight-item">
                    <CheckCircle2 size={16} className="highlight-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="exp-footer">
                <div className="exp-tech-tags">
                  {exp.techTags.map((tag, idx) => (
                    <span key={idx} className="tech-tag">{tag}</span>
                  ))}
                </div>
                {exp.verifyUrl && (
                  <a href={exp.verifyUrl} target="_blank" rel="noreferrer" className="exp-verify-link btn btn-outline btn-sm">
                    <span>Credential</span> <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
