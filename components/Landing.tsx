'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Landing() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background elements - subtle, not distracting */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-black rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content - Asymmetric layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 md:space-y-8"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Software Engineer
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-gray-700 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Full-stack engineer specializing in distributed systems, microservices,
              and high-performance applications. Building production-ready software
              with modern technologies.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.a
                href="#projects"
                className="px-6 py-3 bg-blue-900 text-white text-sm font-medium rounded-full hover:bg-blue-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-3 border-2 border-blue-900 text-blue-900 text-sm font-medium rounded-full hover:bg-blue-900 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/RESUME-SOFTWARE2026.pdf"
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-100 hover:border-gray-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image - Editorial style placement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] md:aspect-square"
          >
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-200 rounded-lg -z-10 hidden md:block" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-1 h-3 bg-gray-600 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

