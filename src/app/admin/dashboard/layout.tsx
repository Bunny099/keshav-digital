import { getServerSession } from "next-auth";
import DashboardLayout from "./dashlayout";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  return <DashboardLayout>{children}</DashboardLayout>;
}
