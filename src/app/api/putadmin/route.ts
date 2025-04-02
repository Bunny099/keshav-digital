
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
export async function GET() {
    try {
        const allAdmins = await prisma.admin.findMany();
        const subAdmins = await prisma.admin.count({ where: { role: "sub" } })
        return NextResponse.json({ admins: allAdmins, subAdmins }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: "error while geting admin data" }, { status: 400 })
    }

}
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, password, username, role } = body;
        const hashPass = await bcrypt.hash(password, 4)
        const admin = await prisma.admin.create({ data: { email, username, role, password: hashPass } })
        if (admin) {
            return NextResponse.json({ admin: admin }, { status: 201 })
        } else {
            return NextResponse.json({ admin }, { status: 400 })
        }
    } catch (error) {
        return NextResponse.json({ error: "error while creating admin" }, { status: 400 })
    }

}
export async function PUT(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, password, newEmail, newPassword } = body;

        const admin = await prisma.admin.findUnique({ where: { email: email } });
        if (!admin) {
            return NextResponse.json({ error: "admin not found" }, { status: 400 })
        }
        const existingAdmin = await bcrypt.compare(password, admin?.password);
        if (!existingAdmin) {
            return NextResponse.json({ error: "incorrect email or password" }, { status: 400 })
        } else {
            const hashNewPass = await bcrypt.hash(newPassword, 5);
            const updatedAdmin = await prisma.admin.update({ where: { email: email }, data: { email: newEmail, password: hashNewPass } });
            if (updatedAdmin) {
                return NextResponse.json({ updatedAdmin }, { status: 200 })
            }
            return NextResponse.json({ error: "error while updating the email and password" }, { status: 400 })
        }
    } catch (error) {
        return NextResponse.json({ error: "admin not updated" }, { status: 400 })
    }
}