import * as React from 'react';
/**
 * The "inside the AI you already use" panel — a neutral assistant window (16px radius,
 * blue glow) whose chrome bar names the assistant and shows the live myDevices connection.
 */
export interface ChatPanelProps {
  /** assistant name shown in the chrome bar */
  assistant?: string;
  /** path to the assistant mark, e.g. assets/ai/claude.png */
  assistantIcon?: string;
  /** the mono connection note */
  connection?: React.ReactNode;
  placeholder?: React.ReactNode;
  /** fixed panel height in px */
  height?: number | string;
  /** ChatMessage children */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function ChatPanel(props: ChatPanelProps): JSX.Element;
