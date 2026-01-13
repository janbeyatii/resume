'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface ProjectGalleryProps {
  images: string[]
  title: string
}

// Preload next image for smoother transitions
const preloadImage = (src: string) => {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'image'
  link.href = src
  document.head.appendChild(link)
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set())

  // Aggressively preload all images immediately
  useEffect(() => {
    images.forEach((img, index) => {
      // Use link preload for better browser optimization
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = img
      link.fetchPriority = index === 0 ? 'high' : 'low'
      document.head.appendChild(link)
      
      // Force load using Image object
      const image = new window.Image()
      image.src = img
      image.loading = index === 0 ? 'eager' : 'lazy'
    })
  }, [images])
  
  // Preload next and previous images for smooth transitions
  useEffect(() => {
    if (images.length <= 1) return
    
    const nextIndex = (currentIndex + 1) % images.length
    const prevIndex = (currentIndex - 1 + images.length) % images.length
    
    // Preload next image
    const nextImage = new window.Image()
    nextImage.src = images[nextIndex]
    
    // Preload previous image
    const prevImage = new window.Image()
    prevImage.src = images[prevIndex]
  }, [currentIndex, images])

  // Auto-scroll functionality
  useEffect(() => {
    if (images.length <= 1 || isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [images.length, isHovered])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  if (images.length === 0) return null

  return (
    <div
      className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex]}
              alt={`${title} - Image ${currentIndex + 1}`}
              fill
              className={`object-cover transition-opacity duration-200 ${
                imagesLoaded.has(currentIndex) ? 'opacity-100' : 'opacity-0'
              }`}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={currentIndex === 0}
              loading={currentIndex === 0 ? 'eager' : 'lazy'}
              quality={80}
              unoptimized={true}
              onLoad={() => {
                setImagesLoaded((prev) => new Set(prev).add(currentIndex))
              }}
              onError={() => {
                // Fallback if image fails to load
                setImagesLoaded((prev) => new Set(prev).add(currentIndex))
              }}
            />
            {!imagesLoaded.has(currentIndex) && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center z-10">
                <div className="w-8 h-8 border-3 border-gray-300 border-t-blue-900 rounded-full animate-spin" />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows - Show on hover */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
            aria-label="Previous image"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
            aria-label="Next image"
          >
            <svg
              className="w-5 h-5"
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
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  )
}

