import { useSyncExternalStore } from "react";

/**
 * Tiny global theme store — several components (nav toggle, command palette)
 * read and write the theme, so state lives on <html data-theme> itself and
 * every subscriber re-renders on change.
 */
type Theme = "dark" | "light";

const listeners = new Set<() => void>();

function readTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

export function setTheme(next: Theme) {
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", next === "light" ? "#f7f8fd" : "#050810");
  listeners.forEach((l) => l());
}

export function toggleTheme() {
  setTheme(readTheme() === "dark" ? "light" : "dark");
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, readTheme);
  return { theme, toggleTheme };
}
