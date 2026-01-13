'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { about, education } from '@/data/resume'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 relative inline-block">
            About
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-900 rounded-full" />
          </h2>

          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800">
            <p>{about.intro}</p>
            <p>{about.philosophy}</p>
            <p>{about.personal}</p>
          </div>

          {/* Education Section */}
          {education.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="pt-8 border-t-2 border-blue-900"
          >
            <h3 className="text-xl md:text-2xl font-medium mb-4 text-gray-900">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index}>
                    <p className="font-medium text-gray-900">{edu.degree}</p>
                    <p className="text-gray-700">
                      {edu.institution}
                      {edu.location && ` - ${edu.location}`}
                      {edu.period && ` • ${edu.period}`}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

