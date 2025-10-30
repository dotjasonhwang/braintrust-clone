"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { User, Sun, Moon, Check } from "lucide-react";

/**
 * ThemeSwitcher component
 * User button with dropdown menu for theme selection
 */

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full p-0.5 bg-secondary border-2 border-transparent hover:border-muted transition-colors"
      >
        <User size={16} className="text-white" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-surface border border-border-subtle z-50">
          <div className="py-1">
            <button
              onClick={() => handleThemeChange("light")}
              className="w-full flex items-center justify-between px-4 py-2 text-sm text-foreground hover:bg-hover transition-colors"
            >
              <div className="flex items-center gap-2">
                <Sun size={16} />
                <span>Light</span>
              </div>
              {theme === "light" && (
                <Check size={16} className="text-foreground" />
              )}
            </button>
            <button
              onClick={() => handleThemeChange("dark")}
              className="w-full flex items-center justify-between px-4 py-2 text-sm text-foreground hover:bg-hover transition-colors"
            >
              <div className="flex items-center gap-2">
                <Moon size={16} />
                <span>Dark</span>
              </div>
              {theme === "dark" && (
                <Check size={16} className="text-foreground" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
