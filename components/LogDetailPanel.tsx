"use client";

import { useState } from "react";
import {
  X,
  Circle,
  ChevronDown,
  ChevronRight,
  Settings,
  ArrowUpRight,
  Download,
  Plus,
} from "lucide-react";
import type { LogEntry } from "@/types";

/**
 * Log detail panel component
 * Displays detailed information about a selected log entry
 */

interface LogDetailPanelProps {
  log: LogEntry;
  onClose: () => void;
}

export function LogDetailPanel({ log, onClose }: LogDetailPanelProps) {
  const [activeTab, setActiveTab] = useState<"trace" | "timeline" | "thread">(
    "trace"
  );
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    metrics: true,
    input: true,
    output: true,
    expected: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

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
    <div className="flex flex-col h-full bg-surface border-l border-border-subtle">
      {/* Header with trace ID and close button */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border-subtle">
        <div className="flex items-center gap-2">
          <Settings size={14} className="text-muted" />
          <span className="text-xs font-mono text-muted">{log.id}</span>
          <button className="text-muted hover:text-foreground">
            <ArrowUpRight size={14} />
          </button>
          <button className="text-muted hover:text-foreground">
            <Download size={14} />
          </button>
          <button className="text-muted hover:text-foreground">
            <Plus size={14} />
          </button>
        </div>
        <button
          onClick={onClose}
          className="text-muted hover:text-foreground hover:bg-surface-hover p-1 rounded"
        >
          <X size={16} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-4 px-4 py-2 border-b border-border-subtle">
        <button
          onClick={() => setActiveTab("trace")}
          className={`text-xs px-2 py-1 ${
            activeTab === "trace"
              ? "text-foreground border-b-2 border-blue-500"
              : "text-muted hover:text-foreground"
          }`}
        >
          Trace
        </button>
        <button
          onClick={() => setActiveTab("timeline")}
          className={`text-xs px-2 py-1 ${
            activeTab === "timeline"
              ? "text-foreground border-b-2 border-blue-500"
              : "text-muted hover:text-foreground"
          }`}
        >
          Timeline
        </button>
        <button
          onClick={() => setActiveTab("thread")}
          className={`text-xs px-2 py-1 ${
            activeTab === "thread"
              ? "text-foreground border-b-2 border-blue-500"
              : "text-muted hover:text-foreground"
          }`}
        >
          Thread
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === "trace" && (
          <div className="p-4 space-y-4">
            {/* Trace tree / Root span selector */}
            <div className="flex items-center gap-2 text-xs">
              <button className="text-blue-500 hover:text-blue-400">
                Trace tree
              </button>
              <span className="text-muted">Root span</span>
            </div>

            {/* Trace name and model */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-purple-600 flex items-center justify-center">
                  <Circle size={10} className="text-white fill-white" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground">
                    {log.name}
                  </h3>
                  <p className="text-xs text-muted">gemini-2.0-flash-001</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2 flex-wrap">
                <button className="text-xs px-2 py-1 bg-surface-elevated hover:bg-surface-hover rounded border border-border-subtle text-foreground flex items-center gap-1">
                  <Plus size={12} />
                  Dataset
                </button>
                <button className="text-xs px-2 py-1 bg-surface-elevated hover:bg-surface-hover rounded border border-border-subtle text-foreground">
                  ...
                </button>
                <button className="text-xs px-2 py-1 bg-surface-elevated hover:bg-surface-hover rounded border border-border-subtle text-foreground flex items-center gap-1">
                  <Plus size={12} />
                  Playground
                </button>
                <button className="text-xs px-2 py-1 bg-surface-elevated hover:bg-surface-hover rounded border border-border-subtle text-foreground flex items-center gap-1">
                  <ArrowUpRight size={12} />
                  Run
                </button>
                <button className="text-xs px-2 py-1 bg-surface-elevated hover:bg-surface-hover rounded border border-border-subtle text-foreground">
                  Flag for review
                </button>
              </div>
            </div>

            {/* Metrics Section */}
            <div className="border border-border-subtle rounded-lg">
              <button
                onClick={() => toggleSection("metrics")}
                className="w-full flex items-center justify-between px-3 py-2 text-xs text-foreground hover:bg-surface-hover"
              >
                <span className="text-muted">Metrics</span>
                {expandedSections.metrics ? (
                  <ChevronDown size={14} className="text-muted" />
                ) : (
                  <ChevronRight size={14} className="text-muted" />
                )}
              </button>
              {expandedSections.metrics && (
                <div className="px-3 pb-3 grid grid-cols-2 gap-x-4 gap-y-2">
                  <div>
                    <div className="text-xs text-muted">Start</div>
                    <div className="text-xs text-foreground">
                      {formatTimeAgo(log.timestamp)}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted">Duration</div>
                    <div className="text-xs text-foreground">{log.latency}s</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted">Total tokens</div>
                    <div className="text-xs text-foreground">{log.tokens}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted">Prompt tokens</div>
                    <div className="text-xs text-foreground">
                      {Math.floor(log.tokens * 0.4)}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted">Completion tokens</div>
                    <div className="text-xs text-foreground">
                      {Math.floor(log.tokens * 0.6)}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted">Estimated cost</div>
                    <div className="text-xs text-foreground">
                      ${log.cost.toFixed(3)}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Section */}
            <div className="border border-border-subtle rounded-lg">
              <button
                onClick={() => toggleSection("input")}
                className="w-full flex items-center justify-between px-3 py-2 text-xs text-foreground hover:bg-surface-hover"
              >
                <span className="text-muted">Input</span>
                {expandedSections.input ? (
                  <ChevronDown size={14} className="text-muted" />
                ) : (
                  <ChevronRight size={14} className="text-muted" />
                )}
              </button>
              {expandedSections.input && (
                <div className="px-3 pb-3 space-y-2">
                  <div className="text-xs text-muted">LLM</div>
                  <div className="bg-surface-elevated rounded p-2 space-y-2">
                    <div className="text-xs text-muted">User</div>
                    <div className="text-xs text-foreground">
                      What is the capital of France?
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Output Section */}
            <div className="border border-border-subtle rounded-lg">
              <button
                onClick={() => toggleSection("output")}
                className="w-full flex items-center justify-between px-3 py-2 text-xs text-foreground hover:bg-surface-hover"
              >
                <span className="text-muted">Output</span>
                {expandedSections.output ? (
                  <ChevronDown size={14} className="text-muted" />
                ) : (
                  <ChevronRight size={14} className="text-muted" />
                )}
              </button>
              {expandedSections.output && (
                <div className="px-3 pb-3 space-y-2">
                  <div className="text-xs text-muted">LLM</div>
                  <div className="bg-surface-elevated rounded p-2 space-y-2">
                    <div className="text-xs text-muted">Assistant</div>
                    <div className="text-xs text-foreground">
                      The capital of France is <strong>Paris</strong>.
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Expected Section */}
            <div className="border border-border-subtle rounded-lg">
              <button
                onClick={() => toggleSection("expected")}
                className="w-full flex items-center justify-between px-3 py-2 text-xs text-foreground hover:bg-surface-hover"
              >
                <span className="text-muted">Expected</span>
                {expandedSections.expected ? (
                  <ChevronDown size={14} className="text-muted" />
                ) : (
                  <ChevronRight size={14} className="text-muted" />
                )}
              </button>
              {expandedSections.expected && (
                <div className="px-3 pb-3">
                  <div className="text-xs text-muted">No expected output</div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "timeline" && (
          <div className="p-4">
            <p className="text-xs text-muted">Timeline view coming soon...</p>
          </div>
        )}

        {activeTab === "thread" && (
          <div className="p-4">
            <p className="text-xs text-muted">Thread view coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
}
