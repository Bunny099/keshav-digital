"use client"
import { useEffect, useState } from "react"

export default function DashboardContent(){
    const [inquiries,setInquiries] = useState(0)
    const [subAdmin,setSubAdmins] = useState(0);

    useEffect(()=>{
        const totalInquiry = async()=>{
            try{
                const res= await fetch("/api/inquiry");
                const data = await res.json();
                console.log(data)
                if (data && data.totalInquiries !== undefined) {
                    setInquiries(data.totalInquiries);
                } else {
                    console.error("Unexpected API response format:", data);
                }
            }catch(error){
                console.log("error while geting total inquiry",error)
            }
           
            
        }
        const totalSubAdmins = async()=>{
            try{
                const res = await fetch("/api/putadmin");
                const data = await res.json();
                if (data && data.subAdmins !== undefined) {
                    setSubAdmins(data.subAdmins);
                } else {
                    console.error("Unexpected API response format:", data);
                }
            }catch(error){
                console.log("Error while geting sub admins")
            }
           
            
        }
        totalInquiry()
        totalSubAdmins()
    },[])
    return <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-black text-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-medium">Total Users</h2>
        <p className="text-3xl font-bold">{inquiries}</p>
      </div>
      <div className="bg-black text-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-medium">Total Inquiries</h2>
        <p className="text-3xl font-bold">{inquiries}</p>
      </div>
      <div className="bg-black text-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-medium">Sub-Admins</h2>
        <p className="text-3xl font-bold">{subAdmin}</p>
      </div>
    </div>
}