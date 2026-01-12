'use client'

import { motion } from 'framer-motion'
import styles from './AboutSection.module.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export default function AboutSection() {
  return (
    <motion.section
      className={styles.aboutSection}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
        Get to know me
        <motion.span
          className={styles.titleUnderline}
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
      </motion.h2>
      <motion.h3 className={styles.subtitle} variants={itemVariants}>
        About Me
      </motion.h3>
      <motion.div className={styles.aboutContent} variants={containerVariants}>
        <motion.p className={styles.intro} variants={itemVariants}>
          Crafting elegant solutions through code. Passionate about building software that makes a difference.
        </motion.p>
        <motion.p className={styles.paragraph} variants={itemVariants}>
          4th year Software Engineering student at Carleton University. Experienced .NET backend developer with Barracuda Networks, specializing in C# and cloud technologies.
        </motion.p>
        <motion.p className={styles.paragraph} variants={itemVariants}>
          Founder of Beyati Web Solutions, creating custom web solutions for small businesses. Open-source contributor and lifelong learner passionate about clean code and scalable architecture.
        </motion.p>
        <motion.p
          className={styles.highlight}
          variants={itemVariants}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          When I'm not coding, I'm tinkering with cars, building LEGOs, or playing sports.
        </motion.p>
      </motion.div>
    </motion.section>
  )
}
