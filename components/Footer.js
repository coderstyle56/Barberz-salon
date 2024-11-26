// components/Footer.js
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-stone-800 text-white py-10 px-4 mt-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold mb-2">BARBERZ</h2>
          <p className="text-center md:text-left text-sm">
          Experience top-notch grooming with skilled barbers, premium products, modern styles, and exceptional service.
          </p>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Email*"
              className="p-2 rounded-l-md border-none text-gray-800"
            />
            <button className="bg-yellow-900 text-white px-4 py-2 rounded-r-md hover:bg-orange-700">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm hover:cursor-pointer">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>GALLERY</li>
            <li>CONTACT US</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">SERVICES</h3>
          <ul className="space-y-2 text-sm hover:cursor-pointer">
            <li>HAIRS</li>
            <li>BEAUTY</li>
            <li>SPA</li>
            <li>MASSAGE</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">CONTACT</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <FaPhone /> <span>+4125987645</span>
            </li>
            <li className="flex items-center space-x-2 hover:cursor-pointer transform transition-transform duration-300 hover:scale-105">
              <FaEnvelope /> <span>barberz.123@info.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt /> <span>GOLDEN STREET, CHINATOWN SAN FRANCISCO</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-yellow-500">
            <FaFacebookF className="cursor-pointer  hover:text-white transform transition-transform duration-300 hover:scale-150" />
            <FaTwitter className="cursor-pointer hover:text-white transform transition-transform duration-300 hover:scale-150" />
            <FaInstagram className="cursor-pointer hover:text-white transform transition-transform duration-300 hover:scale-150" />
            <FaYoutube className="cursor-pointer hover:text-white transform transition-transform duration-300 hover:scale-150" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm">
        © Copyright 2021 All Rights Reserved
      </div>
    </footer>
  );
}

