import { useState } from 'react'
import Hero3D from './components/Hero3D'
import ProductShowcase from './components/ProductShowcase'
import CheckoutLogin from './components/CheckoutLogin'
import ContactCTA from './components/ContactCTA'
import { ShoppingCart } from 'lucide-react'

function App() {
  const [cart, setCart] = useState([])

  const handleAddToCart = (product) => {
    setCart((c) => [...c, product])
    // simple toast replacement
    try {
      const el = document.getElementById('cart-ping')
      if (el) {
        el.classList.remove('opacity-0')
        setTimeout(() => el.classList.add('opacity-0'), 1200)
      }
    } catch {}
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Top bar with mini cart */}
      <header className="sticky top-0 z-20 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-black text-white">R</span>
            <span>Robotics & IoT Studio</span>
          </div>
          <div className="relative inline-flex items-center gap-2 text-sm">
            <ShoppingCart className="h-5 w-5" />
            <span>{cart.length} item{cart.length === 1 ? '' : 's'}</span>
            <span id="cart-ping" className="absolute -right-1 -top-1 inline-flex h-2 w-2 animate-ping rounded-full bg-orange-500 opacity-0" />
          </div>
        </div>
      </header>

      <main>
        <Hero3D />
        <ProductShowcase onAddToCart={handleAddToCart} />
        <CheckoutLogin cart={cart} />
        <ContactCTA />
      </main>

      <footer className="border-t border-gray-200 bg-white py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Robotics & IoT Studio — All rights reserved.
      </footer>
    </div>
  )
}

export default App
