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
  ReferenceLine,
} from "recharts";
import type { DataPoint } from "./SalesBarChart";

interface Props {
  data: DataPoint[];
  threshold?: number;
}

export const SalesLineChart: React.FC<Props> = ({ data, threshold }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart
      data={data}
      margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#444" />
      <XAxis dataKey="year" stroke="#fff" />
      <YAxis stroke="#fff" />
      <Tooltip contentStyle={{ backgroundColor: "#333", borderColor: "#555" }} />

      { /* Draw a horizontal line at the threshold */ }
      {threshold !== undefined && (
        <ReferenceLine
          y={threshold}
          stroke="#e53e3e"
          strokeDasharray="4 4"
        />
      )}

      <Line
        type="monotone"
        dataKey="sales"
        stroke="#48bb78"
        strokeWidth={2}
        dot={(props) => {
          // Color each dot red if its value ≥ threshold
          const { cx, cy, payload } = props;
          const fill =
            threshold !== undefined && payload.sales >= threshold
              ? "#e53e3e"
              : "#48bb78";
          return <circle cx={cx} cy={cy} r={4} fill={fill} />;
        }}
      />
    </LineChart>
  </ResponsiveContainer>
);
