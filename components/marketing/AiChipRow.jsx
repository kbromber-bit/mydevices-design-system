import React from 'react';

const DEFAULT = [
  { label: 'Claude', src: 'assets/ai/claude.png' },
  { label: 'ChatGPT', src: 'assets/ai/chatgpt.png' },
  { label: 'Copilot', src: 'assets/ai/copilot.png' },
  { label: 'Gemini', src: 'assets/ai/gemini.png' }
];

/** "Connect to the AI you already use" — row of assistant chips with lift-on-hover. */
export function AiChipRow({ label = 'Connect to the AI you already use', note = '…or your own custom agents', items = DEFAULT, basePath = '', style }) {
  return (
    <div style={style}>
      {label ? <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: 'var(--ls-mono-wider)', textTransform: 'uppercase', color: 'var(--md-ink-soft)' }}>{label}</div> : null}
      <div style={{ margin: '18px auto 0', display: 'flex', justifyContent: 'center', alignItems: 'stretch', gap: 13, flexWrap: 'wrap', maxWidth: 720 }}>
        {items.map((i) => (
          <div key={i.label} className="md-ai-chip">
            <img src={basePath + i.src} alt={i.label} style={{ width: 26, height: 26, objectFit: 'contain', flex: 'none' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 900, fontSize: 16, color: 'var(--md-ink)' }}>{i.label}</span>
          </div>
        ))}
      </div>
      {note ? <div style={{ marginTop: 12, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--ls-mono)', color: 'var(--text-source)' }}>{note}</div> : null}
    </div>
  );
}
