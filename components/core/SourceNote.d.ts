import * as React from 'react';
/**
 * Mono footnote citing where a number came from, or flagging an honest placeholder.
 * Non-negotiable under every statistic.
 */
export interface SourceNoteProps {
  children?: React.ReactNode;
  tone?: 'light' | 'navy';
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}
export declare function SourceNote(props: SourceNoteProps): JSX.Element;
