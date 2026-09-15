import React from 'react';

/** Italic quote behind a 3px blue left rule. */
export function PullQuote({ children, size = 'lg', style }) {
  return (
    <div style={{ borderLeft: '3px solid var(--accent)', padding: size === 'lg' ? '6px 0 6px 18px' : '0 0 0 14px', fontSize: size === 'lg' ? 17 : 15, color: size === 'lg' ? '#3a3a3a' : '#3a3a3a', fontStyle: 'italic', lineHeight: size === 'lg' ? 1.6 : 1.55, fontFamily: 'var(--font-body)', ...style }}>{children}</div>
  );
}
