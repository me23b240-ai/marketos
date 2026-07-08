import { Search } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Companies", href: "/companies" },
  { name: "Industries", href: "/industries" },
  { name: "Compare", href: "/compare" },
  { name: "Reports", href: "/reports" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "AI Workspace", href: "/ai" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white font-semibold">
            M
          </div>

          <span className="text-xl font-semibold tracking-tight">
            MarketOS
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Search */}
        <button className="flex items-center gap-2 rounded-xl border px-4 py-2 text-sm transition-colors hover:bg-muted">
          <Search className="h-4 w-4" />
          Search
        </button>
      </div>
    </header>
  );
}