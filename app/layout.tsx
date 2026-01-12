import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AnimatedBackground from './components/AnimatedBackground'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  title: 'Jan Beyati - Software Engineer',
  description: 'Crafting elegant solutions through code. Portfolio and Resume of Jan Beyati',
  keywords: ['Software Engineer', 'Portfolio', 'Web Developer', 'Jan Beyati'],
  authors: [{ name: 'Jan Beyati' }],
  openGraph: {
    title: 'Jan Beyati - Software Engineer',
    description: 'Crafting elegant solutions through code. Portfolio and Resume of Jan Beyati',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedBackground />
        {children}
      </body>
    </html>
  )
}
