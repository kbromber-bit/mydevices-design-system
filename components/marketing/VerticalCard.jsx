import React from 'react';
import { Card } from '../layout/Card.jsx';

/** Use-case card: 3px category top-rule, uppercase title, one sentence, mono arrow link. */
export function VerticalCard({ title, children, linkLabel, href = '#', rule = 'var(--md-cat-energy)', style }) {
  return (
    <Card hover rule={rule} style={style}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-display-strong)', textTransform: 'uppercase', fontSize: 16, color: 'var(--md-ink)' }}>{title}</div>
      <p style={{ fontSize: 14, color: 'var(--md-ink-muted)', lineHeight: 1.55, margin: '8px 0 12px' }}>{children}</p>
      {linkLabel ? <a className="md-arrowlink" href={href}>{linkLabel} →</a> : null}
    </Card>
  );
}
