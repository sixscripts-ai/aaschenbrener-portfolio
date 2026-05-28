import type { Metadata } from 'next'
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })

export const metadata: Metadata = {
  title: 'Ashton Aschenbrener — AI Engineer',
  description: 'AI Engineer and Full-Stack Developer building deployable agents, retrieval systems, and domain-specific intelligence platforms.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable}`}>
      <body className="font-jakarta bg-deep-dark text-gray-100 min-h-screen relative overflow-x-hidden selection:bg-neon-pink selection:text-white">
        
        {/* Animated Background Blobs */}
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-neon-purple/20 blur-[120px] animate-blob" />
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-electric-cyan/20 blur-[150px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] rounded-full bg-neon-pink/15 blur-[150px] animate-blob animation-delay-4000" />
        </div>

        <Nav />
        <main className="pt-24 pb-12 relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}
