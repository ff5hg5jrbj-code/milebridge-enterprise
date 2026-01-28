import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import GoogleAnalytics from '../components/GoogleAnalytics'
import WhatsAppWidget from '../components/WhatsAppWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MileBridge Logistics - Delivering Efficiency Every Mile',
  description: 'MileBridge Logistics is a SLA based PL and E-Commerce Logistics Company with dedicated infrastructure for smooth operations across India.',
  keywords: 'logistics, freight, delivery, last-mile, mountain logistics, e-commerce logistics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
        
        {/* Google Analytics */}
        <GoogleAnalytics />
        
        {/* WhatsApp Widget */}
        <WhatsAppWidget />
      </body>
    </html>
  )
}
