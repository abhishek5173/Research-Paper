"use client";

import papers from "@/data/papers.json";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const topicData = Object.values(
  (papers as Array<{ topic: string }>).reduce<
    Record<
      string,
      {
        name: string;
        value: number;
      }
    >
  >((acc, paper) => {
    if (!acc[paper.topic]) {
      acc[paper.topic] = {
        name: paper.topic,
        value: 0,
      };
    }

    acc[paper.topic].value += 1;

    return acc;
  }, {})
);

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff8042",
  "#0088fe",
  "#00c49f",
  "#ffbb28",
  "#ff6666",
];

export default function TopicChart() {
  return (
    <div className="border rounded-xl p-5">
      <h2 className="text-lg font-semibold mb-4">
        Research Topics Distribution
      </h2>

      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={topicData}
            dataKey="value"
            nameKey="name"
            outerRadius={130}
            label
          >
            {topicData.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}