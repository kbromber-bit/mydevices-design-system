import React from 'react';

/** Two-line declarative headline: charcoal setup, blue payoff, always ending in a period. */
export function Headline({ setup, payoff, level = 2, tone = 'light', align = 'left', style }) {
  const Tag = 'h' + level;
  const isDark = tone === 'navy';
  return (
    <Tag style={{
      fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-display)', textTransform: 'uppercase',
      fontSize: level === 1 ? 'var(--type-h1)' : 'var(--type-h2)',
      lineHeight: level === 1 ? 'var(--lh-h1)' : 'var(--lh-h2)',
      letterSpacing: 'var(--ls-display)', color: isDark ? '#fff' : 'var(--text-heading)',
      margin: 0, textAlign: align, ...style
    }}>
      {setup}{payoff ? <><br /><span style={{ color: isDark ? 'var(--accent-on-dark)' : 'var(--accent)' }}>{payoff}</span></> : null}
    </Tag>
  );
}
