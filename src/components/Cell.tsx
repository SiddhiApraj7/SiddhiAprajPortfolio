import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { CellDef } from "./types";
import { useTypewriter } from "./useTypewriter";

type Phase = "waiting" | "typing" | "executing" | "output";

interface Props {
  def: CellDef;
  execNumber: number | null;
  isTurn: boolean;
  onSequenceDone: () => void;
}

export function Cell({ def, execNumber, isTurn, onSequenceDone }: Props) {
  const isCode = def.kind === "code";
  const [phase, setPhase] = useState<Phase>(isCode ? "waiting" : "output");
  const autoPlay = useRef(false);

  useEffect(() => {
    if (isCode && isTurn && phase === "waiting") {
      autoPlay.current = true;
      setPhase("typing");
    }
    if (!isCode && isTurn) {
      const t = setTimeout(onSequenceDone, 350);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTurn]);

  const code = isCode ? def.code : "";
  const typed = useTypewriter(code, phase === "typing", 10, () => setPhase("executing"));

  useEffect(() => {
    if (phase !== "executing") return;
    const t = setTimeout(() => {
      setPhase("output");
      if (autoPlay.current) {
        autoPlay.current = false;
        onSequenceDone();
      }
    }, 420);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  function rerun() {
    if (!isCode || phase === "typing" || phase === "executing") return;
    autoPlay.current = false;
    setPhase("typing");
  }

  const bracket =
    phase === "waiting" ? " " : phase === "typing" || phase === "executing" ? "*" : String(execNumber ?? "");

  if (!isCode) {
    return (
      <motion.div
        id={def.sectionId}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6 scroll-mt-32 px-1 text-[var(--color-paper)]"
      >
        {def.content}
      </motion.div>
    );
  }

  return (
    <div
      id={def.sectionId}
      className="mb-6 grid scroll-mt-32 grid-cols-[4.75rem_1fr] gap-x-1 sm:grid-cols-[5.5rem_1fr]"
    >
      <button
        onClick={rerun}
        title="Run this cell"
        disabled={phase === "typing" || phase === "executing"}
        className="group flex h-fit select-none items-center justify-end gap-1 whitespace-nowrap rounded px-1.5 py-1 mt-2 font-mono text-xs text-[var(--color-cyan-dim)] transition hover:bg-[var(--color-ink-line)] hover:text-[var(--color-cyan)] disabled:cursor-default disabled:hover:bg-transparent"
      >
        <span className="opacity-0 transition-opacity group-hover:opacity-100">▶</span>
        In [{bracket}]:
      </button>
      <div className="min-w-0 rounded-md border border-[var(--color-ink-line)] bg-[var(--color-ink-raised)]">
        <pre className="overflow-x-auto whitespace-pre-wrap break-words px-4 py-2.5 font-mono text-[11px] leading-relaxed text-[var(--color-paper-dim)]">
          <code>
            {phase === "waiting" ? (
              <span className="text-[var(--color-paper-dim)]">
                # not yet run <span className="animate-pulse text-[var(--color-cyan)]">▍</span>
              </span>
            ) : (
              <>
                {typed}
                {phase === "typing" && <span className="animate-pulse text-[var(--color-cyan)]">▍</span>}
              </>
            )}
          </code>
        </pre>
      </div>

      {phase === "executing" && (
        <>
          <div aria-hidden className="pt-2" />
          <div className="flex items-center gap-2 px-1 pt-2 font-mono text-xs text-[var(--color-paper-dim)]">
            <span className="flex gap-1">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--color-magenta)] [animation-delay:-0.2s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--color-magenta)] [animation-delay:-0.1s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--color-magenta)]" />
            </span>
            {def.runningLabel ?? "running..."}
          </div>
        </>
      )}

      {phase === "output" && (
        <>
          <div className="pt-2 text-right font-mono text-xs text-[var(--color-magenta-dim)]">Out[{execNumber}]:</div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="min-w-0 px-1 pt-1"
          >
            {def.output}
          </motion.div>
        </>
      )}
    </div>
  );
}
