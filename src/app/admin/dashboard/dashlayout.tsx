import Navbar from "@/app/components/admin/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex flex-col ">
      <Navbar />
      {children}
    </div>
  );
}
