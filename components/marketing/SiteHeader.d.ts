import * as React from 'react';
/**
 * Sticky marketing header, 76px tall, translucent white with 8px backdrop blur.
 */
export interface NavItem { label: string; href: string }
export interface SiteHeaderProps {
  nav?: NavItem[];
  /** highlights the current page's nav item in blue */
  active?: string;
  /** override the logo image; defaults to the official logotype */
  logoSrc?: string;
  /** path prefix to the project root for the bundled logo, e.g. "../../" */
  basePath?: string;
  onNavigate?: (item: NavItem) => void;
  style?: React.CSSProperties;
}
export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;
