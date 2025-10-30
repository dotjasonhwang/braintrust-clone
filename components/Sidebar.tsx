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
  ChevronDown,
  ArrowUpRight,
  LayoutGrid,
  Square,
  Star,
  type LucideIcon,
} from "lucide-react";
import { showNotImplemented } from "@/lib/toast-utils";

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
    <div className="w-60 p-2 bg-surface h-screen flex flex-col gap-0.5 justify-between text-foreground">
      {/* Top section */}
      <div>
        {/* User Profile Section */}
        <div className="flex items-center justify-between">
          <button
            onClick={showNotImplemented}
            className="px-2 py-2 text-sm font-medium hover:bg-hover rounded flex items-center gap-1"
          >
            <span>dotjasonhwang</span>
            <ChevronDown size={14} className="text-muted" />
          </button>
          <div className="flex items-center gap-1">
            <button className="text-muted hover:bg-hover rounded-md p-2">
              <LayoutGrid size={16} />
            </button>
            <button className="text-muted hover:bg-hover rounded-md p-2">
              <Square size={16} />
            </button>
          </div>
        </div>

        {/* Project Selector */}
        <div className="mt-2 flex flex-col gap-0.5">
          <div className="px-2 text-muted text-xs">Project</div>
          <button className="py-2 px-2 w-full flex items-center justify-between rounded text-sm font-medium hover:bg-hover transition-colors">
            <span>My Project</span>
            <ChevronDown size={14} className="text-muted" />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 py-1">
          <div className="space-y-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;
              const isImplemented = item.path === "/" || item.path === "/logs";

              const className = `
                w-full flex items-center gap-2 p-1.5 rounded text-xs font-medium
                transition-colors
                ${
                  isActive
                    ? "bg-surface-elevated text-foreground"
                    : "text-muted hover:bg-hover hover:text-foreground"
                }
              `;

              if (isImplemented) {
                return (
                  <Link key={item.name} href={item.path} className={className}>
                    <Icon size={16} />
                    <span>{item.name}</span>
                  </Link>
                );
              }

              return (
                <button
                  key={item.name}
                  onClick={showNotImplemented}
                  className={className}
                >
                  <Icon size={16} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Bottom section */}
      <div>
        {/* Free Plan Usage Section */}
        <div className="border border-border-subtle p-2 rounded bg-surface-elevated space-y-1.5">
          {/* Free plan usage header */}
          <div className="flex items-center justify-between text-xs">
            <span>Free plan usage</span>
            <button
              onClick={showNotImplemented}
              className="text-xs text-foreground hover:text-white"
            >
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Logs usage */}

          <div className="flex items-center justify-between text-xs">
            <span className="text-muted">Logs</span>
            <span className="text-muted">0 of 1 GB</span>
          </div>

          {/* Scores/metrics usage */}

          <div className="flex items-center justify-between text-xs">
            <span className="text-muted">Scores/metrics</span>
            <span className="text-muted">0 of 10,000</span>
          </div>
        </div>
        {/* Reference */}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://dotjasonhwang.com"
          className="w-full flex items-center gap-2 p-1.5 text-sm text-foreground hover:bg-hover rounded"
        >
          <Star size={14} className="text-muted" />
          <span>dotjasonhwang.com</span>
        </Link>
      </div>
    </div>
  );
}
