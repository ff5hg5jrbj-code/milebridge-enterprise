import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.milebridge.in'),
  title: {
    default: 'MileBridge Logistics - SLA-based 3PL & E-Commerce Logistics Company',
    template: '%s | MileBridge Logistics'
  },
  // FIX #1 & #3: Updated description with "SLA-based 3PL" + expanded keywords
  description: 'MileBridge Logistics is a SLA-based 3PL and E-Commerce Logistics Company with 99.8% on-time delivery. Specializing in mountain terrain logistics, last-mile delivery, express freight, and contract logistics across India.',
  
  // FIX #3: Expanded SEO keywords for better ranking
  keywords: [
    'logistics company India',
    'mountain terrain logistics',
    'express freight India',
    'last mile delivery',
    'e-commerce logistics',
    '3PL services India',
    'third party logistics',
    'Jammu Kashmir logistics',
    'SLA based logistics',
    'contract logistics India',
    'warehousing services India',
    'last mile partner India',
    'ecommerce logistics company',
    '3PL India',
    'freight forwarding India',
    'supply chain solutions',
    'logistics partner India',
    'on-time delivery India',
    'dedicated fleet logistics',
    'B2B logistics India',
    'courier services India',
    'FTL services India',
    'linehaul logistics',
    'mountain delivery services'
  ],
  
  authors: [{ name: 'MileBridge Logistics' }],
  creator: 'MileBridge Logistics',
  publisher: 'MileBridge Logistics',
  
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.milebridge.in',
    siteName: 'MileBridge Logistics',
    title: 'MileBridge Logistics - SLA-based 3PL & E-Commerce Logistics',
    description: 'SLA-based 3PL company with 99.8% on-time delivery across India. Specializing in mountain terrain logistics, last-mile delivery, and express freight services.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MileBridge Logistics - Delivering Efficiency Every Mile'
      }
    ]
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'MileBridge Logistics - SLA-based 3PL & E-Commerce Logistics',
    description: '99.8% on-time delivery across India. Mountain terrain specialist with dedicated fleet.',
    images: ['/images/og-image.jpg']
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      
      <body className={inter.className}>
        {/* FIX #5: Added skip-to-content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition"
        >
          Skip to main content
        </a>
        
        <Navigation />
        
        {/* FIX #5: Added id for skip-to-content functionality */}
        <main id="main-content">
          {children}
        </main>
        
        <Footer />
        
        {/* Tawk.to Live Chat */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/YOUR_TAWK_ID/default';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `
          }}
        />
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `
          }}
        />
      </body>
    </html>
  )
}
