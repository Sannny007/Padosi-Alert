import { useState } from 'react'
const STEPS = [
  {
    number: '01',
    icon: '🚨',
    title: 'Select Emergency',
    description: 'Choose from 6 emergency types — medical, blood, fire, vehicle, medicine, or community. No typing. No calls.',
  },
  {
    number: '02',
    icon: '📍',
    title: 'Location Detected',
    description: 'Your GPS is auto-captured. No need to explain where you are — PadosiAlert already knows.',
  },
  {
    number: '03',
    icon: '🔔',
    title: 'Neighbors Alerted',
    description: 'Everyone within 1–2 km gets a live push notification. The closest neighbor can be at your door in seconds.',
  },
]

const FEATURES = [
  { emoji: '🩸', title: 'Blood Emergency',    tag: 'Life-saving', description: 'Connect blood donors and seekers in your area instantly. Get any blood type in minutes, not hours.' },
  { emoji: '🏥', title: 'Medical SOS',         tag: 'Critical',    description: 'First aid from a trained neighbor can arrive before any ambulance. Alert your 1 km radius instantly.' },
  { emoji: '🔥', title: 'Fire Alert',          tag: 'Urgent',      description: 'Broadcast fire emergencies to your entire neighborhood in under 30 seconds. Speed saves lives.' },
  { emoji: '🚗', title: 'Vehicle Breakdown',   tag: 'Practical',   description: 'Stranded on the road? Get a push, a jump cable, or a safe ride from a neighbor nearby.' },
  { emoji: '💊', title: 'Medicine Needed',     tag: 'Helpful',     description: 'Need urgent medicine at midnight? A neighbor 300 meters away might have exactly what you need.' },
  { emoji: '🛡️', title: 'Verified Network',   tag: 'Secure',      description: 'Neighborhood-verified members only. Safety and privacy protected by our community trust system.' },
]

const APP_ALERTS = [
  { label: 'Blood Needed — B+',  sub: 'Sector 12 Hospital · 0.4 km', time: '3 min ago',  dot: 'bg-red-500' },
  { label: 'Medical Emergency',  sub: 'Near Railway Colony · 0.8 km', time: '8 min ago',  dot: 'bg-red-600' },
  { label: 'Vehicle Request',    sub: 'Main Market Gate · 1.2 km',   time: '14 min ago', dot: 'bg-gray-500' },
]

const SectionLabel = ({ text }) => (
  <p className="mb-4 font-mono text-xs tracking-[0.25em] text-red-700 uppercase">// {text}</p>
)

