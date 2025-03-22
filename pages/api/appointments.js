import nodemailer from "nodemailer";
import dbConnect from "@/utils/dbConnect";
import Appointment from "@/model/Appointment";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const startTime = Date.now(); // Track execution time
    await dbConnect();

    const { name, email, phone, service, date, time, barber } = req.body;

    if (!name || !email || !phone || !service || !date || !time || !barber) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // Immediately respond to client
    res.status(200).json({ message: "Appointment is being processed!" });

    // Process MongoDB save in the background
    const appointment = new Appointment({ name, email, phone, service, date, time, barber });
    await appointment.save();

    // Process email sending asynchronously
    sendEmail(email, name, service, barber, date, time);

    console.log("API Execution Time:", Date.now() - startTime, "ms");
  } catch (error) {
    console.error("Error booking appointment:", error);
    res.status(500).json({ message: "Error booking appointment" });
  }
}

// Extract email function to run in background
async function sendEmail(toEmail, name, service, barber, date, time) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Barberz Salon" <${process.env.EMAIL_USER}>`,
      to: toEmail,
      subject: "Appointment Confirmation",
      html: `<p>Hello <strong>${name}</strong>,</p>
             <p>Your appointment for <strong>${service}</strong> with <strong>${barber}</strong> has been successfully booked on <strong>${date}</strong> at <strong>${time}</strong>.</p>
             <p>Looking forward to serving you!</p>`,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Confirmation email sent to ${toEmail}`);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}




