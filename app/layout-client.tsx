"use client";

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { ProjectHeader } from "@/components/ProjectHeader";
import projectData from "@/data/logs.json";

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen md:h-screen bg-background md:overflow-hidden">
      {/* Sidebar - hidden from layout on mobile, participates in flex on desktop */}
      <div className="w-0 md:w-auto">
        <Sidebar
          isMobileOpen={isMobileOpen}
          setIsMobileOpen={setIsMobileOpen}
        />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Project header */}
        <ProjectHeader
          project={projectData.project}
          onMenuClick={() => setIsMobileOpen(true)}
        />

        {/* Page content */}
        <div className="flex-1 bg-background border-t md:border-l md:rounded-tl-md border-border-subtle overflow-x-hidden overflow-y-auto">
          <main className="m-3 h-full">{children}</main>
        </div>
      </div>
    </div>
  );
}
