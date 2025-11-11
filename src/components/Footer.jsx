import { Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          <div>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 mb-4" />
            <p className="text-sm leading-relaxed text-slate-400">
              We craft delightful digital experiences for ambitious brands and startups.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Blog</li>
              <li>Case Studies</li>
              <li>Guides</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Follow us</h4>
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between">
          <p>© {year} TechVerse. All rights reserved.</p>
          <div className="mt-2 sm:mt-0 inline-flex gap-4">
            <a href="#" className="hover:text-slate-300">Privacy</a>
            <a href="#" className="hover:text-slate-300">Terms</a>
            <a href="#" className="hover:text-slate-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
