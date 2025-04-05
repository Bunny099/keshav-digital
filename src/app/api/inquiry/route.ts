import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
    try {
        const inquiries = await prisma.inquiries.findMany();
        const totalInquiries = await prisma.inquiries.count();
        return NextResponse.json({ inquiry: inquiries, totalInquiries }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: "error while geting table detail" }, { status: 500 })
    }
}

export async function POST(req: NextRequest) {
    try {
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
        if (newInquiry) {
            return NextResponse.json({ inquiries: newInquiry }, { status: 200 })
        } else {
            return NextResponse.json({ error: "data not created" }, { status: 500 })
        }

    } catch (error) {
        return NextResponse.json({ error: "error while geting inquiries" }, { status: 500 })
    }


}

export async function DELETE(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if (!session || !session?.user.id) {
            return NextResponse.json({ error: "unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        const { inquiryId } = body;

        if (!inquiryId || typeof inquiryId !== "number") {
            return NextResponse.json({ error: "Invalid inquiryId!" }, { status: 400 });
        }

        const inquiry = await prisma.inquiries.findUnique({
            where: { id: inquiryId }
        });

        if (!inquiry) {
            return NextResponse.json({ error: "Inquiry not found!" }, { status: 404 });
        }

        await prisma.inquiries.delete({
            where: { id: inquiryId }
        });

        return NextResponse.json({ message: "Inquiry deleted successfully!" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: "Failed to delete Inquiry!" }, { status: 500 });
    }
}
