import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(req: NextRequest) {
    try {
        const inquiries = await prisma.inquiries.findMany();
        const totalInquiries = await prisma.inquiries.count();
        return NextResponse.json({ inquiry:inquiries,totalInquiries }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: "error while geting table detail" }, { status:500 })
    }
}

export async function POST(req: NextRequest) {
    try{
        const body = await req.json();
        const { name, email, mobile, message } = body;
        const newInquiry = await prisma.inquiries.create({
            data: {
                name,
                email,
                mobile,
                message
            }
        })
        if(newInquiry){
            return NextResponse.json({ inquiries:newInquiry }, { status: 200 })
        }else{
            return NextResponse.json({error:"data not created"},{status:500})
        }
       
    }catch(error){
        return NextResponse.json({error:"error while geting inquiries"},{status:500})
    }
   

}

