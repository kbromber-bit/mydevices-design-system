import * as React from 'react';
/**
 * Honest asset placeholder — diagonal hatch fill, mono label naming the asset and its
 * intended pixel size, or a dashed circle where a headshot belongs.
 */
export interface PlaceholderProps {
  /** what belongs here, e.g. "Provide asset" */
  label?: React.ReactNode;
  /** the spec: subject and pixel size */
  note?: React.ReactNode;
  /** CSS aspect-ratio for the block form */
  ratio?: string;
  shape?: 'block' | 'avatar';
  /** avatar diameter in px */
  size?: number;
  style?: React.CSSProperties;
}
export declare function Placeholder(props: PlaceholderProps): JSX.Element;
