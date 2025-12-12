// "use client";

// import { useState } from "react";
// import Link from "next/link";

// export default function DashboardLayoutClient({ children }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-[#0f141b] flex">
//       {/* MOBILE HEADER BUTTON */}
//       <button
//         onClick={() => setOpen(true)}
//         className="md:hidden absolute top-4 left-4 text-white px-3 py-1 bg-[#0b0d10] rounded-sm border border-gray-700"
//       >
//         ☰ Menu
//       </button>

//       {/* SIDEBAR */}
//       <aside
//         className={`
//           fixed md:static inset-y-0 left-0 
//           w-64 bg-[#0b0d10] border-r border-gray-800 p-6 
//           z-40 transform transition-transform duration-300
//           ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
//         `}
//       >
//         {/* Close button (mobile only) */}
//         <button
//           onClick={() => setOpen(false)}
//           className="md:hidden text-white mb-4"
//         >
//           ✕ Close
//         </button>

//         <Link href="/" className="text-2xl font-bold text-amber-300 mb-6 block">
//           BARBERZ
//         </Link>

//         <nav className="flex flex-col gap-3 text-sm">
//           <a
//             href="/dashboard"
//             className="px-3 py-2 rounded-md bg-[#0f141b] border border-gray-700 text-amber-200"
//           >
//             Dashboard
//           </a>

//           <a
//             href="/auth/signout"
//             className="px-3 py-2 rounded-md text-gray-300 hover:text-amber-200"
//           >
//             Logout
//           </a>
//         </nav>
//       </aside>

//       {/* MAIN CONTENT */}
//       <main className="flex-1 p-6 md:p-12">{children}</main>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import Link from "next/link";

export default function DashboardLayoutClient({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f141b] flex">

      <aside
        className={`fixed md:static inset-y-0 left-0 z-40 w-64 bg-[#0b0d10] border-r border-gray-800 p-6
          transform ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
          transition-transform duration-300
        `}
      >
        <Link href="/" className="text-2xl font-bold text-amber-300 block mb-6">
          BARBERZ
        </Link>

        <nav className="flex flex-col gap-3 text-sm">
          <Link
            href="/dashboard"
            className="px-3 py-2 rounded-md bg-[#0f141b] border border-gray-700 text-amber-200"
          >
            Dashboard
          </Link>

          <Link
            href="/auth/signout"
            className="px-3 py-2 rounded-md text-gray-300 hover:text-amber-200"
          >
            Logout
          </Link>
        </nav>
      </aside>

      <div className="flex-1 p-6 md:p-12">

        <button
          className="md:hidden bg-[#0b0d10] px-4 py-2 rounded mb-4 text-white"
          onClick={() => setOpen(true)}
        >
          ☰ Menu
        </button>

        {children}
      </div>
    </div>
  );
}
