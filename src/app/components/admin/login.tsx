"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { FiMail, FiLock, FiUser, FiEye, FiEyeOff } from "react-icons/fi";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  async function handleLogin(e:React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const result = await signIn("credentials", {
      email,
      password,
      role,
      redirect: false,
    });
    setLoading(false);
    
    if (result?.error) {
      setError("Invalid Email or Password");
    } else {
      router.push("/admin/dashboard");
      setError(null);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-6">
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
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Admin Login</h2>
          <form className="space-y-5" onSubmit={handleLogin}>
            <div className="relative">
              <FiMail className="absolute left-3 top-4 text-gray-500" />
              <input
                className="py-3 pl-10 pr-4 w-full outline-none bg-blue-100 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
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
                className="py-3 pl-10 pr-12 w-full outline-none bg-blue-100 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                required
              />
              <span
                className="absolute right-3 top-4 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
            <div className="relative">
              <FiUser className="absolute left-3 top-4 text-gray-500" />
              <input
                className="py-3 pl-10 pr-4 w-full outline-none bg-blue-100 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                onChange={(e) => setRole(e.target.value)}
                value={role}
                type="text"
                placeholder="Enter Your Role"
                required
              />
            </div>
            {error && (
              <p className="text-red-500 text-center bg-red-100 p-2 rounded-md">{error}</p>
            )}
            <button
              className="bg-black text-white w-full py-3 rounded-lg hover:bg-gray-800 transition-all flex justify-center items-center gap-2"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <span className="animate-spin border-4 border-white border-t-transparent rounded-full w-5 h-5"></span>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
