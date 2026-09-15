import React from 'react';
import { Section } from '../layout/Section.jsx';
import { Eyebrow } from '../core/Eyebrow.jsx';
import { Headline } from '../core/Headline.jsx';
import { Button } from '../core/Button.jsx';

/** The closing CTA band: bottom-up blue wash, rotating setup line, primary + secondary CTA. */
export function CtaSection({ eyebrow = 'Try it yourself · right now', phrases = ['Stop pulling reports.', 'Stop building dashboards.', 'Stop chasing spreadsheets.'], payoff = 'Start asking questions.', body = 'Connect once and start asking questions against live, enriched data, right inside the AI you already use. Live in 24 hours.', style }) {
  const [i, setI] = React.useState(0);
  const [vis, setVis] = React.useState(true);
  React.useEffect(() => {
    if (phrases.length < 2) return;
    const t = setInterval(() => {
      setVis(false);
      setTimeout(() => { setI((n) => (n + 1) % phrases.length); setVis(true); }, 300);
    }, 2600);
    return () => clearInterval(t);
  }, [phrases.length]);
  return (
    <Section id="cta" tone="wash-cta" width="cta" align="center" style={style}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-display)', textTransform: 'uppercase', fontSize: 'clamp(30px,5vw,52px)', lineHeight: 1, color: 'var(--text-heading)', letterSpacing: 'var(--ls-display)', margin: '18px 0 0' }}>
        <span style={{ display: 'inline-block', whiteSpace: 'nowrap', transition: 'opacity .3s ease', opacity: vis ? 1 : 0 }}>{phrases[i]}</span><br />
        <span style={{ color: 'var(--accent)', whiteSpace: 'nowrap' }}>{payoff}</span>
      </h2>
      <p style={{ margin: '22px auto 0', fontSize: 18, color: 'var(--md-ink-muted)', maxWidth: '52ch', lineHeight: 1.55 }}>{body}</p>
      <div style={{ marginTop: 28, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button href="#demo">Book a demo</Button>
        <Button variant="secondary" href="#trial" icon="→">Start free trial</Button>
      </div>
    </Section>
  );
}
