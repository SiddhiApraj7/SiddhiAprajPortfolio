import type { EducationItem } from "../data/content";

interface Props {
  education: EducationItem[];
}

export function EducationBlock({ education }: Props) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {education.map((ed) => (
        <div
          key={ed.institution}
          className="rounded-md border border-[var(--color-ink-line)] bg-[var(--color-ink-output)] p-4"
        >
          <p className="font-mono text-sm text-[var(--color-cyan)]">{ed.degree}</p>
          <p className="mt-1 text-sm text-[var(--color-paper)]">{ed.institution}</p>
          <p className="mt-0.5 font-mono text-xs text-[var(--color-paper-dim)]">{ed.dates}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {ed.details.split(", ").map((course) => (
              <span
                key={course}
                className="rounded bg-[var(--color-ink)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--color-paper-dim)]"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
