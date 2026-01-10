import styles from './ProjectsSection.module.css'

const projects = [
  {
    title: 'MyTiles Ottawa',
    description: 'Professional portfolio website for a tile & interior renovations company. Fully SEO optimized with modern design, showcasing services, portfolio gallery, and lead generation forms.',
    technologies: ['Web Development', 'SEO', 'Modern Design']
  },
  {
    title: 'Dancin\' Conga',
    description: 'Fun little animation dancing to a catchy tune. Deployed via Netlify.',
    technologies: ['Animation', 'Netlify', 'Frontend']
  }
]

export default function ProjectsSection() {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>
        What I've built
        <span className={styles.titleUnderline}></span>
      </h2>
      <h3 className={styles.subtitle}>Projects</h3>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h4 className={styles.projectTitle}>{project.title}</h4>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.projectTechnologies}>
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className={styles.techTag}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
