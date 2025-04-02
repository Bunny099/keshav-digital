import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { rootEmail, subEmail, subPassword } = body;
        const rootAdmin = await prisma.admin.findFirst({ where: { email: rootEmail, role: "root" } });
        if (!rootAdmin) {
            return NextResponse.json({ error: "Invalid root admin email" }, { status: 400 })
        }
        const existingSubadmins = await prisma.admin.count({ where: { role: "sub" } });
        if (existingSubadmins >= 2) {
            return NextResponse.json({ error: "only two sub-admin allow" }, { status: 400 })
        }
        const subAdminExist = await prisma.admin.findUnique({where:{email:subEmail}});
        if(subAdminExist){
            return NextResponse.json({error:"Sub-Admin Email already exists."},{status:400})
        }
        const subHashPass = await bcrypt.hash(subPassword, 5)
        const subAdmin = await prisma.admin.create({ data: { email: subEmail, password: subHashPass, role: "sub" } })
       
        return NextResponse.json({ subAdmin }, { status: 201 })
    } catch (error) {
        console.log("post/subadmin error:",error)
        return NextResponse.json({ error: "internal server error" }, { status: 500 })
    }
}

export async function PUT(req: NextRequest) {
    try {
        const body = await req.json();
        const { rootEmail, subEmail, newPassword } = body;
        const [rootAdmin,subAdmin] = await Promise.all([
            prisma.admin.findFirst({where:{email:rootEmail,role:"root"}}),
            prisma.admin.findFirst({where:{email:subEmail,role:"sub"}})
        ])
       
        if (!rootAdmin) {
            return NextResponse.json({ error: "Root Admin not found!" }, { status: 400 })
        }
        if (!subAdmin) {
            return NextResponse.json({ error: "Sub Admin not found!" }, { status: 400 })
        }
        // hashing password
        const newSubHashPass = await bcrypt.hash(newPassword, 6);
        const updatedSubAdmin = await prisma.admin.update({ where: { id: subAdmin.id }, data: { password: newSubHashPass } });
        if (!updatedSubAdmin) {
            return NextResponse.json({ error: "Error while updating password" }, { status: 400 })
        }
        return NextResponse.json({ updatedSubAdmin }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}