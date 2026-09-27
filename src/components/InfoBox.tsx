import type { ReactNode } from "react";

interface Props {
  id?: string;
  children: ReactNode;
}

export function InfoBox({ id, children }: Props) {
  return (
    <p
      id={id}
      className="mt-4 flex items-start gap-2 scroll-mt-32 rounded-md border border-[var(--color-paper)]/10 bg-[var(--color-ink-info)] px-3 py-2 font-mono text-xs text-[var(--color-paper-dim)]"
    >
      <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border border-[var(--color-magenta)] text-[9px] text-[var(--color-magenta)]">
        i
      </span>
      <span>{children}</span>
    </p>
  );
}
