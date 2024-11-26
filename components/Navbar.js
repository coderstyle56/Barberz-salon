import React from "react";
import Link from "next/link"; // Import Next.js Link for navigation

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg text-white p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
        {/* Left placeholder for alignment */}
        {/* <div className="flex-1"></div> */}

        {/* Centered Company Name */}
        <div className="flex-1 left-0">
          <h1 className="text-2xl font-bold text-gray-500">BARBERZ</h1>
        </div>

        {/* Navigation Links on the Right */}
        <ul className="flex flex-1 justify-end gap-10 hidden md:flex">
          <li className="hover:text-gray-400 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <Link href="/about">About Us</Link>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="flex md:hidden">
          <button className="text-gray-400 hover:text-white">
            {/* Use an icon like a hamburger menu here, e.g., from Heroicons */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
