import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Rocket, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero with Spline 3D */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-white backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Tech. Portfolio. Playful.
              </span>
              <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
                We build modern experiences that delight
              </h1>
              <p className="mt-4 text-lg text-white/90">
                From concept to launch, we design and ship products that make brands unforgettable.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/projects" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-slate-900 shadow hover:shadow-md">
                  Explore Projects <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-white/60 bg-transparent px-4 py-2 font-medium text-white hover:bg-white/10">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent pointer-events-none" />
      </section>

      {/* Highlights */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Rocket, title: 'Fast delivery', desc: 'Ship features weekly with an agile workflow.' },
              { icon: Shield, title: 'Reliable & secure', desc: 'Enterprise-grade quality and security.' },
              { icon: Sparkles, title: 'Delightful design', desc: 'Beautiful interfaces crafted with care.' },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition">
                <f.icon className="h-6 w-6 text-indigo-600" />
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-1 text-slate-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
