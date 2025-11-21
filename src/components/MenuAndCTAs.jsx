import React from 'react'

const MenuAndCTAs = () => {
  // Placeholder links; you can provide real URLs to replace these later
  const links = {
    order: 'https://tacomac.com',
    fullMenu: 'https://tacomac.com/menu',
    beerMenu: 'https://tacomac.com/beer',
    rewards: 'https://tacomac.com/rewards',
    careers: 'https://tacomac.com/careers',
    giftCards: 'https://tacomac.com/gift-cards',
    nutrition: 'https://tacomac.com/nutrition',
    allergy: 'https://tacomac.com/allergy',
    contact: '#contact',
    privacy: '#privacy',
    terms: '#terms',
    accessibility: '#accessibility'
  }

  const categories = ['Wings','Starters','Burgers','Sandwiches','Tacos','Wraps','Salads','Kids Menu','Desserts','Sides']

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-3">Menu Highlights</h2>
          <p className="text-blue-100/90">Explore guest favorites across wings, burgers, tacos and more. See the full menu for details and seasonal features.</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <span key={c} className="px-3 py-1 rounded-full bg-slate-800/60 border border-blue-500/20 text-blue-100/90 text-sm">{c}</span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a href={links.order} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition">Order Now</a>
          <a href={links.fullMenu} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-semibold transition">View Full Menu</a>
          <a href={links.beerMenu} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-semibold transition">Beer Menu</a>
          <a href={links.rewards} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition">Join Rewards</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <a href={links.careers} target="_blank" rel="noreferrer" className="rounded-lg bg-slate-800/60 border border-blue-500/20 text-blue-100/90 px-4 py-3 hover:bg-slate-700/60 transition">Careers</a>
          <a href={links.giftCards} target="_blank" rel="noreferrer" className="rounded-lg bg-slate-800/60 border border-blue-500/20 text-blue-100/90 px-4 py-3 hover:bg-slate-700/60 transition">Gift Cards</a>
          <a href={links.nutrition} target="_blank" rel="noreferrer" className="rounded-lg bg-slate-800/60 border border-blue-500/20 text-blue-100/90 px-4 py-3 hover:bg-slate-700/60 transition">Nutrition Info</a>
          <a href={links.allergy} target="_blank" rel="noreferrer" className="rounded-lg bg-slate-800/60 border border-blue-500/20 text-blue-100/90 px-4 py-3 hover:bg-slate-700/60 transition">Allergy & Sensitivity</a>
        </div>
      </div>
    </section>
  )
}

export default MenuAndCTAs
