import { useState } from "react";
import { contact } from "../data/content";
import { Cell } from "./Cell";
import { MenuBar, type Menu } from "./MenuBar";
import { ThemeToggle } from "./ThemeToggle";
import type { CellDef } from "./types";

interface Props {
  cells: CellDef[];
}

function scrollToSection(id: string, flash = false) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
  if (flash && el) {
    el.classList.remove("flash-highlight");
    // restart the animation even if it just played
    void el.offsetWidth;
    el.classList.add("flash-highlight");
    setTimeout(() => el.classList.remove("flash-highlight"), 1700);
  }
}

export function Notebook({ cells }: Props) {
  const [runId, setRunId] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  let execCount = 0;

  function runAll() {
    setActiveIndex(0);
    setRunId((id) => id + 1);
  }

  function clearAll() {
    setActiveIndex(-1);
    setRunId((id) => id + 1);
  }

  const menus: Menu[] = [
    {
      label: "File",
      items: [
        { label: "Download résumé (.pdf)", href: contact.resumeUrl },
        { label: "View source on GitHub", href: contact.github },
      ],
    },
    {
      label: "View",
      items: [
        { label: "About", onClick: () => scrollToSection("about", true) },
        { label: "Skills", onClick: () => scrollToSection("skills", true) },
        { label: "Projects", onClick: () => scrollToSection("projects", true) },
        { label: "Education", onClick: () => scrollToSection("education", true) },
        { label: "Experience", onClick: () => scrollToSection("experience", true) },
        { label: "Contact", onClick: () => scrollToSection("contact", true) },
      ],
    },
    {
      label: "Kernel",
      items: [
        { label: "▶ Restart & Run All", onClick: runAll },
        { label: "Restart & Clear Output", onClick: clearAll },
      ],
    },
    {
      label: "Help",
      items: [{ label: "How this notebook works ↓", onClick: () => scrollToSection("run-hint", true) }],
    },
    {
      label: "Contact",
      items: [
        { label: "Jump to Contact ↓", onClick: () => scrollToSection("contact", true) },
        { label: "Email", href: `mailto:${contact.email}` },
        { label: "LinkedIn", href: contact.linkedin },
        { label: "GitHub", href: contact.github },
      ],
    },
  ];

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-8">
      <div className="sticky -top-10 z-20 -mx-4 mb-8 bg-[var(--color-ink)]/95 px-4 pt-10 backdrop-blur sm:-mx-8 sm:px-8">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-paper-dim)]">
            <span className="text-[var(--color-cyan)]">◆</span> sidportfolio.ipynb
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={runAll}
              className="rounded border border-[var(--color-ink-line)] px-3 py-1.5 font-mono text-xs text-[var(--color-paper)] transition hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)]"
            >
              ▶ Run All
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between border-b border-[var(--color-ink-line)] pb-2">
          <MenuBar menus={menus} />
        </div>
      </div>

      <div key={runId}>
        {cells.map((def, i) => {
          const isCodeCell = def.kind === "code";
          if (isCodeCell) execCount += 1;
          return (
            <Cell
              key={def.id}
              def={def}
              execNumber={isCodeCell ? execCount : null}
              isTurn={i === activeIndex}
              onSequenceDone={() => setActiveIndex((idx) => Math.max(idx, i + 1))}
            />
          );
        })}
      </div>
    </div>
  );
}
