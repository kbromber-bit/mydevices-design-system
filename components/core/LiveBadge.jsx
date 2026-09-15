import React from 'react';

/** Green pulsing dot + label. Green is reserved for live/working status — never decoration. */
export function LiveBadge({ children = 'Live', variant = 'pill', style }) {
  const dot = <span style={{ width: variant === 'pill' ? 9 : 7, height: variant === 'pill' ? 9 : 7, borderRadius: '50%', background: 'var(--status-live)', animation: 'mdpulse 2s infinite', flex: 'none' }} />;
  if (variant === 'inline') {
    return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 'var(--ls-mono-wide)', color: 'var(--md-green-dark)', ...style }}>{dot}{children}</span>;
  }
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-display-strong)', textTransform: 'uppercase', letterSpacing: 'var(--ls-mono)', fontSize: 13, color: 'var(--md-blue-dark)', background: 'var(--md-blue-tint-2)', border: '1px solid var(--md-blue-border-strong)', borderRadius: 'var(--radius-pill)', padding: '8px 17px', ...style }}>{dot}{children}</span>
  );
}
