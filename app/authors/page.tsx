import Sidebar from "@/components/SideBar";
import papers from "@/data/papers.json";

interface Paper {
  author: string;
  citations: number;
}

interface AuthorStats {
  author: string;
  papers: number;
  citations: number;
}

export default function AuthorsPage() {
  const authorMap = (papers as Paper[]).reduce<Record<string, AuthorStats>>(
    (acc, paper) => {
      if (!acc[paper.author]) {
        acc[paper.author] = {
          author: paper.author,
          papers: 0,
          citations: 0,
        };
      }

      acc[paper.author].papers += 1;
      acc[paper.author].citations += paper.citations;

      return acc;
    },
    {}
  );

  const authors = Object.values(authorMap)
    .sort((a, b) => b.citations - a.citations)
    .slice(0, 50);

  const totalAuthors = Object.keys(authorMap).length;

  const totalCitations = authors.reduce(
    (sum, author) => sum + author.citations,
    0
  );

  const totalPapers = authors.reduce(
    (sum, author) => sum + author.papers,
    0
  );

  return (
    <div className="space-y-8">
      {/* Header */}
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

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4 px-3">
        <div className="border rounded-xl p-5">
          <p className="text-gray-500">Authors</p>
          <h2 className="text-3xl font-bold">
            {totalAuthors.toLocaleString()}
          </h2>
        </div>

        <div className="border rounded-xl p-5">
          <p className="text-gray-500">Papers</p>
          <h2 className="text-3xl font-bold">
            {totalPapers.toLocaleString()}
          </h2>
        </div>

        <div className="border rounded-xl p-5">
          <p className="text-gray-500">Citations</p>
          <h2 className="text-3xl font-bold">
            {totalCitations.toLocaleString()}
          </h2>
        </div>
      </div>

      {/* Authors Table */}
      <div className="border rounded-xl overflow-hidden px-3">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">
            Top Authors by Citations
          </h2>
        </div>

        <div className="overflow-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4">Rank</th>
                <th className="text-left p-4">Author</th>
                <th className="text-left p-4">Papers</th>
                <th className="text-left p-4">Citations</th>
                <th className="text-left p-4">
                  Avg Citations/Paper
                </th>
              </tr>
            </thead>

            <tbody>
              {authors.map((author, index) => (
                <tr
                  key={author.author}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-4 font-medium">
                    #{index + 1}
                  </td>

                  <td className="p-4">
                    {author.author}
                  </td>

                  <td className="p-4">
                    {author.papers}
                  </td>

                  <td className="p-4">
                    {author.citations.toLocaleString()}
                  </td>

                  <td className="p-4">
                    {(
                      author.citations /
                      author.papers
                    ).toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}