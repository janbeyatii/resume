import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portfolio | Software Engineer & Product Designer',
  description: 'Software engineer and product designer crafting thoughtful interfaces and robust systems. Where code meets creativity.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#000000',
  openGraph: {
    title: 'Portfolio',
    description: 'Software engineer and product designer',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio',
    description: 'Software engineer and product designer',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-white text-[#0a0a0a]">
        {children}
      </body>
    </html>
  )
}

