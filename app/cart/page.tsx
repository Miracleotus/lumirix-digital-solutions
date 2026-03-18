"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { Trash2, ShoppingCart, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, totalPrice, totalItems, isLoaded } = useCart();

  // Prevent hydration mismatch and "empty cart" flashing
  if (!isLoaded) {
    return <main className="bg-brand-dark min-h-screen" />;
  }

  if (cart.length === 0) {
    return (
      <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body flex flex-col items-center justify-center text-center">
        <ShoppingCart size={64} className="text-white/10 mb-6" />
        <h1 className="font-display text-4xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-white/40 mb-8">Add a service package to get started.</p>
        <Link
          href="/shop"
          className="bg-brand-gold text-brand-dark px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-brand-accent transition-colors"
        >
          Browse Services
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-brand-gold tracking-[0.3em] uppercase text-xs mb-2">Your Order</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold">
              Cart <span className="text-white/20">({totalItems})</span>
            </h1>
          </div>
          <button
            onClick={clearCart}
            className="text-white/30 hover:text-red-400 transition-colors text-xs uppercase tracking-widest"
          >
            Clear All
          </button>
        </div>

        {/* Cart Items */}
        <div className="space-y-4 mb-12">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border border-white/10 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-white/20 transition-colors"
            >
              <div className="flex-1">
              <span className="text-brand-gold text-xs uppercase tracking-widest">
                  {item.category}
                </span>
                <h3 className="font-display text-lg font-bold mt-1">{item.name}</h3>
                <p className="text-white/40 text-xs mt-1">SKU: {item.sku}</p>
              </div>

              <div className="flex items-center gap-6">
              <span className="font-display text-xl font-bold text-brand-gold">
                  ${item.price.toLocaleString()}
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-white/30 hover:text-red-400 transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="border border-white/10 p-8">
          <h2 className="font-display text-2xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-3 mb-6">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm text-white/50">
                <span>{item.name}</span>
                <span>${item.price.toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-4 flex justify-between items-center mb-8">
            <span className="font-display text-xl font-bold">Total</span>
            <span className="font-display text-3xl font-bold text-brand-gold">
              ${totalPrice.toLocaleString()}
            </span>
          </div>

          <Link
            href="/contact"
            className="w-full bg-brand-gold text-brand-dark py-4 font-bold uppercase tracking-widest text-sm hover:bg-brand-accent transition-colors flex items-center justify-center gap-2"
          >
            Proceed to Enquiry <ArrowRight size={16} />
          </Link>
          <p className="text-white/30 text-xs text-center mt-4">
            A lead strategist will contact you within 24 hours to confirm your order.
          </p>
        </div>

        {/* Continue Shopping */}
        <div className="text-center mt-8">
          <Link href="/shop" className="text-white/40 hover:text-brand-gold transition-colors text-sm uppercase tracking-widest">
            ← Continue Browsing
          </Link>
        </div>

      </div>
    </main>
  );
}