"use client";

import { StatCard } from "./StatCard";
import { TimelineGraph } from "./TimelineGraph";
import { LogEntry } from "./LogEntry";
import type { ObservabilityStats, LogEntry as LogEntryType } from "@/types";

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
    <div className="bg-surface-highlighted border border-border-subtle rounded-lg overflow-hidden">
      {/* Header with tabs */}
      <div className="border-b border-border-subtle px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">
            Observability
          </h2>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm text-muted hover:text-foreground border border-border-subtle rounded transition-colors">
              📊 Monitor
            </button>
            <button className="px-3 py-1 text-sm bg-primary/10 text-primary border border-primary/20 rounded font-medium">
              📝 Logs
            </button>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-sm text-muted">Logs in the last 7 days</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-5 gap-6 px-6 py-4 border-b border-border-subtle">
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
