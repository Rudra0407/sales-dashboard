// components/molecules/SalesPieChart.tsx
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { DataPoint } from "./SalesBarChart";

interface Props {
  data: DataPoint[];
}

export const SalesPieChart: React.FC<Props> = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={data}
        dataKey="sales"
        nameKey="year"
        cx="50%"
        cy="50%"
        outerRadius={100}
        label={(entry) => entry.year.toString()}
      >
        {data.map((entry, idx) => (
          <Cell
            key={idx}
            fill={["#3182ce", "#e53e3e", "#48bb78"][idx % 3]}
          />
        ))}
      </Pie>
      <Tooltip
        contentStyle={{ backgroundColor: "#333", borderColor: "#555" }}
      />
    </PieChart>
  </ResponsiveContainer>
);
