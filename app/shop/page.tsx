"use client";

import { useState, useRef } from "react";
import { products } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Check } from "lucide-react";

const categories = ["All", "Branding", "Web Design", "Marketing", "Design"];

export default function ShopPage() {
  const { addToCart, cart } = useCart();
  const [active, setActive] = useState("All");
  const [added, setAdded] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  const handleAdd = (product: typeof products[0]) => {
    addToCart(product);
    setAdded(product.id);
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setAdded(null), 1500);
  };

  const inCart = (id: string) => cart.some((item) => item.id === id);

  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-gold tracking-[0.3em] uppercase text-xs mb-4">Our Services</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Invest in Your <span className="text-brand-gold">Digital Growth</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">
            Choose from our curated packages — each engineered to deliver measurable results.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-xs uppercase tracking-widest font-bold border transition-all ${
                active === cat
                  ? "bg-brand-gold text-brand-dark border-brand-gold"
                  : "border-white/20 text-white/50 hover:border-brand-gold hover:text-brand-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="border border-white/10 p-8 flex flex-col gap-4 hover:border-[#C9A84C]/40 transition-all group"
            >
              {/* Category Badge */}
              <span className="text-brand-gold text-xs uppercase tracking-widest">
                {product.category}
              </span>

              {/* Name */}
              <h2 className="font-display text-xl font-bold leading-snug group-hover:text-brand-gold transition-colors">
                {product.name}
              </h2>

              {/* Short Desc */}
              <p className="text-white/50 text-sm leading-relaxed flex-1">
                {product.shortDesc}
              </p>

              {/* SKU */}
              <p className="text-white/20 text-xs">SKU: {product.sku}</p>

              {/* Price + Button */}
              <div className="flex items-center justify-between mt-2">
                <span className="font-display text-2xl font-bold text-brand-gold">
                  ${product.price.toLocaleString()}
                </span>
                <button
                  onClick={() => handleAdd(product)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                    added === product.id
                      ? "bg-green-500 text-white"
                      : inCart(product.id)
                      ? "bg-white/10 text-white/50 border border-white/20"
                      : "bg-brand-gold text-brand-dark hover:bg-brand-accent"
                  }`}
                >
                  {added === product.id ? (
                    <><Check size={14} /> Added</>
                  ) : inCart(product.id) ? (
                    <><ShoppingCart size={14} /> In Cart</>
                  ) : (
                    <><ShoppingCart size={14} /> Add to Cart</>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}