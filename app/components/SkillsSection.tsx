'use client'

import { motion } from 'framer-motion'
import styles from './SkillsSection.module.css'

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'C/C++', 'C#', 'SQL', 'YAML']
  },
  {
    title: 'Frameworks & Tools',
    skills: ['React', 'Selenium', 'Spring Boot', 'PyTorch', 'Git', 'JIRA', 'Azure', 'Supabase']
  },
  {
    title: 'Protocols & Networks',
    skills: ['HTTP/HTTPS', 'TCP/IP', 'OpenSSL', 'gRPC', 'OAuth']
  },
  {
    title: 'Operating Systems',
    skills: ['Linux', 'Windows', 'macOS']
  },
  {
    title: 'DevOps & Cloud',
    skills: ['Docker', 'AWS', 'Azure DevOps']
  },
  {
    title: 'APIs',
    skills: ['GraphQL', 'REST', 'WebSockets']
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.03,
    },
  },
}

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
}

export default function SkillsSection() {
  return (
    <motion.section
      className={styles.skillsSection}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 className={styles.sectionTitle}>
        Technologies I work with
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
        Experience With
      </motion.h3>
      <div className={styles.skillsContainer}>
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className={styles.category}
            variants={categoryVariants}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h4 className={styles.categoryTitle}>{category.title}</h4>
            <div className={styles.skillsGrid}>
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className={styles.skillTag}
                  variants={skillVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
