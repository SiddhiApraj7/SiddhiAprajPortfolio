import { useEffect, useState } from "react";
import type { ExperienceItem } from "../data/content";

interface Props {
  experience: ExperienceItem[];
}

const WIDTH = 640;
const HEIGHT = 260;
const PAD_X = 36;
const PAD_Y = 34;
const DWELL_MS = 1800;

export function CareerCurve({ experience }: Props) {
  const [manual, setManual] = useState<string | null>(null);
  // autoIndex is where the traveling dot is headed; displayIndex is what the
  // detail panel shows, and only catches up once the dot actually arrives.
  const [autoIndex, setAutoIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  // When looping from the last point back to the first, snap instantly instead
  // of gliding in a straight line across the whole chart (there's no path there).
  const [instant, setInstant] = useState(false);

  const sorted = [...experience].sort((a, b) => a.order - b.order);
  const minOrder = sorted[0].order;
  const maxOrder = sorted[sorted.length - 1].order;
  const maxScope = Math.max(...sorted.map((e) => e.scope));
  const minScope = Math.min(...sorted.map((e) => e.scope));

  const points = sorted.map((e) => {
    const x = PAD_X + ((e.order - minOrder) / (maxOrder - minOrder || 1)) * (WIDTH - 2 * PAD_X);
    const y =
      HEIGHT - PAD_Y - ((e.scope - minScope) / (maxScope - minScope || 1)) * (HEIGHT - 2 * PAD_Y);
    return { ...e, x, y };
  });

  useEffect(() => {
    if (manual) return;
    const id = setInterval(() => {
      // The dot that departed toward `prev` at the start of this dwell period
      // has, by construction, just arrived — so the panel catches up to it
      // right as we point the dot toward the next stop.
      setAutoIndex((prev) => {
        setDisplayIndex(prev);
        const next = (prev + 1) % points.length;
        if (next === 0) setInstant(true);
        return next;
      });
    }, DWELL_MS);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [manual, points.length]);

  useEffect(() => {
    if (!instant) return;
    const t = setTimeout(() => setInstant(false), 50);
    return () => clearTimeout(t);
  }, [instant]);

  const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const travelPoint = points[autoIndex];
  const activeItem = manual ? (points.find((p) => p.role === manual) ?? null) : points[displayIndex];
  const dotTarget = manual ? (points.find((p) => p.role === manual) ?? travelPoint) : travelPoint;

  return (
    <div className="rounded-md border border-[var(--color-ink-line)] bg-[var(--color-ink-output)] p-2">
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full" role="img" aria-label="Career growth curve">
        <line
          x1={PAD_X}
          y1={HEIGHT - PAD_Y}
          x2={WIDTH - PAD_X}
          y2={HEIGHT - PAD_Y}
          stroke="var(--color-ink-line)"
          strokeWidth={1}
        />
        <path
          d={path}
          fill="none"
          stroke="var(--color-cyan)"
          strokeWidth={1.5}
          strokeOpacity={0.6}
          className="signal-edge"
        />
        <circle
          cx={dotTarget.x}
          cy={dotTarget.y}
          r={9}
          fill="var(--color-cyan)"
          opacity={0.9}
          style={{
            filter: "drop-shadow(0 0 5px var(--color-cyan))",
            transition: instant ? "none" : `cx ${DWELL_MS}ms linear, cy ${DWELL_MS}ms linear`,
          }}
        />

        {points.map((p) => {
          const isActive = p.role === activeItem?.role;
          return (
            <g key={p.role}>
              <line
                x1={p.x}
                y1={p.y}
                x2={p.x}
                y2={HEIGHT - PAD_Y}
                stroke="var(--color-ink-line)"
                strokeWidth={1}
                strokeDasharray="2 3"
              />
              <g
                transform={`translate(${p.x}, ${p.y})`}
                onClick={() => setManual((s) => (s === p.role ? null : p.role))}
                className="cursor-pointer"
              >
                {p.featured && (
                  <circle r={11} fill="none" stroke="var(--color-magenta)" strokeOpacity={0.5} strokeWidth={1} />
                )}
                <circle
                  r={isActive ? 6 : 5}
                  fill={p.featured ? "var(--color-magenta)" : "var(--color-cyan)"}
                  className="signal-node transition-[r] duration-200"
                />
              </g>
              <text
                x={p.x}
                y={p.y - 12}
                textAnchor="middle"
                fontSize={8.5}
                fontFamily="var(--font-mono)"
                fill={p.featured ? "var(--color-magenta)" : "var(--color-paper)"}
                className="pointer-events-none select-none"
              >
                {p.label}
              </text>
              <text
                x={p.x}
                y={HEIGHT - PAD_Y + 16}
                textAnchor="middle"
                fontSize={8.5}
                fontFamily="var(--font-mono)"
                fill="var(--color-paper-dim)"
                className="pointer-events-none select-none"
              >
                {p.dates.split(" ")[0]} {p.dates.match(/\d{4}/)?.[0]?.slice(2)}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="h-[168px] overflow-y-auto border-t border-[var(--color-ink-line)] px-2 pt-2 pb-1">
        {activeItem && (
          <div className="font-mono text-xs">
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-sm text-[var(--color-paper)]">{activeItem.role}</span>
              {activeItem.featured && (
                <span className="rounded-full border border-[var(--color-magenta)]/40 px-1.5 py-0.5 text-[9px] uppercase tracking-wide text-[var(--color-magenta)]">
                  ★ Featured Research
                </span>
              )}
            </div>
            <p className="text-[var(--color-paper-dim)]">
              {activeItem.org} · {activeItem.dates}
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-[var(--color-paper-dim)]">
              {activeItem.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
