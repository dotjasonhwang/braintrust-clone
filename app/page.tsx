"use client";

import { ProjectLayout } from "@/components/ProjectLayout";
import { ObservabilityCard } from "@/components/ObservabilityCard";
import { EvaluationCard } from "@/components/EvaluationCard";
import projectData from "@/data/logs.json";
import type { LogEntry } from "@/types";

export default function Home() {
  const handleLogClick = (log: LogEntry) => {
    console.log("Log clicked:", log);
  };

  return (
    <ProjectLayout project={projectData.project}>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
        {/* Left: Observability section */}
        <ObservabilityCard
          stats={projectData.stats}
          logs={projectData.logs}
          onLogClick={handleLogClick}
        />

        {/* Right: Evaluation section */}
        <EvaluationCard />
      </div>
    </ProjectLayout>
  );
}
