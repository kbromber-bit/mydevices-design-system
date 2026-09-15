import * as React from 'react';
/**
 * Preview of a generated deliverable — .pptx, .docx or .xlsx — with file chrome, a
 * ✓ Generated badge, a page counter and a filmstrip of pages. The brand's proof object:
 * it shows the finished outcome, not a feature.
 */
export interface ArtifactCardProps {
  /** doc renders a portrait page, deck and xls render 16:9 */
  kind?: 'doc' | 'deck' | 'xls';
  /** the real filename, e.g. "Management Review — May 2026.pptx" */
  file?: React.ReactNode;
  /** false shows the grey "Generating…" state */
  ready?: boolean;
  /** page image URLs */
  images?: string[];
  /** which page is showing */
  index?: number;
  /** true page count when more pages exist than previews */
  total?: number;
  style?: React.CSSProperties;
}
export declare function ArtifactCard(props: ArtifactCardProps): JSX.Element;
