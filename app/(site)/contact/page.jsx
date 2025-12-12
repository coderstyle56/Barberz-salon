"use client";

import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="bg-[#fff7e6] min-h-screen py-20 px-6">

      {/* HERO TEXT */}
      <div className="text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-700 text-lg mt-4 max-w-2xl mx-auto"
        >
          Have questions? Need help with a booking?  
          Our team is here to assist you anytime.
        </motion.p>
      </div>


      {/* CONTACT INFO CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">

        {/* PHONE */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.1)] p-8 text-center border border-white/40"
        >
          <FaPhoneAlt className="text-amber-600 text-3xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
          <p className="text-gray-700 mt-2">+4125987645</p>
        </motion.div>

        {/* EMAIL */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.1)] p-8 text-center border border-white/40"
        >
          <FaEnvelope className="text-amber-600 text-3xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900">Email</h3>
          <p className="text-gray-700 mt-2">barberzsalonteam@gmail.com</p>
        </motion.div>

        {/* LOCATION */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.1)] p-8 text-center border border-white/40"
        >
          <FaMapMarkerAlt className="text-amber-600 text-3xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900">Location</h3>
          <p className="text-gray-700 mt-2">
            Golden Street, Chinatown  
            San Francisco
          </p>
        </motion.div>

      </div>


      {/* CONTACT FORM */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.15)] border border-white/40"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Send Us a Message
        </h2>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Full Name"
            className="p-4 border rounded-xl bg-white focus:ring-2 focus:ring-amber-500 outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="p-4 border rounded-xl bg-white focus:ring-2 focus:ring-amber-500 outline-none"
          />

          <input
            type="text"
            placeholder="Subject"
            className="p-4 border rounded-xl bg-white focus:ring-2 focus:ring-amber-500 outline-none sm:col-span-2"
          />

          <textarea
            placeholder="Your Message..."
            rows="5"
            className="p-4 border rounded-xl bg-white focus:ring-2 focus:ring-amber-500 outline-none sm:col-span-2"
          ></textarea>

          <button
            type="submit"
            className="sm:col-span-2 bg-amber-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-amber-700 transition w-full shadow-md"
          >
            Send Message
          </button>
        </form>
      </motion.div>


      {/* IMMEDIATE SUPPORT SECTION */}
      <div className="text-center mt-20 text-gray-700">
        <p className="text-lg">
          Need immediate support?  
          <span className="font-semibold text-gray-900"> Call us anytime.</span>
        </p>

        <p className="text-sm mt-1 text-gray-600">
          AI Chat Assistant coming soon…
        </p>
      </div>

    </section>
  );
}
