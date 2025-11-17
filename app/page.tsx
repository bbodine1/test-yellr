import Link from "next/link";
import { ArrowRight, Calendar, HeartHandshake, Home, Lightbulb, Users } from "lucide-react";
import { Button } from "../components/ui/button";

const services = [
  {
    icon: <Home className="h-8 w-8 text-secondary" />,
    title: "Ulman House",
    description: "Free oncology hospitality for adolescents and young adults and their caregivers.",
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-secondary" />,
    title: "Patient Navigation",
    description: "One-on-one guidance, resource coordination, and emotional support from diagnosis onward.",
  },
  {
    icon: <Users className="h-8 w-8 text-secondary" />,
    title: "Community Programs",
    description: "Cancer to 5K, Cycle to Inspire, support groups, and ambassador pathways to stay connected.",
  },
];

const testimonials = [
  {
    quote: "Ulman House felt like a family—we had a safe place to heal and people who understood.",
    name: "Ava, Patient",
  },
  {
    quote: "Training for Cancer to 5K gave me confidence and community after treatment ended.",
    name: "Marcus, Survivor",
  },
  {
    quote: "Volunteering here showed me how small acts of care change entire journeys.",
    name: "Priya, Volunteer",
  },
];

const events = [
  { title: "Cancer to 5K - Spring Season", date: "April 12, 2026", location: "Baltimore & DC" },
  { title: "Cycle to Inspire", date: "May 4, 2026", location: "Indoor Ride Studio" },
  { title: "Holiday Gift Drive", date: "December 1, 2026", location: "Ulman House" },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col gap-16">
      <section className="gradient-hero section-shell">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="badge">Friendly, compassionate support</div>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-navy md:text-5xl">
                Supporting adolescents & young adults facing cancer—every step of the way.
              </h1>
              <p className="text-lg text-ink/80">
                Navigate treatment, housing, wellness, and community with programs designed for patients, caregivers, and
                survivors. Ulman Foundation offers housing, navigation, events, and volunteer opportunities to keep no one
                facing cancer alone.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/donate">
                  <Button>Donate now</Button>
                </Link>
                <Link href="/programs">
                  <Button variant="ghost">Explore programs</Button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-ink/70">
                <div className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 shadow-sm">
                  <Lightbulb className="h-5 w-5 text-secondary" /> Patient navigation
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 shadow-sm">
                  <Home className="h-5 w-5 text-secondary" /> Ulman House
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 shadow-sm">
                  <Calendar className="h-5 w-5 text-secondary" /> Cycle to Inspire
                </div>
              </div>
            </div>
            <div className="card p-8">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">Impact snapshot</p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-3xl font-bold text-navy">15K+</p>
                    <p className="text-ink/70">meals served at Ulman House</p>
                  </div>
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-3xl font-bold text-navy">2K</p>
                    <p className="text-ink/70">young adults navigated annually</p>
                  </div>
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-3xl font-bold text-navy">450+</p>
                    <p className="text-ink/70">Cancer to 5K participants</p>
                  </div>
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-3xl font-bold text-navy">1,200</p>
                    <p className="text-ink/70">volunteers powering support</p>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-navy/90 px-4 py-3 text-white">
                  <div>
                    <p className="text-sm font-semibold">Need housing during treatment?</p>
                    <p className="text-xs text-white/80">Contact our Ulman House team for availability.</p>
                  </div>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold">
                    Reach out <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white/70">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <p className="badge">About our mission</p>
            <h2 className="section-heading">Hope, housing, and community for young adults with cancer.</h2>
            <p className="section-subtitle">
              We meet patients, caregivers, and survivors exactly where they are—connecting them to navigation, oncology
              housing, peer support, and fitness programs that restore confidence and ease the logistics of care.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/about">
                <Button>Discover our story</Button>
              </Link>
              <Link href="/volunteer">
                <Button variant="ghost">Volunteer with us</Button>
              </Link>
            </div>
          </div>
          <div className="card grid grid-cols-2 gap-4 p-6">
            <div className="rounded-xl bg-secondary/10 p-4">
              <p className="text-2xl font-bold text-navy">24/7</p>
              <p className="text-ink/70">Care navigation for AYA patients</p>
            </div>
            <div className="rounded-xl bg-accent/20 p-4">
              <p className="text-2xl font-bold text-navy">Free</p>
              <p className="text-ink/70">housing at Ulman House</p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-2xl font-bold text-navy">Peer</p>
              <p className="text-ink/70">support & meetups</p>
            </div>
            <div className="rounded-xl bg-navy/90 p-4 text-white">
              <p className="text-2xl font-bold">Nationwide</p>
              <p className="text-white/80">virtual resources & guides</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto max-w-6xl space-y-10 text-center">
          <div className="space-y-4">
            <p className="badge mx-auto">Our Services</p>
            <h2 className="section-heading">Programs built for patients, caregivers, and survivors.</h2>
            <p className="section-subtitle">
              Find direct support, fitness programs, navigation, and volunteer pathways that match your journey.
            </p>
          </div>
          <div className="grid-highlight">
            {services.map((service) => (
              <div key={service.title} className="card p-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-secondary/10 p-3">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-navy">{service.title}</h3>
                </div>
                <p className="mt-3 text-ink/80">{service.description}</p>
                <Link href="/programs" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-secondary">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white/80">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-5 lg:items-center">
          <div className="lg:col-span-2 space-y-4">
            <p className="badge">Hear from our community</p>
            <h2 className="section-heading">Stories that remind you you’re not alone.</h2>
            <p className="section-subtitle">Patients, caregivers, and volunteers share how Ulman helped them feel seen.</p>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary">
              Read more stories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-3 grid gap-4">
            {testimonials.map((item) => (
              <div key={item.name} className="card p-6">
                <p className="text-lg font-semibold text-navy">“{item.quote}”</p>
                <p className="mt-2 text-sm text-ink/70">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="card overflow-hidden p-0">
            <div className="bg-navy/90 px-8 py-10 text-white">
              <p className="badge bg-white/15 text-sm font-semibold uppercase tracking-wide text-white">Get involved</p>
              <h2 className="mt-4 text-3xl font-bold">Join events, volunteer, or fundraise.</h2>
              <p className="mt-3 text-white/80">
                Whether you run, ride, or lend a hand, you help us expand support for young adults facing cancer.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/events">
                  <Button className="bg-white text-navy hover:bg-secondary hover:text-white">Upcoming events</Button>
                </Link>
                <Link href="/volunteer">
                  <Button variant="ghost" className="border-white text-white hover:border-secondary">
                    Volunteer sign-up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card p-8 space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase text-secondary">
              <Calendar className="h-5 w-5" /> Upcoming events
            </div>
            <div className="space-y-3">
              {events.map((event) => (
                <div key={event.title} className="rounded-xl bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-semibold text-navy">{event.title}</p>
                      <p className="text-sm text-ink/70">{event.date}</p>
                    </div>
                    <p className="text-sm font-semibold text-secondary">{event.location}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/events" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary">
              View calendar <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white/70">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <p className="badge mx-auto">Stay Updated</p>
          <h2 className="section-heading">Get the latest on programs, events, and impact.</h2>
          <p className="section-subtitle">Subscribe for resources tailored to patients, caregivers, survivors, and supporters.</p>
          <form className="mx-auto flex max-w-2xl flex-col gap-3 rounded-2xl border border-primary bg-white/80 p-4 shadow-sm md:flex-row">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 rounded-xl border border-primary px-4 py-3 focus:border-secondary focus:outline-none"
            />
            <Button type="submit">Subscribe</Button>
          </form>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-ink/70">
            <span>Follow @ulmanfoundation</span>
            <span>•</span>
            <span>Instagram</span>
            <span>•</span>
            <span>Facebook</span>
            <span>•</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </section>
    </main>
  );
}
