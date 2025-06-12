import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

export function useTheme() {
  const fallbackTheme: Theme = "dark";
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme") as Theme | null;
      return saved ?? fallbackTheme;
    }
    return fallbackTheme;
  });

  useEffect(() => {
    const body = document.body;
    if (theme === "dark") {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}
