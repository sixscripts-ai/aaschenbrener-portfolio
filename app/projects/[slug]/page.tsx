import Link from 'next/link'
import { projects, getProject } from '@/lib/projects'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = getProject(slug)
  if (!p) notFound()

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 2rem 8rem' }}>
      <Link href="/projects" className="mono" style={{ fontSize: 13, color: 'var(--muted)', display: 'inline-block', marginBottom: '3rem' }}>← All Projects</Link>

      <div style={{ maxWidth: 720, marginBottom: '4rem' }}>
        <span className="mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase', background: 'var(--accent-dim)', padding: '2px 8px', borderRadius: 3 }}>{p.category}</span>
        <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: 'var(--text)', margin: '1rem 0 1.25rem' }}>{p.title}</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.7 }}>{p.tagline}</p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener" style={{ padding: '0.65rem 1.4rem', background: 'var(--accent)', color: '#fff', borderRadius: 6, fontFamily: 'Syne,sans-serif', fontWeight: 600, fontSize: 13 }}>Live Site ↗</a>}
          {p.repoUrl && <a href={p.repoUrl} target="_blank" rel="noopener" style={{ padding: '0.65rem 1.4rem', border: '1px solid var(--border-2)', color: 'var(--text)', borderRadius: 6, fontFamily: 'Syne,sans-serif', fontWeight: 600, fontSize: 13 }}>GitHub →</a>}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem', alignItems: 'start' }}>
        <div>
          {[['Overview', p.overview], ['Problem', p.problem], ['Solution', p.solution]].map(([t, b]) => (
            <div key={t} style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontFamily: 'Syne,sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.75rem' }}>{t}</h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: 15 }}>{b}</p>
            </div>
          ))}

          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'Syne,sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem' }}>What I Built</h2>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '0.6rem' }}>
              {p.bullets.map((b, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)', marginTop: '0.3rem', flexShrink: 0 }}>·</span>
                  <span style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.65 }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 style={{ fontFamily: 'Syne,sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem' }}>Architecture</h2>
            <div style={{ background: 'var(--bg-3)', border: '1px solid var(--border)', borderRadius: 8, padding: '1.25rem 1.5rem' }}>
              <p className="mono" style={{ color: 'var(--accent)', fontSize: 13, lineHeight: 1.8 }}>{p.architecture}</p>
            </div>
          </div>
        </div>

        <div style={{ position: 'sticky', top: 80, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden' }}>
            <div style={{ background: 'var(--bg-3)', padding: '0.75rem 1.25rem', borderBottom: '1px solid var(--border)' }}>
              <span className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Stack</span>
            </div>
            <div style={{ padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {p.stack.map(s => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                  <span className="mono" style={{ fontSize: 13, color: 'var(--text)' }}>{s}</span>
                </div>
              ))}
            </div>
          </div>

          {(p.liveUrl || p.repoUrl) && (
            <div style={{ border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden' }}>
              <div style={{ background: 'var(--bg-3)', padding: '0.75rem 1.25rem', borderBottom: '1px solid var(--border)' }}>
                <span className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Links</span>
              </div>
              <div style={{ padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener" className="mono" style={{ fontSize: 12, color: 'var(--accent)', wordBreak: 'break-all' }}>{p.liveUrl.replace('https://','')} ↗</a>}
                {p.repoUrl && <a href={p.repoUrl} target="_blank" rel="noopener" className="mono" style={{ fontSize: 12, color: 'var(--accent)', wordBreak: 'break-all' }}>{p.repoUrl.replace('https://','')} ↗</a>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
