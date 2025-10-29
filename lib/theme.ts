/**
 * Theme management utilities
 * Handles light/dark mode switching and persistence
 */

export type Theme = "light" | "dark";

const STORAGE_KEY = "braintrust-theme";
const DEFAULT_THEME: Theme = "dark";

/**
 * Get the current theme from localStorage or return default
 */
export function getTheme(): Theme {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return DEFAULT_THEME;
}

/**
 * Set the theme and persist to localStorage
 */
export function setTheme(theme: Theme): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(STORAGE_KEY, theme);
  applyTheme(theme);
}

/**
 * Apply theme by toggling the 'dark' class on <html>
 */
export function applyTheme(theme: Theme): void {
  if (typeof window === "undefined") {
    return;
  }

  const root = document.documentElement;

  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

/**
 * Toggle between light and dark themes
 */
export function toggleTheme(): Theme {
  const current = getTheme();
  const next: Theme = current === "dark" ? "light" : "dark";
  setTheme(next);
  return next;
}

/**
 * Initialize theme on app load
 * Should be called in a useEffect or layout component
 */
export function initTheme(): void {
  const theme = getTheme();
  applyTheme(theme);
}
