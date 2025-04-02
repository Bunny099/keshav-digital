"use client"
import { CiLogout } from "react-icons/ci";
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation";
export default function LogoutBtn(){
    const router = useRouter()
    async function logout(){
        await signOut({redirect:false});
        router.push("/admin")
    }

    return <div>
    <button
      onClick={logout}
      className=" w-14 sm:w-full justify-center flex bg-black  hover:bg-red-700 hover:cursor-pointer text-white py-2 px-4 rounded-lg transition-all"
    >
      <CiLogout size={24}  />
      <span className="hidden sm:block">Logout</span>
    </button>
  </div>
}