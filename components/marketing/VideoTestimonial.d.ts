import * as React from 'react';
/**
 * Vimeo-hosted customer testimonial in a 14px-radius bordered card with a blue glow.
 * The three real testimonial IDs from the source design are FSG 1208169389,
 * C-Store 1208169388, Whitehorse 1208172744.
 */
export interface VideoTestimonialProps {
  /** customer name shown under the player */
  name?: React.ReactNode;
  /** Vimeo numeric id */
  videoId?: string | number;
  title?: string;
  style?: React.CSSProperties;
}
export declare function VideoTestimonial(props: VideoTestimonialProps): JSX.Element;
