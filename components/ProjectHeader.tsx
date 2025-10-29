"use client";

import type { Project } from "@/types";

/**
 * Project header component
 * Displays project name, ID, and action buttons
 */

interface ProjectHeaderProps {
  project: Project;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  const handleCopyId = () => {
    navigator.clipboard.writeText(project.id);
  };

  return (
    <header className="border-b border-border-subtle bg-surface px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Left side: Project name and menu */}
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-semibold text-foreground">
            Project overview
          </h1>
          <button className="text-muted hover:text-foreground px-1">
            ⋯
          </button>
        </div>

        {/* Right side: Project ID and actions */}
        <div className="flex items-center gap-4">
          {/* Project ID */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted font-mono">
              PROJECT ID
            </span>
            <button
              onClick={handleCopyId}
              className="text-xs text-muted hover:text-foreground font-mono transition-colors"
              title="Click to copy"
            >
              {project.id}
            </button>
          </div>

          {/* Configure project button */}
          <button className="px-4 py-1.5 text-sm text-foreground hover:bg-surface-elevated border border-border-subtle rounded transition-colors">
            ⚙ Configure project
          </button>

          {/* Upgrade button */}
          <button className="px-4 py-1.5 text-sm bg-primary text-on-primary hover:bg-primary-bold rounded transition-colors font-medium">
            Upgrade
          </button>
        </div>
      </div>
    </header>
  );
}
