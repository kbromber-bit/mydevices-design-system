import React from 'react';

/** Big League Spartan number with a caption. Dim variant frames the hero stat. */
export function StatFigure({ value, children, size = 'lg', tone = 'light', emphasis = 'primary', align = 'center', style }) {
  const dim = emphasis === 'dim';
  const fs = size === 'xl' ? 'var(--type-stat-xl)' : size === 'lg' ? 'var(--type-stat-lg)' : 'var(--type-stat-md)';
  const navy = tone === 'navy';
  const valueColor = navy ? (dim ? 'var(--md-navy-ink-dim)' : 'var(--accent-on-dark)') : 'var(--accent)';
  const captionColor = navy ? (dim ? 'var(--md-navy-ink-dim)' : 'var(--md-navy-ink-bright)') : 'var(--md-ink-soft)';
  return (
    <div style={{ opacity: dim ? 0.5 : 1, textAlign: align, ...style }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-display)', fontSize: fs, color: valueColor, lineHeight: 1 }}>{value}</div>
      {size === 'md'
        ? <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, textTransform: 'uppercase', letterSpacing: 'var(--ls-mono-wide)', color: captionColor, marginTop: 3 }}>{children}</div>
        : <p style={{ fontSize: dim ? 12.5 : 14, color: captionColor, fontWeight: dim ? 400 : 600, margin: align === 'center' ? '10px auto 0' : '10px 0 0', maxWidth: '30ch', lineHeight: 1.55 }}>{children}</p>}
    </div>
  );
}
