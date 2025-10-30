"use client";

import { useRouter } from "next/navigation";
import { PageContainer } from "@/components/PageContainer";
import { ObservabilityCard } from "@/components/ObservabilityCard";
import { EvaluationCard } from "@/components/EvaluationCard";
import projectData from "@/data/logs.json";
import type { LogEntry } from "@/types";

export default function Home() {
  const router = useRouter();

  const handleLogClick = (log: LogEntry) => {
    router.push(`/log/${log.id}`);
  };

  return (
    <PageContainer>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left: Observability section */}
        <ObservabilityCard
          stats={projectData.stats}
          logs={projectData.logs}
          onLogClick={handleLogClick}
        />

        {/* Right: Evaluation section */}
        <EvaluationCard />
      </div>
    </PageContainer>
  );
}
