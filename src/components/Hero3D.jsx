import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero3D() {
  const whatsappNumber = '628953398492' // Converted from 08953398492 for WhatsApp international format
  const waText = encodeURIComponent('Hi! I want to request a custom IoT/robotics build.')
  const waLink = `https://wa.me/${whatsappNumber}?text=${waText}`

  const scrollToProducts = () => {
    const el = document.getElementById('products')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient overlay for readability - does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-20 md:py-28">
        <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          IoT • Robotics • Automation
        </span>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          Smarter IoT and Robotics — Built Your Way
        </h1>
        <p className="max-w-2xl text-base text-white/80 md:text-lg">
          Choose a ready-to-use device, build it yourself with our kits, or request a fully custom solution. Seamless shopping and direct support in one place.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={scrollToProducts}
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black shadow-lg transition hover:scale-[1.02] hover:shadow-xl"
          >
            Shop Devices
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Request a Custom Build
          </a>
        </div>
      </div>
    </section>
  )
}
