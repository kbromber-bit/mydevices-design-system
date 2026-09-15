import React from 'react';
import { Card } from '../layout/Card.jsx';
import { PullQuote } from '../layout/PullQuote.jsx';
import { Byline } from '../layout/Byline.jsx';

/** Bordered quote card: oversized blue quote glyph, quote behind blue rule, byline. */
export function TestimonialCard({ quote, name, role, avatar, style }) {
  return (
    <Card radius="sm" padding="26px 24px" style={{ display: 'flex', flexDirection: 'column', gap: 18, ...style }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-display)', fontSize: 44, color: 'var(--accent)', lineHeight: .6, height: 26 }}>“</div>
      <PullQuote size="sm" style={{ flex: 1 }}>{quote}</PullQuote>
      <Byline name={name} role={role} avatar={avatar} />
    </Card>
  );
}
