"use client";
import { useState } from "react";
import Icons from "@/app/components/ui/Icons";
import Button from "@/app/components/ui/Button";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  async function submitForm() {
    console.log("Form Data:", { name, email, number, message });
  }

  return (
    <div className="bg-blue-100 p-4 py-12">
      <div className="bg-white mx-auto shadow-2xl max-w-4xl rounded-lg">
        {/* 📌 Top Image Section with Contact Details */}
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

        {/* 📌 Inquiry Form Section */}
        <div className="p-6 md:p-8 w-full">
          <label className="text-base sm:text-lg font-semibold">Your Name</label>
          <input
            className="py-2 px-3 w-full outline-none bg-blue-100 rounded-md focus:ring-2 focus:ring-blue-600"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
          />

          <label className="text-base sm:text-lg font-semibold mt-4">Your Email</label>
          <input
            className="py-2 px-3 w-full outline-none bg-blue-100 rounded-md focus:ring-2 focus:ring-blue-600"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
          />

          <label className="text-base sm:text-lg font-semibold mt-4">Your Number</label>
          <input
            className="py-2 px-3 w-full outline-none bg-blue-100 rounded-md focus:ring-2 focus:ring-blue-600"
            onChange={(e) => setNumber(e.target.value)}
            type="tel"
            placeholder="Enter your number"
          />

          <label className="text-base sm:text-lg font-semibold mt-4">Your Message</label>
          <textarea
            className="py-2 px-3 w-full h-[150px] outline-none bg-blue-100 rounded-md resize-none focus:ring-2 focus:ring-blue-600"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
          ></textarea>

          <div className="mt-6">
            <Button onClick={submitForm} text="Send Inquiry" type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
