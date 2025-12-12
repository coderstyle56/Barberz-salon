import "./globals.css";
import { Toaster } from "react-hot-toast";
import SessionWrapper from "@/components/SessionWrapper";

export const metadata = {
  title: "Barberz Salon",
  description: "Premium barbershop services since 1990",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          <Toaster position="top-center" />
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
