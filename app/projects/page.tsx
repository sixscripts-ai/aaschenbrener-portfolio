import Link from 'next/link'
import { projects } from '@/lib/projects'

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const others   = projects.filter(p => !p.featured)

  return (
    <section className="max-w-6xl mx-auto px-6 py-24 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-cyan/10 blur-[150px] rounded-full pointer-events-none z-[-1]" />
      
      <div className="mb-16">
        <p className="font-outfit text-neon-pink tracking-[0.15em] uppercase text-sm mb-4 font-bold">Selected Work</p>
        <h1 className="font-outfit text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">Projects</h1>
        <p className="font-jakarta text-gray-300 max-w-2xl text-lg leading-relaxed font-light">
          A focused set of AI and full-stack systems — retrieval workflows, autonomous logic, complex domain modeling, and deployable application architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-20">
        {featured.map((p, i) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="block group">
            <div className="glass-panel p-8 md:p-10 flex flex-col md:flex-row gap-8 justify-between items-start relative overflow-hidden transition-all duration-300">
              {/* Vibrant Glow Effect */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-neon-purple/20 rounded-full blur-[60px] group-hover:bg-neon-pink/30 transition-colors" />
              
              <div className="flex-1 relative z-10">
                <div className="mb-4">
                  <span className="font-outfit text-[11px] font-bold text-electric-cyan tracking-wider uppercase bg-electric-cyan/10 px-3 py-1 rounded-full border border-electric-cyan/20">
                    {p.category}
                  </span>
                </div>
                <h3 className="font-outfit text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-neon-pink transition-colors">
                  {p.title}
                </h3>
                <p className="font-jakarta text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mb-6 font-light">
                  {p.tagline}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {p.stack.map(s => (
                    <span key={s} className="font-jakarta text-xs text-gray-200 border border-white/10 px-3 py-1.5 rounded-lg bg-white/5 shadow-sm">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-3 mt-4 md:mt-0 relative z-10">
                {p.liveUrl && (
                  <span className="font-outfit text-xs font-bold bg-white/10 text-white px-3 py-1 rounded-full border border-white/20">
                    Live ↗
                  </span>
                )}
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-neon-pink group-hover:border-neon-pink transition-all duration-300 shadow-lg">
                  <span className="text-white text-xl">→</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {others.length > 0 && (
        <>
          <h2 className="font-outfit text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Also Built</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map(p => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="block group">
                <div className="glass-panel p-6 h-full relative overflow-hidden transition-all duration-300 hover:border-electric-cyan/50">
                  <span className="font-outfit text-[10px] font-bold text-neon-purple tracking-wider uppercase bg-neon-purple/10 px-2.5 py-1 rounded-md mb-4 inline-block">
                    {p.category}
                  </span>
                  <h3 className="font-outfit text-xl font-bold text-white mb-3 group-hover:text-electric-cyan transition-colors">
                    {p.title}
                  </h3>
                  <p className="font-jakarta text-gray-400 text-sm leading-relaxed font-light">
                    {p.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
