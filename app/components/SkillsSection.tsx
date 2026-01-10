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

export default function SkillsSection() {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.sectionTitle}>
        Technologies I work with
        <span className={styles.titleUnderline}></span>
      </h2>
      <h3 className={styles.subtitle}>Experience With</h3>
      <div className={styles.skillsContainer}>
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className={styles.category}>
            <h4 className={styles.categoryTitle}>{category.title}</h4>
            <div className={styles.skillsGrid}>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className={styles.skillTag}>{skill}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
