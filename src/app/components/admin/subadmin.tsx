"use client";
import axios from "axios";
import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
export default function AddingSubAdmin() {
  const [rootEmail, setRootEmail] = useState<string>("");
  const [subEmail, setSubEmail] = useState<string>("");

  const [subPassword, setSubPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  async function addSubAdmin(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    setError("");
    try {
      const result = await axios.post("/api/updateadmin", {
        rootEmail,
        subEmail,
        subPassword,
      });
      console.log(result.data.subAdmin);
      if (result.data.subAdmin) {
        setMessage("Sub-Admin created successfully!");
      } else {
        setError("Something went wrong. Please try again!");
      }
    } catch (error: any) {
      setError(
        error.response?.data?.error ||
          "Failed to create sub-admin. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <form className="space-y-4" onSubmit={addSubAdmin}>
        <div className="relative">
          <FiMail className="absolute left-3 top-4 text-gray-500" />
          <input
            className="py-3 pl-10 pr-4 w-full bg-gray-100 rounded-lg outline-none focus:ring-1 focus:ring-gray-800"
            onChange={(e) => setRootEmail(e.target.value)}
            value={rootEmail}
            type="email"
            placeholder="Enter Your Root Email"
            required
          />
        </div>

        <div className="relative">
          <FiMail className="absolute left-3 top-4 text-gray-500" />
          <input
            className="py-3 pl-10 pr-4 w-full bg-gray-100 rounded-lg outline-none focus:ring-1 focus:ring-gray-800"
            onChange={(e) => setSubEmail(e.target.value)}
            value={subEmail}
            type="email"
            placeholder="Enter Your New Sub-Admin Email"
            required
          />
        </div>

        <div className="relative">
          <FiLock className="absolute left-3 top-4 text-gray-500" />
          <input
            className="py-3 pl-10 pr-4 w-full bg-gray-100 rounded-lg outline-none focus:ring-1 focus:ring-gray-800"
            onChange={(e) => setSubPassword(e.target.value)}
            value={subPassword}
            type="password"
            placeholder="Enter Your Sub Admin  Password"
            required
          />
        </div>

        {/* Status Messages */}
        {error && <p className="text-red-600 text-center">{error}</p>}
        {message && <p className="text-green-600 text-center">{message}</p>}

        {/* Submit Button */}
        <button
          className="bg-black text-white w-full py-3 rounded-lg hover:bg-gray-800 transition-all disabled:opacity-50"
          type="submit"
          disabled={loading}
        >
          {loading ? "Updating..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
