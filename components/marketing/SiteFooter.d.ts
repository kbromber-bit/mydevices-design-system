import * as React from 'react';
/**
 * Site footer on #F7F7F7: brand block + tagline + four social circles, two link columns,
 * and a legal bottom bar with the mono copyright line.
 */
export interface FooterLink { label: string; href: string }
export interface SiteFooterProps {
  columns?: { title: string; links: FooterLink[] }[];
  legal?: FooterLink[];
  tagline?: React.ReactNode;
  logoSrc?: string;
  /** path prefix to the project root for the bundled logo, e.g. "../../" */
  basePath?: string;
  style?: React.CSSProperties;
}
export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
