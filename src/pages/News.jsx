export default function News() {
  const posts = [
    { title: 'Launching our new AI Studio', date: 'Oct 1, 2025' },
    { title: 'TechVerse wins design award', date: 'Sep 10, 2025' },
    { title: 'We are hiring across roles', date: 'Aug 20, 2025' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">News</h1>
        <p className="mt-2 text-slate-600">Updates, announcements, and behind-the-scenes.</p>
        <div className="mt-8 space-y-4">
          {posts.map((p, i) => (
            <article key={i} className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition">
              <div className="text-xs text-slate-500">{p.date}</div>
              <h3 className="text-lg font-semibold text-slate-900 mt-1">{p.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
