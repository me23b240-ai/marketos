import Link from "next/link";
import { Heart } from "lucide-react";

const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "Dashboard", href: "/dashboard" },
      { label: "Companies", href: "/companies" },
      { label: "Industries", href: "/industries" },
      { label: "Compare", href: "/compare" },
      { label: "Reports", href: "/reports" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "AI Workspace", href: "/ai" },
      { label: "Market News", href: "/news" },
      { label: "Documentation", href: "/docs" },
      { label: "API (Coming Soon)", href: "/api", disabled: true },
    ],
  },
  
];

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-md bg-foreground text-xs font-semibold text-background">
                M
              </div>
              <span className="text-sm font-semibold text-foreground">
                Bazaar Intel
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              The operating system for Indian Consumer Internet.
            </p>
          </div>

          {/* Nav columns */}
          {footerColumns.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h3 className="text-sm font-medium text-foreground">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.disabled ? (
                      <span className="text-sm text-muted-foreground/50">
                        {link.label}
                      </span>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">© 2026 Bazaar Intel</p>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            Made with
            <Heart className="size-3.5 fill-current text-foreground" />
            in India
          </p>
        </div>
      </div>
    </footer>
  );
}