"use client";
import React, { forwardRef } from "react";
import Image from "next/image";

const Form = forwardRef((props, ref) => (
  <div ref={ref} className="flex flex-col lg:flex-row bg-gray-900 text-white">
    {/* Left Side */}
    <div className="lg:w-1/2 h-full p-6 lg:p-8 bg-gray-900 flex flex-col justify-center">
      <h3 className="text-yellow-500 text-lg mb-2">Contact</h3>
      <h1 className="text-3xl font-bold mb-4">Get In Touch</h1>
      <div className="flex justify-center items-center mb-4">
        <span className="block h-0.5 w-8 bg-yellow-500"></span>
        <span className="text-2xl mx-2">🖌️</span>
        <span className="block h-0.5 w-8 bg-yellow-500"></span>
      </div>
      <p className="text-sm lg:text-base leading-relaxed">
        Reach out to us for exceptional service, tailored to meet your unique
        needs. Our skilled team ensures that every visit is a step towards
        relaxation and refinement. Schedule your appointment today and let us
        help you look and feel your best.
      </p>
    </div>
    {/* Right Side Form */}
    <div className="lg:w-1/2 h-full p-6 lg:p-8 bg-gray-900">
      <h2 className="text-yellow-500 text-2xl font-bold mb-4">
        Make An Appointment
      </h2>
      <p className="text-sm mb-6">
        Barber is a person whose occupation is mainly to cut, dress, groom.
      </p>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Phone"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
          />
          <input
            type="datetime-local"
            placeholder="Time"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Services Dropdown */}
          <select className="w-full p-2 bg-gray-800 border border-gray-700 rounded">
            <option value="">Select a Service</option>
            <option value="haircut">Haircut</option>
            <option value="beard_trim">Beard Trim</option>
            <option value="shave">Shave</option>
            <option value="facial">Facial</option>
            <option value="hair_color">Hair Coloring</option>
            <option value="hair_wash">Hair Wash</option>
          </select>

          {/* Choose Barber Dropdown */}
          <select className="w-full p-2 bg-gray-800 border border-gray-700 rounded">
            <option value="">Choose Barber</option>
            <option value="David">David</option>
            <option value="Max">Max</option>
            <option value="Paul">Paul</option>
            <option value="Charlie">Charlie</option>
            <option value="Ava">Ava</option>
            <option value="Liam">Liam</option>
            <option value="Olivia">Olivia</option>
            <option value="Jackson">Jackson</option>
            <option value="Harry">Harry</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-gray-900 font-bold py-2 rounded"
        >
          Make an Appointment
        </button>
      </form>
    </div>
  </div>
));

export default Form;
