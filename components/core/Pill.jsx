import React from 'react';

/** Full-radius chip: sample questions, status tags, small metadata capsules. */
export function Pill({ children, tone = 'blue', font = 'body', style }) {
  const tones = {
    blue: { color: 'var(--md-blue-dark)', background: 'var(--md-blue-tint)', border: '1px solid var(--md-blue-border)' },
    outline: { color: 'var(--md-blue-dark)', background: 'var(--md-blue-tint-2)', border: '1px solid var(--md-blue-border-strong)' },
    neutral: { color: 'var(--md-ink-soft)', background: '#f2f4f6', border: '1px solid var(--md-line)' },
    green: { color: 'var(--md-green-dark)', background: 'var(--md-green-tint)', border: '1px solid #bfe8d7' },
    navy: { color: '#fff', background: 'rgba(11,36,54,.82)', border: '1px solid transparent' }
  }[tone];
  const typo = font === 'mono'
    ? { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--ls-mono-wide)', textTransform: 'uppercase', padding: '5px 12px' }
    : { fontFamily: 'var(--font-body)', fontSize: 13.5, padding: '8px 16px' };
  return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, borderRadius: 'var(--radius-pill)', ...typo, ...tones, ...style }}>{children}</span>;
}
