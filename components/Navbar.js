// import React from "react";
// import Link from "next/link"; // Import Next.js Link for navigation

// function Navbar() {
//   return (
//     <div className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg text-white p-4">
//       <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
//         {/* Company Name */}
//         <div className="flex-1 left-0">
//           <h1 className="text-2xl font-bold text-gray-500">BARBERZ</h1>
//         </div>

//         {/* Navigation Links */}
//         <ul className="flex flex-1 justify-end gap-10 hidden md:flex">
//           <li className="hover:text-gray-400 cursor-pointer">
//             <Link href="#home">Home</Link>
//           </li>
//           <li className="hover:text-gray-400 cursor-pointer">
//             <Link href="#about">About Us</Link>
//           </li>
//           <li className="hover:text-gray-400 cursor-pointer">
//             <Link href="#services">Services</Link>
//           </li>
//           <li className="hover:text-gray-400 cursor-pointer">
//             <Link href="#contact">Contact Us</Link>
//           </li>
//         </ul>

//         {/* Mobile Menu Icon */}
//         <div className="flex md:hidden">
//           <button className="text-gray-400 hover:text-white">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
// "use client";
// import React, { useState } from "react";
// import Link from "next/link";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth", block: "start" });
//       setIsOpen(false); // Close menu after clicking a link
//     }
//   };

//   return (
//     <div className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg text-white p-4">
//       <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
//         <div className="flex-1">
//           <h1 className="text-2xl font-bold text-gray-500">BARBERZ</h1>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex flex-1 justify-end gap-10">
//           <li className="hover:text-gray-400 cursor-pointer">
//             <Link href="#home">Home</Link>
//           </li>
//           <li className="hover:text-gray-400 cursor-pointer">
//             <Link href="#about">About Us</Link>
//           </li>
//           <li>
//             <button
//               onClick={() => scrollToSection("services")}
//               className="hover:text-gray-400 cursor-pointer bg-transparent border-none text-inherit"
//             >
//               Services
//             </button>
//           </li>
//           <li className="hover:text-gray-400 cursor-pointer">
//             <Link href="#contact">Contact Us</Link>
//           </li>
//         </ul>

//         {/* Hamburger Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-gray-400 hover:text-white"
//             aria-label="Open Menu"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden flex flex-col gap-4 p-4 bg-black text-white text-center">
//           <li onClick={() => setIsOpen(false)} className="hover:text-gray-400 cursor-pointer">
//             <Link href="#home">Home</Link>
//           </li>
//           <li onClick={() => setIsOpen(false)} className="hover:text-gray-400 cursor-pointer">
//             <Link href="#about">About Us</Link>
//           </li>
//           <li onClick={() => scrollToSection("services")} className="hover:text-gray-400 cursor-pointer">
//             Services
//           </li>
//           <li onClick={() => setIsOpen(false)} className="hover:text-gray-400 cursor-pointer">
//             <Link href="#contact">Contact Us</Link>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Navbar;

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsProfileOpen(false);
    document.body.style.overflow = "auto";
  }, [pathname]);

  // Toggle mobile hamburger
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  // Toggle profile dropdown (desktop only)
  const toggleProfileMenu = () => setIsProfileOpen(!isProfileOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md shadow-lg text-white h-20">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-gray-300 hover:text-white transition"
        >
          BARBERZ
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 text-lg items-center">

          <li>
            <Link className="hover:text-gray-400 transition" href="/about">
              About Us
            </Link>
          </li>

          <li>
            <Link className="hover:text-gray-400 transition" href="/contact">
              Contact Us
            </Link>
          </li>

          {/* Desktop Profile Menu */}
          <li className="relative">
            {session ? (
              <>
                <button
                  onClick={toggleProfileMenu}
                  className="text-yellow-400 font-semibold flex items-center gap-1"
                >
                  {session.user.name} ▼
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 bg-[#111] border border-gray-700 rounded-lg p-3 min-w-[150px]">
                    <Link href="/dashboard" className="block px-2 py-1 hover:text-yellow-400">
                      Dashboard
                    </Link>
                    <button
                      onClick={() => signOut()}
                      className="block px-2 py-1 hover:text-yellow-400 text-left w-full"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <Link href="/auth/signin" className="text-yellow-400">
                Sign In
              </Link>
            )}
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-300 hover:text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md text-center py-4 space-y-4">

          <Link href="/about" className="block hover:text-gray-400">
            About Us
          </Link>

          <Link href="/contact" className="block hover:text-gray-400">
            Contact Us
          </Link>

          {/* MOBILE PROFILE MENU (NO DROPDOWN — Just normal links) */}
          {session ? (
            <>
              <Link href="/dashboard" className="block text-yellow-400">
                Dashboard
              </Link>

              <button
                onClick={() => signOut()}
                className="block text-yellow-400 mx-auto"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/auth/signin" className="block text-yellow-400">
              Sign In
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
