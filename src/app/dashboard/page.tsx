// src/app/dashboard/page.tsx
"use client";

import { useState, ChangeEvent } from "react";
import { ChartContainer } from "@/components/atoms/ChartContainer";
import {
  SalesBarChart,
  DataPoint,
} from "@/components/molecules/SalesBarChart";
import { SalesLineChart } from "@/components/molecules/SalesLineChart";
import { SalesPieChart } from "@/components/molecules/SalesPieChart";

const mockData: DataPoint[] = [
  { year: 2022, sales: 120_000 },
  { year: 2023, sales: 150_000 },
  { year: 2024, sales: 180_000 },
];

export default function Dashboard() {
  const [threshold, setThreshold] = useState<number | undefined>(undefined);
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");

  const onThresholdChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setThreshold(val === "" ? undefined : Number(val));
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Chart type switcher */}
      <div className="mb-6 flex gap-3">
        {(["bar", "line", "pie"] as const).map((type) => (
          <button
            key={type}
            onClick={() => setChartType(type)}
            className={`px-3 py-1 rounded ${
              chartType === type
                ? "bg-blue-600"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <ChartContainer title="Annual Sales (2022–2024)">
        {/* Threshold input */}
        <div className="mb-4">
          <label className="block mb-1 text-gray-300 font-medium">
            Highlight sales ≥
          </label>
          <input
            type="number"
            placeholder="e.g. 150000"
            className="w-32 px-2 py-1 rounded bg-gray-900 text-white border border-gray-600"
            value={threshold ?? ""}
            onChange={onThresholdChange}
          />
        </div>

        {/* Render the selected chart, passing threshold everywhere */}
        {chartType === "bar" && (
          <SalesBarChart data={mockData} threshold={threshold} />
        )}
        {chartType === "line" && (
          <SalesLineChart data={mockData} threshold={threshold} />
        )}
        {chartType === "pie" && (
          <SalesPieChart data={mockData} threshold={threshold} />
        )}
      </ChartContainer>
    </div>
  );
}
