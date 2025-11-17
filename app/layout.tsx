import type { Metadata } from "next";
import { Figtree, Poppins } from "next/font/google";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-body" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Ulman Foundation",
  description: "Support for adolescents and young adults affected by cancer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${figtree.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <header className="sticky top-0 z-20 border-b border-primary/60 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm font-semibold text-navy lg:px-16">
            <div className="flex items-center gap-2 text-base font-bold text-navy">
              <span className="h-9 w-9 rounded-full bg-secondary" /> Ulman Foundation
            </div>
            <nav className="hidden items-center gap-6 md:flex">
              <a href="/" className="hover:text-secondary">Home</a>
              <a href="/about" className="hover:text-secondary">About</a>
              <a href="/programs" className="hover:text-secondary">Programs</a>
              <a href="/events" className="hover:text-secondary">Events</a>
              <a href="/volunteer" className="hover:text-secondary">Volunteer</a>
              <a href="/donate" className="hover:text-secondary">Donate</a>
              <a href="/blog" className="hover:text-secondary">Blog</a>
              <a href="/contact" className="hover:text-secondary">Contact</a>
              <a href="/shop" className="hover:text-secondary">Shop</a>
            </nav>
            <a href="/donate" className="button-primary hidden md:inline-flex">Donate</a>
          </div>
        </header>
        {children}
        <footer className="mt-20 border-t border-primary/60 bg-white/80 py-10">
          <div className="mx-auto max-w-6xl px-6 lg:px-16">
            <div className="grid gap-6 md:grid-cols-4">
              <div className="space-y-3">
                <p className="text-lg font-semibold text-navy">Ulman Foundation</p>
                <p className="text-sm text-ink/70">Support for adolescents and young adults affected by cancer.</p>
              </div>
              <div className="space-y-2 text-sm text-ink/80">
                <p className="font-semibold text-navy">Explore</p>
                <a href="/programs" className="block hover:text-secondary">Programs</a>
                <a href="/events" className="block hover:text-secondary">Events</a>
                <a href="/volunteer" className="block hover:text-secondary">Volunteer</a>
              </div>
              <div className="space-y-2 text-sm text-ink/80">
                <p className="font-semibold text-navy">Engage</p>
                <a href="/donate" className="block hover:text-secondary">Donate</a>
                <a href="/blog" className="block hover:text-secondary">Blog</a>
                <a href="/shop" className="block hover:text-secondary">Shop</a>
              </div>
              <div className="space-y-2 text-sm text-ink/80">
                <p className="font-semibold text-navy">Contact</p>
                <p>care@ulman.org</p>
                <p>(410) 555-2026</p>
              </div>
            </div>
            <p className="mt-8 text-xs text-ink/60">© {new Date().getFullYear()} Ulman Foundation. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
