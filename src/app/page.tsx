import Image from 'next/image';

const stats = [
  { label: 'Deploys', value: '2.4K+' },
  { label: 'Teams onboarded', value: '180+' },
  { label: 'Avg. response time', value: '120ms' }
];

const features = [
  {
    title: 'Realtime pipeline',
    description: 'Capture signals instantly and keep your customers in the loop with a reliable event stream.'
  },
  {
    title: 'Insightful dashboards',
    description: 'Compose tailored views with flexible widgets, colors, and filters that match your workflow.'
  },
  {
    title: 'Developer friendly',
    description: 'Use the provided SDKs and examples to move from prototype to production without friction.'
  }
];

export default function Home() {
  return (
    <main>
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '80px 24px',
          display: 'grid',
          gap: '64px'
        }}
      >
        <header
          style={{
            display: 'grid',
            gap: '32px',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '18px'
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 10px',
                borderRadius: 999,
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                width: 'fit-content',
                fontSize: 13,
                color: 'var(--muted)'
              }}
            >
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--accent)' }} />
              Yellr is live — meet the new realtime suite
            </div>
            <h1 style={{ fontSize: 48, lineHeight: 1.1, margin: 0 }}>
              Build lively customer moments with Yellr.
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: 18, margin: 0 }}>
              A lightweight Next.js starter that pairs a polished hero, stats, and feature cards to showcase
              your latest release.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                style={{
                  padding: '12px 18px',
                  background: 'var(--accent)',
                  color: '#0b132b',
                  border: 'none',
                  borderRadius: 12,
                  fontWeight: 700,
                  boxShadow: '0 10px 30px rgba(91, 192, 190, 0.25)',
                  cursor: 'pointer'
                }}
              >
                Launch Console
              </button>
              <button
                style={{
                  padding: '12px 18px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: 12,
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                View Docs
              </button>
            </div>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', color: 'var(--muted)', fontSize: 14 }}>
              {stats.map((stat) => (
                <div key={stat.label} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span style={{ fontWeight: 700, color: 'white', fontSize: 20 }}>{stat.value}</span>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              borderRadius: 20,
              padding: 20,
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.35)'
            }}
          >
            <div
              style={{
                background: '#0f172a',
                borderRadius: 14,
                border: '1px solid rgba(255, 255, 255, 0.12)',
                padding: 18,
                color: '#e2e8f0',
                display: 'grid',
                gap: 14
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} />
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b' }} />
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981' }} />
                </div>
                <span style={{ color: '#94a3b8', fontSize: 12 }}>realtime.yellr.dev</span>
              </div>
              <code
                style={{
                  background: '#0b1224',
                  padding: 14,
                  borderRadius: 12,
                  display: 'block',
                  border: '1px solid rgba(255,255,255,0.08)',
                  fontSize: 13,
                  lineHeight: 1.6,
                  overflowX: 'auto'
                }}
              >
                {`import { Stream } from '@yellr/sdk';\n\nconst stream = new Stream({ token: process.env.YELLR_TOKEN });\n\nstream.publish('launch', { feature: 'nextjs-app', version: '0.1.0' });`}
              </code>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', color: '#a5b4fc' }}>
                <Image src="/vercel.svg" alt="Logo" width={24} height={24} />
                <span style={{ fontWeight: 600 }}>Seamless Next.js integration</span>
              </div>
            </div>
          </div>
        </header>

        <section
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: 20,
            padding: '32px 28px',
            display: 'grid',
            gap: 18,
            boxShadow: '0 20px 60px rgba(0,0,0,0.35)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--accent)' }} />
            <h2 style={{ margin: 0 }}>A crisp starting point</h2>
            <p style={{ margin: 0, color: 'var(--muted)' }}>
              Configure styles and copy instantly from this ready-to-ship layout.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gap: 18,
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))'
            }}
          >
            {features.map((feature) => (
              <article
                key={feature.title}
                style={{
                  padding: 18,
                  borderRadius: 14,
                  background: '#0f172a',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'grid',
                  gap: 10
                }}
              >
                <h3 style={{ margin: 0 }}>{feature.title}</h3>
                <p style={{ margin: 0, color: 'var(--muted)' }}>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
