'use client'

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/data/resume'
import ProjectGallery from '@/components/ProjectGallery'

interface ProjectDetailPageProps {
  params: { slug: string }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <motion.span
              className="text-2xl"
              initial={{ x: 0 }}
              whileHover={{ x: -4 }}
              transition={{ duration: 0.2 }}
            >
              ←
            </motion.span>
            <span className="text-sm font-medium">Back to Projects</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 mb-6">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm rounded-full font-medium bg-gray-100 border border-gray-200 text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <ProjectGallery
              images={project.images || [project.image]}
              title={project.title}
            />
          </motion.div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-8">
              <span className="relative">
                Project Details
                <span className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-900 rounded-full" />
              </span>
            </h2>
            <div className="space-y-6">
              {project.details?.map((detail, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  {detail}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-16"
            >
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900 mb-6">
                Key Features
              </h3>
              <ul className="space-y-4">
                {project.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 text-gray-700"
                  >
                    <span className="mt-2 w-2 h-2 bg-blue-900 rounded-full flex-shrink-0" />
                    <span className="text-lg leading-relaxed">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <Link
              href="/#projects"
              className="px-6 py-3 bg-blue-900 text-white text-sm font-medium rounded-full hover:bg-blue-800 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

