"use client";

import { useState } from "react";
import papers from "@/data/papers.json";

export default function PapersTable() {
  const [search, setSearch] = useState("");

  // Runs on EVERY render
  const filtered = papers.filter(
    (paper) =>
      paper.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      paper.author
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  // Intentionally expensive computation
  // const expensive: number[] = [];

  // for (let i = 0; i < 1000000; i++) {
  //   expensive.push(Math.sqrt(i));
  // }

  return (
    <div className="px-3">
      <input
        className="border p-2 rounded mb-4 w-full"
        placeholder="Search papers..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="overflow-auto h-screen">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-start">Title</th>
              <th className="text-start">Author</th>
              <th className="text-start">Topic</th>
              <th className="text-start">Year</th>
              <th className="text-start">Citations</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((paper) => (
              <tr key={paper.id}>
                <td>{paper.title}</td>
                <td>{paper.author}</td>
                <td>{paper.topic}</td>
                <td>{paper.year}</td>
                <td>{paper.citations}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}