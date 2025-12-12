// // components/Footer.js
// "use client";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

// export default function Footer() {
//   return (
//     <footer className="bg-stone-800 text-white py-10 px-4 mt-10">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

//         {/* Logo and Description */}
//         <div className="flex flex-col items-center md:items-start">
//           <h2 className="text-2xl font-bold mb-2">BARBERZ</h2>
//           <p className="text-center md:text-left text-sm">
//           Experience top-notch grooming with skilled barbers, premium products, modern styles, and exceptional service.
//           </p>
//           <div className="mt-4">
//             <input
//               type="email"
//               placeholder="Email*"
//               className="p-2 rounded-l-md border-none text-gray-800"
//             />
//             <button className="bg-yellow-900 text-white px-4 py-2 rounded-r-md hover:bg-orange-700">
//               SUBSCRIBE
//             </button>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3">QUICK LINKS</h3>
//           <ul className="space-y-2 text-sm hover:cursor-pointer">
//             <li>HOME</li>
//             <li>ABOUT US</li>
//             <li>GALLERY</li>
//             <li>CONTACT US</li>
//           </ul>
//         </div>

//         {/* Services */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3">SERVICES</h3>
//           <ul className="space-y-2 text-sm hover:cursor-pointer">
//             <li>HAIRS</li>
//             <li>BEAUTY</li>
//             <li>SPA</li>
//             <li>MASSAGE</li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3">CONTACT</h3>
//           <ul className="space-y-2 text-sm">
//             <li className="flex items-center space-x-2">
//               <FaPhone /> <span>+4125987645</span>
//             </li>
//             <li className="flex items-center space-x-2 hover:cursor-pointer transform transition-transform duration-300 hover:scale-105">
//               <FaEnvelope /> <span>barberz.123@info.com</span>
//             </li>
//             <li className="flex items-center space-x-2">
//               <FaMapMarkerAlt /> <span>GOLDEN STREET, CHINATOWN SAN FRANCISCO</span>
//             </li>
//           </ul>

//           {/* Social Icons */}
//           <div className="flex space-x-4 mt-4 text-yellow-500">
//             <FaFacebookF className="cursor-pointer  hover:text-white transform transition-transform duration-300 hover:scale-150" />
//             <FaTwitter className="cursor-pointer hover:text-white transform transition-transform duration-300 hover:scale-150" />
//             <FaInstagram className="cursor-pointer hover:text-white transform transition-transform duration-300 hover:scale-150" />
//             <FaYoutube className="cursor-pointer hover:text-white transform transition-transform duration-300 hover:scale-150" />
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="text-center mt-8 text-sm">
//         © Copyright 2021 All Rights Reserved
//       </div>
//     </footer>
//   );
// }

"use client";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand + Description */}
        <div>
          <h2 className="text-3xl font-bold mb-4 tracking-wide text-white">
            BARBERZ
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Experience luxury grooming with expert barbers, premium care, and
            unmatched service — crafted just for you.
          </p>

          {/* Luxury Subscribe Field */}
          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-3 pl-5 pr-32 bg-black/40 border border-yellow-600/50 rounded-full 
               text-gray-300 placeholder-gray-500 focus:outline-none focus:border-yellow-500
               transition-all"
            />

            <button
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-600 to-yellow-500 
               text-black font-semibold px-6 py-2 rounded-full shadow-[0_0_10px_rgba(255,200,0,0.4)]
               hover:shadow-[0_0_15px_rgba(255,200,0,0.6)] hover:scale-105 transition-all duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#D4A537]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-[#D4A537] cursor-pointer">Home</li>
            <li className="hover:text-[#D4A537] cursor-pointer">About Us</li>
            <li className="hover:text-[#D4A537] cursor-pointer">Gallery</li>
            <li className="hover:text-[#D4A537] cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#D4A537]">
            Services
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-[#D4A537] cursor-pointer">Haircut</li>
            <li className="hover:text-[#D4A537] cursor-pointer">Beard Trim</li>
            <li className="hover:text-[#D4A537] cursor-pointer">Hair Color</li>
            <li className="hover:text-[#D4A537] cursor-pointer">Facial</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#D4A537]">Contact</h3>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <FaPhone className="text-[#D4A537]" />
              +4125987645
            </li>

            <li className="flex items-center gap-2 hover:text-[#D4A537] cursor-pointer">
              <FaEnvelope className="text-[#D4A537]" />
              barberzsalonteam@gmail.com
            </li>

            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#D4A537]" />
              Golden Street, Chinatown, San Francisco
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 text-[#D4A537] text-xl">
            <FaFacebookF className="hover:scale-125 transition-all cursor-pointer" />
            <FaTwitter className="hover:scale-125 transition-all cursor-pointer" />
            <FaInstagram className="hover:scale-125 transition-all cursor-pointer" />
            <FaYoutube className="hover:scale-125 transition-all cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-12"></div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-4">
        © {new Date().getFullYear()} Barberz. All Rights Reserved.
      </div>
    </footer>
  );
}
