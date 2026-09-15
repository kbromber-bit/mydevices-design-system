import * as React from 'react';
/**
 * Customer trust band. Real logos only, greyed to 82% opacity, each in a fixed 156x64 cell
 * with a per-logo max-height so optical sizes match.
 */
export interface LogoBarProps {
  label?: React.ReactNode;
  logos?: { alt: string; src: string; maxHeight?: number; nudge?: number }[];
  /** prefix for the bundled asset paths, e.g. "../../" from a nested page */
  basePath?: string;
  style?: React.CSSProperties;
}
export declare function LogoBar(props: LogoBarProps): JSX.Element;
