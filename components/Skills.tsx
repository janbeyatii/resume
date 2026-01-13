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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {category.category}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-900/20 to-transparent ml-2" />
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 10 }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.04,
                      duration: 0.4,
                      ease: 'backOut',
                    }}
                    whileHover={{ 
                      scale: 1.08,
                      rotate: skillIndex % 2 === 0 ? 1 : -1,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span
                      className={`inline-block px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all cursor-default ${
                        skillIndex === 0
                          ? 'bg-blue-900 text-white shadow-sm'
                          : 'bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300'
                      }`}
                    >
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative element */}
        <motion.div
          className="mt-16 md:mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-sm text-gray-500 italic">
            Continuously learning and expanding my toolkit
          </p>
        </motion.div>
      </div>
    </section>
  )
}

