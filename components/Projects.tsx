'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import ProjectGallery from './ProjectGallery'
import { projects } from '@/data/resume'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-medium tracking-tight mb-12 md:mb-16 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <span className="relative">
            Projects
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-900 rounded-full" />
          </span>
        </motion.h2>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => {
            // Preload first project's first image
            if (index === 0 && typeof window !== 'undefined') {
              const firstImage = project.images?.[0] || project.image
              const link = document.createElement('link')
              link.rel = 'preload'
              link.as = 'image'
              link.href = firstImage
              link.fetchPriority = 'high'
              if (!document.querySelector(`link[href="${firstImage}"]`)) {
                document.head.appendChild(link)
              }
            }
            
            return (
            <motion.div
              key={project.id}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Image Gallery */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <ProjectGallery
                  images={project.images || [project.image]}
                  title={project.title}
                />
              </motion.div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-medium text-gray-900">{project.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.description}
                </p>
                {project.highlights && (
                  <ul className="space-y-2 pt-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-blue-900 rounded-full flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full font-medium bg-white border border-gray-200 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.div
                  className="pt-4"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-block px-6 py-3 bg-blue-900 text-white text-sm font-medium rounded-full hover:bg-blue-800 transition-colors"
                  >
                    View Details
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

