export default function Resume() {
  const projects = [
    { name: 'GhostSSH', meta: 'Next.js · React · TypeScript · Claude · OpenRouter', url: 'https://dashboard-tau-three-30.vercel.app/', desc: 'Autonomous AI Job Agent orchestrating multi-LLM workflows for profile extraction and job hunting.' },
    { name: 'AlphaX AI', meta: 'Next.js · React · TypeScript · Tailwind CSS · AI Agents', url: 'https://aqentix.me/', desc: 'Enterprise inventory intelligence platform. Features predictive forecasting, real-time analytics, and an AI Agent Chat for natural language queries.' },
    { name: 'ICT Knowledge Engine', meta: 'Next.js · React · Semantic Search · Vector DBs', url: 'https://ict-knowledge-engine.vercel.app', desc: 'Semantic knowledge graph designed on domain ontologies. Features a Retrieval-Augmented Generation (RAG) pipeline for semantic data discovery and interactive graph visualization.' },
    { name: 'Campus Compass', meta: 'Next.js · React · Pinecone · OpenAI', url: 'https://campuscompass-next.vercel.app', desc: 'AI-powered campus navigation assistant featuring semantic course search and interactive prerequisite graphs.' },
    { name: 'Viva Picks', meta: 'React · Node.js · Turso', url: 'https://bet.vivapicks.tech/', desc: 'Real-time sports betting analytics platform with microservice architecture, live odds processing, targeting 99.9% uptime.' },
  ]
  const sidebar = [
    { t: 'Languages', i: ['Python', 'TypeScript', 'JavaScript', 'SQL'] },
    { t: 'Frontend', i: ['React', 'Next.js', 'Tailwind CSS'] },
    { t: 'AI / LLM', i: ['Agentic Workflows', 'AWS Bedrock', 'Claude / Gemini', 'RAG', 'Knowledge Graphs'] },
    { t: 'Infrastructure', i: ['AWS', 'Docker', 'Vercel / Render', 'Microservices', 'REST / OpenAPI'] },
    { t: 'Contact', i: ['sixscripts@proton.me', 'github.com/sixscripts-ai', 'linkedin.com/in/aaschenbrener'] },
  ]

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 2rem 8rem' }}>
      <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <p className="mono" style={{ color: 'var(--accent)', marginBottom: '0.75rem', letterSpacing: '0.08em' }}>Resume</p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 800, color: 'var(--text)' }}>Ashton Aschenbrener</h1>
          <p style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>AI Engineer · Full-Stack Developer · Agentic Systems</p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a href="https://github.com/sixscripts-ai" target="_blank" rel="noopener" style={{ padding: '0.65rem 1.4rem', background: 'var(--accent)', color: '#fff', borderRadius: 6, fontFamily: 'Syne,sans-serif', fontWeight: 600, fontSize: 13 }}>GitHub</a>
          <a href="https://linkedin.com/in/aaschenbrener" target="_blank" rel="noopener" style={{ padding: '0.65rem 1.4rem', border: '1px solid var(--border-2)', color: 'var(--text)', borderRadius: 6, fontFamily: 'Syne,sans-serif', fontWeight: 600, fontSize: 13 }}>LinkedIn</a>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 260px', gap: '3rem', alignItems: 'start' }}>
        <div>
          <Sec title="Profile">
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 15 }}>AI Full-Stack Engineer specializing in autonomous agentic workflows, knowledge graphs based on strict ontologies, and enterprise microservice architectures. Ships production-ready applications across Python, TypeScript, React, and robust cloud infrastructure with GitOps.</p>
          </Sec>
          <Sec title="Projects">
            {projects.map(p => (
              <div key={p.name} style={{ marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <span style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, color: 'var(--text)', fontSize: 15 }}>{p.name}</span>
                  {p.url && <a href={p.url} target="_blank" rel="noopener" className="mono" style={{ fontSize: 11, color: 'var(--accent)' }}>Live ↗</a>}
                </div>
                <p className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: '0.5rem' }}>{p.meta}</p>
                <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </Sec>
          <Sec title="Experience">
            <Row name="Sixscripts Software" role="Founder & Lead Engineer" date="2023 – Present">Independent AI engineering practice — autonomous agent systems, RAG-powered applications, and full-stack web products. Multiple projects shipped end-to-end spanning finance, education, and cybersecurity domains.</Row>
          </Sec>
          <Sec title="Education" last>
            <Row name="MiraCosta College" role="Artificial Intelligence A.S." date="2023 – Present">Pursuing an AI degree with parallel applied study in LLM integration, autonomous agents, and full-stack product development.</Row>
          </Sec>
        </div>
        <div style={{ position: 'sticky', top: 80, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {sidebar.map(({ t, i }) => (
            <div key={t} style={{ border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ background: 'var(--bg-3)', padding: '0.6rem 1rem', borderBottom: '1px solid var(--border)' }}>
                <span className="mono" style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t}</span>
              </div>
              <div style={{ padding: '0.75rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', background: 'var(--bg-2)' }}>
                {i.map(x => <span key={x} className="mono" style={{ fontSize: 12, color: 'var(--text)', wordBreak: 'break-all' }}>{x}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
function Sec({ title, children, last }: { title: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div style={{ marginBottom: last ? 0 : '3rem', paddingBottom: last ? 0 : '3rem', borderBottom: last ? 'none' : '1px solid var(--border)' }}>
      <h2 style={{ fontFamily: 'Syne,sans-serif', fontSize: 11, fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>{title}</h2>
      {children}
    </div>
  )
}
function Row({ name, role, date, children }: { name: string; role: string; date: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.35rem' }}>
        <div><span style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, color: 'var(--text)', fontSize: 15 }}>{name}</span><span style={{ color: 'var(--muted)', fontSize: 14 }}> — {role}</span></div>
        <span className="mono" style={{ color: 'var(--muted)', fontSize: 12 }}>{date}</span>
      </div>
      <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.7 }}>{children}</p>
    </div>
  )
}
