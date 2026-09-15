import * as React from 'react';
/**
 * Attribution row: name in League Spartan 700, job title and company in mono grey,
 * with a real headshot or the honest dashed circle.
 */
export interface BylineProps {
  name?: React.ReactNode;
  /** role + company, e.g. "Sustainability Coordinator, Freudenberg-NOK" */
  role?: React.ReactNode;
  /** headshot URL; omit for the dashed placeholder */
  avatar?: string;
  size?: 'md' | 'lg';
  style?: React.CSSProperties;
}
export declare function Byline(props: BylineProps): JSX.Element;
