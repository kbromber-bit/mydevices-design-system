import React from 'react';

/** One turn in an AI thread: blue user bubble, or the assistant's work + insight + payoff. */
export function ChatMessage({ role = 'user', avatar, children, status, statusDone, insight, confirm, style }) {
  if (role === 'user') {
    return <div style={{ alignSelf: 'flex-end', maxWidth: '84%', background: 'var(--accent)', color: '#fff', borderRadius: '14px 14px 4px 14px', padding: '11px 15px', fontSize: 14, lineHeight: 1.5, fontFamily: 'var(--font-body)', boxShadow: '0 8px 20px -14px rgba(13,131,208,.9)', animation: 'mdrise .45s ease both', ...style }}>{children}</div>;
  }
  return (
    <div style={{ alignSelf: 'stretch', width: '100%', display: 'flex', gap: 10, animation: 'mdrise .45s ease both', animationDelay: '.12s', ...style }}>
      <div style={{ flex: 'none', width: 28, height: 28, borderRadius: '50%', background: '#fff', border: 'var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {avatar ? <img src={avatar} alt="" style={{ width: 18, height: 18, objectFit: 'contain' }} /> : null}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 11, flex: 1, minWidth: 0 }}>
        {status ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 12.5, color: 'var(--md-ink-muted)', fontFamily: 'var(--font-mono)' }}>
            {statusDone
              ? <span style={{ color: 'var(--status-live)', fontWeight: 700, fontFamily: 'monospace' }}>✓</span>
              : <span style={{ display: 'inline-block', width: 13, height: 13, border: '2px solid #cfe0ee', borderTopColor: 'var(--accent)', borderRadius: '50%', animation: 'spin .8s linear infinite', flex: 'none' }} />}
            {status}
          </div>
        ) : null}
        {insight ? <div style={{ background: 'var(--surface-tint)', border: '1px solid var(--md-blue-border)', borderLeft: '3px solid var(--accent)', borderRadius: 'var(--radius-input)', padding: '11px 13px', fontSize: 13.5, color: 'var(--md-ink)', lineHeight: 1.5, fontFamily: 'var(--font-body)', animation: 'mdrise .45s ease both' }}>{insight}</div> : null}
        {children}
        {confirm ? <div style={{ fontSize: 14, color: 'var(--md-ink)', lineHeight: 1.5, fontFamily: 'var(--font-body)', animation: 'mdrise .45s ease both' }}>{confirm}</div> : null}
      </div>
    </div>
  );
}
