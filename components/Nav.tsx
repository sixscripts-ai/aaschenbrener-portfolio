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
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      borderBottom: '1px solid var(--border)',
      background: 'rgba(11,13,17,0.85)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        padding: '0 2rem',
        height: 56,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, letterSpacing: '-0.01em', color: 'var(--text)' }}>
          AA
        </Link>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              fontSize: 14,
              fontWeight: 400,
              color: path === l.href ? 'var(--text)' : 'var(--muted)',
              transition: 'color 0.15s',
              letterSpacing: '0.01em',
            }}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
