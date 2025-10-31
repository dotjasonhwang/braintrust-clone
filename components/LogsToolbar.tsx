"use client";

import {
  ChevronDown,
  Filter,
  Columns3,
  Group,
  Download,
  Search,
} from "lucide-react";

/**
 * Logs toolbar component
 * Displays view controls, filters, and search for the logs page
 */

export function LogsToolbar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
      {/* Left side controls */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Default view dropdown */}
        <button className="px-3 py-1.5 text-xs bg-surface border border-border-subtle rounded flex items-center gap-2 hover:bg-surface-elevated transition-colors">
          <span className="text-foreground">Default view</span>
          <ChevronDown size={14} className="text-muted" />
        </button>

        {/* Traces dropdown */}
        <button className="px-3 py-1.5 text-xs bg-surface border border-border-subtle rounded flex items-center gap-2 hover:bg-surface-elevated transition-colors">
          <span className="text-foreground">Traces</span>
          <ChevronDown size={14} className="text-muted" />
        </button>

        {/* Height button */}
        <button className="px-3 py-1.5 text-xs bg-surface border border-border-subtle rounded flex items-center gap-2 hover:bg-surface-elevated transition-colors">
          <span className="text-foreground">Height</span>
        </button>

        {/* Filter button */}
        <button className="px-3 py-1.5 text-xs bg-surface border border-border-subtle rounded flex items-center gap-2 hover:bg-surface-elevated transition-colors">
          <Filter size={14} className="text-muted" />
          <span className="text-foreground">Filter</span>
        </button>

        {/* Columns button */}
        <button className="px-3 py-1.5 text-xs bg-surface border border-border-subtle rounded flex items-center gap-2 hover:bg-surface-elevated transition-colors">
          <Columns3 size={14} className="text-muted" />
          <span className="text-foreground">Columns</span>
        </button>

        {/* Group button */}
        <button className="px-3 py-1.5 text-xs bg-surface border border-border-subtle rounded flex items-center gap-2 hover:bg-surface-elevated transition-colors">
          <Group size={14} className="text-muted" />
          <span className="text-foreground">Group</span>
        </button>

        {/* Download button */}
        <button className="px-2 py-1.5 text-xs bg-surface border border-border-subtle rounded flex items-center hover:bg-surface-elevated transition-colors">
          <Download size={14} className="text-muted" />
        </button>
      </div>

      {/* Right side controls */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Search input */}
        <div className="relative">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            type="text"
            placeholder="Search traces"
            className="pl-8 pr-3 py-1.5 text-xs bg-surface border border-border-subtle rounded text-foreground placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-ring w-48"
          />
        </div>

        {/* Time range selector */}
        <div className="flex items-center gap-1 px-3 py-1.5 bg-surface border border-border-subtle rounded">
          <button className="px-2 py-0.5 text-xs bg-surface-elevated text-foreground rounded">
            3d
          </button>
          <span className="text-xs text-muted">Past 3 days</span>
        </div>
      </div>
    </div>
  );
}
