"use client";

import { usePathname } from "next/navigation";
import {
  Settings2,
  Sparkles,
  BookOpen,
  CircleQuestionMark,
  Search,
  User,
} from "lucide-react";
import { ProjectDropdown } from "./ProjectDropdown";
import type { Project } from "@/types";
import { showNotImplemented } from "@/lib/toast-utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
          {/* Left: Project name */}
          <h1 className="text-sm text-muted font-semibold">My Project</h1>

          {/* Right: Project ID */}
          <div className="flex items-center gap-1">
            {/* Upgrade button */}
            <button
              onClick={showNotImplemented}
              className="p-2 text-xs text-secondary hover:bg-hover rounded-md hover:text-foreground transition-colors font-medium"
            >
              Upgrade
            </button>

            <button
              onClick={showNotImplemented}
              className="text-muted hover:bg-hover rounded-md p-2"
            >
              <BookOpen size={16} />
            </button>
            <button
              onClick={showNotImplemented}
              className="text-muted hover:bg-hover rounded-md p-2"
            >
              <CircleQuestionMark size={16} />
            </button>
            <button
              onClick={showNotImplemented}
              className="text-muted hover:bg-hover rounded-md p-2"
            >
              <Search size={16} />
            </button>
            <button
              onClick={showNotImplemented}
              className="rounded-full p-0.5 bg-secondary border-2 border-transparent hover:border-muted transition-colors"
            >
              <User size={16} className="text-white" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          {/* Left: Page title */}
          <div className="flex mt-4 gap-2">
            <h1 className="text-sm font-semibold text-foreground">
              {pageTitle}
            </h1>
            <ProjectDropdown />
          </div>
          {/* Right: Project ID and actions */}
          <div className="flex items-center gap-4">
            {/* Project ID */}

            <Tooltip delayDuration={500}>
              <TooltipTrigger asChild>
                <button
                  onClick={handleCopyId}
                  className="text-xs text-muted font-mono transition-colors hover:bg-hover p-1.5 border border-border-subtle rounded flex items-center gap-1"
                >
                  <span className="text-xs text-placeholder font-mono">
                    PROJECT ID
                  </span>
                  {project.id}
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy project ID to clipboard</p>
              </TooltipContent>
            </Tooltip>

            {/* Configure project button */}
            <button
              onClick={showNotImplemented}
              className="p-1.5 text-xs text-foreground hover:bg-hover border border-border-subtle rounded transition-colors flex items-center gap-1"
            >
              <Settings2 size={14} />
              Configure project
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
