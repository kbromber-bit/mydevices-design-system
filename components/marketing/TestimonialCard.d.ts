import * as React from 'react';
/**
 * Written testimonial card — blue quote glyph, italic quote behind the blue rule, byline
 * with headshot or honest dashed placeholder.
 */
export interface TestimonialCardProps {
  quote?: React.ReactNode;
  name?: React.ReactNode;
  role?: React.ReactNode;
  avatar?: string;
  style?: React.CSSProperties;
}
export declare function TestimonialCard(props: TestimonialCardProps): JSX.Element;
