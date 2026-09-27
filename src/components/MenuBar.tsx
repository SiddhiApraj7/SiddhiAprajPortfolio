import { useEffect, useRef, useState } from "react";

export interface MenuItem {
  label: string;
  onClick?: () => void;
  href?: string;
}

export interface Menu {
  label: string;
  items: MenuItem[];
}

interface Props {
  menus: Menu[];
}

export function MenuBar({ menus }: Props) {
  const [open, setOpen] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(null);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="flex items-center gap-0.5 font-mono text-xs text-[var(--color-paper-dim)]">
      {menus.map((menu) => (
        <div key={menu.label} className="relative">
          <button
            onClick={() => setOpen((o) => (o === menu.label ? null : menu.label))}
            className={`rounded px-2 py-1 transition hover:bg-[var(--color-ink-line)] hover:text-[var(--color-paper)] ${
              open === menu.label ? "bg-[var(--color-ink-line)] text-[var(--color-paper)]" : ""
            }`}
          >
            {menu.label}
          </button>

          {open === menu.label && (
            <div className="absolute left-0 top-full z-20 mt-1 min-w-[13rem] rounded-md border border-[var(--color-ink-line)] bg-[var(--color-ink-raised)] py-1 shadow-lg shadow-black/40">
              {menu.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href ?? "#"}
                  target={item.href ? "_blank" : undefined}
                  rel={item.href ? "noreferrer" : undefined}
                  onClick={(e) => {
                    if (!item.href) e.preventDefault();
                    item.onClick?.();
                    setOpen(null);
                  }}
                  className="block cursor-pointer whitespace-nowrap px-3 py-1.5 text-[var(--color-paper-dim)] transition hover:bg-[var(--color-ink-line)] hover:text-[var(--color-cyan)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
