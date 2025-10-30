"use client";

import { Play } from "lucide-react";
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
      className="w-full flex items-center justify-between px-4 py-2 hover:bg-surface-hover transition-colors text-left border-b border-border-subtle last:border-b-0"
    >
      <div className="flex items-center gap-2">
        <Play size={12} className="text-muted fill-muted" />
        <span className="text-xs text-foreground font-mono">{log.name}</span>
      </div>
      <span className="text-xs text-muted">{formatTimeAgo(log.timestamp)}</span>
    </button>
  );
}
