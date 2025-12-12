// lib/email.js
import nodemailer from "nodemailer";

const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

export async function sendBookingEmail(toEmail, booking) {
  const transporter = createTransporter();

  // Format start/end times
  const start = new Date(booking.startTime);
  const end = new Date(booking.endTime);

  const formattedDate = start.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedStart = start.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedEnd = end.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Build service list
  const serviceList = booking.services
    .map(
      (s) =>
        `<li style="margin:4px 0;">${s.service.name} — <span style="color:#555">${s.durationMinutes} mins</span></li>`
    )
    .join("");

  // Google Calendar formatting
  function formatForCalendar(date) {
    return date.toISOString().replace(/[-:.]/g, "").split(".")[0] + "Z";
  }
  const gStart = formatForCalendar(start);
  const gEnd = formatForCalendar(end);

  const serviceSummary = booking.services
    .map((s) => `${s.service.name} (${s.durationMinutes} mins)`)
    .join(", ");

  const googleCalendarURL = `
https://calendar.google.com/calendar/render?action=TEMPLATE
&text=Barberz+Appointment
&dates=${gStart}/${gEnd}
&details=Barber:+${encodeURIComponent(booking.barber.name)}%0A
Services:+${encodeURIComponent(serviceSummary)}%0A
Booking+ID:+${booking.id}
&location=${encodeURIComponent("Barberz Grooming Studio")}
`.replace(/\s+/g, "");

  // Email HTML
  const html = `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; background:#f7f7f7; padding:30px;">
    <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:14px; overflow:hidden; box-shadow:0 8px 24px rgba(0,0,0,0.15);">

      <!-- Header -->
      <div style="background:#FFC300; padding:20px 30px;">
        <h2 style="margin:0; color:#111; font-size:26px; font-weight:700;">
          ✂️ Barberz — Booking Confirmed
        </h2>
      </div>

      <!-- Body -->
      <div style="padding:30px; color:#333; font-size:15px; line-height:1.6;">
        <p>Hi <strong>${booking.name}</strong>,</p>
        <p>Your appointment has been successfully booked. Here are the details:</p>

        <!-- Appointment Card -->
        <div style="background:#fafafa; border:1px solid #eee; border-radius:12px; padding:20px; margin-top:15px;">
          <h3 style="margin-top:0; color:#111; font-size:18px; font-weight:600;">
            📅 Appointment Details
          </h3>

          <p style="margin:8px 0;"><strong>Date:</strong> ${formattedDate}</p>
          <p style="margin:8px 0;"><strong>Start Time:</strong> ${formattedStart}</p>
          <p style="margin:8px 0;"><strong>End Time:</strong> ${formattedEnd}</p>
          <p style="margin:8px 0;"><strong>Total Duration:</strong> ${booking.totalDurationMinutes} mins</p>
          <p style="margin:8px 0;"><strong>Buffer:</strong> ${booking.bufferMinutes} mins</p>

          <hr style="border:none; border-top:1px solid #ddd; margin:15px 0;" />

          <h3 style="margin:0 0 10px 0; font-size:18px; color:#111; font-weight:600;">
            💈 Barber Assigned
          </h3>
          <p style="margin:8px 0;"><strong>Name:</strong> ${booking.barber.name}</p>
          <p style="margin:8px 0;"><strong>Specialty:</strong> ${booking.barber.specialty}</p>

          <hr style="border:none; border-top:1px solid #ddd; margin:15px 0;" />

          <h3 style="margin:0 0 10px 0; font-size:18px; color:#111; font-weight:600;">
            🧴 Services Selected
          </h3>
          <ul style="margin:0; padding-left:18px;">
            ${serviceList}
          </ul>
        </div>

        <!-- Google Calendar Button -->
        <div style="text-align:center; margin-top:25px;">
          <a href="${googleCalendarURL}"
            style="
              display:inline-block;
              padding:12px 20px;
              background:#4285F4;
              color:#fff;
              text-decoration:none;
              font-weight:bold;
              border-radius:8px;
              font-size:15px;
            ">
            📅 Add to Google Calendar
          </a>
        </div>

        <p style="margin-top:20px;">Your Booking ID: <strong>${booking.id}</strong></p>
        <p>If you need to reschedule or have questions, feel free to contact us.</p>
      </div>

      <!-- Footer -->
      <div style="background:#111; color:#ccc; padding:15px 30px; text-align:center; font-size:13px;">
        Barberz — Premium Grooming Studio ✨
      </div>
    </div>
  </div>
`;

  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: toEmail,
    subject: `Barberz — Appointment Confirmed`,
    html,
  });
}
