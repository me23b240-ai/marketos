import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar activeItem="Dashboard" />
      <div className="flex min-w-0 flex-1 flex-col">{children}</div>
    </div>
  );
}
