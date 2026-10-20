import { Link, useLocation } from "@tanstack/react-router";
import type { Language } from "@/lib/translations";

function Flag({ language }: { language: Language }) {
  return language === "es" ? (
    <svg viewBox="0 0 30 20" className="h-4 w-6 rounded-sm" aria-hidden="true">
      <path fill="#006847" d="M0 0h10v20H0z" />
      <path fill="#fff" d="M10 0h10v20H10z" />
      <path fill="#ce1126" d="M20 0h10v20H20z" />
      <path fill="none" stroke="#006847" strokeWidth=".8" d="M12 11q3 5 6 0" />
      <path fill="#80542f" d="m13 7 3 1 1 3-2-1-1 2-1-2 1-1z" />
    </svg>
  ) : (
    <svg viewBox="0 0 30 20" className="h-4 w-6 rounded-sm" aria-hidden="true">
      <path fill="#fff" d="M0 0h30v20H0z" />
      {Array.from({ length: 7 }, (_, index) => (
        <path key={index} fill="#b22234" d={`M0 ${(index * 40) / 13}h30v${20 / 13}H0z`} />
      ))}
      <path fill="#3c3b6e" d="M0 0h13v10.77H0z" />
      {Array.from({ length: 9 }, (_, row) =>
        Array.from({ length: row % 2 === 0 ? 6 : 5 }, (_, column) => (
          <text
            key={`${row}-${column}`}
            x={1 + column * 2.2 + (row % 2) * 1.1}
            y={1.3 + row * 1.15}
            fill="#fff"
            fontSize="1.5"
          >
            ★
          </text>
        )),
      )}
    </svg>
  );
}

export function LanguageSelector({ language }: { language: Language }) {
  const { hash } = useLocation();
  return (
    <nav
      aria-label={language === "es" ? "Idioma" : "Language"}
      className="flex shrink-0 items-center gap-1 rounded-full border border-line p-1"
    >
      {(["es", "en"] as const).map((option) => (
        <Link
          key={option}
          to="/"
          search={{ lang: option }}
          hash={hash}
          resetScroll={false}
          lang={option}
          aria-label={option === "es" ? "Español (México)" : "English (United States)"}
          aria-current={language === option ? "true" : undefined}
          className={`flex items-center gap-1.5 rounded-full px-2 py-1.5 font-mono text-[11px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terra ${language === option ? "bg-ink text-paper" : "text-muted-foreground hover:bg-line"}`}
        >
          <Flag language={option} />
          {option.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
