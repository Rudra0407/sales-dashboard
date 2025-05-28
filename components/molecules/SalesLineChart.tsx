// components/molecules/SalesLineChart.tsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { DataPoint } from "./SalesBarChart";

interface Props {
  data: DataPoint[];
}

export const SalesLineChart: React.FC<Props> = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart
      data={data}
      margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#444" />
      <XAxis dataKey="year" stroke="#fff" />
      <YAxis stroke="#fff" />
      <Tooltip
        contentStyle={{ backgroundColor: "#333", borderColor: "#555" }}
      />
      <Line
        type="monotone"
        dataKey="sales"
        stroke="#48bb78"
        strokeWidth={2}
      />
    </LineChart>
  </ResponsiveContainer>
);
