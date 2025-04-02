"use client"
import Settings from "@/app/components/admin/setting";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default  function Setting() {
 
  // if (!session || !session.user || session.user.role == "root") {
  //     redirect("/admin/dashboard");
  // }
  return (
    <div className="w-full p-2 min-h-screen flex flex-col">
      <Settings />
    </div>
  );
}
