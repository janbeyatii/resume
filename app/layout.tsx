import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jan Beyati - Software Engineer',
  description: 'Crafting elegant solutions through code. Portfolio and Resume of Jan Beyati',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
