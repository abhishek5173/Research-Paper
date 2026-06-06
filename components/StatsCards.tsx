import papers from "@/data/papers.json";

export default function StatsCards() {
  // Support JSON shape where data may be wrapped (e.g. { const: [...] })
  const paperArray: any[] = Array.isArray(papers) ? papers : (papers as any).const || [];

  const totalPapers = paperArray.length;

  const totalCitations = paperArray.reduce(
    (sum, paper) => sum + (paper.citations || 0),
    0
  );

  const totalAuthors = new Set(
    paperArray.map((paper) => paper.author)
  ).size;

  const totalTopics = new Set(
    paperArray.map((paper) => paper.topic)
  ).size;

  const stats = [
    {
      title: "Papers",
      value: totalPapers,
    },
    {
      title: "Authors",
      value: totalAuthors,
    },
    {
      title: "Citations",
      value: totalCitations,
    },
    {
      title: "Topics",
      value: totalTopics,
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="border rounded-xl p-5"
        >
          <p>{stat.title}</p>

          <h2 className="text-3xl font-bold">
            {stat.value.toLocaleString()}
          </h2>
        </div>
      ))}
    </div>
  );
}