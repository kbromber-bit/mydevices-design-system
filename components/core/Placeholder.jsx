import React from 'react';

/** Honest placeholder: says exactly what asset goes here and at what size. Never fake content. */
export function Placeholder({ label, note, ratio = '4/5', shape = 'block', size = 46, style }) {
  if (shape === 'avatar') {
    return <div style={{ width: size, height: size, borderRadius: '50%', flex: 'none', border: 'var(--border-dashed)', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--md-slate-soft)', ...style }}>▢</div>;
  }
  return (
    <div style={{ aspectRatio: ratio, background: 'var(--wash-placeholder)', display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 9, textAlign: 'center', padding: '0 18px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--ls-mono-wide)', textTransform: 'uppercase', color: 'var(--md-blue-dark)', background: 'var(--md-blue-tint-2)', border: '1px solid var(--md-blue-border-strong)', borderRadius: 'var(--radius-pill)', padding: '5px 12px' }}>▢ {label}</span>
        {note ? <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--md-slate-soft)', lineHeight: 1.5 }}>{note}</div> : null}
      </div>
    </div>
  );
}
