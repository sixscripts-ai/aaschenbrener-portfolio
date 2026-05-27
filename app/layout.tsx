import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Ashton Aschenbrener — AI Engineer',
  description: 'AI Engineer and Full-Stack Developer building deployable agents, retrieval systems, and domain-specific intelligence platforms.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main style={{ paddingTop: 56 }}>
          {children}
        </main>
      </body>
    </html>
  )
}
