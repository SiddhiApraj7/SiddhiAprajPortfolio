import { useState } from "react";
import { skillCategories, type Project } from "../data/content";

interface Props {
  projects: Project[];
}

function Node({ color, delay }: { color: string; delay: number }) {
  return (
    <span className="relative flex h-2.5 w-2.5 shrink-0">
      <span
        className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
        style={{ background: color, animationDelay: `${delay}s`, animationDuration: "2.4s" }}
      />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full" style={{ background: color }} />
    </span>
  );
}

export function ExperimentLog({ projects }: Props) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="relative overflow-hidden rounded-md border border-[var(--color-ink-line)] bg-[var(--color-ink-output)]">
      <div className="pointer-events-none absolute left-[27px] top-7 bottom-7 w-px bg-gradient-to-b from-transparent via-[var(--color-ink-line)] to-transparent" />

      <div className="flex items-center gap-3 border-b border-[var(--color-ink-line)] px-4 py-2 font-mono text-[10px] uppercase tracking-wide text-[var(--color-paper-dim)]">
        <span className="w-2.5 shrink-0" />
        <span className="flex-1">run</span>
        <span className="hidden shrink-0 sm:block sm:w-32">result</span>
        <span className="w-3 shrink-0" />
      </div>

      <div className="divide-y divide-[var(--color-ink-line)]">
        {projects.map((p, i) => {
          const isOpen = expanded === p.title;
          const color = skillCategories[p.category].color;
          return (
            <div key={p.title}>
              <button
                onClick={() => setExpanded(isOpen ? null : p.title)}
                className="flex w-full items-start gap-3 px-4 py-3 text-left transition hover:bg-[var(--color-ink)]"
              >
                <span className="pt-1">
                  <Node color={color} delay={i * 0.4} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-baseline gap-x-2">
                    <span className="font-mono text-[10px] text-[var(--color-paper-dim)]">
                      exp-{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-sm text-[var(--color-cyan)]">{p.title}</span>
                  </span>
                  <span className="mt-1.5 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded bg-[var(--color-ink)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--color-paper-dim)]"
                      >
                        {s}
                      </span>
                    ))}
                  </span>
                </span>

                <span className="hidden shrink-0 pt-0.5 text-right font-mono text-xs text-[var(--color-magenta)] sm:line-clamp-2 sm:block sm:w-32">
                  {p.result ?? "—"}
                </span>

                <span
                  className={`shrink-0 pt-0.5 text-[var(--color-paper-dim)] transition-transform ${isOpen ? "rotate-90" : ""}`}
                >
                  ›
                </span>
              </button>

              {isOpen && (
                <div className="space-y-2 px-4 pb-4 pl-[2.65rem]">
                  {p.context && (
                    <p className="font-mono text-[11px] uppercase tracking-wide text-[var(--color-paper-dim)]">
                      {p.context}
                    </p>
                  )}
                  <p className="text-sm text-[var(--color-paper)]">{p.blurb}</p>
                  {p.result && <p className="text-xs text-[var(--color-magenta)]">→ {p.result}</p>}
                  {p.links && p.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                      {p.links.map((l) => (
                        <a
                          key={l.url}
                          href={l.url}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="rounded border border-[var(--color-ink-line)] px-2.5 py-1 text-[var(--color-cyan)] transition hover:border-[var(--color-cyan)] hover:bg-[var(--color-ink)]"
                        >
                          {l.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
