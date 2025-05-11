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
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const getTableData = async () => {
    try {
      const response = await axios.get("/api/inquiry");
      if (response?.data?.inquiry) {
        setInquiries(response.data.inquiry);
      } else {
        console.log("Inquiries not found");
      }
    } catch (error) {
      console.error("Error while fetching inquiries:", error);
    }
  };

  const deleteInquiry = async (id: number) => {
    const confirmDelete = confirm("Are you sure you want to delete this inquiry?");
    if (!confirmDelete) return;

    try {
      setDeletingId(id);
      await axios.delete("/api/inquiry", {
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({ inquiryId: id }),
      });
      getTableData();
    } catch (error) {
      console.error("Failed to delete inquiry", error);
    } finally {
      setDeletingId(null);
    }
  };

  useEffect(() => {
    getTableData();
  }, []);

  return (
    <div className="w-full pr-4 overflow-hidden relative">
      <h1 className="text-3xl font-bold text-white bg-black p-2 rounded-lg text-center shadow-lg">
        Inquiry Table
      </h1>

      <div className="mt-4 bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <div className="h-[545px] overflow-y-auto">
            <table className="w-full border-collapse border border-gray-300">
              {/* Table Header */}
              <thead className="sticky top-0 bg-gray-800 text-white">
                <tr>
                  <th className="p-4 border border-gray-600 text-left">Sr</th>
                  <th className="p-4 border border-gray-600 text-left">Name</th>
                  <th className="p-4 border border-gray-600 text-left">Email</th>
                  <th className="p-4 border border-gray-600 text-left">Mobile</th>
                  <th className="p-4 border border-gray-600 text-left">Message</th>
                  <th className="p-4 border border-gray-600 text-left">Time</th>
                  <th className="p-4 border border-gray-600 text-left">Actions</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="bg-gray-50 divide-y divide-gray-300">
                {inquiries.length > 0 ? (
                  inquiries.map((item, index) => (
                    <tr
                      key={item.id}
                      className="border border-gray-300 text-center hover:bg-gray-100 transition-all"
                    >
                      <td className="p-4 font-medium">{index + 1}</td>
                      <td className="p-4">{item.name}</td>
                      <td className="p-4">{item.email}</td>
                      <td className="p-4">{item.mobile}</td>
                      <td className="p-4">{item.message}</td>
                      <td className="p-4">{new Date(item.createdAt).toLocaleString()}</td>
                      <td className="p-4">
                        <button
                          onClick={() => deleteInquiry(item.id)}
                          className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 hover:cursor-pointer transition-all"
                          disabled={deletingId === item.id}
                        >
                          {deletingId === item.id ? "Deleting..." : "Delete"}
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={7}
                      className="text-center p-6 text-gray-700 font-medium"
                    >
                      No inquiries available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
