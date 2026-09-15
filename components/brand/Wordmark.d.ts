import * as React from 'react';
/**
 * Placeholder wordmark — the real logo asset is missing from the provided sources, so the
 * name is set in League Spartan 800 with "Devices" in accent blue. Replace with the
 * official mark when it is supplied.
 */
export interface WordmarkProps {
  /** cap height in px */
  size?: number;
  tone?: 'light' | 'dark';
  style?: React.CSSProperties;
}
export declare function Wordmark(props: WordmarkProps): JSX.Element;
