"use client";
import axios from "axios";
import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
export default function SubAdminSetting() {
  const [rootEmail, setRootEmail] = useState<string>("");
  const [subEmail, setSubEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  async function changeCred(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    setError("");
    try {
      const result = await axios.put("/api/updateadmin", {
        rootEmail: rootEmail,
        newPassword: newPassword,
        subEmail: subEmail,
      });
      console.log(result.data.updatedSubAdmin);
      if (result.data.updatedSubAdmin) {
        setMessage("Subadmin password changed  successfully!");
      } else {
        setError("Something went wrong. Please try again!");
      }
    } catch (error) {
      setError(
        "Failed to changed  subadmin password. Check your root email and password."
      );
      console.error(error)
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <form className="space-y-4" onSubmit={changeCred}>
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
            placeholder="Enter Your  Sub-Admin Email"
            required
          />
        </div>

        <div className="relative">
          <FiLock className="absolute left-3 top-4 text-gray-500" />
          <input
            className="py-3 pl-10 pr-4 w-full bg-gray-100 rounded-lg outline-none focus:ring-1 focus:ring-gray-800"
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
            type="password"
            placeholder="Enter Your New Sub Admin  Password"
            required
          />
        </div>

        {error && <p className="text-red-600 text-center">{error}</p>}
        {message && <p className="text-green-600 text-center">{message}</p>}

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
