import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const PAGES = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const filtered = query
    ? PAGES.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (filtered.length > 0) {
      navigate(filtered[0].path);
      setQuery('');
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg" />
            <span className="text-lg font-bold tracking-tight text-slate-800">TechVerse</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {PAGES.map((p) => (
              <Link
                key={p.path}
                to={p.path}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  location.pathname === p.path ? 'text-indigo-600' : 'text-slate-600'
                }`}
              >
                {p.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <form onSubmit={handleSubmit} className="relative hidden sm:block">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages..."
                className="pl-8 pr-3 py-2 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
              />
              {filtered.length > 0 && (
                <div className="absolute mt-1 w-full rounded-lg border border-slate-200 bg-white shadow-lg overflow-hidden">
                  {filtered.map((f) => (
                    <button
                      type="button"
                      key={f.path}
                      onClick={() => {
                        navigate(f.path);
                        setQuery('');
                        setOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-50"
                    >
                      {f.name}
                    </button>
                  ))}
                </div>
              )}
            </form>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-slate-100"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <form onSubmit={handleSubmit} className="relative mb-3">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages..."
                className="w-full pl-8 pr-3 py-2 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
              />
            </form>
            <div className="grid gap-2">
              {PAGES.map((p) => (
                <Link
                  key={p.path}
                  to={p.path}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium hover:bg-slate-100 ${
                    location.pathname === p.path ? 'text-indigo-600' : 'text-slate-700'
                  }`}
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
