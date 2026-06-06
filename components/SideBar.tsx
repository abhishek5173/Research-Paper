"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const path = usePathname();
  return (
      <nav className="flex justify-evenly items-center text-xl   gap-4">

         {path !== "/" && <Link href="/">Dashboard</Link>}
        <Link href="/papers">Papers</Link>
        <Link href="/authors">Authors</Link>
        <Link href="/trends">Trends</Link>
      </nav>
  );
}