import { ArrowRight, BookOpen, Compass } from "lucide-react";
import Link from "next/link";
import { Button } from "../../components/ui/button";

const posts = [
  { title: "Navigating AYA cancer care", tag: "Resources", summary: "5 questions to ask your care team plus navigation support." },
  { title: "Inside Ulman House", tag: "Housing", summary: "What to expect when you arrive, from meals to parking." },
  { title: "Cancer to 5K training tips", tag: "Wellness", summary: "Coach-led guidance to rebuild strength after treatment." },
  { title: "Volunteer spotlight", tag: "Community", summary: "How teams fuel events, meals, and comfort at Ulman House." },
];

const categories = [
  { name: "Resources", icon: <Compass className="h-6 w-6 text-secondary" /> },
  { name: "Programs", icon: <BookOpen className="h-6 w-6 text-secondary" /> },
  { name: "Community", icon: <BookOpen className="h-6 w-6 text-secondary" /> },
];

export default function BlogPage() {
  return (
    <main className="section-shell space-y-12">
      <section className="gradient-hero rounded-3xl p-10 text-center shadow-sm">
        <p className="badge mx-auto">Stories & updates</p>
        <h1 className="mt-4 text-4xl font-bold text-navy">Stay close to the Ulman community.</h1>
        <p className="mt-4 text-lg text-ink/80">News, resources, and impact stories for patients, caregivers, survivors, donors, and volunteers.</p>
      </section>

      <section className="space-y-6">
        <h2 className="section-heading">Latest articles</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <div key={post.title} className="card p-6 space-y-3">
              <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">{post.tag}</span>
              <h3 className="text-xl font-semibold text-navy">{post.title}</h3>
              <p className="text-ink/80">{post.summary}</p>
              <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary">
                Read more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="section-heading">Explore categories</h2>
        <div className="grid-highlight">
          {categories.map((category) => (
            <div key={category.name} className="card p-5 flex items-center gap-3">
              <div className="rounded-xl bg-secondary/10 p-3">{category.icon}</div>
              <div>
                <p className="text-lg font-semibold text-navy">{category.name}</p>
                <p className="text-sm text-ink/70">Browse stories tailored to your interests.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card bg-navy/90 p-8 text-center text-white space-y-3">
        <h3 className="text-2xl font-bold">Join our community</h3>
        <p className="text-white/80">Subscribe for updates, event announcements, and resources curated for you.</p>
        <div className="flex flex-col gap-3 md:flex-row md:justify-center">
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-xl border border-white/40 bg-white/90 px-4 py-3 text-ink focus:outline-none md:w-80"
          />
          <Button className="bg-white text-navy hover:bg-secondary hover:text-white">Subscribe</Button>
        </div>
      </section>
    </main>
  );
}
