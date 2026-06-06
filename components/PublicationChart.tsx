"use client";

import papers from "@/data/papers.json";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const publicationData = Object.values(
  (papers as { year: number }[]).reduce<
    Record<
      number,
      {
        year: number;
        papers: number;
      }
    >
  >((acc, paper) => {
    if (!acc[paper.year]) {
      acc[paper.year] = {
        year: paper.year,
        papers: 0,
      };
    }

    acc[paper.year].papers += 1;

    return acc;
  }, {})
).sort((a, b) => a.year - b.year);

export default function PublicationChart() {
  return (
    <div className="border rounded-xl p-5 bg-white">
      <h2 className="text-lg font-semibold mb-4">
        Publications Per Year
      </h2>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={publicationData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="papers" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}