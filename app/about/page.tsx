import { Award, Building2, Heart } from "lucide-react";
import { Button } from "../../components/ui/button";

const team = [
  { name: "Brooke Evans", role: "CEO", focus: "Strategic growth & partnerships" },
  { name: "Jordan Patel", role: "Chief Program Officer", focus: "AYA navigation & wellness" },
  { name: "Riley Chen", role: "Director, Ulman House", focus: "Oncology hospitality & volunteers" },
];

const partners = ["Johns Hopkins Medicine", "Haymakers for Hope", "Savor Health", "Corporate Champions"];

export default function AboutPage() {
  return (
    <main className="section-shell space-y-14">
      <section className="gradient-hero rounded-3xl p-10 text-center shadow-sm">
        <p className="badge mx-auto">Our mission & vision</p>
        <h1 className="mt-4 text-4xl font-bold text-navy">Changing the cancer experience for adolescents and young adults.</h1>
        <p className="mt-4 text-lg text-ink/80">
          We ensure no young adult faces cancer alone by providing housing, navigation, community, and opportunities to give back.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="space-y-4">
          <h2 className="section-heading">Our history</h2>
          <p className="section-subtitle">
            Since 1997, Ulman Foundation has grown from a single support group to a nationwide community supporting patients,
            caregivers, and survivors with free housing, navigation, fitness, and peer programming.
          </p>
        </div>
        <div className="card p-6 space-y-3">
          <div className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-secondary" />
            <p className="font-semibold text-navy">Ulman House opened to provide free oncology hospitality.</p>
          </div>
          <div className="flex items-center gap-3">
            <Heart className="h-6 w-6 text-secondary" />
            <p className="font-semibold text-navy">Patient navigation expanded across the Mid-Atlantic and virtual channels.</p>
          </div>
          <div className="flex items-center gap-3">
            <Award className="h-6 w-6 text-secondary" />
            <p className="font-semibold text-navy">National fitness and fundraising programs built new community pathways.</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="section-heading">Meet our team</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="card p-5">
              <div className="mb-3 h-16 w-16 rounded-full bg-secondary/10" />
              <p className="text-lg font-semibold text-navy">{member.name}</p>
              <p className="text-sm text-ink/70">{member.role}</p>
              <p className="mt-2 text-sm text-ink/80">{member.focus}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="space-y-4">
          <h2 className="section-heading">Our impact</h2>
          <p className="section-subtitle">We measure success in dignity, access, and community.</p>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="card p-4">
              <p className="text-3xl font-bold text-navy">95%</p>
              <p className="text-ink/70">of guests report reduced treatment stress</p>
            </div>
            <div className="card p-4">
              <p className="text-3xl font-bold text-navy">1.2M</p>
              <p className="text-ink/70">dollars in annual housing cost savings</p>
            </div>
            <div className="card p-4">
              <p className="text-3xl font-bold text-navy">3x</p>
              <p className="text-ink/70">increase in survivor reconnection through events</p>
            </div>
            <div className="card p-4">
              <p className="text-3xl font-bold text-navy">200+</p>
              <p className="text-ink/70">partners building pathways together</p>
            </div>
          </div>
        </div>
        <div className="card p-6 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">Partners</p>
          <div className="grid grid-cols-2 gap-3">
            {partners.map((name) => (
              <div key={name} className="rounded-xl bg-white p-3 text-sm font-semibold text-navy shadow-sm">
                {name}
              </div>
            ))}
          </div>
          <Button className="w-full">Become a partner</Button>
        </div>
      </section>
    </main>
  );
}
