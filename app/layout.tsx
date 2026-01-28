import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://milebridgelogistics.com'),
  title: {
    default: 'MileBridge Logistics - Express Freight & Mountain Terrain Delivery',
    template: '%s | MileBridge Logistics'
  },
  description: 'MileBridge Logistics is a SLA-based 3PL and E-Commerce Logistics Company with 99.8% on-time delivery. Specializing in mountain terrain logistics, last-mile delivery, and express freight across India.',
  keywords: ['logistics company India', 'mountain terrain logistics', 'express freight', 'last mile delivery', 'e-commerce logistics', '3PL services', 'Jammu Kashmir logistics', 'SLA based logistics'],
  authors: [{ name: 'MileBridge Logistics' }],
  creator: 'MileBridge Logistics',
  publisher: 'MileBridge Logistics',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://milebridgelogistics.com',
    title: 'MileBridge Logistics - Express Freight & Mountain Terrain Delivery',
    description: 'India\'s leading logistics company with 99.8% on-time delivery. Specializing in mountain terrain logistics and last-mile delivery.',
    siteName: 'MileBridge Logistics',
    images: [
      {
        url: '/images/hero-logistics.jpg',
        width: 1200,
        height: 630,
        alt: 'MileBridge Logistics - Delivering Efficiency Every Mile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MileBridge Logistics - Express Freight & Mountain Terrain Delivery',
    description: 'India\'s leading logistics company with 99.8% on-time delivery.',
    images: ['/images/hero-logistics.jpg'],
  },
  alternates: {
    canonical: 'https://milebridgelogistics.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* PWA Meta Tags */}
        <meta name="application-name" content="MileBridge Logistics" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MileBridge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'MileBridge Logistics Private Limited',
              url: 'https://milebridgelogistics.com',
              logo: 'https://milebridgelogistics.com/images/hero-logistics.jpg',
              description: 'SLA-based 3PL and E-Commerce Logistics Company specializing in mountain terrain logistics',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                reviewCount: '500',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
        
        {/* Tawk.to Chat Widget */}
        <Script id="tawk-to" strategy="lazyOnload">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/697a7edcf774291c39948fe5/1jg37v414';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
        
        {/* Service Worker Registration */}
        <Script id="sw-register" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(
                  function(registration) {
                    console.log('SW registered: ', registration);
                  },
                  function(err) {
                    console.log('SW registration failed: ', err);
                  }
                );
              });
            }
          `}
        </Script>
      </body>
    </html>
  )
}