const Features = () => {
  const [email, setEmail]       = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (email.trim()) setSubmitted(true)
  }

  return (
    <div className="bg-black text-white">
      <section id="how-it-works" className="border-t border-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionLabel text="HOW_IT_WORKS" />
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-5xl font-extrabold tracking-tight md:text-6xl">
              THREE TAPS.<br />HELP ARRIVES.
            </h2>
            <p className="max-w-sm text-lg leading-relaxed text-gray-400">
              No waiting. No calling. No explaining. One tap sends your emergency to every neighbor within 1–2 km — instantly.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <div key={step.number}
                   className="group relative rounded-2xl border border-gray-800 bg-gray-950 p-8
                              transition hover:border-red-800 hover:bg-red-950/10">
                <div className="mb-6 flex items-start justify-between">
                  <span className="text-6xl font-extrabold leading-none text-gray-800
                                   transition group-hover:text-red-900">
                    {step.number}
                  </span>
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{step.description}</p>
                {i < 2 && (
                  <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2
                                  h-8 w-8 items-center justify-center rounded-full
                                  border border-gray-800 bg-black text-sm text-gray-600 md:flex">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="features" className="border-t border-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionLabel text="FEATURES" />
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-5xl font-extrabold tracking-tight md:text-6xl">
              BUILT FOR<br />REAL INDIA
            </h2>
            <p className="max-w-sm text-lg leading-relaxed text-gray-400">
              Designed for dense neighborhoods, slow ambulances, and the reality that your neighbor is always your first responder.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div key={feature.title}
                   className="group rounded-2xl border border-gray-800 bg-gray-950 p-6
                              transition hover:border-red-800 hover:bg-red-950/10">
                <div className="mb-4 flex items-start justify-between">
                  <span className="text-3xl">{feature.emoji}</span>
                  <span className="rounded-full border border-gray-700 px-3 py-1
                                   font-mono text-xs text-gray-500">
                    {feature.tag}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="app-preview" className="border-t border-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionLabel text="APP_PREVIEW" />
              <h2 className="text-5xl font-extrabold tracking-tight md:text-6xl">
                CLEAN.<br />FAST.<br />ZERO FRICTION.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-400">
                The entire app is designed around one principle: when you're in an emergency,
                you shouldn't have to think.
              </p>
              <button className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-xl
                                 bg-red-600 px-5 py-3 text-sm font-semibold text-white
                                 shadow-lg shadow-red-900/30 transition hover:scale-105 hover:bg-red-700">
                ⬇️ Download
                <span className="text-xs font-normal opacity-60">(Coming Soon)</span>
              </button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64">
                <div className="absolute -inset-8 -z-10 rounded-3xl bg-red-600/10 blur-3xl" />
                <div className="overflow-hidden rounded-[2.5rem] border-2 border-gray-700 bg-zinc-950 shadow-2xl">
                  <div className="flex justify-center pb-1 pt-4">
                    <div className="h-1.5 w-14 rounded-full bg-gray-700" />
                  </div>

                  <div className="px-4 pb-6 pt-2">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs font-extrabold tracking-wider text-white">
                        PADOSI<span className="text-red-500">ALERT</span>
                      </span>
                      <span className="text-sm text-red-500">🔔</span>
                    </div>
                    <div className="mb-4 flex cursor-pointer items-center justify-center rounded-2xl bg-red-700
                                    py-6 shadow-[0_0_30px_rgba(220,38,38,0.45)] transition hover:bg-red-800">
                      <span className="text-3xl font-extrabold tracking-widest text-white">SOS</span>
                    </div>
                    <p className="mb-2 font-mono text-[10px] tracking-widest text-gray-500">
                      NEARBY ALERTS — 1.5 KM
                    </p>
                    <div className="space-y-2">
                      {APP_ALERTS.map((alert) => (
                        <div key={alert.label}
                             className="flex items-start gap-2.5 rounded-xl border border-gray-800 bg-zinc-900/80 p-3">
                          <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${alert.dot}`} />
                          <div>
                            <p className="text-xs font-semibold leading-tight text-white">{alert.label}</p>
                            <p className="mt-0.5 text-[10px] text-gray-500">{alert.sub}</p>
                            <p className="text-[10px] text-gray-600">{alert.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-around border-t border-gray-800 pt-3">
                      {[['🏠', 'Home'], ['🗺️', 'Map'], ['👤', 'Profile']].map(([icon, label]) => (
                        <div key={label} className="flex flex-col items-center gap-1">
                          <span className="text-sm">{icon}</span>
                          <span className="text-[10px] text-gray-500">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="early-access" className="border-t border-gray-900 py-24">
        <div className="max-w-2xl mx-auto px-6 text-center lg:px-12">
          <SectionLabel text="JOIN_THE_NETWORK" />
          <h2 className="mb-6 text-5xl font-extrabold tracking-tight md:text-6xl">
            BE THE FIRST<br />TO RESPOND.
          </h2>
          <p className="mx-auto mb-10 max-w-md text-lg leading-relaxed text-gray-400">
            Join the waitlist and be among the first to protect your neighborhood
            when PadosiAlert launches.
          </p>

          {!submitted ? (
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                className="max-w-sm flex-1 rounded-xl border border-gray-700 bg-gray-900 px-5 py-4
                           text-sm text-white placeholder-gray-500 transition
                           focus:border-red-600 focus:outline-none"
              />
              <button
                onClick={handleSubmit}
                className="cursor-pointer whitespace-nowrap rounded-xl bg-red-600 px-6 py-4
                           text-sm font-semibold text-white shadow-lg shadow-red-900/30
                           transition hover:scale-105 hover:bg-red-700">
                Get Early Access
              </button>
            </div>
          ) : (
            <div className="inline-flex items-center gap-4 rounded-2xl
                            border border-green-800/60 bg-green-950/20 px-8 py-5">
              <span className="text-2xl">✅</span>
              <div className="text-left">
                <p className="font-semibold text-green-400">You're on the list!</p>
                <p className="mt-0.5 text-sm text-green-700">
                  We'll notify you when PadosiAlert launches near you.
                </p>
              </div>
            </div>
          )}
          <p className="mt-5 text-xs text-gray-700">No spam. Launch alerts only. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}
export default Features