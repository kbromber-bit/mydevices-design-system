import * as React from 'react';
/**
 * Small uppercase JetBrains Mono label in accent blue. Every major section opens with one.
 */
export interface EyebrowProps {
  children?: React.ReactNode;
  /** brand = blue on light, on-navy = light blue on dark, muted = grey meta label */
  tone?: 'brand' | 'on-navy' | 'muted';
  /** lg = section opener (16px), md = 13px sublabel, sm = 11px caption */
  size?: 'lg' | 'md' | 'sm';
  style?: React.CSSProperties;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
