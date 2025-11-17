import { ArrowRight, HeartPulse, Home, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "../../components/ui/button";

const programs = [
  {
    title: "Patient Navigation",
    description: "Personalized support to coordinate care, insurance, and local resources for AYA patients and caregivers.",
    icon: <HeartPulse className="h-6 w-6 text-secondary" />,
  },
  {
    title: "Ulman House",
    description: "Free oncology hospitality house with meals, parking, and community for patients and caregivers.",
    icon: <Home className="h-6 w-6 text-secondary" />,
  },
  {
    title: "Cancer to 5K & Cycle to Inspire",
    description: "Coached fitness and fundraising programs that build strength, purpose, and peer connections.",
    icon: <Users className="h-6 w-6 text-secondary" />,
  },
];

const faqs = [
  {
    question: "Who is eligible for programs?",
    answer: "Adolescents and young adults (15-39) impacted by cancer, plus caregivers and survivors seeking community.",
  },
  {
    question: "How do I apply for Ulman House?",
    answer: "Submit a referral through your care team or contact our navigation team to confirm treatment details and dates.",
  },
  {
    question: "Are programs free?",
    answer: "Yes—housing, navigation, and support programs are offered at no cost thanks to donors and partners.",
  },
];

export default function ProgramsPage() {
  return (
    <main className="section-shell space-y-12">
      <section className="gradient-hero rounded-3xl p-10 text-center shadow-sm">
        <p className="badge mx-auto">Programs overview</p>
        <h1 className="mt-4 text-4xl font-bold text-navy">Direct support from diagnosis through survivorship.</h1>
        <p className="mt-4 text-lg text-ink/80">
          Explore navigation, housing, wellness, and volunteer-led programs designed for patients, caregivers, and survivors.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="section-heading">Our programs</h2>
        <div className="grid-highlight">
          {programs.map((program) => (
            <div key={program.title} className="card p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-secondary/10 p-3">{program.icon}</div>
                <h3 className="text-xl font-semibold text-navy">{program.title}</h3>
              </div>
              <p className="text-ink/80">{program.description}</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary">
                Talk to navigation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="card p-6 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">Success stories</p>
          <p className="text-lg font-semibold text-navy">“The 12-week Cancer to 5K program helped me feel strong again.”</p>
          <p className="text-sm text-ink/70">— Sam, Survivor</p>
          <p className="text-lg font-semibold text-navy">“Navigation answered questions my family didn’t know to ask.”</p>
          <p className="text-sm text-ink/70">— Laila, Caregiver</p>
        </div>
        <div className="card p-8 bg-navy/90 text-white space-y-4">
          <h3 className="text-2xl font-bold">Get involved</h3>
          <p className="text-white/85">
            Join a program, become a volunteer coach, or launch a fundraiser to keep support free for young adults.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/volunteer">
              <Button className="bg-white text-navy hover:bg-secondary hover:text-white">Volunteer</Button>
            </Link>
            <Link href="/donate">
              <Button variant="ghost" className="border-white text-white hover:border-secondary">Donate</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="section-heading">Program FAQs</h2>
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
