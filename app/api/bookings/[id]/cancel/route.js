// app/api/bookings/[id]/cancel/route.js
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const bookingId = params.id;
    const booking = await prisma.booking.findUnique({ where: { id: bookingId } });

    if (!booking) return NextResponse.json({ error: "Not found" }, { status: 404 });
    if (booking.userId !== session.user.id) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    // soft cancel
    await prisma.booking.update({
      where: { id: bookingId },
      data: { status: "cancelled" },
    });

    // optionally send cancellation email here (fire & forget)
    return NextResponse.json({ message: "Cancelled" });
  } catch (err) {
    console.error("Cancel Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
