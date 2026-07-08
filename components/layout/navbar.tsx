import { Search } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white font-semibold">
            M
          </div>

          <span className="text-x1 font-semibold tracking-tight">
            MarketOS
          </span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link href="#">Companies</Link>
          <Link href="#">Industries</Link>
          <Link href="#">Compare</Link>
          <Link href="#">Reports</Link>
          <Link href="#">AI</Link>
        </nav>

        <button className="flex items-center gap-2 rounded-xl border px-4 py-2 text-sm">
          <Search className="h-4 w-4" />
          Search
        </button>

      </div>
    </header>
  );
}