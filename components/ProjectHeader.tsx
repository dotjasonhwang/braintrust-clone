"use client";

import { usePathname } from "next/navigation";
import {
  Settings2,
  PanelLeft,
  BookOpen,
  CircleQuestionMark,
  Search,
  Home,
  Activity,
  BarChart3,
  CheckCircle,
  Gamepad2,
  FlaskConical,
  Folder,
  MessageSquare,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { ProjectDropdown } from "./ProjectDropdown";
import { ThemeSwitcher } from "./ThemeSwitcher";
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
  onMenuClick?: () => void;
}

// Map routes to page titles and icons
const getPageTitle = (
  pathname: string
): { title: string; icon: LucideIcon } => {
  const routes: Record<string, { title: string; icon: LucideIcon }> = {
    "/": { title: "Project Overview", icon: Home },
    "/logs": { title: "Logs", icon: Activity },
    "/monitor": { title: "Monitor", icon: BarChart3 },
    "/review": { title: "Review", icon: CheckCircle },
    "/playgrounds": { title: "Playgrounds", icon: Gamepad2 },
    "/experiments": { title: "Experiments", icon: FlaskConical },
    "/datasets": { title: "Datasets", icon: Folder },
    "/prompts": { title: "Prompts", icon: MessageSquare },
    "/scorers": { title: "Scorers", icon: Zap },
    "/configuration": { title: "Configuration", icon: Settings2 },
  };

  return routes[pathname] || { title: "Project", icon: Home };
};

export function ProjectHeader({ project, onMenuClick }: ProjectHeaderProps) {
  const pathname = usePathname();
  const { title: pageTitle, icon: PageIcon } = getPageTitle(pathname);

  const handleCopyId = () => {
    navigator.clipboard.writeText(project.id);
  };

  return (
    <TooltipProvider>
      <header className="bg-surface px-3 py-3">
        <div className="flex items-center justify-between">
          {/* Left: Mobile menu + Project name */}
          <div className="flex items-center gap-2">
            {/* Mobile menu button - only visible on < md screens */}
            <button
              onClick={onMenuClick}
              className="md:hidden p-2 text-muted hover:bg-hover rounded-md transition-colors"
            >
              <PanelLeft size={20} />
            </button>
            <h1 className="text-sm text-muted font-semibold">My Project</h1>
          </div>

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
            <ThemeSwitcher />
          </div>
        </div>

        <div className="mt-4 flex gap-2 items-center justify-between overflow-x-auto whitespace-nowrap">
          {/* Left: Page title */}
          <div className="flex gap-2">
            <h1 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <PageIcon size={16} />
              {pageTitle}
            </h1>
            <ProjectDropdown />
          </div>
          {/* Right: Project ID and actions */}
          <div className="flex items-center gap-4">
            {/* Project ID */}

            <Tooltip delayDuration={200}>
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
    </TooltipProvider>
  );
}
