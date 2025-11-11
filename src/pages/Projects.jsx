export default function Projects() {
  const projects = [
    { title: 'AI Dashboard', tag: 'Web App', desc: 'Analytics and automation for modern teams.' },
    { title: 'E-commerce Revamp', tag: 'Commerce', desc: 'High-converting storefront experience.' },
    { title: 'Brand Microsite', tag: 'Marketing', desc: 'Immersive storytelling and motion.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Projects</h1>
        <p className="mt-2 text-slate-600">A snapshot of what we build for our partners.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-xl transition">
              <div className="h-40 rounded-xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 mb-4" />
              <span className="text-xs inline-flex px-2 py-1 rounded-full bg-slate-100 text-slate-700">{p.tag}</span>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
