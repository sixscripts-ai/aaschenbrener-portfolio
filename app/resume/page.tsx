export default function Resume() {
  const projects = [
    { name: 'GhostSSH', meta: 'Next.js · React · TypeScript · Claude · OpenRouter', url: 'https://dashboard-tau-three-30.vercel.app/', desc: 'Autonomous AI Job Agent orchestrating multi-LLM workflows for profile extraction and job hunting.' },
    { name: 'Aqentix', meta: 'Next.js · React · TypeScript · Tailwind CSS · AI Agents', url: 'https://aqentix.me/', desc: 'Enterprise inventory intelligence platform. Features predictive forecasting, real-time analytics, and an AI Agent Chat for natural language queries.' },
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
    <div className="max-w-6xl mx-auto px-6 py-24 relative">
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-electric-cyan/20 blur-[150px] rounded-full pointer-events-none z-[-1]" />
      
      <div className="mb-16 flex justify-between items-end flex-wrap gap-6 border-b border-white/10 pb-8">
        <div>
          <p className="font-outfit text-neon-pink tracking-[0.15em] uppercase text-sm mb-4 font-bold">Resume</p>
          <h1 className="font-outfit text-4xl md:text-6xl font-black text-white tracking-tight">Ashton Aschenbrener</h1>
          <p className="font-jakarta text-xl text-gray-300 mt-3 font-light">AI Engineer · Full-Stack Developer · Agentic Systems</p>
        </div>
        <div className="flex gap-4 flex-wrap">
          <a href="https://github.com/sixscripts-ai" target="_blank" rel="noopener" className="pill-button pill-primary">GitHub</a>
          <a href="https://linkedin.com/in/aaschenbrener" target="_blank" rel="noopener" className="pill-button pill-secondary">LinkedIn</a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2 flex flex-col gap-12">
          <Sec title="Profile">
            <p className="font-jakarta text-gray-300 leading-relaxed text-lg font-light">
              AI Full-Stack Engineer specializing in autonomous agentic workflows, knowledge graphs based on strict ontologies, and enterprise microservice architectures. Ships production-ready applications across Python, TypeScript, React, and robust cloud infrastructure with GitOps.
            </p>
          </Sec>

          <Sec title="Projects">
            <div className="flex flex-col gap-6">
              {projects.map(p => (
                <div key={p.name} className="glass-panel p-6 hover:border-electric-cyan/50 group">
                  <div className="flex justify-between items-baseline flex-wrap gap-2 mb-2">
                    <span className="font-outfit font-bold text-white text-xl group-hover:text-neon-pink transition-colors">{p.name}</span>
                    {p.url && (
                      <a href={p.url} target="_blank" rel="noopener" className="font-jakarta text-sm text-electric-cyan hover:text-white transition-colors">
                        Live ↗
                      </a>
                    )}
                  </div>
                  <p className="font-jakarta font-mono text-xs text-gray-400 mb-4 bg-white/5 inline-block px-2 py-1 rounded">{p.meta}</p>
                  <p className="font-jakarta text-gray-300 leading-relaxed font-light">{p.desc}</p>
                </div>
              ))}
            </div>
          </Sec>

          <Sec title="Experience">
            <Row name="Sixscripts Software" role="Founder & Lead Engineer" date="2023 – Present">
              Independent AI engineering practice — autonomous agent systems, RAG-powered applications, and full-stack web products. Multiple projects shipped end-to-end spanning finance, education, and cybersecurity domains.
            </Row>
          </Sec>

          <Sec title="Education" last>
            <Row name="MiraCosta College" role="Artificial Intelligence A.S." date="2023 – Present">
              Pursuing an AI degree with parallel applied study in LLM integration, autonomous agents, and full-stack product development.
            </Row>
          </Sec>
        </div>

        <div className="lg:col-span-1 sticky top-32 flex flex-col gap-6">
          {sidebar.map(({ t, i }) => (
            <div key={t} className="glass-panel overflow-hidden">
              <div className="bg-white/5 px-5 py-3 border-b border-white/10">
                <span className="font-outfit text-xs font-bold text-gray-400 tracking-wider uppercase">{t}</span>
              </div>
              <div className="p-5 flex flex-col gap-3">
                {i.map(x => (
                  <span key={x} className="font-jakarta text-sm text-gray-200 font-medium break-all">{x}</span>
                ))}
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
    <div className={`flex flex-col gap-6 ${last ? '' : 'border-b border-white/10 pb-12'}`}>
      <h2 className="font-outfit text-2xl font-bold text-white flex items-center gap-3">
        <span className="w-8 h-1 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full" />
        {title}
      </h2>
      {children}
    </div>
  )
}

function Row({ name, role, date, children }: { name: string; role: string; date: string; children: React.ReactNode }) {
  return (
    <div className="glass-panel p-6 border-l-4 border-l-electric-cyan bg-electric-cyan/5">
      <div className="flex justify-between flex-wrap gap-2 mb-4">
        <div>
          <span className="font-outfit font-bold text-white text-lg">{name}</span>
          <span className="font-jakarta text-gray-400 text-sm ml-2">— {role}</span>
        </div>
        <span className="font-jakarta font-mono text-electric-cyan text-sm">{date}</span>
      </div>
      <p className="font-jakarta text-gray-300 leading-relaxed font-light">{children}</p>
    </div>
  )
}
