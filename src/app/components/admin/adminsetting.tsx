"use client";
import axios from "axios";
import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
export default function RootAdminSetting() {
  const [oldEmail, setOldEmail] = useState<string>("");
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function changeCreds(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    setError("");
    try {
      const result = await axios.put("/api/putadmin", {
        email: oldEmail,
        password: oldPassword,
        newEmail,
        newPassword,
      });
      console.log(result.data.updatedAdmin);
      if (result.data.updatedAdmin) {
        setMessage("Credentials changed successfully!");
      } else {
        setError("Something went wrong. Please try again!");
      }
    } catch (error) {
      setError(
        "Failed to update credentials. Check your old email and password."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <form className="space-y-4" onSubmit={changeCreds}>
        <div className="relative">
          <FiMail className="absolute left-3 top-4 text-gray-500" />
          <input
            className="py-3 pl-10 pr-4 w-full bg-gray-100 rounded-lg outline-none focus:ring-1 focus:ring-gray-800"
            onChange={(e) => setOldEmail(e.target.value)}
            value={oldEmail}
            type="email"
            placeholder="Enter Your Old Email"
            required
          />
        </div>

        <div className="relative">
          <FiLock className="absolute left-3 top-4 text-gray-500" />
          <input
            className="py-3 pl-10 pr-4 w-full bg-gray-100 rounded-lg outline-none focus:ring-1 focus:ring-gray-800"
            onChange={(e) => setOldPassword(e.target.value)}
            value={oldPassword}
            type="password"
            placeholder="Enter Your Old Password"
            required
          />
        </div>

        <div className="relative">
          <FiMail className="absolute left-3 top-4 text-gray-500" />
          <input
            className="py-3 pl-10 pr-4 w-full bg-gray-100 rounded-lg outline-none focus:ring-1 focus:ring-gray-800"
            onChange={(e) => setNewEmail(e.target.value)}
            value={newEmail}
            type="email"
            placeholder="Enter Your New Email"
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
            placeholder="Enter Your New Password"
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
