'use client'

import { motion } from 'framer-motion'
import styles from './AnimatedBackground.module.css'

export default function AnimatedBackground() {
  return (
    <div className={styles.backgroundContainer}>
      {/* Animated gradient orbs */}
      <motion.div
        className={styles.orb1}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={styles.orb2}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={styles.orb3}
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Grid pattern overlay */}
      <div className={styles.gridOverlay} />
    </div>
  )
}


