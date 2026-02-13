'use client'
import React from 'react'
import Image from 'next/image'

interface BrandedImageProps {
  src: string;
  alt: string;
  className?: string;
  logoSize?: 'sm' | 'md' | 'lg';
}

export default function BrandedImage({ src, alt, className = "", logoSize = 'md' }: BrandedImageProps) {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8 md:h-10',
    lg: 'h-12 md:h-16'
  };

  return (
    <div className={`relative overflow-hidden group ${className}`}>
      {/* The Actual Truck/Service Image */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* The Logo Stamp (Bottom Right) */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-lg shadow-xl border border-white/20 transform transition-all group-hover:translate-y-[-5px]">
        <Image
          src="/logo.png"
          alt="MileBridge Branding"
          width={180}
          height={64}
          className={`${sizeClasses[logoSize]} w-auto object-contain`}
        />
      </div>

      {/* Professional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
    </div>
  )
}
