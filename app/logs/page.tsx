"use client";

import { useState } from "react";
import { LogsToolbar } from "@/components/LogsToolbar";
import { LogsTimeline } from "@/components/LogsTimeline";
import { LogsTable } from "@/components/LogsTable";
import { LogDetailPanel } from "@/components/LogDetailPanel";
import projectData from "@/data/logs.json";
import type { LogEntry } from "@/types";

/**
 * Logs page
 * Displays detailed logs table with filtering and timeline visualization
 */

export default function LogsPage() {
  const [selectedLog, setSelectedLog] = useState<LogEntry | null>(null);

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* Left section: Toolbar + Timeline + Table */}
      <div className={`flex flex-col ${selectedLog ? "flex-1" : "w-full"} overflow-hidden`}>
        <LogsToolbar />
        <LogsTimeline />
        <div className="flex-1 overflow-auto">
          <LogsTable logs={projectData.logs} onLogClick={setSelectedLog} />
        </div>
      </div>

      {/* Right section: Detail panel (conditional) */}
      {selectedLog && (
        <div className="w-[500px] shrink-0">
          <LogDetailPanel
            log={selectedLog}
            onClose={() => setSelectedLog(null)}
          />
        </div>
      )}
    </div>
  );
}
