import { Mail, Phone } from 'lucide-react'

export default function ContactCTA() {
  const email = 'yuanalbyan13@gmail.com'
  const whatsappNumber = '628953398492' // Converted from 08953398492
  const waText = encodeURIComponent('Hi! I have a request about IoT/robotics services.')
  const waLink = `https://wa.me/${whatsappNumber}?text=${waText}`

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-2xl bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8 text-white">
        <h2 className="text-2xl font-bold md:text-3xl">Have a custom request? Let’s talk!</h2>
        <p className="mt-2 max-w-2xl text-white/80">We can build to your specifications — robotics, IoT networks, automations and more. Reach out and we’ll respond promptly.</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 px-5 py-3 text-sm font-semibold text-black transition hover:brightness-110"
          >
            <Phone className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:brightness-110"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>
      </div>
    </section>
  )
}
