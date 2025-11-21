import React from 'react'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import MenuAndCTAs from './components/MenuAndCTAs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-blue-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_60%)] pointer-events-none" />

      <header className="relative border-b border-blue-500/20 bg-slate-900/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
              <span className="text-blue-300 font-bold">TM</span>
            </div>
            <div>
              <p className="text-white font-semibold leading-none">Taco Mac — Macon</p>
              <p className="text-xs text-blue-300/70">5431 Bowman Rd, Macon, GA</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <a href="#contact" className="px-3 py-2 rounded-md bg-slate-800/60 text-blue-100 border border-blue-500/20 hover:bg-slate-700/60 transition text-sm">Contact</a>
            <a href="https://tacomac.com" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold transition text-sm">Order Now</a>
          </div>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <Highlights />
        <MenuAndCTAs />

        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mb-3">Events & Atmosphere</h2>
            <p className="text-blue-100/90 max-w-3xl">Catch the big game on our wall of TVs, join UFC fight nights, and look out for seasonal events. Family-friendly hours with late-night service on weekends.</p>
          </div>
        </section>

        <section className="py-12 md:py-16" id="contact">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Find Us</h2>
                <p className="text-blue-100/90 mb-4">5431 Bowman Road, Macon, GA 31210 · (478) 254-8688</p>
                <div className="rounded-2xl overflow-hidden border border-blue-500/20 shadow-xl bg-slate-800/40">
                  <iframe
                    title="Taco Mac Macon Map"
                    src={`https://www.google.com/maps?q=${encodeURIComponent('5431 Bowman Road, Macon, Georgia 31210')}&output=embed`}
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Quick Contact</h2>
                <form className="space-y-3">
                  <input className="w-full px-4 py-3 rounded-lg bg-slate-800/60 border border-blue-500/20 text-blue-100/90 placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Your name" />
                  <input className="w-full px-4 py-3 rounded-lg bg-slate-800/60 border border-blue-500/20 text-blue-100/90 placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Email or phone" />
                  <textarea className="w-full px-4 py-3 rounded-lg bg-slate-800/60 border border-blue-500/20 text-blue-100/90 placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" rows="4" placeholder="How can we help?" />
                  <button type="button" className="px-5 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-semibold transition w-full sm:w-auto">Submit</button>
                  <p className="text-xs text-blue-300/70">Form is for demonstration. For immediate assistance call (478) 254-8688.</p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
