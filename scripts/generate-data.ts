import fs from "fs";
import path from "path";
import { faker } from "@faker-js/faker";
import { Paper } from "../types/paper";

const topics = [
  "Artificial Intelligence",
  "Machine Learning",
  "Cloud Computing",
  "Cyber Security",
  "Blockchain",
  "Computer Vision",
  "Data Science",
  "Internet of Things",
];

const papers: Paper[] = [];

for (let i = 1; i <= 5000; i++) {
  papers.push({
    id: i,
    title: faker.company.catchPhrase(),
    author: faker.person.fullName(),
    topic: topics[Math.floor(Math.random() * topics.length)],
    year: 2015 + Math.floor(Math.random() * 11),
    citations: Math.floor(Math.random() * 5000),
  });
}

const filePath = path.join(
  process.cwd(),
  "data",
  "papers.json"
);

fs.writeFileSync(
  filePath,
  JSON.stringify(papers, null, 2)
);

console.log("5000 papers generated");