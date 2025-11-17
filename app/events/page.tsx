import { CalendarDays, Camera, CheckCircle2 } from "lucide-react";
import { Button } from "../../components/ui/button";

const events = [
  { title: "Cancer to 5K", date: "Spring 2026", detail: "12-week coached run/walk with survivor teams." },
  { title: "Cycle to Inspire", date: "May 4, 2026", detail: "Indoor ride fundraiser with live DJs and stories." },
  { title: "Holiday Gift Drive", date: "Dec 1, 2026", detail: "Seasonal drive supporting patients and families." },
];

const faqs = [
  { question: "How do I register?", answer: "Select an event and follow the registration link. Navigation can assist with access needs." },
  { question: "Can caregivers participate?", answer: "Yes—caregivers and friends are welcome in all community events." },
  { question: "Are there virtual options?", answer: "Many events offer hybrid or virtual challenges to include remote participants." },
];

export default function EventsPage() {
  return (
    <main className="section-shell space-y-12">
      <section className="gradient-hero rounded-3xl p-10 text-center shadow-sm">
        <p className="badge mx-auto">Upcoming events</p>
        <h1 className="mt-4 text-4xl font-bold text-navy">Move, celebrate, and fundraise together.</h1>
        <p className="mt-4 text-lg text-ink/80">Find the next run, ride, or community gathering and join the Ulman community.</p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {events.map((event) => (
          <div key={event.title} className="card p-6 space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase text-secondary">
              <CalendarDays className="h-5 w-5" /> {event.date}
            </div>
            <h3 className="text-xl font-semibold text-navy">{event.title}</h3>
            <p className="text-ink/80">{event.detail}</p>
            <Button className="w-full">Register</Button>
          </div>
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="card p-6 space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase text-secondary">
            <Camera className="h-5 w-5" /> Event highlights
          </div>
          <p className="text-lg font-semibold text-navy">“Crossing that finish line surrounded by survivors was unforgettable.”</p>
          <p className="text-sm text-ink/70">— Taylor, Cancer to 5K participant</p>
          <p className="text-lg font-semibold text-navy">“Cycle to Inspire showed me how powerful our community is.”</p>
          <p className="text-sm text-ink/70">— Morgan, Rider & Fundraiser</p>
        </div>
        <div className="card p-6 space-y-4">
          <h3 className="text-2xl font-bold text-navy">Join our next event</h3>
          <p className="text-ink/80">Invite friends, form a team, or volunteer on-site. Every step fuels housing and navigation.</p>
          <Button>See full calendar</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="section-heading">Event FAQs</h2>
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
