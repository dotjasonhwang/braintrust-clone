"use client";

/**
 * Logs timeline component
 * Displays timeline visualization of log activity over time
 */

export function LogsTimeline() {
  // Mock timeline data - showing activity over several days
  const timelineData = [
    { day: "Mon 27", times: ["06 PM", "06 AM"] },
    { day: "Tue 28", times: ["12 PM", "06 PM", "06 AM"] },
    { day: "Wed 29", times: ["12 PM", "06 PM", "06 AM"] },
  ];

  return (
    <div className="bg-surface border border-border-subtle rounded-lg p-4 mb-4">
      {/* Timeline header with time labels */}
      <div className="flex items-center justify-between text-xs text-muted mb-2">
        {timelineData.map((data, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div className="flex gap-8 mb-2">
              {data.times.map((time, timeIndex) => (
                <span key={timeIndex}>{time}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Timeline visualization area */}
      <div className="h-16 bg-background rounded flex items-end gap-1 px-2">
        {/* Activity bar - showing one activity spike */}
        <div className="flex-1" />
        <div className="flex-1" />
        <div className="w-2 h-12 bg-primary rounded-t" />
        <div className="flex-1" />
      </div>

      {/* Day labels */}
      <div className="flex justify-around text-xs text-muted mt-2">
        {timelineData.map((data, index) => (
          <span key={index}>{data.day}</span>
        ))}
      </div>
    </div>
  );
}
