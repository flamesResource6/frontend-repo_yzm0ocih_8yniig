import React from 'react'

const Footer = () => {
  const now = new Date().getFullYear()
  return (
    <footer className="py-10 border-t border-blue-500/20">
      <div className="max-w-6xl mx-auto px-4 text-blue-200/80 text-sm">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div>
            <h4 className="text-white font-semibold mb-2">About Taco Mac</h4>
            <p>Founded in 1979 in Atlanta. Fresh ingredients, Buffalo-style wings, and quality beer curation across 25+ Georgia locations.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Policies</h4>
            <ul className="space-y-1">
              <li><a href="#privacy" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition">Terms of Use</a></li>
              <li><a href="#accessibility" className="hover:text-white transition">Accessibility</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Payment & Parking</h4>
            <p>Accepts major credit cards and Taco Mac gift cards. On-site parking typically available for this suburban location.</p>
          </div>
        </div>
        <p className="text-center text-blue-300/60">© {now} Taco Mac Macon. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
