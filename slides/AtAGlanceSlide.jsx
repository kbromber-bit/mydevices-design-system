window.MDSlides = window.MDSlides || {};

const KPIS = [
  { value: '242,413', label: 'kWh Plant Infeed', note: '▲ +2.1% vs April', color: 'var(--rp-info)', noteColor: 'var(--rp-bad)' },
  { value: '$23,756', label: 'Estimated Cost', note: '$0.098 / kWh blended', color: 'var(--rp-good)', noteColor: 'var(--rp-ink-soft)' },
  { value: '53', label: 'Anomaly Events', note: '0 alerts fired · 0 rules set', color: 'var(--rp-warn)', noteColor: 'var(--rp-bad)' },
  { value: '5', label: 'Audit Open Items', note: '16 weeks to Stage 2', color: 'var(--rp-bad)', noteColor: 'var(--rp-ink-soft)' }
];
const GOOD = [<>Cooling Tower back online — <b>1,601 kWh</b> in May (offline since Oct 2025)</>, <>Area 7501 Injection down <b>9.0%</b> month-over-month</>, <>Area 1040 Presses / Ovens down <b>6.9%</b></>, <>Most areas flat or down; plant +2.1% reflects one area spike</>];
const BAD = [<><b>Oven 21 urgent</b> — 10 OUTLIER days, $13,068/yr at risk</>, <>Building 2 gateway check overdue — 297 days dark</>, <>53 OUTLIER events in May — zero alert rules configured</>, <>Area 1060 up <b>20.4%</b>; Area 1090 Machining up <b>36.6%</b></>];

/** Data slide: KPI strip over paired good-news / needs-action panels. */
function AtAGlanceSlide({ title = 'May 2026 — at a glance', scope = 'Plant infeed · whole-facility', footer = 'myDevices · ISO 50001 EnMS · Plant Infeed metered whole-facility' }) {
  const panel = (dot, label, items) => (
    <div style={{ background: '#fff', border: '1px solid var(--rp-line)', borderRadius: 4, padding: '20px 24px', flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, textTransform: 'uppercase', letterSpacing: '.06em', color: dot }}>
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: dot }} />{label}
      </div>
      <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {items.map((t, i) => <div key={i} style={{ fontSize: 15.5, color: 'var(--rp-ink)', lineHeight: 1.35 }}>{t}</div>)}
      </div>
    </div>
  );
  return (
    <div style={{ width: 1280, height: 720, background: 'var(--rp-paper)', padding: '48px 54px', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-body)' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 24 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 34, letterSpacing: '-.005em', color: 'var(--rp-ink)', margin: 0 }}>{title}</h2>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--rp-ink-soft)' }}>{scope}</div>
      </div>
      <div style={{ borderTop: '2px solid var(--rp-info)', marginTop: 16 }} />
      <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
        {KPIS.map((k) => (
          <div key={k.label} style={{ background: '#fff', border: '1px solid var(--rp-line)', borderTop: '3px solid ' + k.color, borderRadius: 4, padding: '20px 22px' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 40, color: k.color, lineHeight: 1 }}>{k.value}</div>
            <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--rp-ink)', marginTop: 12 }}>{k.label}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: k.noteColor, marginTop: 8, letterSpacing: '.02em' }}>{k.note}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 26, display: 'flex', gap: 18, flex: 1 }}>
        {panel('var(--rp-good)', 'Good news', GOOD)}
        {panel('var(--rp-bad)', 'Needs action', BAD)}
      </div>
      <div style={{ marginTop: 20, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.04em', color: 'var(--rp-ink-soft)' }}>{footer}</div>
    </div>
  );
}
Object.assign(window.MDSlides, { AtAGlanceSlide });
