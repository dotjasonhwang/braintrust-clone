"use client";

import {
  BarChart3,
  MessageSquareText,
  Upload,
  FlaskConical,
} from "lucide-react";
import { showNotImplemented } from "@/lib/toast-utils";

/**
 * Evaluation card component
 * Shows getting started section with action buttons
 */

export function EvaluationCard() {
  return (
    <div className="bg-surface border border-border-subtle rounded-lg p-4 min-h-100 flex flex-col justify-between">
      {/* Header */}
      <div>
        <h2 className="text-md font-semibold text-foreground">Evaluation</h2>
        <p className="mt-1 text-sm text-muted">
          Measure and iterate on performance
        </p>
      </div>

      <div>
        {/* Get started section */}
        <div className="flex flex-col items-start">
          {/* Icon with gradient background */}
          <div className="w-8 h-8 rounded-sm bg-primary from-primary to-accent flex items-center justify-center">
            <BarChart3 size={20} className="text-foreground" />
          </div>

          {/* Title and description */}
          <h3 className="text-sm font-semibold text-foreground mt-2">
            Get started with evals
          </h3>
          <p className="text-sm text-muted max-w-md mt-1">
            Add your prompt or dataset, or create an experiment to get started.
          </p>

          {/* Action buttons */}
          <div className="mt-4 flex flex-col gap-2 w-full max-w-md">
            <button
              onClick={showNotImplemented}
              className="w-full px-4 py-1 text-sm text-foreground bg-background hover:bg-hover border border-border-subtle rounded transition-colors flex justify-start items-center gap-2"
            >
              <MessageSquareText size={14} />
              <span>Add your prompt</span>
            </button>

            <button
              onClick={showNotImplemented}
              className="w-full px-4 py-1 text-sm text-foreground bg-background hover:bg-hover border border-border-subtle rounded transition-colors flex justify-start items-center gap-2"
            >
              <Upload size={14} />
              <span>Upload data</span>
            </button>

            <button
              onClick={showNotImplemented}
              className="w-full px-4 py-1 text-sm text-foreground bg-background hover:bg-hover border border-border-subtle rounded transition-colors flex justify-start items-center gap-2"
            >
              <FlaskConical size={14} />
              <span>Create experiment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
