import { Sparkles } from "lucide-react";
import { Button } from "../../components/ui/button";

const opportunities = [
  { title: "Ulman House host", detail: "Welcome guests, prep meals, and support daily logistics." },
  { title: "Event crew", detail: "Help at Cancer to 5K, Cycle to Inspire, and seasonal drives." },
  { title: "Peer mentor", detail: "Support patients and caregivers through calls or meetups." },
];

const faqs = [
  { question: "Do I need experience?", answer: "No—orientation and training are provided for all volunteer roles." },
  { question: "Is there a time commitment?", answer: "One-time and recurring shifts are available to fit your schedule." },
  { question: "Can groups volunteer?", answer: "Yes, corporate and community groups are welcome for special projects." },
];

export default function VolunteerPage() {
  return (
    <main className="section-shell space-y-12">
      <section className="gradient-hero rounded-3xl p-10 text-center shadow-sm">
        <p className="badge mx-auto">Volunteer with us</p>
        <h1 className="mt-4 text-4xl font-bold text-navy">Bring care, connection, and energy to young adults facing cancer.</h1>
        <p className="mt-4 text-lg text-ink/80">Choose a role, sign up for a shift, and see the immediate impact of your time.</p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {opportunities.map((item) => (
          <div key={item.title} className="card p-6 space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase text-secondary">
              <Sparkles className="h-5 w-5" /> Opportunity
            </div>
            <h3 className="text-xl font-semibold text-navy">{item.title}</h3>
            <p className="text-ink/80">{item.detail}</p>
            <Button className="w-full">Learn more</Button>
          </div>
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="card p-6 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">Volunteer stories</p>
          <p className="text-lg font-semibold text-navy">“Serving meals at Ulman House showed me how much community matters.”</p>
          <p className="text-sm text-ink/70">— Jamie, Hospitality Volunteer</p>
        </div>
        <div className="card p-6 space-y-4">
          <h3 className="text-2xl font-bold text-navy">Join our volunteer team</h3>
          <p className="text-ink/80">Sign up, attend orientation, and match with roles that fit your interests.</p>
          <Button className="w-full">Sign up</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="section-heading">Volunteer FAQs</h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.question} className="faq-item">
              <p className="font-semibold text-navy">{faq.question}</p>
              <p className="text-sm text-ink/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
