'use client'

import { motion } from 'framer-motion'
import styles from './ProjectsSection.module.css'

const projects = [
  {
    title: 'MyTiles Ottawa',
    description: 'Professional portfolio website for a tile & interior renovations company. Fully SEO optimized with modern design, showcasing services, portfolio gallery, and lead generation forms.',
    technologies: ['Web Development', 'SEO', 'Modern Design'],
    thumbnail: '/mytiles.jpeg',
    url: 'https://mytilesottawa.ca'
  },
  {
    title: 'Dancin\' Conga',
    description: 'Fun little animation dancing to a catchy tune. Deployed via Netlify.',
    technologies: ['Animation', 'Netlify', 'Frontend'],
    thumbnail: '/conga.png',
    url: '#'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export default function ProjectsSection() {
  return (
    <motion.section
      className={styles.projectsSection}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 className={styles.sectionTitle}>
        What I've built
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
        Projects
      </motion.h3>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.url}
            target={project.url !== '#' ? "_blank" : undefined}
            rel={project.url !== '#' ? "noopener noreferrer" : undefined}
            className={styles.projectCard}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={styles.thumbnailContainer}>
              <motion.img
                src={project.thumbnail}
                alt={project.title}
                className={styles.thumbnail}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
              />
              <div className={styles.thumbnailOverlay}>
                <div className={styles.viewButton}>
                  View Site →
                </div>
              </div>
            </div>
            <div className={styles.projectContent}>
              <h4 className={styles.projectTitle}>{project.title}</h4>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectTechnologies}>
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className={styles.techTag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 + techIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  )
}
