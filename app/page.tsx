import Link from 'next/link'
import { getFeatured } from '@/lib/projects'

const stack = ['Python', 'TypeScript', 'React', 'Next.js', 'FastAPI', 'AWS Bedrock', 'Docker', 'Vercel']

const focuses = [
  { label: 'Autonomous Agents', desc: 'Systems that plan, act, and self-correct without constant human input.' },
  { label: 'RAG & Retrieval', desc: 'Document-grounded applications with source-aware, accurate output.' },
  { label: 'AI Knowledge Systems', desc: 'Graph-modeled, semantically searchable domain intelligence.' },
  { label: 'Trading Intelligence', desc: 'Encoding complex discretionary logic into structured software.' },
  { label: 'Full-Stack Deployment', desc: 'Interface through cloud — typed, modular, production-minded.' },
]

export default function Home() {
  const featured = getFeatured()

  return (
    <>
      <section style={{
        minHeight: 'calc(100vh - 56px)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        maxWidth: 1100, margin: '0 auto', padding: '6rem 2rem 4rem',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', top: '30%', left: '-10%', width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(77,158,255,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <p className="mono fade-up" style={{ color: 'var(--accent)', marginBottom: '1.5rem', letterSpacing: '0.08em' }}>
          sixscripts-ai
        </p>
        <h1 className="fade-up d1" style={{
          fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 800,
          color: 'var(--text)', maxWidth: 860, lineHeight: 1.08, marginBottom: '1.75rem',
        }}>
          I build AI systems that retrieve, reason, and ship.
        </h1>
        <p className="fade-up d2" style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--muted)',
          maxWidth: 580, lineHeight: 1.7, marginBottom: '2.75rem', fontWeight: 300,
        }}>
          From RAG assistants and knowledge engines to trading intelligence platforms and automation tooling — full-stack systems that turn advanced logic into real software.
        </p>
        <div className="fade-up d3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/projects" style={{
            padding: '0.75rem 1.75rem', background: 'var(--accent)', color: '#fff',
            borderRadius: 6, fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 14,
          }}>View Projects</Link>
          <Link href="/resume" style={{
            padding: '0.75rem 1.75rem', border: '1px solid var(--border-2)', color: 'var(--text)',
            borderRadius: 6, fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 14,
          }}>Download Resume</Link>
        </div>
      </section>

      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '1.25rem 2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span className="mono" style={{ color: 'var(--muted)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Stack</span>
          {stack.map(s => <span key={s} className="mono" style={{ color: 'var(--text)', fontSize: 13 }}>{s}</span>)}
        </div>
      </div>

      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '6rem 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: 'var(--text)' }}>Featured Work</h2>
          <Link href="/projects" className="mono" style={{ fontSize: 13, color: 'var(--accent)' }}>All projects →</Link>
        </div>
        <div style={{ display: 'grid', gap: '1.25rem' }}>
          {featured.map(p => (
            <Link key={p.slug} href={`/projects/${p.slug}`} style={{ display: 'block' }}>
              <div style={{
                border: '1px solid var(--border)', borderRadius: 10, padding: '2rem 2.25rem',
                background: 'var(--bg-2)', display: 'grid', gridTemplateColumns: '1fr auto',
                gap: '1rem', alignItems: 'start', transition: 'border-color 0.2s, background 0.2s', cursor: 'pointer',
              }}>
                <div>
                  <div style={{ marginBottom: '0.6rem' }}>
                    <span className="mono" style={{
                      fontSize: 11, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase',
                      background: 'var(--accent-dim)', padding: '2px 8px', borderRadius: 3,
                    }}>{p.category}</span>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.4rem' }}>{p.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6, maxWidth: 620 }}>{p.tagline}</p>
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.1rem', flexWrap: 'wrap' }}>
                    {p.stack.slice(0, 5).map(s => (
                      <span key={s} className="mono" style={{ fontSize: 11, color: 'var(--muted)', border: '1px solid var(--border)', padding: '2px 8px', borderRadius: 3 }}>{s}</span>
                    ))}
                  </div>
                </div>
                <div style={{ color: 'var(--muted)', fontSize: 20, paddingTop: 4 }}>→</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '6rem 2rem' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: 'var(--text)', marginBottom: '3rem' }}>What I Build</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {focuses.map(f => (
              <div key={f.label} style={{ border: '1px solid var(--border)', borderRadius: 8, padding: '1.5rem', background: 'var(--bg)' }}>
                <div style={{ width: 6, height: 28, background: 'var(--accent)', borderRadius: 3, marginBottom: '1rem' }} />
                <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>{f.label}</h4>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 640 }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: 'var(--text)', marginBottom: '1.5rem' }}>About</h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
            I'm an AI engineer and full-stack developer focused on building systems that think, retrieve, automate, and scale. Pursuing an AI degree at MiraCosta College while shipping production-minded work across campus navigation, semantic knowledge engines, trading systems, cybersecurity tooling, and live data pipelines.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
            I care about architecture, execution, and turning technically difficult ideas into usable products — from interface design through cloud deployment.
          </p>
          <Link href="/contact" style={{ fontFamily: 'Syne, sans-serif', fontSize: 14, fontWeight: 600, color: 'var(--accent)' }}>
            Get in touch →
          </Link>
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--text)', maxWidth: 460 }}>
            Looking for someone who can turn AI into a working product?
          </h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/projects" style={{ padding: '0.75rem 1.5rem', background: 'var(--accent)', color: '#fff', borderRadius: 6, fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 14 }}>View Case Studies</Link>
            <Link href="/contact" style={{ padding: '0.75rem 1.5rem', border: '1px solid var(--border-2)', color: 'var(--text)', borderRadius: 6, fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 14 }}>Get In Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
