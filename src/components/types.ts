import type { ReactNode } from "react";

export interface CodeCellDef {
  id: string;
  kind: "code";
  code: string;
  runningLabel?: string;
  output: ReactNode;
  sectionId?: string;
}

export interface MarkdownCellDef {
  id: string;
  kind: "markdown";
  content: ReactNode;
  sectionId?: string;
}

export type CellDef = CodeCellDef | MarkdownCellDef;
