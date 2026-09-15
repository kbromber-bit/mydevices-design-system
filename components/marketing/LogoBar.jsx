import React from 'react';

const DEFAULT = [
  { alt: 'Siemens', src: 'assets/logos-customers/siemens.png', maxHeight: 30 },
  { alt: 'T-Mobile', src: 'assets/logos-customers/t-mobile.png', maxHeight: 34 },
  { alt: 'Sodexo', src: 'assets/logos-customers/sodexo.png', maxHeight: 30, nudge: -4 },
  { alt: 'SafetyCulture', src: 'assets/logos-customers/safetyculture.png', maxHeight: 26 },
  { alt: 'U.S. Department of State', src: 'assets/logos-customers/us-department-of-state.png', maxHeight: 46 },
  { alt: 'Aramark', src: 'assets/logos-customers/aramark.png', maxHeight: 32 }
];

/** Thin grey trust band: mono label over a row of customer logos at 82% opacity. */
export function LogoBar({ label = 'Trusted by teams at', logos = DEFAULT, basePath = '', style }) {
  return (
    <section style={{ borderTop: 'var(--border)', borderBottom: 'var(--border)', background: 'var(--surface-alt)', padding: 'var(--section-y-band) var(--gutter)', ...style }}>
      <div style={{ maxWidth: 'var(--measure-wide)', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--ls-mono-wider)', textTransform: 'uppercase', color: 'var(--md-ink-soft)' }}>{label}</span>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          {logos.map((l) => (
            <div key={l.alt} style={{ width: 156, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 14px' }}>
              <img src={basePath + l.src} alt={l.alt} style={{ maxHeight: l.maxHeight, maxWidth: 124, width: 'auto', objectFit: 'contain', display: 'block', opacity: .82, transform: l.nudge ? 'translateY(' + l.nudge + 'px)' : undefined }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
