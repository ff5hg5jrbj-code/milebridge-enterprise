import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import WhatsAppWidget from '../components/WhatsAppWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MileBridge - Your Trusted Logistics Partner',
  description: 'Professional logistics and delivery services across India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <WhatsAppWidget />
        <GoogleAnalytics gaId="G-2S0ZGZ42V2" />
      </body>
    </html>
  )
}