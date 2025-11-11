export default function About() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">About Us</h1>
        <p className="mt-4 text-slate-700 leading-relaxed">
          We are a multidisciplinary team of designers, engineers, and strategists dedicated to crafting
          products people love. Our mission is to blend technology and creativity to solve real problems
          and spark joy.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900">What we do</h3>
            <p className="text-sm text-slate-600 mt-2">Product design, full-stack development, branding, motion, and growth.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900">How we work</h3>
            <p className="text-sm text-slate-600 mt-2">Small cross-functional teams with rapid iteration and a user-first mindset.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
