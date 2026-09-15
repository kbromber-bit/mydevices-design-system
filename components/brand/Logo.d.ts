import * as React from 'react';
/**
 * The official myDevices marks, as supplied. Set a height and let the width follow — never
 * stretch, re-space, add effects, or recolour beyond the shipped files. Clear space: at least
 * the mark's cap height on every side.
 *
 * - `primary` — 138.938 × 39.994 (~3.47:1). Site header, footer, decks, documents.
 * - `console` — 723 × 118 (~6.13:1). The myDevices Console product lockup; use inside product UI.
 * - `mark` — 512 × 512 square, blue only. App icon, avatar, favicon, social profile.
 */
export interface LogoProps {
  variant?: 'primary' | 'console' | 'mark';
  /** ink = #1E1E1E on light, white = on navy, blue = #0D83D0 (primary only; console falls back to ink) */
  tone?: 'ink' | 'white' | 'blue';
  /** rendered height in px — 26–28px in headers and footers */
  height?: number;
  /** path prefix to the project root, e.g. "../../" from a nested page */
  basePath?: string;
  alt?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
