/**
 * Timeline graph component (placeholder for V1)
 * Simple visualization showing activity over the past 7 days
 */

export function TimelineGraph() {
  const days = ["Thu 23", "Fri 24", "Sat 25", "Oct 26", "Mon 27", "Tue 28", "Wed 29"];

  return (
    <div className="h-32 border-t border-border-subtle pt-4">
      {/* Graph area */}
      <div className="h-20 flex items-end justify-between gap-2 px-4">
        {days.map((day, index) => (
          <div key={day} className="flex-1 flex flex-col items-center">
            {/* Bar - only show on last day for V1 */}
            <div className="w-full flex items-end justify-center mb-2">
              {index === days.length - 1 ? (
                <div
                  className="w-2 bg-primary rounded-t"
                  style={{ height: "48px" }}
                ></div>
              ) : (
                <div className="w-2" style={{ height: "48px" }}></div>
              )}
            </div>
            {/* Date label */}
            <div className="text-xs text-muted">{day}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
