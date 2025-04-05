"use client"
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";

export default function ProductLayout({children}:{children:React.ReactNode}){
    return <div className="min-h-screen w-full">
        <Navbar/>
        <main className="px-4">{children}</main>
        
        <Footer/>
    </div>
}