// app/compare/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Companies | Bazaar Intel",
  description: "Compare Indian consumer internet companies side by side.",
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}