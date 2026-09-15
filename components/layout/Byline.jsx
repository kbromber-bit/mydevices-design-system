import React from 'react';

/** Name in League Spartan, role in mono. Optional avatar or honest dashed placeholder. */
export function Byline({ name, role, avatar, size = 'md', style }) {
  const d = size === 'lg' ? 46 : 44;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: size === 'lg' ? 12 : 11, ...style }}>
      {avatar
        ? <img src={avatar} alt="" style={{ width: d, height: d, borderRadius: '50%', objectFit: 'cover', flex: 'none' }} />
        : <div style={{ width: d, height: d, borderRadius: '50%', flex: 'none', border: 'var(--border-dashed)', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--md-slate-soft)' }}>▢</div>}
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-display-strong)', fontSize: size === 'lg' ? 15 : 14, color: 'var(--md-ink)' }}>{name}</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: size === 'lg' ? 11 : 10.5, color: 'var(--md-slate-soft)' }}>{role}</div>
      </div>
    </div>
  );
}
