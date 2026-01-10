import styles from './AboutSection.module.css'

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>
        Get to know me
        <span className={styles.titleUnderline}></span>
      </h2>
      <h3 className={styles.subtitle}>About Me</h3>
      <div className={styles.aboutContent}>
        <p className={styles.intro}>
          Crafting elegant solutions through code. Passionate about building software that makes a difference.
        </p>
        <p className={styles.paragraph}>
          4th year Software Engineering student at Carleton University. Experienced .NET backend developer with Barracuda Networks, specializing in C# and cloud technologies.
        </p>
        <p className={styles.paragraph}>
          Founder of Beyati Web Solutions, creating custom web solutions for small businesses. Open-source contributor and lifelong learner passionate about clean code and scalable architecture.
        </p>
        <p className={styles.highlight}>
          When I'm not coding, I'm tinkering with cars, building LEGOs, or playing sports.
        </p>
      </div>
    </section>
  )
}
