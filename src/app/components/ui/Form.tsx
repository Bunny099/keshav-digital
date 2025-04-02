"use client";
import { useState } from "react";
import Icons from "@/app/components/ui/Icons";
import axios from "axios";

export default function Form() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function submitForm(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    if (!name || !email || !mobile || !message) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post("/api/inquiry", { name, email, mobile, message });
      setSuccess("Inquiry sent successfully!");
      setName("");
      setEmail("");
      setMobile("");
      setMessage("");
    } catch (err) {
      console.error("Error submitting inquiry:", err);
      setError("Failed to send inquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-blue-100 p-4 py-12">
      <div className="bg-white mx-auto shadow-2xl max-w-4xl rounded-lg">
        <div
          className="relative w-full h-[320px] md:h-[450px] bg-center bg-cover rounded-t-lg"
          style={{ backgroundImage: "url(/images/contact2.avif)" }}
        >
          <div className="absolute bg-black/65 inset-0 flex flex-col justify-center px-6 md:px-12 text-white rounded-t-lg">
            <h1 className="text-lg sm:text-xl font-semibold">CONTACT US</h1>
            <h1 className="text-2xl sm:text-3xl border-b-[4px] pb-2 border-blue-900">
              Get Our Contact Information
            </h1>
            <div className="mt-3 space-y-2">
              <Icons type="primary" icon="./icons/call.svg" name="9265646507" />
              <Icons type="primary" icon="./icons/email.svg" name="keshavdigital@gmail.com" />
              <Icons type="primary" icon="./icons/location.svg" name="456, Textile St. Surat, India" />
              <Icons type="primary" icon="./icons/time.svg" name="Mon-Fri: 9:00 AM - 5:00 PM" />
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 w-full">
          <form onSubmit={submitForm}>
            <label className="text-base sm:text-lg font-semibold">Your Name</label>
            <input
              className="py-2 px-3 w-full outline-none bg-blue-100 rounded-md focus:ring-2 focus:ring-blue-600"
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
              value={name}
              required
            />

            <label className="text-base sm:text-lg font-semibold mt-4">Your Email</label>
            <input
              className="py-2 px-3 w-full outline-none bg-blue-100 rounded-md focus:ring-2 focus:ring-blue-600"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              value={email}
              required
            />

            <label className="text-base sm:text-lg font-semibold mt-4">Your Number</label>
            <input
              className="py-2 px-3 w-full outline-none bg-blue-100 rounded-md focus:ring-2 focus:ring-blue-600"
              onChange={(e) => setMobile(e.target.value)}
              type="tel"
              placeholder="Enter your number"
              value={mobile}
              required
            />

            <label className="text-base sm:text-lg font-semibold mt-4">Your Message</label>
            <textarea
              className="py-2 px-3 w-full h-[150px] outline-none bg-blue-100 rounded-md resize-none focus:ring-2 focus:ring-blue-600"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              value={message}
              required
            ></textarea>

            {error && <p className="text-red-500 text-center bg-red-100 p-2 rounded-md">{error}</p>}
            {success && <p className="text-green-500 text-center bg-green-100 p-2 rounded-md">{success}</p>}

            <div className="mt-6">
              <button
                className="text-white hover:cursor-pointer bg-blue-900 py-2 px-4 rounded-lg text-xl"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
