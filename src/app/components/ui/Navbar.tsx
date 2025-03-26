"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAdminDropdownOpen, setAdminDropdownOpen] = useState(false);
  const [isAdminLoginVisible, setAdminLoginVisible] = useState(true);

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-3xl text-blue-900 font-semibold">
            Keshav Digital
          </h1>

          <div className="hidden md:flex space-x-6 text-lg">
            <Link href="#" className="hover:text-blue-600">
              GALLERY
            </Link>
            <Link href="#" className="hover:text-blue-600">
              MACHINES
            </Link>

            <div className="relative">
              <button
                className="flex items-center hover:text-blue-600"
                onClick={() => setAdminDropdownOpen(!isAdminDropdownOpen)}
              >
                ADMIN <span className="ml-1">▼</span>
              </button>
              {isAdminDropdownOpen && (
                <div className="absolute top-full left-0 bg-blue-50 shadow-xl rounded-md w-40 mt-2 z-50">
                  {isAdminLoginVisible && (
                    <button
                      onClick={() => setAdminLoginVisible(false)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                      Admin Login
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <div className="bg-blue-900 p-2 rounded-full">
              <Image
                src="/icons/call.svg"
                alt="Call Icon"
                width={24}
                height={24}
              />
            </div>
            <div className="text-center">
              <h1 className="text-lg font-semibold">Inquiry Now</h1>
              <p className="text-gray-500">+91 98765 43210</p>
            </div>
          </div>

          <button
            className="md:hidden block text-gray-700"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden space-y-2">
            <Link href="#" className="block px-4 py-2">
              GALLERY
            </Link>
            <Link href="#" className="block px-4 py-2">
              MACHINES
            </Link>

            <button
              className="block w-full text-left px-4 py-2"
              onClick={() => setAdminDropdownOpen(!isAdminDropdownOpen)}
            >
              ADMIN {isAdminDropdownOpen ? "▲" : "▼"}
            </button>
            {isAdminDropdownOpen && (
              <div className="bg-gray-100">
                {isAdminLoginVisible && (
                  <button
                    onClick={() => setAdminLoginVisible(false)}
                    className="block w-full text-left px-6 py-2"
                  >
                    Admin Login
                  </button>
                )}
              </div>
            )}

            <div className="flex items-center space-x-2 px-4 py-4">
              <div className="bg-blue-900 p-2 rounded-full">
                <Image
                  src="/icons/call.svg"
                  alt="Call Icon"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <h1 className="text-lg font-semibold">Inquiry Now</h1>
                <p className="text-gray-500">+91 98765 43210</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
