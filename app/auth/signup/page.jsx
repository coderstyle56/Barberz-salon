// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import toast, { Toaster } from "react-hot-toast";
// import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

// export default function SignUpPage() {
//   const router = useRouter();
//   const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
//   const [loading, setLoading] = useState(false);

//   function onChange(e) {
//     setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();

//     if (!form.name || !form.email || !form.password) {
//       toast.error("Please fill all fields.");
//       return;
//     }
//     if (form.password.length < 6) {
//       toast.error("Password should be at least 6 characters.");
//       return;
//     }
//     if (form.password !== form.confirm) {
//       toast.error("Passwords do not match.");
//       return;
//     }

//     try {
//       setLoading(true);
//       // placeholder API — replace with your backend
//       const res = await fetch("/api/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name: form.name, email: form.email, password: form.password }),
//       });
//       const data = await res.json();

//       if (!res.ok) {
//         toast.error(data?.message || "Signup failed");
//         setLoading(false);
//         return;
//       }

//       toast.success("Account created successfully!");
//       setTimeout(() => router.push("/auth/signin"), 800);
//     } catch (err) {
//       console.error(err);
//       toast.error("Something went wrong");
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#fff7e6] px-4">
//       <Toaster position="top-right" />
//       <div className="max-w-3xl w-full bg-white rounded-2xl p-8 shadow-lg">
//         <h2 className="text-3xl font-extrabold text-gray-900">Create your account</h2>
//         <p className="mt-2 text-gray-600">Join Barberz — book appointments faster and manage your bookings.</p>

//         <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//           <label className="block">
//             <span className="text-sm text-gray-700 block mb-2">Full name</span>
//             <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
//               <FaUser className="text-gray-400" />
//               <input
//                 name="name"
//                 value={form.name}
//                 onChange={onChange}
//                 placeholder="Your name"
//                 className="bg-transparent outline-none w-full text-gray-800 placeholder:text-gray-400"
//               />
//             </div>
//           </label>

//           <label className="block">
//             <span className="text-sm text-gray-700 block mb-2">Email</span>
//             <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
//               <FaEnvelope className="text-gray-400" />
//               <input
//                 name="email"
//                 value={form.email}
//                 onChange={onChange}
//                 placeholder="you@email.com"
//                 type="email"
//                 className="bg-transparent outline-none w-full text-gray-800 placeholder:text-gray-400"
//               />
//             </div>
//           </label>

//           <label className="block">
//             <span className="text-sm text-gray-700 block mb-2">Password</span>
//             <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
//               <FaLock className="text-gray-400" />
//               <input
//                 name="password"
//                 value={form.password}
//                 onChange={onChange}
//                 placeholder="Create a password"
//                 type="password"
//                 className="bg-transparent outline-none w-full text-gray-800 placeholder:text-gray-400"
//               />
//             </div>
//           </label>

//           <label className="block">
//             <span className="text-sm text-gray-700 block mb-2">Confirm</span>
//             <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
//               <FaLock className="text-gray-400" />
//               <input
//                 name="confirm"
//                 value={form.confirm}
//                 onChange={onChange}
//                 placeholder="Repeat password"
//                 type="password"
//                 className="bg-transparent outline-none w-full text-gray-800 placeholder:text-gray-400"
//               />
//             </div>
//           </label>

//           <button
//             type="submit"
//             disabled={loading}
//             className="md:col-span-2 mt-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-xl transition disabled:opacity-60"
//           >
//             {loading ? "Creating..." : "Create account"}
//           </button>
//         </form>

//         <p className="mt-4 text-sm text-gray-600">
//           Already have an account?{" "}
//           <Link href="/auth/signin" className="text-amber-600 font-semibold">
//             Sign in
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import toast, { Toaster } from "react-hot-toast";
// import { FaEnvelope, FaLock } from "react-icons/fa";
// import Link from "next/link";

// export default function SignInPage() {
//   const router = useRouter();
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);

//   function onChange(e) {
//     setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setLoading(true);

//     const res = await signIn("credentials", {
//       email: form.email,
//       password: form.password,
//       redirect: false,
//     });

//     if (res.error) {
//       toast.error("Invalid email or password");
//       setLoading(false);
//       return;
//     }

//     toast.success("Signed in!");
//     setTimeout(() => router.push("/"), 500);  // redirect to home
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#fff7e6] px-4">
//       <Toaster position="top-right" />

//       <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-lg">
//         <h2 className="text-3xl font-extrabold text-gray-900">Welcome back</h2>
//         <p className="mt-2 text-gray-600">Sign in to continue booking.</p>

//         <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//           <label className="block">
//             <span className="text-sm text-gray-700 block mb-2">Email</span>
//             <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
//               <FaEnvelope className="text-gray-400" />
//               <input
//                 name="email"
//                 value={form.email}
//                 onChange={onChange}
//                 placeholder="you@email.com"
//                 type="email"
//                 className="bg-transparent outline-none w-full text-gray-800 placeholder:text-gray-400"
//               />
//             </div>
//           </label>

//           <label className="block">
//             <span className="text-sm text-gray-700 block mb-2">Password</span>
//             <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
//               <FaLock className="text-gray-400" />
//               <input
//                 name="password"
//                 value={form.password}
//                 onChange={onChange}
//                 placeholder="Your password"
//                 type="password"
//                 className="bg-transparent outline-none w-full text-gray-800 placeholder:text-gray-400"
//               />
//             </div>
//           </label>

//           <button
//             type="submit"
//             disabled={loading}
//             className="mt-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-xl transition disabled:opacity-60 w-full"
//           >
//             {loading ? "Signing in..." : "Sign in"}
//           </button>
//         </form>

//         <p className="mt-4 text-sm text-gray-600">
//           Don’t have an account?{" "}
//           <Link href="/auth/signup" className="text-amber-600 font-semibold">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export default function SignUpPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [loading, setLoading] = useState(false);

  function onChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirm) {
      toast.error("Please fill all fields.");
      return;
    }

    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    if (form.password !== form.confirm) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Signup failed");
        setLoading(false);
        return;
      }

      toast.success("Account created successfully!Logging you in....");

      await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: true,
        callbackUrl: "/", //send user to homepage immediately
      });

      // setTimeout(() => router.push("/auth/signin"), 800);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff7e6] px-4">
      <Toaster position="top-right" />
      <div className="max-w-lg w-full bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-gray-600">
          Join Barberz — book appointments faster and manage your experience.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {/* Name */}
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
            <FaUser className="text-gray-400" />
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Full Name"
              className="bg-transparent outline-none w-full"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
            <FaEnvelope className="text-gray-400" />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="you@email.com"
              className="bg-transparent outline-none w-full"
            />
          </div>

          {/* Password */}
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
            <FaLock className="text-gray-400" />
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={onChange}
              placeholder="Password"
              className="bg-transparent outline-none w-full"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
            <FaLock className="text-gray-400" />
            <input
              name="confirm"
              type="password"
              value={form.confirm}
              onChange={onChange}
              placeholder="Confirm Password"
              className="bg-transparent outline-none w-full"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-xl transition disabled:opacity-60"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-amber-600 font-semibold">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
