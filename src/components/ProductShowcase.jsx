import { useMemo } from 'react'
import { ShoppingCart, Package } from 'lucide-react'

export default function ProductShowcase({ onAddToCart }) {
  const { readyDevices, diyKits } = useMemo(() => ({
    readyDevices: [
      {
        id: 'rd-01',
        name: 'Mini Rover v2',
        price: 249,
        badge: 'Ready-To-Use',
        desc: 'Pre-assembled robot rover with sensors and mobile app control.',
      },
      {
        id: 'rd-02',
        name: 'Smart Home Hub',
        price: 189,
        badge: 'Ready-To-Use',
        desc: 'Plug-and-play IoT hub with Wi‑Fi, BLE, and cloud sync.',
      },
      {
        id: 'rd-03',
        name: 'EnviroSense Pro',
        price: 149,
        badge: 'Ready-To-Use',
        desc: 'Air, temp, humidity station with real-time dashboard.',
      },
    ],
    diyKits: [
      {
        id: 'dk-01',
        name: 'Line Follower Kit',
        price: 79,
        badge: 'DIY Kit',
        desc: 'All parts + guide to build a classic line follower robot.',
      },
      {
        id: 'dk-02',
        name: 'LoRa Sensor Node Kit',
        price: 99,
        badge: 'DIY Kit',
        desc: 'Battery-powered long-range sensor node kit for makers.',
      },
      {
        id: 'dk-03',
        name: 'Smart Door Lock Kit',
        price: 109,
        badge: 'DIY Kit',
        desc: 'Build your own BLE/NFC smart lock with mobile unlock.',
      },
    ],
  }), [])

  return (
    <section id="products" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 flex items-center gap-3">
        <Package className="h-6 w-6 text-orange-500" />
        <h2 className="text-2xl font-bold md:text-3xl">Ready-to-Use Devices</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {readyDevices.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
        ))}
      </div>

      <div className="mt-16 mb-10 flex items-center gap-3">
        <Package className="h-6 w-6 text-blue-600" />
        <h2 className="text-2xl font-bold md:text-3xl">DIY Kits</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {diyKits.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  )
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
      <div className="h-36 w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      <div className="space-y-2 p-5">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">{product.badge}</span>
        </div>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.desc}</p>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-xl font-bold">${product.price}</p>
          <button
            onClick={() => onAddToCart?.(product)}
            className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-900"
          >
            <ShoppingCart className="h-4 w-4" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
