import React from 'react';
import { Button } from '../core/Button.jsx';
import { Logo } from '../brand/Logo.jsx';

const NAV = [
  { label: 'Platform', href: '#platform' },
  { label: 'LoRaWAN', href: '#lorawan' },
  { label: 'Use Cases', href: '#usecases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: 'https://docs.mydevices.com' }
];

/** Sticky 76px marketing header: wordmark, uppercase nav, sign-in, blue demo CTA. */
export function SiteHeader({ nav = NAV, active, logoSrc, basePath = '', onNavigate, style }) {
  const go = (e, item) => { if (onNavigate) { e.preventDefault(); onNavigate(item); } };
  return (
    <header style={{ borderBottom: 'var(--border)', background: 'rgba(255,255,255,.92)', backdropFilter: 'blur(8px)', position: 'sticky', top: 0, zIndex: 60, ...style }}>
      <div style={{ maxWidth: 'var(--measure-page)', margin: '0 auto', padding: '0 var(--gutter)', height: 'var(--header-h)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <a href="#home" onClick={(e) => go(e, { label: 'Home', href: '#home' })} style={{ display: 'flex', alignItems: 'center' }}>
          {logoSrc ? <img src={logoSrc} alt="myDevices" style={{ height: 28, width: 'auto', display: 'block' }} /> : <Logo basePath={basePath} height={28} />}
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
          {nav.map((item) => (
            <a key={item.label} className="md-navlink" href={item.href} onClick={(e) => go(e, item)} style={active === item.label ? { color: 'var(--accent)' } : undefined}>{item.label}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <a className="md-navlink md-navlink--ink" href="#signin" onClick={(e) => go(e, { label: 'Sign in', href: '#signin' })}>Sign in</a>
          <Button size="md" href="#demo" onClick={(e) => go(e, { label: 'Book a demo', href: '#demo' })}>Book a demo</Button>
        </div>
      </div>
    </header>
  );
}
