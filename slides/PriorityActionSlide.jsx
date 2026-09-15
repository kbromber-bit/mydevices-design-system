window.MDSlides = window.MDSlides || {};

const TAGS = [
  { text: '#1 plant-wide SEU', bg: 'var(--rp-bad)', color: '#fff' },
  { text: '10 outlier days', bg: 'var(--rp-warn-tint)', color: 'var(--rp-warn)' },
  { text: '$13,068 / yr potential savings', bg: 'var(--rp-good-tint)', color: 'var(--rp-good)' }
];
const STATS = [
  { value: '10 / 31', label: 'days ran at 2× energy baseline', color: 'var(--rp-bad)' },
  { value: '735 kWh', label: 'peak day vs 353 kWh baseline', color: 'var(--rp-info)' },
  { value: '$1,089', label: 'estimated monthly excess', color: 'var(--rp-info)' },
  { value: '$13,068', label: 'annualized at $0.098/kWh', color: 'var(--md-blue-light)', dark: true }
];
const HYPOTHESES = ['Door-seal degradation — heat loss during cure cycles', 'Thermostat malfunction or short cycling', 'Heating-element efficiency loss / partial failure'];
const ROWS = [
  ['Action', 'Physical inspection: thermostat, seals, element resistance'],
  ['Owner', 'Maintenance + Production'],
  ['Due', 'June 30, 2026'],
  ['Investment', '$1,500 – $4,000 (diagnosis + repair)'],
  ['Payback', 'Under 4 months at current rate', true]
];

/** Single-issue deep dive: status tags, impact stat grid, root causes, owner/action table. */
function PriorityActionSlide({ title = 'Priority action: Oven 21', footer = 'myDevices · ISO 50001 §6.3 Significant Energy Users · figures traced to live meter readings' }) {
  const head = (t) => <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--rp-ink-soft)' }}>{t}</div>;
  return (
    <div style={{ width: 1280, height: 720, background: '#fff', padding: '48px 54px', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-body)' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 34, letterSpacing: '-.005em', color: 'var(--rp-ink)', margin: 0 }}>{title}</h2>
      <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
        {TAGS.map((t) => <span key={t.text} style={{ background: t.bg, color: t.color, fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '7px 13px', borderRadius: 3 }}>{t.text}</span>)}
      </div>
      <div style={{ marginTop: 34, display: 'grid', gridTemplateColumns: '1fr 1.12fr', gap: 46, flex: 1 }}>
        <div>
          {head('Impact summary')}
          <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {STATS.map((s) => (
              <div key={s.value} style={{ background: s.dark ? 'var(--md-navy)' : '#f7f9fb', border: s.dark ? '1px solid var(--md-navy)' : '1px solid var(--rp-line)', borderRadius: 4, padding: '18px 20px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, color: s.color, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 13.5, color: s.dark ? '#c9d8e5' : 'var(--rp-ink-soft)', marginTop: 10, lineHeight: 1.35 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, background: 'var(--rp-bad-tint)', borderRadius: 4, padding: '16px 20px', display: 'flex', alignItems: 'baseline', gap: 12 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: 'var(--rp-bad)' }}>4+ months</span>
            <span style={{ fontSize: 14, color: 'var(--rp-ink-soft)' }}>identified without corrective action</span>
          </div>
        </div>
        <div>
          {head('Action plan')}
          <div style={{ marginTop: 16, fontWeight: 700, fontSize: 14, color: 'var(--rp-ink)' }}>ROOT-CAUSE HYPOTHESES</div>
          <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 9 }}>
            {HYPOTHESES.map((h) => <div key={h} style={{ display: 'flex', gap: 10, fontSize: 15, color: 'var(--rp-ink)' }}><span style={{ color: 'var(--rp-info)' }}>›</span>{h}</div>)}
          </div>
          <div style={{ marginTop: 22, border: '1px solid var(--rp-line)', borderRadius: 4, overflow: 'hidden' }}>
            {ROWS.map(([k, v, good], i) => (
              <div key={k} style={{ display: 'grid', gridTemplateColumns: '128px 1fr', borderTop: i ? '1px solid var(--rp-line)' : 0 }}>
                <div style={{ background: good ? 'var(--rp-good-tint)' : '#f2f5f7', padding: '13px 14px', fontFamily: 'var(--font-mono)', fontSize: 11.5, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: good ? 'var(--rp-good)' : 'var(--rp-ink-soft)' }}>{k}</div>
                <div style={{ padding: '13px 16px', fontSize: 14.5, color: good ? 'var(--rp-good)' : 'var(--rp-ink)', fontWeight: good ? 700 : 400 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: 18, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.04em', color: 'var(--rp-ink-soft)' }}>{footer}</div>
    </div>
  );
}
Object.assign(window.MDSlides, { PriorityActionSlide });
