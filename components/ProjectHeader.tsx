"use client";

import { usePathname } from "next/navigation";
import { Settings, Sparkles } from "lucide-react";
import { ProjectDropdown } from "./ProjectDropdown";
import type { Project } from "@/types";

/**
 * Project header component
 * Displays project name, ID, and action buttons
 */

interface ProjectHeaderProps {
  project: Project;
}

// Map routes to page titles
const getPageTitle = (pathname: string): string => {
  const routes: Record<string, string> = {
    "/": "Project Overview",
    "/logs": "Logs",
    "/monitor": "Monitor",
    "/review": "Review",
    "/playgrounds": "Playgrounds",
    "/experiments": "Experiments",
    "/datasets": "Datasets",
    "/prompts": "Prompts",
    "/scorers": "Scorers",
    "/configuration": "Configuration",
  };

  return routes[pathname] || "Project";
};

export function ProjectHeader({ project }: ProjectHeaderProps) {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);

  const handleCopyId = () => {
    navigator.clipboard.writeText(project.id);
  };

  return (
    <>
      <header className="bg-surface px-2 py-3">
        <div className="flex items-center justify-between">
          {/* Left side: Project name and menu */}
          <h1 className="text-sm font-semibold text-foreground">My Project</h1>

          {/* Right side: Project ID and actions */}
          <div className="flex items-center gap-4">
            {/* Project ID */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted font-mono">PROJECT ID</span>
              <button
                onClick={handleCopyId}
                className="text-xs text-muted hover:text-foreground font-mono transition-colors"
                title="Click to copy"
              >
                {project.id}
              </button>
            </div>

            {/* Configure project button */}
            <button className="px-4 py-1.5 text-xs text-foreground hover:bg-surface border border-border-subtle rounded transition-colors flex items-center gap-2">
              <Settings size={14} />
              Configure project
            </button>

            {/* Upgrade button */}
            <button className="px-4 py-1.5 text-xs bg-primary text-on-primary hover:bg-primary-bold rounded transition-colors font-medium flex items-center gap-2">
              <Sparkles size={14} />
              Upgrade
            </button>
          </div>
        </div>

        {/* Page title */}
        <div className="flex mt-4 gap-2">
          <h1 className="text-sm font-semibold text-foreground">{pageTitle}</h1>
          <ProjectDropdown />
        </div>
      </header>
    </>
  );
}
