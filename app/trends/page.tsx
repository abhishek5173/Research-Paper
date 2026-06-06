import CitationChart from "@/components/CitationChart";
import PublicationChart from "@/components/PublicationChart";
import TopicChart from "@/components/TopicChart";

export default function TrendsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Research Trends
        </h1>

        <p className="text-gray-500 mt-2">
          Analyze publication growth,
          citation trends, and topic popularity.
        </p>
      </div>

      <PublicationChart />

      <CitationChart />

      <TopicChart />
    </div>
  );
}