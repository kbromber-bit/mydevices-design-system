import * as React from 'react';
/**
 * Statistic: oversized League Spartan figure over a short caption. Put the point you are
 * making at emphasis="primary" and flank it with dim supporting figures.
 */
export interface StatFigureProps {
  /** the figure itself, e.g. "71%", "6 wks", "242,413" */
  value?: React.ReactNode;
  /** caption below */
  children?: React.ReactNode;
  /** xl = the one that matters, lg = supporting, md = inline card stat */
  size?: 'xl' | 'lg' | 'md';
  tone?: 'light' | 'navy';
  /** dim renders at 50% opacity in slate — the flanking figures */
  emphasis?: 'primary' | 'dim';
  align?: 'center' | 'left';
  style?: React.CSSProperties;
}
export declare function StatFigure(props: StatFigureProps): JSX.Element;
