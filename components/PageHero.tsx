import type { ReactNode } from 'react'

interface PageHeroProps {
  eyebrow?: string
  title: string
  description?: string
  children?: ReactNode
}

export default function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden text-white border-b border-gray-700 bg-[radial-gradient(circle_at_15%_-5%,rgba(229,34,62,0.24),transparent_40%),linear-gradient(135deg,#111827_0%,#1f2937_55%,#374151_100%)]">
      <div className="pointer-events-none absolute -top-28 right-[-5rem] h-72 w-72 rounded-full bg-red-500/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-[-6rem] left-[-3rem] h-80 w-80 rounded-full bg-red-400/20 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-4xl">
          {eyebrow ? (
            <div className="inline-flex items-center gap-2 bg-white/12 border border-white/20 text-red-100 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-md">
              {eyebrow}
            </div>
          ) : null}

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>

          {description ? <p className="text-lg md:text-xl text-gray-200 max-w-3xl">{description}</p> : null}
        </div>

        {children}
      </div>
    </section>
  )
}
