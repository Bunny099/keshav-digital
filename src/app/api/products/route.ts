import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
    try {
        const products = await prisma.product.findMany();
        return NextResponse.json({ products }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: "server error " }, { status: 500 })
    }


}

export async function POST(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if (!session || !session.user?.id) {
            return NextResponse.json({ error: "unauthorized" }, { status: 401 });
        }
        const adminId = session.user?.id;

        const body = await req.json();
        const { title, images, description, price } = body;
        if (!title || !images || !description || !price) {
            return NextResponse.json({ error: "All field are required." }, { status: 400 })
        }
        const product = await prisma.product.create({ data: { title, images, description, price, ownerId: adminId } })
        
        return NextResponse.json({ product }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: "Error while creating products" },{status:500})
    }
}


export async function DELETE(req:NextRequest) {
    try{
        const session = await getServerSession(authOptions);
        if(!session || !session?.user.id){
            return NextResponse.json({error:"unauthorized"},{status:401})
        }
        const adminId = session.user.id;
        const body = await req.json();
        const {productId} = body;
        const ownerId = session.user.id
        if(!productId || typeof productId !== "number"){
            return NextResponse.json({error:"Invalid productid!"},{status:400})
        }
        const product = await prisma.product.findUnique({where:{id:productId}});
        if(!product || product.ownerId !== adminId){
            return NextResponse.json({error:"Not allowed or product not found!"},{status:400})
        }
        await prisma.product.delete({where:{id:productId}})
        return NextResponse.json({message:"Product deleted successfully!"},{status:200})


    }catch(error){
        return NextResponse.json({error:"Failed to delete Product!"},{status:500})
    }


}