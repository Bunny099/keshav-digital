"use client";
import { useRouter } from "next/navigation";
import { CiHome, CiSettings, CiViewTable, CiShoppingCart } from "react-icons/ci";
import LogoutBtn from "./logout";

export default function Navbar() {
  const router = useRouter();

  const menuItems = [
    { name: "Home", icon: <CiHome size={24} />, link: "/admin/dashboard" },
    { name: "Table", icon: <CiViewTable size={24} />, link: "/admin/dashboard/table" },
    { name: "Products", icon: <CiShoppingCart size={24} />, link: "/admin/dashboard/products" },
    { name: "Product Table", icon: <CiViewTable size={24} />, link: "/admin/dashboard/producttable" },
    { name: "Settings", icon: <CiSettings size={24} />, link: "/admin/dashboard/settings" },
  ];

  return (
    <nav className="w-full bg-blue-50 shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between">
     
      <div className="flex gap-2 flex-wrap">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => router.push(item.link)}
            className="flex items-center gap-2 text-gray-800 hover:text-white hover:bg-black px-3 py-2 rounded-md transition-all"
          >
            {item.icon}
            <span className="hidden sm:inline text-lg font-medium">{item.name}</span>
          </button>
        ))}
      </div>

     
      <div>
        <LogoutBtn />
      </div>
    </nav>
  );
}
