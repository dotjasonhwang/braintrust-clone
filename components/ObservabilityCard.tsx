"use client";

import { BarChart3, FileText } from "lucide-react";
import { StatCard } from "./StatCard";
import { TimelineGraph } from "./TimelineGraph";
import { LogEntry } from "./LogEntry";
import Link from "next/link";
import type { ObservabilityStats, LogEntry as LogEntryType } from "@/types";
import { showNotImplemented } from "@/lib/toast-utils";

/**
 * Observability card component
 * Main panel showing stats, timeline, and log entries
 */

interface ObservabilityCardProps {
  stats: ObservabilityStats;
  logs: LogEntryType[];
  onLogClick?: (log: LogEntryType) => void;
}

export function ObservabilityCard({
  stats,
  logs,
  onLogClick,
}: ObservabilityCardProps) {
  return (
    <div className="p-4 bg-surface border border-border-subtle rounded-lg overflow-hidden min-h-100">
      {/* Header with tabs */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-md font-semibold text-foreground">
            Observability
          </h2>
          <div className="flex gap-2">
            <Link
              onClick={showNotImplemented}
              href="/"
              className="px-1.5 py-1.5 text-xs text-muted hover:bg-surface-hover border border-border-subtle rounded transition-colors flex items-center gap-2"
            >
              <BarChart3 size={14} />
              Monitor
            </Link>
            <Link
              href="/logs"
              className="px-1.5 py-1.5 text-xs text-muted hover:bg-surface-hover border border-border-subtle rounded transition-colors flex items-center gap-2"
            >
              <FileText size={14} />
              Logs
            </Link>
          </div>
        </div>

        {/* Subtitle */}
        <p className="mt-1 text-sm text-muted">Logs in the last 7 days</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-5 gap-6 my-4">
        <StatCard label="Traces" value={stats.traces} />
        <StatCard label="LLM cost" value={`<$${stats.llmCost.toFixed(3)}`} />
        <StatCard label="Avg. latency" value={`${stats.avgLatency}s`} />
        <StatCard label="Tokens" value={stats.tokens} />
        <StatCard label="Avg. TTFT" value={`${stats.avgTTFT}s`} />
      </div>

      {/* Timeline graph */}
      <TimelineGraph />

      {/* Log entries */}
      <div className="border-t border-border-subtle">
        {logs.map((log) => (
          <LogEntry key={log.id} log={log} onClick={onLogClick} />
        ))}
      </div>
    </div>
  );
}
