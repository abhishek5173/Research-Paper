import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r p-5">
      <h1 className="font-bold text-2xl mb-8">
        Research Portal
      </h1>

      <nav className="flex flex-col gap-4">
        <Link href="/">Dashboard</Link>
        <Link href="/papers">Papers</Link>
        <Link href="/authors">Authors</Link>
        <Link href="/trends">Trends</Link>
      </nav>
    </aside>
  );
}