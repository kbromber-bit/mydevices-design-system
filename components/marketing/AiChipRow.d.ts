import * as React from 'react';
/**
 * The "any AI" proof row: real assistant marks (Claude, ChatGPT, Copilot, Gemini) in white
 * 14px-radius chips that lift 3px and gain a blue glow on hover.
 */
export interface AiChipRowProps {
  label?: React.ReactNode;
  /** the honest small print under the row */
  note?: React.ReactNode;
  items?: { label: string; src: string }[];
  basePath?: string;
  style?: React.CSSProperties;
}
export declare function AiChipRow(props: AiChipRowProps): JSX.Element;
