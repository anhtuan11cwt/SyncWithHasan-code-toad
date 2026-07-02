import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "code-toad-theme";

export function useTheme() {
  const [mode, setModeState] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const toggle = useCallback(() => {
    setModeState((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const setMode = useCallback((next: "light" | "dark") => {
    setModeState(next);
  }, []);

  return { mode, setMode, toggle };
}
