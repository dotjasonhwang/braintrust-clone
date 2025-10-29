/**
 * TypeScript type definitions for Braintrust clone
 */

/**
 * Project metadata
 */
export interface Project {
  id: string;
  name: string;
}

/**
 * Aggregated statistics for the Observability panel
 */
export interface ObservabilityStats {
  traces: number;
  llmCost: number;
  avgLatency: number;
  tokens: number;
  avgTTFT: number;
}

/**
 * Individual trace/log entry
 */
export interface LogEntry {
  id: string;
  name: string;
  timestamp: string;
  cost: number;
  latency: number;
  tokens: number;
  ttft: number;
}

/**
 * Complete project data structure loaded from JSON
 */
export interface ProjectData {
  project: Project;
  stats: ObservabilityStats;
  logs: LogEntry[];
}
