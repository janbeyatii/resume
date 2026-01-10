'use client'

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
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`${styles.navLink} ${activeTab === tab.id ? styles.active : ''}`}
          type="button"
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}
