import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../../components/ui/button";

const faqs = [
  { question: "How soon will someone respond?", answer: "Within two business days; urgent housing needs get prioritized." },
  { question: "Can I refer a patient?", answer: "Yes—providers and caregivers can submit referrals through this form." },
  { question: "Where is Ulman House?", answer: "Baltimore, MD with parking, shared kitchens, and community spaces." },
];

export default function ContactPage() {
  return (
    <main className="section-shell space-y-12">
      <section className="gradient-hero rounded-3xl p-10 text-center shadow-sm">
        <p className="badge mx-auto">Contact us</p>
        <h1 className="mt-4 text-4xl font-bold text-navy">We’re here to listen and help.</h1>
        <p className="mt-4 text-lg text-ink/80">Reach out about programs, housing availability, volunteering, or partnerships.</p>
      </section>

      <section className="grid gap-8 lg:grid-cols-3 lg:items-start">
        <div className="card p-6 space-y-3 lg:col-span-2">
          <h2 className="text-2xl font-semibold text-navy">Send a message</h2>
          <form className="space-y-4">
            <input className="w-full rounded-xl border border-primary px-4 py-3" placeholder="Your name" />
            <input className="w-full rounded-xl border border-primary px-4 py-3" placeholder="Email" type="email" />
            <textarea className="w-full rounded-xl border border-primary px-4 py-3" rows={4} placeholder="How can we help?" />
            <Button className="w-full">Send message</Button>
          </form>
        </div>
        <div className="card p-6 space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase text-secondary">
            <Phone className="h-5 w-5" /> Call or visit
          </div>
          <p className="flex items-center gap-2 text-ink/80"><Phone className="h-4 w-4 text-secondary" /> (410) 555-2026</p>
          <p className="flex items-center gap-2 text-ink/80"><Mail className="h-4 w-4 text-secondary" /> care@ulman.org</p>
          <p className="flex items-start gap-2 text-ink/80">
            <MapPin className="h-4 w-4 text-secondary" /> 2118 E Madison St, Baltimore, MD 21205
          </p>
          <Button variant="ghost" className="w-full">Plan your visit</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="section-heading">FAQs</h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.question} className="faq-item">
              <p className="font-semibold text-navy">{faq.question}</p>
              <p className="text-sm text-ink/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card bg-navy/90 p-8 text-center text-white space-y-3">
        <h3 className="text-2xl font-bold">Get involved</h3>
        <p className="text-white/80">Join a volunteer shift or donate to keep housing and navigation free.</p>
        <div className="flex flex-col gap-3 md:flex-row md:justify-center">
          <Button className="bg-white text-navy hover:bg-secondary hover:text-white">Volunteer</Button>
          <Button variant="ghost" className="border-white text-white hover:border-secondary">Donate</Button>
        </div>
      </section>
    </main>
  );
}
