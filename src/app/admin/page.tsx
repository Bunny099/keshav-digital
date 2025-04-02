"use client";
import { useRouter, redirect } from "next/navigation";
import Login from "../components/admin/login";

export default function Admin() {
  const router = useRouter();
  return (
    <div className="flex flex-col  min-h-screen w-full">
      <div>
        <Login />
      </div>
    </div>
  );
}
