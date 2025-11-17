import { ShieldCheck, ShoppingBag, Star } from "lucide-react";
import { Button } from "../../components/ui/button";

const products = [
  { name: "Ulman Hoodie", price: "$55" },
  { name: "Cycle to Inspire Tee", price: "$30" },
  { name: "Legacy Brick", price: "$125" },
];

const categories = ["Apparel", "Accessories", "Gifts", "Race Gear"];

export default function ShopPage() {
  return (
    <main className="section-shell space-y-12">
      <section className="gradient-hero rounded-3xl p-10 text-center shadow-sm">
        <p className="badge mx-auto">Shop Ulman</p>
        <h1 className="mt-4 text-4xl font-bold text-navy">Wear your support and fuel our mission.</h1>
        <p className="mt-4 text-lg text-ink/80">All purchases power free housing, navigation, and wellness programs for young adults.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Button>Explore products</Button>
          <Button variant="ghost">View cart</Button>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="section-heading">Featured products</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <div key={product.name} className="card p-6 space-y-3">
              <div className="h-32 rounded-xl bg-secondary/10" />
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-navy">{product.name}</p>
                <p className="text-secondary font-semibold">{product.price}</p>
              </div>
              <Button className="w-full">Add to cart</Button>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="section-heading">Shop categories</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {categories.map((category) => (
            <div key={category} className="card p-4 text-center">
              <p className="text-sm font-semibold text-navy">{category}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card bg-white/80 p-6 space-y-4">
        <div className="flex flex-col items-center gap-2 text-center">
          <Star className="h-6 w-6 text-secondary" />
          <p className="text-lg font-semibold text-navy">Customer testimonials</p>
          <p className="text-ink/70">“Quality gear that reminds me why I ride—supporting young adults with cancer.”</p>
        </div>
      </section>

      <section className="card p-6 space-y-3 text-center">
        <h3 className="text-xl font-semibold text-navy">Sign up for offers</h3>
        <p className="text-ink/80">Join our list for drops, discounts, and impact updates.</p>
        <div className="flex flex-col gap-3 md:flex-row md:justify-center">
          <input className="w-full rounded-xl border border-primary px-4 py-3 md:w-80" placeholder="Email" />
          <Button>Sign up</Button>
        </div>
      </section>

      <section className="flex flex-wrap items-center justify-center gap-4 text-sm text-ink/70">
        <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-secondary" /> Secure checkout</div>
        <div className="flex items-center gap-2"><ShoppingBag className="h-5 w-5 text-secondary" /> Easy returns</div>
        <div className="flex items-center gap-2"><Star className="h-5 w-5 text-secondary" /> Impact guaranteed</div>
      </section>
    </main>
  );
}
