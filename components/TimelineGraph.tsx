"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart showing 7 days with time-bucketed data";

// Configuration
const HOUR_INCREMENT = 4; // Hours per bucket (easy to change)
const DAYS_TO_SHOW = 7;

// Generate bucketed chart data from timestamps
interface DataPoint {
  timestamp: number; // Unix timestamp in milliseconds
}

const generateChartData = (dataPoints: DataPoint[] = []) => {
  const data = [];
  const now = Date.now();
  const startTime = now - DAYS_TO_SHOW * 24 * 60 * 60 * 1000;
  const bucketSizeMs = HOUR_INCREMENT * 60 * 60 * 1000;
  const totalBuckets = (DAYS_TO_SHOW * 24) / HOUR_INCREMENT;

  // Create day boundary labels
  const dayLabels = [];
  for (let day = 0; day <= DAYS_TO_SHOW; day++) {
    const date = new Date(startTime + day * 24 * 60 * 60 * 1000);
    const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
    const dayNum = date.getDate();
    dayLabels.push(`${dayName} ${dayNum}`);
  }

  // Count data points in each bucket
  const bucketCounts = new Array(totalBuckets).fill(0);
  dataPoints.forEach((point) => {
    const timeSinceStart = point.timestamp - startTime;
    if (
      timeSinceStart >= 0 &&
      timeSinceStart < DAYS_TO_SHOW * 24 * 60 * 60 * 1000
    ) {
      const bucketIndex = Math.floor(timeSinceStart / bucketSizeMs);
      if (bucketIndex >= 0 && bucketIndex < totalBuckets) {
        bucketCounts[bucketIndex]++;
      }
    }
  });

  // Create day boundary ticks
  for (let day = 0; day <= DAYS_TO_SHOW; day++) {
    data.push({
      position: day,
      day: dayLabels[day],
      traces: null,
      isBoundary: true,
    });
  }

  // Create bars for each time bucket
  const bucketsPerDay = 24 / HOUR_INCREMENT;
  for (let bucket = 0; bucket < totalBuckets; bucket++) {
    const day = Math.floor(bucket / bucketsPerDay);
    const bucketInDay = bucket % bucketsPerDay;

    // Position bar in the center of its bucket within the day
    const position = day + (bucketInDay + 0.5) / bucketsPerDay;

    data.push({
      position: position,
      day: "",
      traces: bucketCounts[bucket],
      isBoundary: false,
    });
  }

  return data.sort((a, b) => a.position - b.position);
};

// Generate sample data for demonstration
const generateSampleData = (): DataPoint[] => {
  const now = Date.now();
  const points: DataPoint[] = [];

  // Generate random sample points over the last 7 days
  for (let i = 0; i < 100; i++) {
    const randomOffset = Math.random() * DAYS_TO_SHOW * 24 * 60 * 60 * 1000;
    points.push({
      timestamp: now - randomOffset,
    });
  }

  return points;
};

const sampleData = generateSampleData();
const chartData = generateChartData(sampleData);

const chartConfig = {
  traces: {
    label: "Traces",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function TimelineGraph() {
  return (
    <Card>
      <ChartContainer className="h-24" config={chartConfig}>
        <BarChart
          accessibilityLayer
          data={chartData}
          barGap={0}
          barCategoryGap={"-40%"}
        >
          <XAxis
            padding={{ left: 0, right: 50 }}
            dataKey="position"
            type="number"
            domain={[0, 7]}
            ticks={[0, 1, 2, 3, 4, 5, 6, 7]}
            tickFormatter={(value) => {
              const item = chartData.find(
                (d) => d.position === value && d.isBoundary
              );
              return item ? item.day : "";
            }}
            tickMargin={10}
            tickLine={true}
            axisLine={true}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="traces" fill="var(--color-traces)" />
        </BarChart>
      </ChartContainer>
    </Card>
  );
}
