"use client";

import {
  Home,
  Activity,
  BarChart3,
  CheckCircle,
  Gamepad2,
  FlaskConical,
  Folder,
  MessageSquare,
  Zap,
  MoreHorizontal,
  Settings,
  type LucideIcon,
} from "lucide-react";

/**
 * Sidebar navigation component
 * Displays user profile and main navigation menu
 */

interface NavItem {
  name: string;
  icon: LucideIcon;
  active?: boolean;
}

const navItems: NavItem[] = [
  { name: "Overview", icon: Home, active: true },
  { name: "Logs", icon: Activity },
  { name: "Monitor", icon: BarChart3 },
  { name: "Review", icon: CheckCircle },
  { name: "Playgrounds", icon: Gamepad2 },
  { name: "Experiments", icon: FlaskConical },
  { name: "Datasets", icon: Folder },
  { name: "Prompts", icon: MessageSquare },
  { name: "Scorers", icon: Zap },
  { name: "More", icon: MoreHorizontal },
  { name: "Configuration", icon: Settings },
];

export function Sidebar() {
  return (
    <div className="w-48 px-2 bg-surface border-r border-border-subtle min-h-screen flex flex-col gap-0.5">
      {/* User Profile Section */}
      <div className="flex items-center gap-2">
        <div className="flex flex-col">
          <button className="px-2 py-2 text-xs font-medium text-foreground">
            dotjasonhwang
          </button>
        </div>
      </div>

      {/* Project Selector */}
      <div className="mt-2 flex flex-col gap-0.5">
        <div className="px-2 text-muted text-xs">Project</div>
        <button className="py-2 px-2 w-full flex items-center gap-2 rounded text-xs text-muted hover:bg-surface-elevated transition-colors">
          My Project
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 py-2">
        <div className="space-y-0.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                className={`
                w-full flex items-center gap-2 p-2 rounded text-xs
                transition-colors
                ${
                  item.active
                    ? "bg-surface-elevated text-foreground"
                    : "text-muted hover:bg-surface-hover hover:text-foreground"
                }
              `}
              >
                <Icon size={16} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
