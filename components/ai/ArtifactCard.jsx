import React from 'react';

const META = {
  doc:  { tag: 'DOC', bg: '#e8f0fc', col: '#2a63c4' },
  deck: { tag: 'PPT', bg: '#fdece4', col: '#c1573a' },
  xls:  { tag: 'XLS', bg: '#e4f5ec', col: '#1a7a48' }
};

/**
 * The finished outcome, previewed: a generated deck, document or spreadsheet with a file
 * chrome bar, a page counter and a filmstrip. This is the brand's core proof object.
 */
export function ArtifactCard({ kind = 'deck', file, ready = true, images = [], index = 0, total, style }) {
  const meta = META[kind];
  const portrait = kind === 'doc';
  const count = total || images.length;
  const counter = kind === 'deck' ? (index + 1) + ' / ' + count
    : kind === 'doc' ? 'p. ' + (index + 1) + ' / ' + count
    : 'sheet ' + (index + 1) + ' / ' + count;
  return (
    <div style={{ border: 'var(--border)', borderRadius: 'var(--radius-card-xs)', overflow: 'hidden', background: '#fff', boxShadow: 'var(--glow-artifact)', animation: 'mdrise .5s ease both', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 13px', borderBottom: 'var(--border-inner-1)', background: 'var(--md-surface-raised)' }}>
        <div style={{ width: 26, height: 26, borderRadius: 'var(--radius-tiny)', background: meta.bg, color: meta.col, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 9.5, fontWeight: 700 }}>{meta.tag}</div>
        <div style={{ flex: 1, fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-display-strong)', fontSize: 13.5, color: 'var(--md-ink)' }}>{file}</div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, textTransform: 'uppercase', letterSpacing: 'var(--ls-mono-wide)', color: ready ? 'var(--md-green-dark)' : 'var(--md-ink-soft)', background: ready ? 'var(--md-green-tint)' : '#f2f4f6', borderRadius: 'var(--radius-pill)', padding: '3px 9px', fontWeight: 700, whiteSpace: 'nowrap' }}>{ready ? '✓ Generated' : 'Generating…'}</span>
      </div>
      <div style={{ padding: 16, background: '#e7eaee', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ position: 'relative', borderRadius: 5, overflow: 'hidden', boxShadow: '0 6px 22px rgba(20,30,45,.20)', border: '1px solid #d7dde3', background: '#fff', height: portrait ? 470 : undefined, aspectRatio: portrait ? undefined : '16 / 9' }}>
          <img key={index} src={images[index]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: portrait ? 'top center' : undefined, display: 'block', animation: 'mdfade .5s ease both' }} />
          <div style={{ position: 'absolute', right: 9, bottom: 9, background: 'rgba(11,36,54,.82)', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 'var(--ls-mono-wide)', padding: '3px 9px', borderRadius: 'var(--radius-pill)' }}>{counter}</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {images.map((s, i) => (
            <div key={i} style={{ flex: portrait ? 'none' : 1, width: portrait ? 54 : 'auto', aspectRatio: portrait ? '17 / 22' : '16 / 9', borderRadius: 3, overflow: 'hidden', border: i === index ? '2px solid var(--accent)' : '1px solid #dce2e8', opacity: i === index ? 1 : .55, transition: 'opacity .35s ease, border-color .35s ease', background: '#fff' }}>
              <img src={s} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
