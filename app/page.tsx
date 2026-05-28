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
      <section className="min-h-[85vh] flex flex-col justify-center max-w-6xl mx-auto px-6 relative">
        <p className="font-outfit text-electric-cyan tracking-[0.15em] uppercase text-sm mb-6 animate-fade-up d1">
          sixscripts-ai
        </p>
        <h1 className="font-outfit text-5xl md:text-7xl font-black text-white max-w-4xl leading-[1.05] mb-8 animate-fade-up d2 tracking-tight">
          I build AI systems that <br/>
          <span className="text-gradient">retrieve, reason, and ship.</span>
        </h1>
        <p className="font-jakarta text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-12 animate-fade-up d3 font-light">
          From RAG assistants and knowledge engines to trading intelligence platforms and automation tooling — full-stack systems that turn advanced logic into real software.
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-up d4">
          <Link href="/projects" className="pill-button pill-primary">
            View Projects
          </Link>
          <Link href="/resume" className="pill-button pill-secondary">
            Download Resume
          </Link>
        </div>
      </section>

      <div className="border-y border-white/10 bg-white/5 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-6 flex gap-6 flex-wrap items-center">
          <span className="font-outfit text-xs text-neon-pink tracking-[0.2em] uppercase font-bold mr-4">Stack</span>
          {stack.map(s => (
            <span key={s} className="font-jakarta text-sm font-medium text-gray-200">{s}</span>
          ))}
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex justify-between items-baseline mb-12">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-white">Featured Work</h2>
          <Link href="/projects" className="font-outfit text-sm font-bold text-electric-cyan hover:text-neon-pink transition-colors">
            All projects →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((p, i) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="block group">
              <div className="glass-panel p-8 h-full flex flex-col justify-between relative overflow-hidden">
                {/* Decorative glow inside card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/20 rounded-full blur-[50px] group-hover:bg-neon-pink/30 transition-colors" />
                
                <div>
                  <div className="mb-4">
                    <span className="font-outfit text-xs font-bold text-electric-cyan tracking-wider uppercase bg-electric-cyan/10 px-3 py-1 rounded-full">
                      {p.category}
                    </span>
                  </div>
                  <h3 className="font-outfit text-2xl font-bold text-white mb-3 group-hover:text-neon-pink transition-colors">
                    {p.title}
                  </h3>
                  <p className="font-jakarta text-gray-300 text-sm leading-relaxed mb-6">
                    {p.tagline}
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap mt-auto">
                  {p.stack.slice(0, 4).map(s => (
                    <span key={s} className="font-jakarta text-[10px] text-gray-400 border border-white/10 px-2 py-1 rounded-md bg-white/5">
                      {s}
                    </span>
                  ))}
                  {p.stack.length > 4 && (
                    <span className="font-jakarta text-[10px] text-gray-400 border border-white/10 px-2 py-1 rounded-md bg-white/5">
                      +{p.stack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-white mb-12">What I Build</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {focuses.map(f => (
              <div key={f.label} className="glass-panel p-8 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,46,147,0.5)] group-hover:scale-110 transition-transform">
                  <div className="w-4 h-4 bg-white rounded-full opacity-80" />
                </div>
                <h4 className="font-outfit text-xl font-bold text-white mb-3">{f.label}</h4>
                <p className="font-jakarta text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-white mb-6">About</h2>
          <p className="font-jakarta text-gray-300 leading-relaxed mb-6 text-lg font-light">
            I'm an AI engineer and full-stack developer focused on building systems that think, retrieve, automate, and scale. Pursuing an AI degree at MiraCosta College while shipping production-minded work across campus navigation, semantic knowledge engines, trading systems, cybersecurity tooling, and live data pipelines.
          </p>
          <p className="font-jakarta text-gray-300 leading-relaxed mb-10 text-lg font-light">
            I care about architecture, execution, and turning technically difficult ideas into usable products — from interface design through cloud deployment.
          </p>
          <Link href="/contact" className="font-outfit text-neon-pink font-bold text-lg hover:text-white transition-colors flex items-center gap-2">
            Get in touch 
            <span className="text-xl">→</span>
          </Link>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row justify-between items-center gap-10">
          <h2 className="font-outfit text-2xl md:text-3xl font-bold text-white max-w-lg leading-tight">
            Looking for someone who can turn AI into a working product?
          </h2>
          <div className="flex gap-4 flex-wrap">
            <Link href="/projects" className="pill-button pill-primary">View Case Studies</Link>
            <Link href="/contact" className="pill-button pill-secondary">Get In Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
