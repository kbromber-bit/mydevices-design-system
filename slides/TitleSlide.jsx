window.MDSlides = window.MDSlides || {};

/** Deck opener: navy field, mono kicker, two-line ALL-CAPS title, hairline, countdown stat. */
function TitleSlide({ kicker = 'myDevices IoT Platform · ISO 50001 EnMS', eyebrow = 'Plant Energy Management', title = <>Monthly management<br />review — May 2026</>, subtitle = 'Manufacturing Plant · Midwest US · Energy Management System', meta = 'Reporting period · May 2026 · Prepared June 2026', statValue = '16 weeks', statLabel = 'to Stage 2 audit · Oct 2026' }) {
  return (
    <div style={{ width: 1280, height: 720, background: 'radial-gradient(120% 120% at 85% 10%, #17415f, var(--md-navy) 62%)', padding: '74px 72px', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-body)' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', color: '#fff', opacity: .9 }}>{kicker}</div>
      <div style={{ marginTop: 'auto' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 15, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--md-blue-light)' }}>{eyebrow}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 68, lineHeight: 1.02, letterSpacing: '-.005em', color: '#fff', margin: '22px 0 0' }}>{title}</h1>
        <div style={{ marginTop: 26, fontSize: 23, color: '#dbe6ef' }}>{subtitle}</div>
      </div>
      <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,.22)', paddingTop: 22, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--md-blue-light)' }}>{meta}</div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 900, fontSize: 34, color: '#fff', lineHeight: 1 }}>{statValue}</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '.1em', textTransform: 'uppercase', color: '#c9d8e5', marginTop: 8 }}>{statLabel}</div>
        </div>
      </div>
    </div>
  );
}
Object.assign(window.MDSlides, { TitleSlide });
