import * as React from 'react';
/**
 * Full-pill chip (99px radius) for sample questions, tags and small metadata capsules.
 */
export interface PillProps {
  children?: React.ReactNode;
  tone?: 'blue' | 'outline' | 'neutral' | 'green' | 'navy';
  /** body = quoted question chip; mono = uppercase metadata tag */
  font?: 'body' | 'mono';
  style?: React.CSSProperties;
}
export declare function Pill(props: PillProps): JSX.Element;
