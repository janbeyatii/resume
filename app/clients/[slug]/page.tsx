'use client'

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { experience } from '@/data/resume'

interface ClientDetailPageProps {
  params: { slug: string }
}

// Keywords to highlight (technical terms, frameworks, skills)
const KEYWORDS = [
  // Frameworks & Libraries
  'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion',
  'Radix UI', 'Swiper', 'Lucide React', 'React Icons',
  // Backend & Infrastructure
  'Server Actions', 'API routes', 'Vercel', 'Resend', 'Vercel Blob',
  'PostgreSQL', 'Supabase', 'bcrypt', 'Jest',
  // Security & Authentication
  'authentication', 'authorization', 'hashing', 'salting', 'encryption',
  'session-based', 'cookie-based', 'password hashing',
  // Architecture & Patterns
  'App Router', 'component-based', 'modular', 'microservices',
  'RESTful APIs', 'OAuth', 'JWT', 'RLS',
  // Performance & Optimization
  'optimization', 'code splitting', 'lazy loading', 'dynamic imports',
  'image optimization', 'WebP', 'AVIF', 'font optimization',
  // SEO & Marketing
  'SEO', 'structured data', 'Schema.org', 'sitemap', 'JSON-LD',
  'local SEO', 'content marketing',
  // Development Tools
  'ESLint', 'TypeScript strict mode', 'PostCSS',
  // Concepts
  'real-time', 'responsive', 'mobile-first', 'accessibility',
  'rate limiting', 'edge computing', 'CI/CD',
]

// Function to highlight keywords in text
function highlightKeywords(text: string): React.ReactNode {
  if (!text) return text

  // Sort keywords by length (longest first) to match longer phrases first
  const sortedKeywords = [...KEYWORDS].sort((a, b) => b.length - a.length)
  
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  const usedRanges: Array<{ start: number; end: number }> = []

  // Find all matches for each keyword
  sortedKeywords.forEach((keyword) => {
    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    // Match whole words, case-insensitive
    const regex = new RegExp(`\\b${escapedKeyword}\\b`, 'gi')
    let match

    while ((match = regex.exec(text)) !== null) {
      const start = match.index
      const end = start + match[0].length

      // Check if this range overlaps with any already used range
      const overlaps = usedRanges.some(
        (range) => !(end <= range.start || start >= range.end)
      )

      if (!overlaps) {
        usedRanges.push({ start, end })
        // Sort usedRanges to maintain order
        usedRanges.sort((a, b) => a.start - b.start)
      }
    }
  })

  // Build the result with highlighted keywords
  usedRanges.forEach((range) => {
    // Add text before this match
    if (range.start > lastIndex) {
      parts.push(text.substring(lastIndex, range.start))
    }
    // Add highlighted keyword
    const keywordText = text.substring(range.start, range.end)
    parts.push(
      <strong key={`${range.start}-${range.end}`} className="font-semibold text-gray-900">
        {keywordText}
      </strong>
    )
    lastIndex = range.end
  })

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }

  return parts.length > 0 ? <>{parts}</> : text
}

export default function ClientDetailPage({ params }: ClientDetailPageProps) {
  const { slug } = params
  
  // Find the client website from experience data
  let client = null
  for (const exp of experience) {
    if (exp.clientWebsites) {
      const found = exp.clientWebsites.find((c) => c.slug === slug)
      if (found) {
        client = found
        break
      }
    }
  }

  if (!client) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/#experience"
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
            <span className="text-sm font-medium">Back to Experience</span>
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
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 mb-6">
                {client.name}
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                {client.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {client.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm rounded-full font-medium bg-gray-100 border border-gray-200 text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white text-sm font-medium rounded-full hover:bg-blue-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Website
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </motion.a>
            </div>

            {/* Thumbnail */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200"
            >
              <Image
                src={client.thumbnail}
                alt={client.name}
                fill
                className="object-contain scale-90"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Business Overview */}
      {(client as any).businessOverview && (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-6">
                <span className="relative">
                  Business Overview
                  <span className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-900 rounded-full" />
                </span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {highlightKeywords((client as any).businessOverview)}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${(client as any).businessOverview ? 'bg-gray-50' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-8">
              <span className="relative">
                Technical Implementation
                <span className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-900 rounded-full" />
              </span>
            </h2>
            <div className="space-y-6">
              {client.details?.map((detail, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  {highlightKeywords(detail)}
                </motion.p>
              ))}
            </div>
            
            {/* Admin Panel Image */}
            {(client as any).adminImage && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-12"
              >
                <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-4">
                  Admin Panel
                </h3>
                <div className="relative w-full rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 bg-white">
                  <Image
                    src={(client as any).adminImage}
                    alt={`${client.name} Admin Panel`}
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Development Method */}
      {(client as any).developmentMethod && (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-6">
                <span className="relative">
                  Development Method
                  <span className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-900 rounded-full" />
                </span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {highlightKeywords((client as any).developmentMethod)}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Business Strategy */}
      {(client as any).businessStrategy && (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-6">
                <span className="relative">
                  Business Strategy
                  <span className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-900 rounded-full" />
                </span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {highlightKeywords((client as any).businessStrategy)}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Navigation Footer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <Link
              href="/#experience"
              className="px-6 py-3 bg-blue-900 text-white text-sm font-medium rounded-full hover:bg-blue-800 transition-colors"
            >
              Back to Experience
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

