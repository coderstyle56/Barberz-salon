// app/dashboard/page.jsx
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import BookingCard from "@/components/BookingCard";
// import BookingCard from "@/components/BookingCard";


export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    const { redirect } = await import("next/navigation");
    redirect("/auth/signin");
  }

  const userId = session.user.id;
  const now = new Date();

  const bookings = await prisma.booking.findMany({
  where: { 
    userId, 
    status: "active",        // ← ADD THIS
    endTime: { gte: now } 
  },
  orderBy: { startTime: "asc" },
  include: {
    barber: true,
    services: { include: { service: true } },
  },
});


  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const bookingsToday = bookings.filter((b) => {
    const s = new Date(b.startTime);
    return (
      s.getDate() === today.getDate() &&
      s.getMonth() === today.getMonth() &&
      s.getFullYear() === today.getFullYear()
    );
  }).length;

  const bookingsTomorrow = bookings.filter((b) => {
    const s = new Date(b.startTime);
    return (
      s.getDate() === tomorrow.getDate() &&
      s.getMonth() === tomorrow.getMonth() &&
      s.getFullYear() === tomorrow.getFullYear()
    );
  }).length;

  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">
          Welcome, {session.user.name}
        </h1>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border border-gray-800">
            <div className="text-sm text-gray-300">Bookings today</div>
            <div className="text-2xl font-bold text-amber-300">
              {bookingsToday}
            </div>
          </div>

          <div className="p-4 rounded-lg border border-gray-800">
            <div className="text-sm text-gray-300">Bookings tomorrow</div>
            <div className="text-2xl font-bold text-amber-300">
              {bookingsTomorrow}
            </div>
          </div>

          <div className="p-4 rounded-lg border border-gray-800">
            <div className="text-sm text-gray-300">Total bookings</div>
            <div className="text-2xl font-bold text-amber-300">
              {bookings.length}
            </div>
          </div>
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Your Bookings
        </h2>

        <div className="space-y-4">
          {bookings.length === 0 ? (
            <div className="p-6 rounded-xl border border-gray-800 bg-[#0b0d10]">
              <p className="text-gray-300">
                You have no upcoming bookings.{" "}
                <a className="text-amber-300" href="/">
                  Book a service
                </a>
                .
              </p>
            </div>
          ) : (
            bookings.map((b) => (
              <BookingCard key={b.id} booking={b} />
            ))
          )}
        </div>
      </section>
    </>
  );
}
