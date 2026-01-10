'use client'

import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import styles from './page.module.css'

type TabType = 'about' | 'experience' | 'skills' | 'projects' | 'contact'

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('about')

  const renderContent = () => {
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
  }

  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.mainContent}>
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        <div className={styles.content}>
          {renderContent()}
        </div>
      </main>
    </div>
  )
}
