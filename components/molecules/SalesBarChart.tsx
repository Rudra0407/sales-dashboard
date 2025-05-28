import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export interface DataPoint {
  year: number;
  sales: number;
}

interface Props {
  data: DataPoint[];
  threshold?: number;
}

export const SalesBarChart: React.FC<Props> = ({ data, threshold }) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      data={data}
      margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="sales">
        {data.map((entry, index) => {
          // Pick red if above threshold, otherwise blue
          const fillColor =
            threshold !== undefined && entry.sales >= threshold
              ? "#e53e3e"
              : "#3182ce";
          return <Cell key={index} fill={fillColor} />;
        })}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);
