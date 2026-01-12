'use client'

import { motion } from 'framer-motion'
import styles from './ExperienceSection.module.css'

const experiences = [
  {
    type: 'work',
    title: 'Software Engineering Intern',
    company: 'Barracuda Networks',
    period: 'Sep 2023 – Aug 2024',
    description: 'Worked on .NET backend services, contributed to security products, and wrote automated tests for API features.',
    technologies: ['.NET', 'C#', 'Backend', 'React', 'Frontend']
  },
  {
    type: 'education',
    title: 'Software Engineering (B.Eng)',
    company: 'Carleton University',
    period: 'Sep 2020 – Present',
    description: 'Focused on backend development, systems programming, and engineering fundamentals. Enrolled in co-op program.',
    technologies: ['C', 'Software Architecture', 'Co-op']
  },
  {
    type: 'work',
    title: 'Owner',
    company: 'Beyati Web Solutions',
    period: 'Present',
    description: 'Creating an online presence for small businesses through custom web solutions, modern design, and SEO optimization.',
    technologies: ['Web Development', 'SEO', 'Small Business']
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export default function ExperienceSection() {
  return (
    <motion.section
      className={styles.experienceSection}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 className={styles.sectionTitle}>
        My journey
        <motion.span
          className={styles.titleUnderline}
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
      </motion.h2>
      <motion.h3
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Work & Education
      </motion.h3>
      <div className={styles.experienceList}>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={styles.experienceCard}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={styles.experienceHeader}>
              <div>
                <h4 className={styles.experienceTitle}>{exp.title}</h4>
                <p className={styles.companyName}>{exp.company}</p>
              </div>
              <span className={styles.period}>{exp.period}</span>
            </div>
            <p className={styles.description}>{exp.description}</p>
            <div className={styles.technologies}>
              {exp.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  className={styles.techTag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 + techIndex * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
