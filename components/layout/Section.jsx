import React from 'react';

/** Page section with the brand's standard airy padding and one of five sanctioned backgrounds. */
export function Section({ tone = 'light', width = 'measure', align = 'left', id, children, style }) {
  const tones = {
    light: { background: 'var(--surface-page)' },
    alt: { background: 'var(--surface-alt)', borderTop: 'var(--border)', borderBottom: 'var(--border)' },
    navy: { background: 'var(--surface-dark)' },
    'wash-hero': { background: 'var(--wash-hero)' },
    'wash-cta': { background: 'var(--wash-cta)', borderTop: 'var(--border)' }
  }[tone];
  const pad = tone === 'navy' ? 'var(--section-y-dark)' : tone === 'wash-cta' ? 'var(--section-y-cta)' : 'var(--section-y)';
  const widths = { page: 'var(--measure-page)', wide: 'var(--measure-wide)', measure: 'var(--measure)', narrow: 'var(--measure-narrow)', cta: 'var(--measure-cta)' };
  return (
    <section id={id} style={{ padding: pad + ' var(--gutter)', ...tones, ...style }}>
      <div style={{ maxWidth: widths[width], margin: '0 auto', textAlign: align }}>{children}</div>
    </section>
  );
}
