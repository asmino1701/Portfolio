import { useCallback, useEffect, useState } from "react";

function readTheme() {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export default function useTheme() {
  const [theme, setThemeState] = useState(readTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Storage can be unavailable (private mode); the theme still applies for this visit.
    }
  }, [theme]);

  const setTheme = useCallback((next) => setThemeState(next === "light" ? "light" : "dark"), []);

  return [theme, setTheme];
}
