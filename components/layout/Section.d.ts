import * as React from 'react';
/**
 * The page's vertical rhythm unit: 96px top/bottom, 28px gutters, centred measure.
 * Exactly one navy section per page — it is the page's gravity, not a theme.
 */
export interface SectionProps {
  /** light = white, alt = #F7F7F7 band with hairlines, navy = the one dark section,
   *  wash-hero = top radial blue wash, wash-cta = bottom radial blue wash */
  tone?: 'light' | 'alt' | 'navy' | 'wash-hero' | 'wash-cta';
  width?: 'page' | 'wide' | 'measure' | 'narrow' | 'cta';
  align?: 'left' | 'center';
  id?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Section(props: SectionProps): JSX.Element;
