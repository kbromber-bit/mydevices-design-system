import React from 'react';
import { LiveBadge } from '../core/LiveBadge.jsx';

/** Framed AI assistant window: chrome bar with connection status, thread, dead composer. */
export function ChatPanel({ assistant = 'Claude', assistantIcon, connection = '· connected to myDevices', placeholder = 'Ask anything about your operations…', height = 620, children, style }) {
  const thread = React.useRef(null);
  React.useEffect(() => { if (thread.current) thread.current.scrollTop = thread.current.scrollHeight; }, [children]);
  return (
    <div style={{ border: 'var(--border)', borderRadius: 'var(--radius-card)', overflow: 'hidden', boxShadow: 'var(--glow-panel-lg)', background: '#fff', display: 'flex', flexDirection: 'column', height, ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 15px', borderBottom: 'var(--border-inner-1)', background: 'var(--md-surface-raised)' }}>
        <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#fff', border: 'var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {assistantIcon ? <img src={assistantIcon} alt={assistant} style={{ width: 17, height: 17, objectFit: 'contain' }} /> : null}
        </div>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-display-strong)', fontSize: 14, color: 'var(--md-ink)' }}>{assistant}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--md-ink-soft)' }}>{connection}</span>
        <LiveBadge variant="inline" style={{ marginLeft: 'auto' }}>live</LiveBadge>
      </div>
      <div ref={thread} style={{ flex: 1, padding: 18, overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 13, minHeight: 0 }}>{children}</div>
      <div style={{ padding: '12px 14px', borderTop: 'var(--border-inner-1)', display: 'flex', gap: 10, alignItems: 'center', background: 'var(--md-surface-raised)' }}>
        <div style={{ flex: 1, border: 'var(--border)', borderRadius: 'var(--radius-input)', padding: '10px 13px', color: 'var(--md-ink-placeholder)', fontSize: 13.5, fontFamily: 'var(--font-body)' }}>{placeholder}</div>
        <div style={{ flex: 'none', width: 38, height: 38, borderRadius: 'var(--radius-input)', background: 'var(--accent)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17 }}>↑</div>
      </div>
    </div>
  );
}
