import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MileBridge - Advanced Logistics & Delivery Solutions',
  description: 'Leading integrated supply chain and mobility solutions provider in India. Real-time tracking, smart route optimization, and green logistics.',
  keywords: 'logistics, delivery, supply chain, transportation, India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
