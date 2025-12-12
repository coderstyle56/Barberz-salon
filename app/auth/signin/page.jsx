"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);

  function onChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.email || !form.password) {
      toast.error("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      const res = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false, // prevents redirect so we can show toast
      });

      if (res.error) {
        toast.error("Invalid email or password");
        setLoading(false);
        return;
      }

      toast.success("Signed in successfully!");
      setTimeout(() => router.push("/"), 800);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff7e6] px-4">
      <Toaster position="top-right" />
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div className="p-8">
          <h3 className="text-amber-600 tracking-[0.3em] font-semibold">
            WELCOME BACK
          </h3>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Sign in to Barberz
          </h1>
          <p className="mt-4 text-gray-700">
            Access your bookings, manage appointments and get priority services.
          </p>

          <p className="mt-6 text-sm text-gray-600">
            New here?{" "}
            <Link href="/auth/signup" className="text-amber-600 font-semibold">
              Create an account
            </Link>
          </p>
        </div>

        {/* Right / Form */}
        <div className="p-8 bg-[#141b23] rounded-2xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="text-sm text-gray-300 block mb-2">Email</span>
              <div className="flex items-center gap-3 bg-[#0f141b] p-3 rounded-lg border border-white/5">
                <FaEnvelope className="text-amber-500" />
                <input
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  type="email"
                  placeholder="your@email.com"
                  className="bg-transparent outline-none w-full text-white placeholder:text-gray-400"
                />
              </div>
            </label>

            <label className="block">
              <span className="text-sm text-gray-300 block mb-2">Password</span>
              <div className="flex items-center gap-3 bg-[#0f141b] p-3 rounded-lg border border-white/5">
                <FaLock className="text-amber-500" />
                <input
                  name="password"
                  value={form.password}
                  onChange={onChange}
                  type={showPwd ? "text" : "password"}
                  placeholder="Enter your password"
                  className="bg-transparent outline-none w-full text-white placeholder:text-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((s) => !s)}
                  className="text-gray-300"
                >
                  {showPwd ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-xl transition disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
