import * as React from 'react';
/**
 * A turn in the AI thread. The assistant turn has a fixed rhythm: working status →
 * one-sentence insight with the real number → the artifact → a plain-spoken confirmation.
 */
export interface ChatMessageProps {
  role?: 'user' | 'assistant';
  /** assistant mark, e.g. assets/ai/claude.png */
  avatar?: string;
  /** user prompt text, or the artifact element for an assistant turn */
  children?: React.ReactNode;
  /** mono working/done line, e.g. "Pulling May's enriched meter data from myDevices…" */
  status?: React.ReactNode;
  /** swaps the spinner for the green check */
  statusDone?: boolean;
  /** the blue-ruled callout carrying the finding and its number */
  insight?: React.ReactNode;
  /** the closing sentence after the artifact */
  confirm?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function ChatMessage(props: ChatMessageProps): JSX.Element;
