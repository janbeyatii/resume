'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { experience } from '@/data/resume'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-medium tracking-tight mb-12 md:mb-16 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <span className="relative">
            Experience
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-blue-900 rounded-full" />
          </span>
        </motion.h2>

        <div className="space-y-12 md:space-y-16">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 border-l-2 border-blue-900"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-900 rounded-full -translate-x-[9px] ring-2 ring-white" />

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-medium text-gray-900">{exp.role}</h3>
                  <p className="text-gray-700 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    {exp.location && `${exp.location} • `}{exp.period}
                  </p>
                </div>

                <p className="text-lg text-gray-800 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-2 w-1.5 h-1.5 bg-gray-500 rounded-full flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

