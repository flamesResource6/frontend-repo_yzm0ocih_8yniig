import React from 'react'

const Highlights = () => {
  const items = [
    {
      title: 'Wings & Sports',
      points: [
        'Award-winning Buffalo wings (boneless & traditional)',
        'Casual, family-friendly sports-bar atmosphere',
        'Large TVs for big games and watch parties'
      ]
    },
    {
      title: 'Craft Beer Program',
      points: [
        'Extensive, rotating craft beer list',
        'Features local and regional breweries',
        'Tap-a-Yard option and in-house Beer Advocates'
      ]
    },
    {
      title: 'Order & Rewards',
      points: [
        'Online ordering for pickup or delivery',
        'Taco Mac Rewards: earn points toward free food',
        'Exclusive member-only drops and discounts'
      ]
    }
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((card, idx) => (
            <div key={idx} className="rounded-2xl border border-blue-500/20 bg-slate-800/40 p-6 backdrop-blur-sm shadow-xl">
              <h3 className="text-white font-semibold text-lg mb-3">{card.title}</h3>
              <ul className="list-disc list-inside text-blue-100/90 text-sm space-y-2">
                {card.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights
