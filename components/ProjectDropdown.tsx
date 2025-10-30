"use client";

import { useState, useRef, useEffect } from "react";
import { MoreHorizontal, Edit2, Copy, Lock, Trash2 } from "lucide-react";

/**
 * Project dropdown menu component
 * Displays menu options for project actions
 */

export function ProjectDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const menuItems = [
    { icon: Edit2, label: "Rename project" },
    { icon: Copy, label: "Copy project ID" },
    { icon: Lock, label: "Permissions" },
    { icon: Trash2, label: "Delete project" },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-full text-muted hover:bg-surface-hover px-1 rounded"
      >
        <MoreHorizontal size={16} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-40 bg-background border border-border-subtle rounded-lg shadow-lg py-1 px-1 z-50">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className="w-full px-3 py-2 text-xs text-foreground hover:bg-surface-hover rounded flex items-center gap-2 text-left"
                onClick={() => setIsOpen(false)}
              >
                <Icon size={14} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
