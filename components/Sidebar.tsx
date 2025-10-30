"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
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
  path: string;
}

const navItems: NavItem[] = [
  { name: "Overview", icon: Home, path: "/" },
  { name: "Logs", icon: Activity, path: "/logs" },
  { name: "Monitor", icon: BarChart3, path: "/monitor" },
  { name: "Review", icon: CheckCircle, path: "/review" },
  { name: "Playgrounds", icon: Gamepad2, path: "/playgrounds" },
  { name: "Experiments", icon: FlaskConical, path: "/experiments" },
  { name: "Datasets", icon: Folder, path: "/datasets" },
  { name: "Prompts", icon: MessageSquare, path: "/prompts" },
  { name: "Scorers", icon: Zap, path: "/scorers" },
  { name: "More", icon: MoreHorizontal, path: "/more" },
  { name: "Configuration", icon: Settings, path: "/configuration" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-48 px-2 bg-surface min-h-screen flex flex-col gap-0.5">
      {/* User Profile Section */}
      <div className="flex items-center gap-2 mt-1">
        <div className="flex flex-col">
          <button className="px-2 py-2 text-sm font-medium hover:bg-hover rounded">
            dotjasonhwang
          </button>
        </div>
      </div>

      {/* Project Selector */}
      <div className="mt-2 flex flex-col gap-0.5">
        <div className="px-2 text-muted text-xs">Project</div>
        <button className="py-2 px-2 w-full flex items-center gap-2 rounded text-sm font-medium hover:bg-hover transition-colors">
          My Project
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 py-2">
        <div className="space-y-0.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`
                w-full flex items-center gap-2 p-2 rounded text-xs font-medium
                transition-colors
                ${
                  isActive
                    ? "bg-surface-elevated text-foreground"
                    : "text-muted hover:bg-hover hover:text-foreground"
                }
              `}
              >
                <Icon size={16} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
