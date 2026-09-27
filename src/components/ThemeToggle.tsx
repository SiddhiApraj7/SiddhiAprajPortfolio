import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function ThemeToggle() {
  // Every fresh load starts dark — the toggle only affects the current visit.
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded border border-[var(--color-ink-line)] px-2 py-1.5 font-mono text-xs text-[var(--color-paper-dim)] transition hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)]"
    >
      {theme === "dark" ? "☾" : "☀"}
    </button>
  );
}
