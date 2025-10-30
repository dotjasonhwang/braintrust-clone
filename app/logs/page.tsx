"use client";

import { useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { PageContainer } from "@/components/PageContainer";
import { LogsToolbar } from "@/components/LogsToolbar";
import { TimelineGraph } from "@/components/TimelineGraph";
import { LogsTable } from "@/components/LogsTable";
import { LogDetailPanel } from "@/components/LogDetailPanel";
import projectData from "@/data/logs.json";
import type { LogEntry } from "@/types";

/**
 * Logs page
 * Displays detailed logs table with filtering and timeline visualization
 * Uses resizable panels for detail view
 */

export default function LogsPage() {
  const [selectedLog, setSelectedLog] = useState<LogEntry | null>(null);

  return (
    <div className="h-full w-full">
      <PanelGroup direction="horizontal">
        {/* Main content panel */}
        <Panel
          defaultSize={100}
          minSize={50}
          className={selectedLog ? "pr-3" : ""}
        >
          <PageContainer>
            <LogsToolbar />
            <TimelineGraph />
            <div className="mt-2 flex-1 overflow-auto">
              <LogsTable logs={projectData.logs} onLogClick={setSelectedLog} />
            </div>
          </PageContainer>
        </Panel>

        {/* Resizable detail panel (conditional) */}
        {selectedLog && (
          <>
            <PanelResizeHandle className="w-1 bg-border-subtle hover:bg-primary transition-colors" />
            <Panel defaultSize={50} minSize={25} maxSize={60}>
              <LogDetailPanel
                log={selectedLog}
                onClose={() => setSelectedLog(null)}
              />
            </Panel>
          </>
        )}
      </PanelGroup>
    </div>
  );
}
