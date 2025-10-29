/**
 * Evaluation card component
 * Shows getting started section with action buttons
 */

export function EvaluationCard() {
  return (
    <div className="bg-surface-highlighted border border-border-subtle rounded-lg p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-1">
          Evaluation
        </h2>
        <p className="text-sm text-muted">
          Measure and iterate on performance
        </p>
      </div>

      {/* Get started section */}
      <div className="flex flex-col items-center text-center py-8">
        {/* Icon with gradient background */}
        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
          <span className="text-3xl">📊</span>
        </div>

        {/* Title and description */}
        <h3 className="text-base font-semibold text-foreground mb-2">
          Get started with evals
        </h3>
        <p className="text-sm text-muted max-w-sm mb-6">
          Add your prompt or dataset, or create an experiment to get started.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col gap-2 w-full max-w-xs">
          <button className="w-full px-4 py-2 text-sm text-foreground bg-surface-elevated hover:bg-surface border border-border-subtle rounded transition-colors flex items-center justify-center gap-2">
            <span>💭</span>
            <span>Add your prompt</span>
          </button>
          <button className="w-full px-4 py-2 text-sm text-foreground bg-surface-elevated hover:bg-surface border border-border-subtle rounded transition-colors flex items-center justify-center gap-2">
            <span>📁</span>
            <span>Upload data</span>
          </button>
          <button className="w-full px-4 py-2 text-sm text-foreground bg-surface-elevated hover:bg-surface border border-border-subtle rounded transition-colors flex items-center justify-center gap-2">
            <span>🧪</span>
            <span>Create experiment</span>
          </button>
        </div>
      </div>
    </div>
  );
}
