import { useEffect, useState } from "react";

/** Reveals `text` a few characters at a time. Calls `onDone` once, when finished. */
export function useTypewriter(text: string, active: boolean, speedMs = 12, onDone?: () => void) {
  const [shown, setShown] = useState(active ? "" : text);

  useEffect(() => {
    if (!active) return;
    setShown("");
    let i = 0;
    const step = Math.max(1, Math.round(text.length / 120));
    const id = setInterval(() => {
      i += step;
      setShown(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        onDone?.();
      }
    }, speedMs);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, active]);

  return active ? shown : text;
}
