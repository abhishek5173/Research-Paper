import PapersTable from "@/components/PapersTable";

export default function PapersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">
          Research Papers
        </h1>

        <p className="text-gray-500 mt-2">
          Explore and search through research
          publications.
        </p>
      </div>

      <PapersTable />
    </div>
  );
}