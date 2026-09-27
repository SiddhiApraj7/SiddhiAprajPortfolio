import { useMemo, useState } from "react";
import { projects, skillCategories, type SkillLink, type SkillNode } from "../data/content";

interface Props {
  nodes: SkillNode[];
  links: SkillLink[];
}

const LAYER_ORDER: SkillNode["category"][] = ["languages", "tools", "ml", "fullstack"];

const WIDTH = 680;
const PAD_X = 66;
const PAD_Y = 26;
const ROW_GAP = 46;
const LABEL_H = 20;

type PositionedNode = SkillNode & { x: number; y: number; layer: number };

function projectsUsing(label: string) {
  const needle = label.toLowerCase();
  return projects.filter((p) => p.stack.some((s) => s.toLowerCase().includes(needle) || needle.includes(s.toLowerCase())));
}

export function NetworkGraph({ nodes, links }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const active = hovered ?? selected;

  const { layers, positioned, edges, height } = useMemo(() => {
    const layers = LAYER_ORDER.map((category) => nodes.filter((n) => n.category === category));
    const maxCount = Math.max(...layers.map((l) => l.length));
    const nodeRegionHeight = PAD_Y * 2 + (maxCount - 1) * ROW_GAP;
    const height = LABEL_H + nodeRegionHeight;

    const positioned: PositionedNode[] = [];
    layers.forEach((layerNodes, li) => {
      const x = layers.length === 1 ? WIDTH / 2 : PAD_X + (li * (WIDTH - 2 * PAD_X)) / (layers.length - 1);
      const span = (layerNodes.length - 1) * ROW_GAP;
      const yStart = LABEL_H + (nodeRegionHeight - span) / 2;
      layerNodes.forEach((n, ni) => {
        positioned.push({ ...n, x, y: yStart + ni * ROW_GAP, layer: li });
      });
    });

    const byId = new Map(positioned.map((n) => [n.id, n]));
    const edges = links
      .map((l) => ({ a: byId.get(l.source), b: byId.get(l.target) }))
      .filter((e): e is { a: PositionedNode; b: PositionedNode } => !!e.a && !!e.b);

    return { layers, positioned, edges, height };
  }, [nodes, links]);

  const activeNode = positioned.find((n) => n.id === active) ?? null;
  const connected = new Set<string>();
  if (active) {
    edges.forEach((e) => {
      if (e.a.id === active) connected.add(e.b.id);
      if (e.b.id === active) connected.add(e.a.id);
    });
  }

  const usedByProjects = activeNode ? projectsUsing(activeNode.label) : [];

  return (
    <div className="rounded-md border border-[var(--color-ink-line)] bg-[var(--color-ink-output)] p-2">
      <svg viewBox={`0 0 ${WIDTH} ${height}`} className="w-full" role="img" aria-label="Skills neural network">
        <g>
          {layers.map((_, li) => {
            const x = layers.length === 1 ? WIDTH / 2 : PAD_X + (li * (WIDTH - 2 * PAD_X)) / (layers.length - 1);
            return (
              <text
                key={li}
                x={x}
                y={12}
                textAnchor="middle"
                fontSize={8}
                fontFamily="var(--font-mono)"
                fill={skillCategories[LAYER_ORDER[li]].color}
                className="pointer-events-none select-none uppercase tracking-wide"
              >
                {skillCategories[LAYER_ORDER[li]].label}
              </text>
            );
          })}
        </g>
        <g>
          {edges.map((e, i) => {
            const isHot = active !== null && (e.a.id === active || e.b.id === active);
            return (
              <line
                key={i}
                x1={e.a.x}
                y1={e.a.y}
                x2={e.b.x}
                y2={e.b.y}
                stroke={isHot ? "var(--color-cyan)" : "var(--color-paper-dim)"}
                strokeWidth={isHot ? 1.5 : 1}
                strokeOpacity={isHot ? 1 : 0.28}
                className="signal-edge transition-[stroke,stroke-opacity,stroke-width] duration-300"
                style={{ animationDelay: `${e.a.layer * 0.25}s` }}
              />
            );
          })}
        </g>
        <g>
          {positioned.map((n) => {
            const cat = skillCategories[n.category];
            const dim = active !== null && active !== n.id && !connected.has(n.id);
            const isActive = active === n.id;
            return (
              <g
                key={n.id}
                transform={`translate(${n.x}, ${n.y})`}
                onMouseEnter={() => setHovered(n.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelected((s) => (s === n.id ? null : n.id))}
                className="cursor-pointer"
                style={{ opacity: dim ? 0.28 : 1, transition: "opacity 0.25s" }}
              >
                {isActive && (
                  <circle r={10} fill="none" stroke={cat.color} strokeWidth={1} strokeOpacity={0.6} />
                )}
                <circle
                  r={isActive ? 6.5 : 4.5}
                  fill={cat.color}
                  className="signal-node transition-[r] duration-200"
                  style={{ animationDelay: `${0.1 + n.layer * 0.25}s` }}
                />
                <text
                  y={13}
                  textAnchor="middle"
                  fontSize={8.5}
                  fontFamily="var(--font-mono)"
                  fill={isActive ? "var(--color-paper)" : "var(--color-paper-dim)"}
                  className="pointer-events-none select-none"
                >
                  {n.label}
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      <div className="border-t border-[var(--color-ink-line)] px-2 pt-2">
        {activeNode ? (
          <div className="py-1 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ background: skillCategories[activeNode.category].color }} />
              <span className="text-[var(--color-paper)]">{activeNode.label}</span>
              <span className="text-[var(--color-paper-dim)]">· {skillCategories[activeNode.category].label}</span>
              <span className="text-[var(--color-paper-dim)]">· {connected.size} connections</span>
            </div>
            <p className="mt-1.5 text-[var(--color-paper-dim)]">
              {usedByProjects.length > 0 || (activeNode.usedIn?.length ?? 0) > 0 ? (
                <>
                  used in:{" "}
                  {usedByProjects.map((p, i) => (
                    <span key={p.title}>
                      <span className="text-[var(--color-cyan)]">{p.title}</span>
                      {i < usedByProjects.length - 1 || activeNode.usedIn?.length ? ", " : ""}
                    </span>
                  ))}
                  {activeNode.usedIn?.map((u, i) => (
                    <span key={u}>
                      {u}
                      {i < (activeNode.usedIn?.length ?? 0) - 1 ? ", " : ""}
                    </span>
                  ))}
                </>
              ) : (
                "part of the toolkit — no featured project linked yet"
              )}
            </p>
          </div>
        ) : (
          <p className="py-1 font-mono text-xs text-[var(--color-paper-dim)]">
            hover or click a node — connections are real, not decorative
          </p>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 border-t border-[var(--color-ink-line)] px-2 pt-2 font-mono text-[10px] uppercase tracking-wide text-[var(--color-paper-dim)]">
        {layers.map((_, li) => (
          <span key={li} className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ background: skillCategories[LAYER_ORDER[li]].color }} />
            {skillCategories[LAYER_ORDER[li]].label}
          </span>
        ))}
      </div>
    </div>
  );
}
