"use client";
import { useEffect, useState } from "react";
import axios from "axios";
interface Inquiry {
  id: number;
  name: string;
  email: string;
  mobile: string;
  message: string;
  createdAt: string;
}
export default function InquiryTable() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  async function getTableData() {
    try {
      const response = await axios.get("/api/inquiry");
      if (response?.data?.inquiry) {
        setInquiries(response?.data?.inquiry);
        console.log(response?.data?.inquiry);
      } else {
        console.log("inquiries not found");
      }
    } catch (error) {
      console.error("Error while fetching table data", error);
    }
  }

  useEffect(() => {
    getTableData();
  }, []);
  return (
    <div className="w-full min-h-screen p-6 bg-white flex flex-col items-center">
      <h1 className="text-2xl font-bold text-black mb-4">Inquiry Table</h1>

      <button
        className="bg-black text-white px-6 py-2 rounded-lg mb-4 font-semibold hover:bg-gray-800 hover:cursor-pointer transition-all"
        onClick={getTableData}
      >
        Refresh
      </button>

      <div className="w-full max-w-5xl overflow-x-auto rounded-lg shadow-lg">
        <table className="border-collapse border border-gray-300 w-full text-gray-900">
          <thead>
            <tr className="bg-black text-white uppercase text-sm tracking-wider">
              <th className="border border-gray-300 p-3">Sr</th>
              <th className="border border-gray-300 p-3">Name</th>
              <th className="border border-gray-300 p-3">Email</th>
              <th className="border border-gray-300 p-3">Mobile</th>
              <th className="border border-gray-300 p-3">Message</th>
              <th className="border border-gray-300 p-3">Time</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.length > 0 ? (
              inquiries.map((item, index) => (
                <tr
                  key={item.id}
                  className={`border border-gray-300 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                  } hover:bg-gray-300 transition-all`}
                >
                  <td className="p-3 border border-gray-300 text-center">
                    {index + 1}
                  </td>
                  <td className="p-3 border border-gray-300">{item.name}</td>
                  <td className="p-3 border border-gray-300">{item.email}</td>
                  <td className="p-3 border border-gray-300">{item.mobile}</td>
                  <td className="p-3 border border-gray-300">{item.message}</td>
                  <td className="p-3 border border-gray-300 text-center">
                    {new Date(item.createdAt).toUTCString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="p-4 text-center border border-gray-300 text-gray-500"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
