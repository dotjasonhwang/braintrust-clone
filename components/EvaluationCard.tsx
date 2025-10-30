import {
  BarChart3,
  MessageSquareText,
  Upload,
  FlaskConical,
} from "lucide-react";

/**
 * Evaluation card component
 * Shows getting started section with action buttons
 */

export function EvaluationCard() {
  return (
    <div className="bg-surface border border-border-subtle rounded-lg p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-foreground mb-1">
          Evaluation
        </h2>
        <p className="text-xs text-muted">Measure and iterate on performance</p>
      </div>

      {/* Get started section */}
      <div className="flex flex-col items-start py-8">
        {/* Icon with gradient background */}
        <div className="w-8 h-8 rounded-lg bg-accent from-primary to-accent flex items-center justify-center">
          <BarChart3 size={20} className="text-white" />
        </div>

        {/* Title and description */}
        <h3 className="text-sm font-semibold text-foreground mt-2">
          Get started with evals
        </h3>
        <p className="text-sm text-muted max-w-sm mt-1">
          Add your prompt or dataset, or create an experiment to get started.
        </p>

        {/* Action buttons */}
        <div className="mt-2 flex flex-col gap-2 w-full max-w-xs">
          <button className="w-full px-4 py-1 text-sm text-foreground bg-background hover:bg-surface-hover border border-border-subtle rounded transition-colors flex justify-start items-center gap-2">
            <MessageSquareText size={14} />
            <span>Add your prompt</span>
          </button>
          <button className="w-full px-4 py-1 text-sm text-foreground bg-background hover:bg-surface-hover border border-border-subtle rounded transition-colors flex justify-start items-center gap-2">
            <Upload size={14} />
            <span>Upload data</span>
          </button>
          <button className="w-full px-4 py-1 text-sm text-foreground bg-background hover:bg-surface-hover border border-border-subtle rounded transition-colors flex justify-start items-center gap-2">
            <FlaskConical size={14} />
            <span>Create experiment</span>
          </button>
        </div>
      </div>
    </div>
  );
}
