import React from 'react';
import { Logo } from '../brand/Logo.jsx';

const COLUMNS = [
  { title: 'Company', links: [ { label: 'About', href: 'https://mydevices.com/about/' }, { label: 'Contact', href: 'https://mydevices.com/contact/' } ] },
  { title: 'Resources', links: [ { label: 'Security & Compliance', href: 'https://mydevices.com/platform/' }, { label: 'Support', href: 'https://mydevices.atlassian.net/servicedesk/customer/portals' }, { label: 'Device Manufacturers', href: 'https://mydevices.com/iot-ready-program/' } ] }
];
const LEGAL = [
  { label: 'Terms of Service', href: 'https://mydevices.com/terms-of-service/' },
  { label: 'Privacy', href: 'https://mydevices.com/privacy-policy/' },
  { label: 'Cookie Policy', href: 'https://mydevices.com/cookie-policy/' },
  { label: 'CCPA', href: 'https://mydevices.com/ccpa/' }
];
const SOCIAL = [
  { label: 'X', href: 'https://x.com/mydevices_iot', size: 15, path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/mydevices/', size: 16, path: 'M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.83v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.49V23h-4V8z' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UC7fBVaPxQouaiPzQ-2iogzg', size: 17, path: 'M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.07 0 12 0 12s0 3.93.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.8zM9.6 15.6V8.4l6.2 3.6z' },
  { label: 'Facebook', href: 'https://www.facebook.com/myDevicesIoT', size: 16, path: 'M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z' }
];

/** Site footer: brand block with social, two link columns, legal bottom bar. */
export function SiteFooter({ columns = COLUMNS, legal = LEGAL, tagline = 'Operational intelligence platform. Any sensor, any network, any AI.', logoSrc, basePath = '', style }) {
  return (
    <footer style={{ borderTop: 'var(--border)', background: 'var(--surface-alt)', fontFamily: 'var(--font-body)', ...style }}>
      <div style={{ maxWidth: 'var(--measure-wide)', margin: '0 auto', padding: '56px var(--gutter) 34px', display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', gap: 40 }}>
        <div>
          {logoSrc ? <img src={logoSrc} alt="myDevices" style={{ height: 26, width: 'auto', display: 'block' }} /> : <Logo basePath={basePath} height={26} />}
          <div style={{ fontSize: 14, color: 'var(--md-ink-muted)', lineHeight: 1.6, marginTop: 16, maxWidth: '34ch' }}>{tagline}</div>
          <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
            {SOCIAL.map((s) => (
              <a key={s.label} className="md-social" href={s.href} aria-label={s.label}>
                <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
              </a>
            ))}
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: 'var(--ls-mono-widest)', textTransform: 'uppercase', color: 'var(--md-ink-soft)', marginBottom: 16 }}>{col.title}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {col.links.map((l) => <a key={l.label} className="md-footlink" href={l.href}>{l.label}</a>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: 'var(--border)' }}>
        <div style={{ maxWidth: 'var(--measure-wide)', margin: '0 auto', padding: '20px var(--gutter)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' }}>
            {legal.map((l) => <a key={l.label} className="md-footlink md-footlink--fine" href={l.href}>{l.label}</a>)}
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--md-ink-soft)', letterSpacing: '.03em' }}>© 2026 myDevices, Inc.</div>
        </div>
      </div>
    </footer>
  );
}
