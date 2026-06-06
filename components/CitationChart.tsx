"use client";

import papers from "@/data/papers.json";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const yearlyData = Object.values(
  (papers as unknown as any[]).reduce<
    Record<
      number,
      {
        year: number;
        citations: number;
      }
    >
  >((acc:any, paper:any) => {
    if (!acc[paper.year]) {
      acc[paper.year] = {
        year: paper.year,
        citations: 0,
      };
    }

    acc[paper.year].citations += paper.citations;

    return acc;
  }, {})
);

const formatNumber = (value: number) => {
  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(1).replace(/\.0$/, "")}B`;
  }
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1).replace(/\.0$/, "")}k`;
  }
  return value.toString();
};

export default function CitationChart() {
  return (
    <div className="border rounded-xl p-5">
      <h2 className="font-semibold mb-4">
        Citation Trend
      </h2>

      <ResponsiveContainer
        width="100%"
        height={400}
      >
        <LineChart data={yearlyData}>
          <XAxis dataKey="year" />
          <YAxis tickFormatter={formatNumber} />
          <Tooltip formatter={(value) => formatNumber(Number(value))} />
          <Line dataKey="citations" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}