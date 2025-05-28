// components/atoms/ChartContainer.tsx
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export const ChartContainer = ({ title, children }: Props) => (
  <div className="p-6 bg-gray-800 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-white">
      {title}
    </h2>
    {children}
  </div>
);
