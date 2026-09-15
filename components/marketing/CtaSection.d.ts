import * as React from 'react';
/**
 * The page's closing band. Setup line rotates through three "stop doing this by hand"
 * phrases every 2.6s while the blue payoff line stays fixed.
 */
export interface CtaSectionProps {
  eyebrow?: React.ReactNode;
  /** rotating first lines; pass one string in an array to disable rotation */
  phrases?: string[];
  /** the fixed blue second line */
  payoff?: React.ReactNode;
  body?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function CtaSection(props: CtaSectionProps): JSX.Element;
