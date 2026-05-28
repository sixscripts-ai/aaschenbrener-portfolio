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
    <div className="max-w-6xl mx-auto px-6 py-24 relative">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-neon-purple/20 blur-[150px] rounded-full pointer-events-none z-[-1]" />

      <Link href="/projects" className="font-outfit text-sm font-bold text-gray-400 hover:text-white transition-colors flex items-center gap-2 mb-12 w-fit">
        ← Back to Projects
      </Link>

      <div className="max-w-3xl mb-16">
        <span className="font-outfit text-[11px] font-bold text-neon-pink tracking-wider uppercase bg-neon-pink/10 px-3 py-1 rounded-full border border-neon-pink/20">
          {p.category}
        </span>
        <h1 className="font-outfit text-4xl md:text-6xl font-black text-white my-6 tracking-tight">{p.title}</h1>
        <p className="font-jakarta text-xl text-gray-300 leading-relaxed font-light">{p.tagline}</p>
        
        <div className="flex gap-4 mt-8 flex-wrap">
          {p.liveUrl && (
            <a href={p.liveUrl} target="_blank" rel="noopener" className="pill-button pill-primary">
              Live Site ↗
            </a>
          )}
          {p.repoUrl && (
            <a href={p.repoUrl} target="_blank" rel="noopener" className="pill-button pill-secondary">
              View Code →
            </a>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2 flex flex-col gap-12">
          {[['Overview', p.overview], ['Problem', p.problem], ['Solution', p.solution]].map(([t, b]) => (
            <div key={t}>
              <h2 className="font-outfit text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">{t}</h2>
              <p className="font-jakarta text-gray-300 leading-relaxed text-lg font-light">{b}</p>
            </div>
          ))}

          <div>
            <h2 className="font-outfit text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">What I Built</h2>
            <ul className="flex flex-col gap-4">
              {p.bullets.map((b, i) => (
                <li key={i} className="flex gap-4 items-start bg-white/5 p-4 rounded-xl border border-white/5">
                  <span className="w-6 h-6 rounded-full bg-electric-cyan/20 text-electric-cyan flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">✓</span>
                  <span className="font-jakarta text-gray-300 text-base leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-outfit text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Architecture</h2>
            <div className="glass-panel p-6 border-l-4 border-l-neon-purple bg-neon-purple/5">
              <p className="font-jakarta font-mono text-electric-cyan text-sm leading-relaxed">{p.architecture}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 sticky top-32 flex flex-col gap-6">
          <div className="glass-panel overflow-hidden">
            <div className="bg-white/5 px-6 py-4 border-b border-white/10">
              <span className="font-outfit text-xs font-bold text-gray-400 tracking-wider uppercase">Tech Stack</span>
            </div>
            <div className="p-6 flex flex-col gap-4">
              {p.stack.map(s => (
                <div key={s} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-neon-pink to-electric-cyan flex-shrink-0" />
                  <span className="font-jakarta text-sm text-gray-200 font-medium">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {(p.liveUrl || p.repoUrl) && (
            <div className="glass-panel overflow-hidden">
              <div className="bg-white/5 px-6 py-4 border-b border-white/10">
                <span className="font-outfit text-xs font-bold text-gray-400 tracking-wider uppercase">Links</span>
              </div>
              <div className="p-6 flex flex-col gap-4">
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noopener" className="font-jakarta text-sm text-neon-pink hover:text-white transition-colors break-all flex items-center justify-between group">
                    <span>{p.liveUrl.replace('https://', '')}</span>
                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                  </a>
                )}
                {p.repoUrl && (
                  <a href={p.repoUrl} target="_blank" rel="noopener" className="font-jakarta text-sm text-electric-cyan hover:text-white transition-colors break-all flex items-center justify-between group">
                    <span>{p.repoUrl.replace('https://', '')}</span>
                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
