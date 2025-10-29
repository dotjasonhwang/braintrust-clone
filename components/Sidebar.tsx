"use client";

/**
 * Sidebar navigation component
 * Displays user profile and main navigation menu
 */

interface NavItem {
  name: string;
  icon: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { name: "Overview", icon: "◉", active: true },
  { name: "Logs", icon: "📝" },
  { name: "Monitor", icon: "📊" },
  { name: "Review", icon: "✓" },
  { name: "Playgrounds", icon: "🎮" },
  { name: "Experiments", icon: "🧪" },
  { name: "Datasets", icon: "📁" },
  { name: "Prompts", icon: "💬" },
  { name: "Scorers", icon: "⚡" },
  { name: "More", icon: "⋯" },
  { name: "Configuration", icon: "⚙" },
];

export function Sidebar() {
  return (
    <aside className="w-48 bg-surface-highlighted border-r border-border-subtle min-h-screen flex flex-col">
      {/* User Profile Section */}
      <div className="p-4 border-b border-border-subtle">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary text-sm font-medium">
            d
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">
              dotjasonhwang
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 py-2">
        <div className="px-2 space-y-0.5">
          {navItems.map((item) => (
            <button
              key={item.name}
              className={`
                w-full flex items-center gap-2 px-3 py-2 rounded text-sm
                transition-colors
                ${
                  item.active
                    ? "bg-primary/10 text-foreground font-medium"
                    : "text-muted hover:bg-surface-elevated hover:text-foreground"
                }
              `}
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Project Selector at Bottom */}
      <div className="p-4 border-t border-border-subtle">
        <button className="w-full flex items-center gap-2 px-3 py-2 rounded text-sm text-muted hover:bg-surface-elevated hover:text-foreground transition-colors">
          <span className="text-base">▤</span>
          <span>Project</span>
        </button>
      </div>
    </aside>
  );
}
