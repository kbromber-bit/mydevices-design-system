import React from 'react';

/** Pill-free, tight-radius CTA. Primary does the work; secondary is the trial path. */
export function Button({ variant = 'primary', size = 'lg', href, children, disabled, icon, style, ...rest }) {
  const cls = ['md-btn', 'md-btn--' + size, 'md-btn--' + variant].join(' ');
  const Tag = href && !disabled ? 'a' : 'button';
  return (
    <Tag className={cls} href={href} aria-disabled={disabled ? 'true' : undefined} disabled={Tag === 'button' ? disabled : undefined} style={style} {...rest}>
      {children}{icon ? <span aria-hidden="true">{icon}</span> : null}
    </Tag>
  );
}
