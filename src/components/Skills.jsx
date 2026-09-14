import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Database, Wrench, Cpu } from 'lucide-react';
import './Skills.css';

const categoryIcons = {
  "Frontend Web": <Code2 size={22} className="category-icon" />,
  "Programming & Logic": <Terminal size={22} className="category-icon" />,
  "Database & Querying": <Database size={22} className="category-icon" />,
  "Development Tools": <Wrench size={22} className="category-icon" />,
  "Core Competencies": <Cpu size={22} className="category-icon" />,
};

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const duration = 1000;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const current = Math.min(Math.floor((progress / duration) * value), value);
      setCount(current);
      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    requestAnimationFrame(animate);
  }, [started, value]);

  return <span ref={ref}>{count}%</span>;
};

const Skills = () => {
  const skillsData = {
    "Frontend Web": [
      { name: "HTML5 / CSS3", level: 85 },
      { name: "JavaScript (ES6+)", level: 80 },
      { name: "React.js", level: 75 },
      { name: "Responsive UI & Flex/Grid", level: 90 }
    ],
    "Programming & Logic": [
      { name: "Core Java", level: 75 },
      { name: "C++ Programming", level: 70 },
      { name: "C Language Fundamentals", level: 65 } 
    ],
    "Database & Querying": [
      { name: "MySQL / Relational DBs", level: 75 }
    ],
    "Development Tools": [
      { name: "Git & GitHub Version Control", level: 85 },
      { name: "VS Code & IntelliJ IDEA", level: 90 },
      { name: "Netlify & Web Deployment", level: 85 }
    ],
    "Core Competencies": [
      { name: "Data Structures Basics", level: 75 },
      { name: "Object-Oriented Programming (OOP)", level: 80 },
      { name: "Problem Solving & Analytical Thinking", level: 85 },
      { name: "Technical Communication", level: 80 }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="skills-section container section-reveal">
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical <span className="text-gradient">Skills</span>
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Structured domain proficiency built through BCA coursework, self-learning, and practical internships.
        </motion.p>
      </div>

      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {Object.entries(skillsData).map(([category, list]) => (
          <motion.div 
            key={category}
            className="skills-category-card glass-card"
            variants={cardVariants}
          >
            <h3 className="category-title">
              {categoryIcons[category]}
              <span>{category}</span>
            </h3>
            <div className="skills-list">
              {list.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-details">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">
                      <Counter value={skill.level} />
                    </span>
                  </div>
                  <div className="progress-bar-bg">
                    <motion.div 
                      className="progress-bar-fill"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: skill.level / 100 }}
                      viewport={{ once: true }}
                      style={{ transformOrigin: 'left' }}
                      transition={{ duration: 1.1, delay: 0.15, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
