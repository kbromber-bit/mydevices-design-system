import React from 'react';

/** Small mono citation. Every statistic in the system carries one. */
export function SourceNote({ children, tone = 'light', align = 'left', style }) {
  return <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.03em', color: tone === 'navy' ? 'var(--md-navy-ink-dim)' : 'var(--text-source)', textAlign: align, ...style }}>{children}</div>;
}
