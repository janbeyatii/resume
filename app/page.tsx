import Navigation from '@/components/Navigation'
import Landing from '@/components/Landing'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Landing />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  )
}

