import React from 'react';

/** The mono blue label that opens every major section. */
export function Eyebrow({ children, tone = 'brand', size = 'lg', style }) {
  const color = tone === 'on-navy' ? 'var(--accent-on-dark)' : tone === 'muted' ? 'var(--md-ink-soft)' : 'var(--accent)';
  const fs = size === 'lg' ? 'var(--type-eyebrow)' : size === 'md' ? '13px' : '11px';
  const ls = size === 'lg' ? 'var(--ls-mono-wide)' : 'var(--ls-mono-wider)';
  return (
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: fs, letterSpacing: ls, textTransform: 'uppercase', color, fontWeight: 'var(--fw-mono-med)', ...style }}>{children}</div>
  );
}
