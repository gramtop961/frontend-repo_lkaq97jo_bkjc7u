import { useState } from 'react'
import { ShieldCheck, User } from 'lucide-react'

export default function CheckoutLogin({ cart }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postal: '',
  })

  const total = cart.reduce((sum, i) => sum + (i.price || 0), 0)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const isValid = () => {
    return (
      form.name.trim() &&
      /.+@.+\..+/.test(form.email) &&
      form.phone.trim() &&
      form.address.trim() &&
      form.city.trim() &&
      form.postal.trim()
    )
  }

  const handlePay = (method) => {
    if (!isValid()) {
      alert('Please complete all fields with valid information before continuing.')
      return
    }

    const summary = `Order for ${form.name}\nItems: ${cart.map((c) => c.name).join(', ')}\nTotal: $${total}\nPhone: ${form.phone}\nAddress: ${form.address}, ${form.city} ${form.postal}`

    if (method === 'paypal') {
      alert(`Redirecting to PayPal...\n\n${summary}`)
    } else if (method === 'dana') {
      alert(`Redirecting to DANA...\n\n${summary}`)
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-center gap-2">
        <ShieldCheck className="h-6 w-6 text-green-600" />
        <h2 className="text-2xl font-bold md:text-3xl">Secure Checkout & Account</h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="mb-6 flex items-center gap-2 text-gray-700">
            <User className="h-5 w-5" />
            <p className="text-sm">Create an account by filling the details below for shipment tracking.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">Full Name</label>
              <input name="name" value={form.name} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-black focus:outline-none" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-black focus:outline-none" placeholder="you@mail.com" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-black focus:outline-none" placeholder="e.g. +62 ..." />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">City</label>
              <input name="city" value={form.city} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-black focus:outline-none" placeholder="City" />
            </div>
            <div className="md:col-span-2">
              <label className="mb-1 block text-sm font-medium">Address</label>
              <input name="address" value={form.address} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-black focus:outline-none" placeholder="Street address" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Postal Code</label>
              <input name="postal" value={form.postal} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-black focus:outline-none" placeholder="Postal code" />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => handlePay('paypal')} className="w-full rounded-lg bg-[#003087] px-4 py-3 text-sm font-semibold text-white transition hover:brightness-110">Pay with PayPal</button>
            <button onClick={() => handlePay('dana')} className="w-full rounded-lg bg-[#108ee9] px-4 py-3 text-sm font-semibold text-white transition hover:brightness-110">Pay with DANA</button>
          </div>
          <p className="mt-3 text-xs text-gray-500">Payments are simulated in this demo. We can connect live gateways on request.</p>
        </div>

        <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold">Order Summary</h3>
          {cart.length === 0 ? (
            <p className="text-sm text-gray-600">Your cart is empty. Add products to proceed.</p>
          ) : (
            <div className="space-y-3">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">{item.name}</span>
                  <span className="font-medium">${item.price}</span>
                </div>
              ))}
              <div className="mt-3 border-t pt-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Subtotal</span>
                  <span className="font-medium">${total}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Shipping</span>
                  <span className="font-medium">Calculated at checkout</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-base font-bold">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>
            </div>
          )}
        </aside>
      </div>
    </section>
  )
}
