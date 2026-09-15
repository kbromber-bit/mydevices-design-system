import * as React from 'react';
/**
 * Status badge with the green pulsing dot. The ONLY sanctioned use of brand green:
 * something is live, connected, or working right now.
 */
export interface LiveBadgeProps {
  children?: React.ReactNode;
  /** pill = standalone claim badge; inline = tiny label inside a panel chrome bar */
  variant?: 'pill' | 'inline';
  style?: React.CSSProperties;
}
export declare function LiveBadge(props: LiveBadgeProps): JSX.Element;
