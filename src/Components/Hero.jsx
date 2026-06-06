const ALERT_PILLS = [
  {
    emoji: '🩸',
    label: 'B+ Needed',
    distance: '0.4 km',
    pos: 'absolute -top-4 left-1/2 -translate-x-1/2'
  },
  {
    emoji: '🚗',
    label: 'Ride Request',
    distance: '0.8 km',
    pos: 'absolute top-1/2 -right-6 -translate-y-1/2'
  },
  {
    emoji: '🆘',
    label: 'Medical',
    distance: '1.1 km', pos: 'absolute bottom-10 right-2'
  },
  {
    emoji: '💊',
    label: 'Medicine Needed',
    distance: '1.3 km',
    pos: 'absolute bottom-24 -left-6'
  },
]
const STATS = [
  {
    label: 'Response Radius',
    value: '1–2',
    suffix: 'KM',
    red: true
  },
  {
    label: 'Alert Delivery',
    value: '<30',
    suffix: 'sec',
    red: false
  },
  {
    label: 'Always Free',
    value: '0',
    suffix: '₹',
    red: false
  },
  {
    label: 'Active Network',
    value: '24/7',
    suffix: '',
    red: true
  },
]
const Hero = () => {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20
                      flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-2xl border border-gray-700 px-4 py-2 text-sm font-medium text-red-500">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            India's first hyperlocal emergency network
          </div>
          <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            <span className="block">YOUR</span>
            <span className="block text-red-600">NEIGHBOR</span>
            <span className="block">IS YOUR</span>
            <span className="block text-red-600">LIFEGUARD</span>
          </h1>
          <p className="mt-6 max-w-lg text-gray-400 text-lg leading-relaxed">
            When an ambulance is{' '}
            <span className="font-semibold text-white">30 minutes away</span>, your neighbor might be{' '}
            <span className="font-semibold text-white">30 seconds away.</span>{' '}
            PadosiAlert connects you to the people closest to you — the moment you need them most.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-red-700 px-6 py-4 text-sm font-semibold text-white
                               shadow-[0_0_40px_rgba(220,38,38,0.35)] transition hover:scale-105 hover:bg-red-800 cursor-pointer">
              Send a Test SOS
            </button>
            <a href="#features"
              className="rounded-2xl border border-gray-600 bg-white/5 px-6 py-4 text-sm font-semibold
                          text-gray-200 transition hover:scale-105 hover:border-red-500 hover:text-white cursor-pointer">
              See how it works →
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="relative flex h-80 w-80 items-center justify-center">
            <span className="absolute h-72 w-72 rounded-full border border-red-500/10" />
            <span className="absolute h-56 w-56 rounded-full border border-red-500/20" />
            <span className="absolute h-40 w-40 rounded-full border border-red-500/30" />
            {ALERT_PILLS.map((pill) => (
              <div key={pill.label}
                className={`${pill.pos} z-20 whitespace-nowrap rounded-full border border-zinc-800
                               bg-zinc-950 px-3 py-1.5 text-xs text-white shadow-lg`}>
                {pill.emoji} {pill.label} • {pill.distance}
              </div>
            ))}
            <button className="relative z-10 flex h-32 w-32 cursor-pointer items-center justify-center
                               rounded-full bg-red-700 text-4xl font-extrabold text-white
                               shadow-[0_0_80px_rgba(220,38,38,0.6)] transition
                               hover:scale-95 hover:bg-red-800 animate-pulse">
              SOS
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-b border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div key={stat.label} className={`p-6 ${i < 3 ? 'border-r border-gray-800' : ''}`}>
              <h4 className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</h4>
              <p className="mt-2 text-3xl font-bold text-white">
                <span className={stat.red ? 'text-red-600' : ''}>{stat.value}</span>
                {stat.suffix && <span className="ml-1">{stat.suffix}</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Hero