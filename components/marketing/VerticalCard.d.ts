import * as React from 'react';
/**
 * One card per monitoring vertical, in a 3-up grid. The 3px coloured top-rule is the only
 * place category hues are permitted.
 */
export interface VerticalCardProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** mono uppercase link text; the arrow is appended automatically */
  linkLabel?: React.ReactNode;
  href?: string;
  /** var(--md-cat-energy | -coldchain | -machine | -water | -air | -asset) */
  rule?: string;
  style?: React.CSSProperties;
}
export declare function VerticalCard(props: VerticalCardProps): JSX.Element;
