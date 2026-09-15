import React from 'react';

/** 1px #E6E8EB border, 12-16px radius, white. Optional coloured category top-rule and hover glow. */
export function Card({ radius = 'xs', rule, hover = false, padding = '24px 22px', children, style, ...rest }) {
  const radii = { xs: 'var(--radius-card-xs)', sm: 'var(--radius-card-sm)', md: 'var(--radius-card)' };
  return (
    <div className={'md-card' + (hover ? ' md-card--lift' : '')} style={{ borderRadius: radii[radius], borderTop: rule ? '3px solid ' + rule : undefined, padding, ...style }} {...rest}>{children}</div>
  );
}
