"use client";

import { Circle } from "lucide-react";
import type { LogEntry } from "@/types";

/**
 * Logs table component
 * Displays all log entries in a detailed table format
 */

interface LogsTableProps {
  logs: LogEntry[];
  onLogClick?: (log: LogEntry) => void;
}

export function LogsTable({ logs, onLogClick }: LogsTableProps) {
  // Calculate summary stats
  const totalTraces = logs.length;
  const avgDuration = logs.length > 0
    ? logs.reduce((acc, log) => acc + log.latency, 0) / logs.length
    : 0;
  const totalLLMCalls = logs.reduce((acc, log) => acc + (log.tokens > 0 ? 1 : 0), 0);

  // Format timestamp to relative time
  const formatTimeAgo = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);

    if (diffHours > 0) return `${diffHours}h ago`;
    if (diffMins > 0) return `${diffMins}m ago`;
    return "Just now";
  };

  return (
    <div className="bg-surface border border-border-subtle rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border-subtle">
              <th className="text-left px-4 py-3 text-muted font-normal">
                <div className="flex items-center gap-1">
                  <input type="checkbox" className="w-3 h-3" />
                  <span>Created</span>
                </div>
                <div className="text-muted font-mono mt-1">{totalTraces} trace</div>
              </th>
              <th className="text-left px-4 py-3 text-muted font-normal">
                <div className="flex items-center gap-1">
                  <span>Name</span>
                </div>
              </th>
              <th className="text-left px-4 py-3 text-muted font-normal">
                <div className="flex items-center gap-1">
                  <span>Input</span>
                </div>
              </th>
              <th className="text-left px-4 py-3 text-muted font-normal">
                <div className="flex items-center gap-1">
                  <span>Output</span>
                </div>
              </th>
              <th className="text-left px-4 py-3 text-muted font-normal">
                <div className="flex items-center gap-1">
                  <span>Expected</span>
                </div>
              </th>
              <th className="text-left px-4 py-3 text-muted font-normal">
                <div className="flex items-center gap-1">
                  <span>Tags</span>
                </div>
              </th>
              <th className="text-left px-4 py-3 text-muted font-normal">
                <div className="flex items-center gap-1">
                  <span>Duration</span>
                </div>
                <div className="text-muted font-mono mt-1">{avgDuration.toFixed(3)}s p50</div>
              </th>
              <th className="text-left px-4 py-3 text-muted font-normal">
                <div className="flex items-center gap-1">
                  <span>LLM duration</span>
                </div>
              </th>
              <th className="text-left px-4 py-3 text-muted font-normal">
                <div className="flex items-center gap-1">
                  <span>Time to first token</span>
                </div>
              </th>
              <th className="text-left px-4 py-3 text-muted font-normal">
                <div className="flex items-center gap-1">
                  <span>LLM calls</span>
                </div>
                <div className="text-muted font-mono mt-1">{totalLLMCalls} SUM</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr
                key={log.id}
                onClick={() => onLogClick?.(log)}
                className="border-b border-border-subtle last:border-b-0 hover:bg-surface-elevated transition-colors cursor-pointer"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-3 h-3" />
                    <span className="text-foreground">{index + 1}</span>
                    <span className="text-muted">{formatTimeAgo(log.timestamp)}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-purple-600 flex items-center justify-center">
                      <Circle size={8} className="text-white fill-white" />
                    </div>
                    <span className="text-foreground font-mono">{log.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="text-muted font-mono truncate max-w-xs block">
                    {`{"config":{"m...`}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-muted font-mono truncate max-w-xs block">
                    {`{"candidates"...`}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-muted">-</span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-muted">-</span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-foreground">{log.latency}s</span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-foreground">{log.latency}s</span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-muted">-</span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-foreground">{log.tokens > 0 ? 1 : 0}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
