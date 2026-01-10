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

export default function ExperienceSection() {
  return (
    <section className={styles.experienceSection}>
      <h2 className={styles.sectionTitle}>
        My journey
        <span className={styles.titleUnderline}></span>
      </h2>
      <h3 className={styles.subtitle}>Work & Education</h3>
      <div className={styles.experienceList}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.experienceCard}>
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
                <span key={techIndex} className={styles.techTag}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
