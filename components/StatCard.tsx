/**
 * Stat card component
 * Displays a single statistic with label
 */

interface StatCardProps {
  label: string;
  value: string | number;
}

export function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-semibold text-foreground">{value}</div>
      <div className="text-xs text-muted mt-1">{label}</div>
    </div>
  );
}
