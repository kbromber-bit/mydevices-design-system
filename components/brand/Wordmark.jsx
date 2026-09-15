import React from 'react';

/**
 * Type-set myDevices wordmark. NOTE: the official logo file was not included in the
 * source design bundle, so the brand name is rendered in type wherever the mark goes.
 * Drop assets/logo/mydevices-logo.png in and swap this for an <img> when available.
 */
export function Wordmark({ size = 28, tone = 'light', style }) {
  const light = tone === 'light';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'baseline', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: size, lineHeight: 1, letterSpacing: '-.02em', color: light ? 'var(--md-ink)' : '#fff', ...style }}>
      my<span style={{ color: light ? 'var(--accent)' : 'var(--accent-on-dark)' }}>Devices</span>
    </span>
  );
}
