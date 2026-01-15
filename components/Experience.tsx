'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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

                {/* Client Websites Section */}
                {exp.clientWebsites && exp.clientWebsites.length > 0 && (
                  <div className="pt-6 mt-6 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                      Client Websites
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {exp.clientWebsites.map((client, clientIndex) => (
                        <motion.div
                          key={client.slug || client.url}
                          className="group block"
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ delay: index * 0.2 + clientIndex * 0.1, duration: 0.5 }}
                          whileHover={{ y: -4, scale: 1.02 }}
                        >
                          <Link
                            href={`/clients/${client.slug || 'client'}`}
                            className="block"
                          >
                          <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-gray-200 bg-white shadow-sm group-hover:border-blue-900 group-hover:shadow-xl transition-all duration-300">
                            <Image
                              src={client.thumbnail}
                              alt={client.name}
                              fill
                              className="object-contain scale-90 group-hover:scale-95 transition-transform duration-300"
                              sizes="(max-width: 768px) 50vw, 25vw"
                            />
                            
                            {/* Redirect overlay effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/0 via-blue-900/0 to-blue-900/0 group-hover:from-blue-900/20 group-hover:via-blue-900/10 group-hover:to-blue-900/20 transition-all duration-300" />
                            
                            {/* Animated border glow */}
                            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute inset-0 rounded-lg bg-blue-900/10 blur-xl" />
                            </div>
                            
                            {/* View Details indicator */}
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                              <div className="flex items-center gap-2 bg-blue-900 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg">
                                <span>View Details</span>
                                <svg
                                  className="w-3.5 h-3.5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </div>
                            </div>
                            
                            {/* Bottom overlay with client name */}
                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <p className="text-white text-sm font-medium">
                                {client.name}
                              </p>
                            </div>
                            
                            {/* Animated arrow indicator */}
                            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                              <motion.div
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                              >
                                <svg
                                  className="w-5 h-5 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                  />
                                </svg>
                              </motion.div>
                            </div>
                          </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

