import * as React from 'react';
/**
 * The brand's signature headline: line one states the setup in charcoal, line two delivers
 * the outcome payoff in blue. Both lines are short declarative sentences ending in a period.
 */
export interface HeadlineProps {
  /** line 1 — the setup, in charcoal. Ends with a period. */
  setup?: React.ReactNode;
  /** line 2 — the payoff, in blue. Ends with a period. */
  payoff?: React.ReactNode;
  /** 1 for the hero, 2 for section headings */
  level?: 1 | 2;
  tone?: 'light' | 'navy';
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}
export declare function Headline(props: HeadlineProps): JSX.Element;
