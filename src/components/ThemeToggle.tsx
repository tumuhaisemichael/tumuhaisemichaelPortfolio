"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const THEME_EVENT = "portfolio-theme-change";

const getPreferredTheme = (): Theme => {
  if (typeof window === "undefined") return "light";

  const saved = localStorage.getItem("theme") as Theme | null;
  if (saved === "light" || saved === "dark") return saved;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const subscribe = (onStoreChange: () => void) => {
  if (typeof window === "undefined") return () => {};

  const media = window.matchMedia("(prefers-color-scheme: dark)");
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(THEME_EVENT, onStoreChange);
  media.addEventListener("change", onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(THEME_EVENT, onStoreChange);
    media.removeEventListener("change", onStoreChange);
  };
};

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getPreferredTheme, () => "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", next);
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return (
    <button
      id="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="w-10 h-10 flex items-center justify-center rounded-lg border border-[var(--border)]
                 text-[var(--text-muted)] hover:text-[var(--primary)]
                 hover:bg-[var(--surface-2)] transition-all cursor-pointer"
    >
      {theme === "light" ? (
        <i className="ri-moon-clear-fill ri-lg" />
      ) : (
        <i className="ri-sun-fill ri-lg" />
      )}
    </button>
  );
}
