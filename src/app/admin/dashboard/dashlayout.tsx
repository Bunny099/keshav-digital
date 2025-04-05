import Sidebar from "@/app/components/admin/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex">
      <Sidebar />
      {children}
    </div>
  );
}