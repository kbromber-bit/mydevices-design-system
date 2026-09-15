import * as React from 'react';
/**
 * Customer quote set behind a 3px blue left rule, italic Lato. Used in proof sections
 * and testimonial cards.
 */
export interface PullQuoteProps {
  children?: React.ReactNode;
  /** lg = feature quote (17px), sm = inside a testimonial card (15px) */
  size?: 'lg' | 'sm';
  style?: React.CSSProperties;
}
export declare function PullQuote(props: PullQuoteProps): JSX.Element;
