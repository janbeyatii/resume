'use client'

import { motion } from 'framer-motion'
import styles from './Navigation.module.css'

type TabType = 'about' | 'experience' | 'skills' | 'projects' | 'contact'

interface NavigationProps {
  activeTab: TabType
  onTabChange: (tab: TabType) => void
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const tabs: { id: TabType; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <nav className={styles.navigation}>
      {tabs.map((tab, index) => (
        <motion.button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`${styles.navLink} ${activeTab === tab.id ? styles.active : ''}`}
          type="button"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          {tab.label}
          {activeTab === tab.id && (
            <motion.span
              className={styles.activeIndicator}
              layoutId="activeTab"
              initial={false}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30
              }}
            />
          )}
        </motion.button>
      ))}
    </nav>
  )
}
