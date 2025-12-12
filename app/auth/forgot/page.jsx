"use client";

import { useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    try {
      setLoading(true);

      // Placeholder API — replace with your backend endpoint later
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to send reset link.");
        setLoading(false);
        return;
      }

      toast.success("Reset link sent successfully!");
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff7e6] px-4">
      <Toaster position="top-right" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl p-10 rounded-3xl"
      >
        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-gray-900 text-center">
          Forgot Password
        </h1>

        <p className="text-gray-700 text-center mt-3">
          Enter your email address and we’ll send you a reset link.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">

          <label className="block">
            <span className="text-sm text-gray-700 block mb-2">Email Address</span>

            <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <FaEnvelope className="text-amber-600 text-lg" />
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent outline-none w-full text-gray-700 placeholder:text-gray-400"
                required
              />
            </div>
          </label>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-600 text-white py-3 rounded-xl font-semibold 
                       hover:bg-amber-700 transition shadow-md disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {/* Bottom Link */}
        <p className="text-center mt-6 text-gray-700">
          Remember your password?{" "}
          <Link href="/auth/signin" className="text-amber-600 font-semibold">
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
