import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-bold">
            M
          </div>

          <span className="text-lg font-semibold">
            MarketOS
          </span>
        </div>

        <nav className="hidden gap-8 md:flex">
          <a href="#">Companies</a>
          <a href="#">Industries</a>
          <a href="#">Compare</a>
          <a href="#">Reports</a>
          <a href="#">AI</a>
        </nav>

        <button className="flex items-center gap-2 rounded-xl border px-4 py-2 text-sm">
          <Search className="h-4 w-4" />
          Search
        </button>

      </div>
    </header>
  );
}