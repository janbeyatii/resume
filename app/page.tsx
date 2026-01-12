'use client'

import { useState, useMemo, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'
import styles from './page.module.css'

// Dynamic imports for code splitting - only load sections when needed
const AboutSection = dynamic(() => import('./components/AboutSection'), {
  loading: () => <div style={{ minHeight: '200px' }} />,
})
const ExperienceSection = dynamic(() => import('./components/ExperienceSection'), {
  loading: () => <div style={{ minHeight: '200px' }} />,
})
const SkillsSection = dynamic(() => import('./components/SkillsSection'), {
  loading: () => <div style={{ minHeight: '200px' }} />,
})
const ProjectsSection = dynamic(() => import('./components/ProjectsSection'), {
  loading: () => <div style={{ minHeight: '200px' }} />,
})
const ContactSection = dynamic(() => import('./components/ContactSection'), {
  loading: () => <div style={{ minHeight: '200px' }} />,
})

type TabType = 'about' | 'experience' | 'skills' | 'projects' | 'contact'

const contentVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('about')

  const renderContent = useMemo(() => {
    switch (activeTab) {
      case 'about':
        return <AboutSection />
      case 'experience':
        return <ExperienceSection />
      case 'skills':
        return <SkillsSection />
      case 'projects':
        return <ProjectsSection />
      case 'contact':
        return <ContactSection />
      default:
        return <AboutSection />
    }
  }, [activeTab])

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Sidebar />
      </motion.div>
      <main className={styles.mainContent}>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        </motion.div>
        <div className={styles.content}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
                {renderContent}
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </motion.div>
  )
}
