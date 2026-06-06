import CitationChart from "@/components/CitationChart";
import PublicationChart from "@/components/PublicationChart";
import Sidebar from "@/components/SideBar";
import TopicChart from "@/components/TopicChart";

export default function TrendsPage() {
  return (
    <div className="space-y-8">
      <div>
           <section className="relative overflow-hidden rounded-4xl bg-linear-to-r from-slate-900 via-blue-900 to-indigo-900 p-10 text-white shadow-2xl">
                  <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        
                  <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        
                  <div className="relative z-10">
                   <div className="flex justify-between items-center ">
                     <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-md border border-white/20">
                      Research Intelligence Platform
                    </div>
                   <Sidebar/>
                   </div>
        
                    <h1 className="mt-6 text-6xl font-black tracking-tight">
                      Research Analytics
                    </h1>
        
                    <p className="mt-4 max-w-3xl text-lg text-slate-300">
                      Analyze publication trends, citation impact,
                      author productivity, and emerging research
                      topics across thousands of academic papers.
                    </p>
        
                    {/* <div className="mt-8 flex flex-wrap gap-8">
                      <div>
                        <p className="text-slate-400 text-sm">
                          Research Papers
                        </p>
        
                        <h2 className="text-4xl font-bold">
                          {papers.length.toLocaleString()}
                        </h2>
                      </div>
        
                      <div>
                        <p className="text-slate-400 text-sm">
                          Research Topics
                        </p>
        
                        <h2 className="text-4xl font-bold">
                          {
                            new Set(
                              papers.map((p) => p.topic)
                            ).size
                          }
                        </h2>
                      </div>
        
                      <div>
                        <p className="text-slate-400 text-sm">
                          Total Citations
                        </p>
        
                        <h2 className="text-4xl font-bold">
                          {papers
                            .reduce(
                              (sum, paper) =>
                                sum + paper.citations,
                              0
                            )
                            .toLocaleString()}
                        </h2>
                      </div>
                    </div> */}
                  </div>
                </section>
      
      </div>

      <PublicationChart />

      <CitationChart />

      <TopicChart />
    </div>
  );
}