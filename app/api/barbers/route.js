import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try{
        const barbers = await prisma.barber.findMany({
            where: {isActive: true},
            orderBy: {name: "asc"},
        });

        return NextResponse.json(barbers);
    }catch(err){
        console.error("BARBERS API ERROR:", err);
        return NextResponse.json({ error: "Failed to fetch barbers" },{status:500});
    }
}