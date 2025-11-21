import React from 'react'

const Hero = () => {
  const address = '5431 Bowman Road, Macon, Georgia 31210'
  const phone = '(478) 254-8688'
  const mapsLink = `https://www.google.com/maps?q=${encodeURIComponent(address)}`
  const callLink = `tel:${phone.replace(/[^\d]/g, '')}`

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_50%_0%,rgba(59,130,246,0.15),transparent_70%)]" />
      <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">Taco Mac — Macon</h1>
            <p className="text-blue-100/90 text-lg mb-6">Award-winning Buffalo wings, an extensive craft beer program, and a family-friendly sports-bar atmosphere.</p>
            <ul className="text-blue-100/90 space-y-2 mb-6">
              <li className="flex items-center gap-3"><span className="inline-block w-2 h-2 bg-blue-500 rounded-full" />{address}</li>
              <li className="flex items-center gap-3"><span className="inline-block w-2 h-2 bg-blue-500 rounded-full" />Phone: {phone}</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a href={mapsLink} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition">Get Directions</a>
              <a href={callLink} className="px-5 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-semibold transition">Call Now</a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-blue-500/20 bg-slate-800/40 p-6 backdrop-blur-sm shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">Hours</h3>
                  <ul className="text-blue-100/90 text-sm space-y-1">
                    <li>Mon–Thu: 11AM–11PM</li>
                    <li>Fri–Sat: 11AM–12AM</li>
                    <li>Sun: 11AM–11PM</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Services</h3>
                  <ul className="text-blue-100/90 text-sm space-y-1">
                    <li>Dine-in</li>
                    <li>Takeout</li>
                    <li>Delivery*</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-blue-300/70 mt-4">*Delivery availability may vary by partner and time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
