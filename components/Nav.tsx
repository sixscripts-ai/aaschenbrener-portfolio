'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const path = usePathname()

  return (
    <div className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4">
      <header className="glass-panel px-6 py-3 flex items-center gap-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <Link href="/" className="font-outfit font-black text-xl tracking-tighter text-gradient hover:scale-110 transition-transform">
          AA
        </Link>
        <nav className="flex gap-6 items-center">
          {links.map(l => (
            <Link 
              key={l.href} 
              href={l.href} 
              className={`font-jakarta text-sm font-semibold transition-all duration-300 ${
                path === l.href 
                  ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </header>
    </div>
  )
}
