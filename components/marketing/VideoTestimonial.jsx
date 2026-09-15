import React from 'react';

/** 16:9 Vimeo testimonial card with the customer name beneath. */
export function VideoTestimonial({ name, videoId, title, style }) {
  const src = 'https://player.vimeo.com/video/' + videoId + '?badge=0&autopause=0&player_id=0&app_id=58479';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, ...style }}>
      <div style={{ position: 'relative', border: 'var(--border)', borderRadius: 'var(--radius-card-sm)', overflow: 'hidden', background: '#000', boxShadow: 'var(--glow-panel)' }}>
        <div style={{ aspectRatio: '16/9', position: 'relative' }}>
          <iframe src={src} title={title || name + ' myDevices testimonial'} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, display: 'block' }} />
        </div>
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-display-strong)', fontSize: 15, color: 'var(--md-ink)' }}>{name}</div>
    </div>
  );
}
