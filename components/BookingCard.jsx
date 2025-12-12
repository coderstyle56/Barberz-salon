"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function BookingCard({ booking }) {
  const [loading, setLoading] = useState(false);

  async function cancelBooking() {
    if (!confirm("Are you sure you want to cancel this booking?")) return;

    setLoading(true);

    try {
      const res = await fetch(`/api/bookings/${booking.id}/cancel`, {
        method: "POST",
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to cancel booking");
        setLoading(false);
        return;
      }

      toast.success("Booking cancelled");
      window.location.reload();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6 rounded-xl border border-gray-800 bg-[#0b0d10]">
      <h3 className="text-xl font-semibold text-amber-300 mb-2">
        {booking.barber.name}
      </h3>

      <p className="text-gray-300 mb-1">
        {new Date(booking.startTime).toLocaleString()}
      </p>

      <p className="text-gray-400 text-sm mb-3">
        Services:{" "}
        {booking.services.map((s) => s.service.name).join(", ")}
      </p>

      <button
        onClick={cancelBooking}
        disabled={loading}
        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm"
      >
        {loading ? "Cancelling..." : "Cancel Booking"}
      </button>
    </div>
  );
}
