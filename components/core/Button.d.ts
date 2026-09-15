import * as React from 'react';
/**
 * myDevices call-to-action. Primary blue for the one action that matters, secondary
 * outline for the lighter path. League Spartan 700, uppercase, +0.04em, blue glow shadow.
 */
export interface ButtonProps {
  /** primary = blue fill + glow; secondary = white/blue outline; ghost = text only */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** lg = hero/CTA (17px), md = header (13px), sm = inline (12px) */
  size?: 'lg' | 'md' | 'sm';
  /** renders an anchor when set */
  href?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  /** trailing glyph, e.g. "→" */
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
