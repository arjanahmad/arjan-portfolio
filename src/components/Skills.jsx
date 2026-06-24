import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillsData = {
    Frontend: [
      { name: "HTML", level: 80 },
      { name: "CSS", level: 60 },
      { name: "JavaScript", level: 55 },
      { name: "React.js", level: 50 }
    ],
    Programming: [
      { name: "Core Java", level: 65 },
     /* { name: "Python", level: 60 },*/
      { name: "C++", level: 50 },
      { name: "C", level: 45 } 
    ],
    Database: [
      { name: "MySQL", level: 70 }
    ],
    Tools: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "IntelliJ IDEA", level: 80 },
    ],
    Other: [
      { name: "Problem Solving", level: 85 },
      { name: "Responsive Design", level: 90 },
      { name: "Communication", level: 75 },
      { name: "Team Collaboration", level: 80 }
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
    <section id="skills" className="skills-section container">
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-gradient">Skills</span>
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A representation of my technical capabilities and proficiency across various domains.
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
            <h3 className="category-title">{category}</h3>
            <div className="skills-list">
              {list.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-details">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="progress-bar-bg">
                    <motion.div 
                      className="progress-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
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
