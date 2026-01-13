'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { personalInfo } from '@/data/resume'

const socialLinks = [
  {
    label: 'Email',
    href: `mailto:${personalInfo.email}`,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: personalInfo.linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    href: personalInfo.github,
    external: true,
  },
  {
    label: 'Website',
    href: personalInfo.website,
    external: true,
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="space-y-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white relative inline-block">
            Let's Connect
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-white/30 rounded-full" />
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to collaborate. Feel free to reach out.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="px-6 py-3 border-2 border-white/80 text-white text-sm font-medium rounded-full hover:bg-white hover:text-blue-900 transition-colors backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

