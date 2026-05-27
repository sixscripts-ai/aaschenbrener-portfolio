import Link from 'next/link'
import { projects } from '@/lib/projects'

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const others   = projects.filter(p => !p.featured)

  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 2rem 8rem' }}>
      <div style={{ marginBottom: '3.5rem' }}>
        <p className="mono" style={{ color: 'var(--accent)', marginBottom: '0.75rem', letterSpacing: '0.08em' }}>Selected Work</p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: 'var(--text)', marginBottom: '1rem' }}>Projects</h1>
        <p style={{ color: 'var(--muted)', maxWidth: 520, lineHeight: 1.7 }}>
          A focused set of AI and full-stack systems — retrieval workflows, autonomous logic, complex domain modeling, and deployable application architecture.
        </p>
      </div>

      <div style={{ display: 'grid', gap: '1.25rem', marginBottom: '4rem' }}>
        {featured.map(p => (
          <Link key={p.slug} href={`/projects/${p.slug}`} style={{ display: 'block' }}>
            <div style={{
              border: '1px solid var(--border)', borderRadius: 10, padding: '2rem 2.25rem',
              background: 'var(--bg-2)', display: 'grid', gridTemplateColumns: '1fr auto',
              gap: '1rem', alignItems: 'start', transition: 'border-color 0.2s', cursor: 'pointer',
            }}>
              <div>
                <div style={{ marginBottom: '0.6rem' }}>
                  <span className="mono" style={{
                    fontSize: 11, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase',
                    background: 'var(--accent-dim)', padding: '2px 8px', borderRadius: 3,
                  }}>{p.category}</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.4rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6, maxWidth: 600 }}>{p.tagline}</p>
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                  {p.stack.map(s => (
                    <span key={s} className="mono" style={{ fontSize: 11, color: 'var(--muted)', border: '1px solid var(--border)', padding: '2px 8px', borderRadius: 3 }}>{s}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end' }}>
                {p.liveUrl && <span className="mono" style={{ fontSize: 11, color: 'var(--accent)' }}>Live ↗</span>}
                <span style={{ color: 'var(--muted)', fontSize: 20 }}>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {others.length > 0 && (
        <>
          <h2 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--muted)', marginBottom: '1.25rem', letterSpacing: '0.04em' }}>Also Built</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
            {others.map(p => (
              <Link key={p.slug} href={`/projects/${p.slug}`} style={{ display: 'block' }}>
                <div style={{ border: '1px solid var(--border)', borderRadius: 8, padding: '1.5rem', background: 'var(--bg-2)', transition: 'border-color 0.2s', cursor: 'pointer' }}>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase', background: 'var(--accent-dim)', padding: '2px 8px', borderRadius: 3 }}>{p.category}</span>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', margin: '0.75rem 0 0.4rem' }}>{p.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.55 }}>{p.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
