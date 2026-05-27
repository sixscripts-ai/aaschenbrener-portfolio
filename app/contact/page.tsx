export default function Contact() {
  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 2rem 8rem' }}>
      <p className="mono" style={{ color: 'var(--accent)', marginBottom: '0.75rem', letterSpacing: '0.08em' }}>Contact</p>
      <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: 'var(--text)', marginBottom: '1.25rem' }}>Get In Touch</h1>
      <p style={{ color: 'var(--muted)', maxWidth: 520, lineHeight: 1.75, marginBottom: '3.5rem', fontSize: '1.05rem' }}>
        Open to roles and projects involving AI engineering, applied ML products, full-stack systems, retrieval workflows, and autonomous tooling.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem', maxWidth: 800 }}>
        {[
          { label: 'Email', value: 'sixscripts@proton.me', href: 'mailto:sixscripts@proton.me', desc: 'Best for project inquiries and roles.' },
          { label: 'GitHub', value: 'github.com/sixscripts-ai', href: 'https://github.com/sixscripts-ai', desc: 'Code, repos, and project history.' },
          { label: 'LinkedIn', value: 'linkedin.com/in/aaschenbrener', href: 'https://linkedin.com/in/aaschenbrener', desc: 'Professional background and connections.' },
        ].map(c => (
          <a key={c.label} href={c.href} target={c.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener" style={{ display: 'block' }}>
            <div style={{ border: '1px solid var(--border)', borderRadius: 10, padding: '1.75rem', background: 'var(--bg-2)', transition: 'border-color 0.2s', cursor: 'pointer' }}>
              <span className="mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{c.label}</span>
              <p style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, color: 'var(--text)', fontSize: 15, margin: '0.6rem 0 0.4rem', wordBreak: 'break-all' }}>{c.value}</p>
              <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.55 }}>{c.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
