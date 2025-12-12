import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";
import { sendBookingEmail } from "@/lib/email";

const BUFFER_MINUTES = 10;

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    // Parse body
    const body = await req.json();
    const { name, email, phone, services, barberId, date, time } = body;

    if (!name || !email || !phone || !date || !time || !barberId) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    if (!Array.isArray(services) || services.length === 0) {
      return new Response(
        JSON.stringify({ error: "Please select at least one service." }),
        { status: 400 }
      );
    }

    // Load barber
    const selectedBarber = await prisma.barber.findUnique({
      where: { id: barberId },
    });

    if (!selectedBarber || !selectedBarber.isActive) {
      return new Response(
        JSON.stringify({ error: "Selected barber is not available." }),
        { status: 400 }
      );
    }

    // Load services
    const serviceRecords = await prisma.service.findMany({
      where: {
        id: { in: services },
        isActive: true,
      },
    });

    if (serviceRecords.length === 0) {
      return new Response(
        JSON.stringify({ error: "Selected services are invalid." }),
        { status: 400 }
      );
    }

    const missingCount = services.length - serviceRecords.length;
    if (missingCount > 0) {
      return new Response(
        JSON.stringify({
          error: "One or more selected services do not exist.",
        }),
        { status: 400 }
      );
    }

    // Calculate duration
    const baseTotalMinutes = serviceRecords.reduce(
      (sum, s) => sum + s.baseDurationMinutes,
      0
    );

    const speedFactor = selectedBarber.speedFactor ?? 1.0;
    const effectiveWorkMinutes = Math.round(baseTotalMinutes * speedFactor);
    const totalDurationMinutes = effectiveWorkMinutes + BUFFER_MINUTES;

    // Build start and end time
    const startTime = new Date(`${date}T${time}:00`);
    if (Number.isNaN(startTime.getTime())) {
      return new Response(
        JSON.stringify({ error: "Invalid date or time format." }),
        { status: 400 }
      );
    }

    const endTime = new Date(
      startTime.getTime() + totalDurationMinutes * 60 * 1000
    );

    // Strict conflict check
    const conflicting = await prisma.booking.findFirst({
      where: {
        barberId,
        startTime: { lt: endTime },
        endTime: { gt: startTime },
      },
    });

    if (conflicting) {
      return new Response(
        JSON.stringify({
          error:
            "This time slot is already booked for the selected barber. Please choose another time or barber.",
        }),
        { status: 409 }
      );
    }

    // Save booking
    const booking = await prisma.booking.create({
      data: {
        userId: session.user.id,
        name,
        email,
        phone,
        barberId,
        startTime,
        endTime,
        totalDurationMinutes,
        bufferMinutes: BUFFER_MINUTES,
        services: {
          create: serviceRecords.map((s) => ({
            serviceId: s.id,
            durationMinutes: Math.round(s.baseDurationMinutes * speedFactor),
          })),
        },
      },
      include: {
        barber: true,
        services: {
          include: { service: true },
        },
      },
    });

    // Send confirmation mail
    try {
      await sendBookingEmail(email, booking);
    } catch (e) {
      console.error("Email Error:", e);
    }

    return new Response(
      JSON.stringify({
        message: "Booking Successful",
        bookingId: booking.id,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Booking Error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
