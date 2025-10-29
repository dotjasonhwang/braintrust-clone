"use client";

import type { LogEntry as LogEntryType } from "@/types";

/**
 * Log entry row component
 * Displays a single trace with name and timestamp
 */

interface LogEntryProps {
  log: LogEntryType;
  onClick?: (log: LogEntryType) => void;
}

function formatTimeAgo(timestamp: string): string {
  const now = new Date();
  const logTime = new Date(timestamp);
  const diffMs = now.getTime() - logTime.getTime();
  const diffMins = Math.floor(diffMs / 60000);

  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffMins < 1440) return `${Math.floor(diffMins / 60)}h ago`;
  return `${Math.floor(diffMins / 1440)}d ago`;
}

export function LogEntry({ log, onClick }: LogEntryProps) {
  return (
    <button
      onClick={() => onClick?.(log)}
      className="w-full flex items-center justify-between px-4 py-2 hover:bg-surface-elevated transition-colors text-left border-b border-border-subtle last:border-b-0"
    >
      <div className="flex items-center gap-2">
        <span className="text-muted">▶</span>
        <span className="text-sm text-foreground font-mono">{log.name}</span>
      </div>
      <span className="text-xs text-muted">{formatTimeAgo(log.timestamp)}</span>
    </button>
  );
}
