"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import Image from "next/image";
export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      role,
      redirect: false,
    });
    console.log(result);
    if (result?.error) {
      setError("Invalid Email or Password");
    } else {
      router.push("/admin/dashboard");
      setError(null);
    }
  }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center ">
        <div className="bg-white p-8 rounded-3xl shadow-xl flex items-center gap-6 w-[850px] max-w-full">
          <div className="hidden md:block w-1/2">

           
            <Image
              src="/images/adminbg.jpg"
              alt="Admin Login"
              width={500} 
              height={500} 
              className="rounded-3xl w-full h-auto"
              priority 
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-center mb-6">Admin Login</h2>
            <form className="space-y-4" onSubmit={handleLogin}>
              <div className="relative">
                <FiMail className="absolute left-3 top-4 text-gray-500" />
                <input
                  className="py-3 pl-10 pr-4  w-full outline-none bg-blue-50 rounded-lg focus:ring-1 focus:ring-gray-800"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="relative">
                <FiLock className="absolute left-3 top-4 text-gray-500" />
                <input
                  className="py-3 pl-10 pr-4  w-full outline-none bg-blue-50 rounded-lg focus:ring-1 focus:ring-gray-800"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Enter Your Password"
                  required
                />
              </div>
              <div className="relative">
                <FiUser className="absolute left-3 top-4 text-gray-500" />
                <input
                  className="py-3 pl-10 pr-4  w-full outline-none bg-blue-50 rounded-lg focus:ring-1 focus:ring-gray-800"
                  onChange={(e) => setRole(e.target.value)}
                  value={role}
                  type="text"
                  placeholder="Enter Your Role"
                  required
                />
              </div>
              {error && (
                <p className="text-red-500 text-center bg-red-100 p-2 rounded-md">
                  {error}
                </p>
              )}
              <button
                className="bg-black text-white w-full py-3 rounded-lg hover:bg-gray-800 transition-all"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
