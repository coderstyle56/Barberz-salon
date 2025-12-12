import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try{
        const services = await prisma.service.findMany({
            where: {isActive: true},
            orderBy: {name:"asc"},
        });

        return NextResponse.json(services);
    } catch (err){
        console.error("SERVICES API ERROR:",err);
        return NextResponse.json({ error: "Failed to fetch services"},{status:500});
    }
}