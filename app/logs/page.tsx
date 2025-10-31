"use client";

import { Suspense, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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

function LogsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedLog, setSelectedLog] = useState<LogEntry | null>(null);

  // Check for ?id= param and pre-select log on mount or URL change
  useEffect(() => {
    const logId = searchParams.get("id");
    if (logId) {
      const log = projectData.logs.find((l) => l.id === logId);
      if (log) {
        setSelectedLog(log);
      }
    }
  }, [searchParams]);

  // Handle log click: update state AND URL
  const handleLogClick = (log: LogEntry) => {
    setSelectedLog(log);
    router.push(`/logs?id=${log.id}`, { scroll: false });
  };

  // Handle close: clear state AND URL
  const handleClose = () => {
    setSelectedLog(null);
    router.push("/logs", { scroll: false });
  };

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
            <div className="bg-surface rounded">
              <TimelineGraph />
            </div>
            <div className="mt-2 flex-1 overflow-auto">
              <LogsTable logs={projectData.logs} onLogClick={handleLogClick} />
            </div>
          </PageContainer>
        </Panel>

        {/* Resizable detail panel (conditional) */}
        {selectedLog && (
          <>
            <PanelResizeHandle className="w-1 bg-border-subtle hover:bg-primary transition-colors" />
            <Panel defaultSize={50} minSize={25} maxSize={60}>
              <LogDetailPanel log={selectedLog} onClose={handleClose} />
            </Panel>
          </>
        )}
      </PanelGroup>
    </div>
  );
}

export default function LogsPage() {
  return (
    <Suspense fallback={<div className="h-full w-full" />}>
      <LogsContent />
    </Suspense>
  );
}
