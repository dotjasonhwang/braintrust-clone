import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { ProjectHeader } from "./ProjectHeader";
import type { Project } from "@/types";

/**
 * Main layout wrapper component
 * Combines sidebar, header, and content area
 */

interface ProjectLayoutProps {
  project: Project;
  children: ReactNode;
}

export function ProjectLayout({ project, children }: ProjectLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Project header */}
        <ProjectHeader project={project} />

        {/* Page content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
