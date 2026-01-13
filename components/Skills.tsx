'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '@/data/resume'

const skillCategories = [
  { category: 'Languages', skills: skills.languages },
  { category: 'Frontend', skills: skills.frontend },
  { category: 'Backend', skills: skills.backend },
  { category: 'Databases', skills: skills.databases },
  { category: 'DevOps/Cloud', skills: skills.devops },
  { category: 'Tools', skills: skills.tools },
  { category: 'Concepts', skills: skills.concepts },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-medium tracking-tight mb-12 md:mb-16 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <span className="relative">
            Skills
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-900 rounded-full" />
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
            >
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 flex items-center gap-2">
                {category.category}
                <span className="w-1 h-1 bg-blue-900 rounded-full" />
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      skillIndex === 0
                        ? 'bg-blue-900 text-white border border-blue-900'
                        : 'bg-white border border-gray-200 text-gray-800'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.5,
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: skillIndex === 0 ? '#1e3a8a' : '#f9fafb',
                      borderColor: skillIndex === 0 ? '#1e3a8a' : '#d1d5db'
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

