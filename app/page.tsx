import StatsCards from "@/components/StatsCards";
import CitationChart from "@/components/CitationChart";
import PublicationChart from "@/components/PublicationChart";
import TopicChart from "@/components/TopicChart";
import papers from "@/data/papers.json";
import BadCLS from "@/components/BadCls";
import Link from "next/link";
import Sidebar from "@/components/SideBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-white to-blue-50">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-125 w-125 rounded-full bg-blue-300/20 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-125 w-125 rounded-full bg-purple-300/20 blur-3xl" />
      </div>

      

      <div className="space-y-8">
        {/* Hero Section */}
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

        {/* Stats */}
        <section>
          <StatsCards />
        </section>

        {/* Charts */}
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="rounded-[28px] bg-white p-6 shadow-xl border border-slate-100">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold">
                Publication Trends
              </h2>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600">
                Analytics
              </span>
            </div>

            <PublicationChart />
          </div>

          <div className="rounded-[28px] bg-white p-6 shadow-xl border border-slate-100">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold">
                Citation Growth
              </h2>

              <span className="rounded-full bg-green-50 px-3 py-1 text-sm text-green-600">
                Insights
              </span>
            </div>

            <CitationChart />
          </div>
        </section>

        {/* Topic Distribution */}
        <section className="rounded-[28px] bg-white p-8 shadow-xl border border-slate-100">
          <div className="mb-6">
            <h2 className="text-3xl font-bold">
              Research Landscape
            </h2>

            <p className="mt-2 text-slate-500">
              Distribution of research papers across
              major academic domains.
            </p>
          </div>

          <TopicChart />
        </section>

        {/* Repository */}
        <section className="rounded-[28px] bg-white p-8 shadow-xl border border-slate-100">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                Research Repository
              </h2>

              <p className="mt-2 text-slate-500">
                Browse academic publications and
                citation records.
              </p>
            </div>

            <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">
              {papers.length.toLocaleString()} Papers
            </div>
          </div>

          <div className="overflow-auto max-h-150 rounded-2xl border">
            <table className="w-full">
              <thead className="sticky top-0 bg-slate-50 border-b">
                <tr>
                  <th className="p-4 text-left">
                    Title
                  </th>
                  <th className="p-4 text-left">
                    Author
                  </th>
                  <th className="p-4 text-left">
                    Topic
                  </th>
                  <th className="p-4 text-left">
                    Year
                  </th>
                  <th className="p-4 text-left">
                    Citations
                  </th>
                </tr>
              </thead>

              <tbody>
                {/* {papers.map((paper) => (
                  <tr
                    key={paper.id}
                    className="border-b hover:bg-slate-50 transition"
                  >
                    <td className="p-4">
                      {paper.title}
                    </td>

                    <td className="p-4">
                      {paper.author}
                    </td>

                    <td className="p-4">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700">
                        {paper.topic}
                      </span>
                    </td>

                    <td className="p-4">
                      {paper.year}
                    </td>

                    <td className="p-4 font-semibold">
                      {paper.citations}
                    </td>
                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <BadCLS />
    </div>
  );
}