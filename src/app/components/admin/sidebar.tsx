"use client"
import { useRouter } from "next/navigation";
import LogoutBtn from "./logout";
import { CiHome, CiSettings,CiViewTable} from "react-icons/ci";
export default function Sidebar() {
    const router = useRouter()
  const menuItems = [
    { name: "Home", icon:<CiHome size={24}/>, link: "/admin/dashboard" },
    { name: "Table",icon:<CiViewTable size={24}/>, link: "/admin/dashboard/table" },
    { name: "Settings",icon:<CiSettings size={24}/> ,link: "/admin/dashboard/settings" },
  ];
  return <div>
   
    <div className="bg-blue-50 min-h-screen flex flex-col w-22 sm:w-50 border-r-1 border-gray-200 text-black p-4 ">
      <div className="space-y-2">
        {menuItems.map((item, index) => (
          <div key={index} onClick={()=>{router.push(item.link)}}  className="flex items-center gap-x-3 px-4 py-2 rounded-xl hover:bg-black hover:cursor-pointer transition-all hover:text-white ">
            {item.icon}
            <span className="text-lg hidden  sm:block ">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <LogoutBtn/>
      </div>
      
    </div>
  </div>;
}
