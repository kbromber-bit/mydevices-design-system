import * as React from 'react';
/**
 * The system's container: white, 1px #E6E8EB border, 12/14/16px radius. Shadows are
 * blue-tinted glows applied on hover only — never a resting grey drop shadow.
 */
export interface CardProps {
  /** xs = 12px (grids), sm = 14px (media/quote), md = 16px (large panels) */
  radius?: 'xs' | 'sm' | 'md';
  /** category hue for the 3px top rule, e.g. var(--md-cat-energy) */
  rule?: string;
  /** adds the blue glow on hover */
  hover?: boolean;
  padding?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
