import { ArrowRight, Gift, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "../../components/ui/button";

const options = [
  { title: "One-time", detail: "Fuel immediate needs like meals, parking, and navigation calls." },
  { title: "Monthly", detail: "Sustain housing, navigation, and fitness programs all year long." },
  { title: "Legacy", detail: "Create lasting impact through planned giving and tribute gifts." },
];

const faqs = [
  { question: "Is my donation tax-deductible?", answer: "Yes—the Ulman Foundation is a registered nonprofit; receipts are provided." },
  { question: "Can I dedicate my gift?", answer: "Absolutely—you can honor a loved one and notify a recipient." },
  { question: "How else can I give?", answer: "Corporate matching, events, and volunteer hours all amplify support." },
];

export default function DonatePage() {
  return (
    <main className="section-shell space-y-12">
      <section className="gradient-hero rounded-3xl p-10 text-center shadow-sm">
        <p className="badge mx-auto">Inspire change</p>
        <h1 className="mt-4 text-4xl font-bold text-navy">Your generosity keeps support free for young adults.</h1>
        <p className="mt-4 text-lg text-ink/80">Every gift powers housing, navigation, and wellness programs that meet patients where they are.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Button>Donate now</Button>
          <Link href="/contact" className="button-ghost">
            Talk with our team
          </Link>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="section-heading">Your impact</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card p-5">
            <p className="text-3xl font-bold text-navy">$75</p>
            <p className="text-ink/70">Covers a night at Ulman House</p>
          </div>
          <div className="card p-5">
            <p className="text-3xl font-bold text-navy">$250</p>
            <p className="text-ink/70">Funds navigation for a new patient</p>
          </div>
          <div className="card p-5">
            <p className="text-3xl font-bold text-navy">$500</p>
            <p className="text-ink/70">Supports a full Cancer to 5K season</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="section-heading">Ways to give</h2>
        <div className="grid-highlight">
          {options.map((option) => (
            <div key={option.title} className="card p-6 space-y-3">
              <div className="flex items-center gap-3 text-secondary">
                <Gift className="h-6 w-6" />
                <h3 className="text-xl font-semibold text-navy">{option.title}</h3>
              </div>
              <p className="text-ink/80">{option.detail}</p>
              <Button className="w-full">Select</Button>
            </div>
          ))}
        </div>
      </section>

      <section className="card bg-navy/90 p-8 text-white space-y-4">
        <h3 className="text-2xl font-bold">Voices of gratitude</h3>
        <p className="text-white/85">“Because of you, my family stayed together during treatment.” — Dana, Caregiver</p>
        <p className="text-white/85">“Cancer to 5K gave me strength I didn’t think I’d feel again.” — Luis, Survivor</p>
        <Button className="bg-white text-navy hover:bg-secondary hover:text-white">Give today</Button>
      </section>

      <section className="space-y-4">
        <h2 className="section-heading">Donation FAQs</h2>
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
