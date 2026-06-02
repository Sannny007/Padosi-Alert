import { useState } from 'react'
const NAV_LINKS = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#features',     label: 'Features' },
  { href: '#app-preview',  label: 'App Preview' },
]
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-gray-900 bg-black/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="#" className="text-2xl font-extrabold tracking-wide">
          PADOSI<span className="text-red-500">ALERT</span>
        </a>
        <div className="hidden md:flex items-center gap-10 text-gray-300 font-medium">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}
              className="hover:text-red-500 transition hover:scale-95">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#early-access"
            className="rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700 hover:scale-105 shadow-lg shadow-red-900/20 cursor-pointer">
            Get Early Access
          </a>
          <button
            className="md:hidden text-gray-300 hover:text-white transition"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden border-t border-gray-800 bg-black/98 px-6 py-5 flex flex-col gap-5 text-gray-300 font-medium">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-red-500 transition">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar