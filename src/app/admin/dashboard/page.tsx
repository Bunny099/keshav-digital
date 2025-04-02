
"use client"
import DashboardContent from "@/app/components/admin/alladmin";
import { redirect } from "next/navigation";

export default function Dashboard() {
    return (
      <div className="p-6 w-full bg-white min-h-screen">
        {/* Welcome Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Welcome Back, Admin!</h1>
          <p className="text-gray-600">Here’s a quick overview of your system.</p>
        </div>
  
       <DashboardContent/>
  
      
      </div>
    );
  }