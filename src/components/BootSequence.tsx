import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTypewriter } from "./useTypewriter";

const LINES = [
  "$ jupyter notebook sidportfolio.ipynb",
  "[I] Serving notebooks from local directory",
  "[I] Kernel started: python3",
  "[I] Loading profile... done",
];

const LOAD_MS = 2500;

interface Props {
  onDone: () => void;
}

export function BootSequence({ onDone }: Props) {
  const [lineIndex, setLineIndex] = useState(0);
  const linesDone = lineIndex >= LINES.length;
  const [progress, setProgress] = useState(0);

  const typed = useTypewriter(LINES[Math.min(lineIndex, LINES.length - 1)], !linesDone, 16, () => {
    setTimeout(() => setLineIndex((i) => i + 1), 160);
  });

  useEffect(() => {
    if (!linesDone) return;
    const start = Date.now();
    const id = setInterval(() => {
      const pct = Math.min(100, Math.round(((Date.now() - start) / LOAD_MS) * 100));
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(id);
        setTimeout(onDone, 300);
      }
    }, 60);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [linesDone]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative flex min-h-screen items-center justify-center bg-[var(--color-ink)] px-4"
    >
      <div className="w-full max-w-lg font-mono text-sm text-[var(--color-paper-dim)]">
        {LINES.slice(0, lineIndex).map((line, i) => (
          <p key={i} className="py-0.5">
            <span className="text-[var(--color-cyan)]">{line.startsWith("$") ? "" : "  "}</span>
            {line}
          </p>
        ))}
        {!linesDone && (
          <p className="py-0.5">
            {typed}
            <span className="animate-pulse text-[var(--color-cyan)]">▍</span>
          </p>
        )}

        {linesDone && (
          <div className="mt-4">
            <p className="py-0.5">Loading Python notebook...</p>
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-[var(--color-ink-line)]">
              <div
                className="h-full rounded-full bg-[var(--color-cyan)] transition-[width] duration-150 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-1 text-right text-[10px] text-[var(--color-paper-dim)]">{progress}%</p>
          </div>
        )}
      </div>

      <button
        onClick={onDone}
        className="absolute bottom-6 right-6 font-mono text-xs text-[var(--color-paper-dim)] transition hover:text-[var(--color-cyan)]"
      >
        skip intro →
      </button>
    </motion.div>
  );
}
