import StatsCards from "@/components/StatsCards";
import CitationChart from "@/components/CitationChart";
import PublicationChart from "@/components/PublicationChart";
import TopicChart from "@/components/TopicChart";
import papers from "@/data/papers.json";
import BadCLS from "@/components/BadCls";


export default function Home() {
  return (
    <div className="space-y-8 bg-white">
      <BadCLS/>
      <h1 className="text-4xl font-bold">
        Research Analytics Dashboard
      </h1>

      

      <StatsCards />

      <div className="grid lg:grid-cols-2 gap-6">
        <PublicationChart />
        <CitationChart />
      </div>

      <TopicChart />
       {papers.map((paper) => (
        <div key={paper.id}>
          {paper.title}
        </div>
      ))}
    </div>
  );
}