"use client";
import { useState } from "react";
import RootAdminSetting from "./adminsetting";
import AddingSubAdmin from "./subadmin";
import SubAdminSetting from "./subsetting";
export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState("root");

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white  rounded-xl">
      <h1 className="text-2xl font-bold text-black mb-4">Settings</h1>
      <div className="flex justify-between mb-4">
        <button
          className={`px-4 py-2 ${
            activeTab === "root" ? "bg-black text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("root")}
        >
          Root Admin
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "addSub" ? "bg-black text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("addSub")}
        >
          Add Sub-Admin
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "changeSub" ? "bg-black text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("changeSub")}
        >
          Change Sub-Admin
        </button>
      </div>
      <div>
        {activeTab === "root" ? <RootAdminSetting /> : ""}
        {activeTab === "addSub" ? <AddingSubAdmin /> : ""}
        {activeTab === "changeSub" ? <SubAdminSetting /> : ""}
      </div>
    </div>
  );
}
