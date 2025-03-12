"use client";
import React, { useState, forwardRef } from "react";

const Form = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    barber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          time: "",
          barber: "",
        });
      } else {
        alert(data.message || "Error booking appointment!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while booking.");
    }
  };

  return (
    <div ref={ref} className="flex flex-col lg:flex-row bg-gray-900 text-white">
      {/* Left Side */}
      <div className="lg:w-1/2 h-full p-6 lg:p-8 bg-gray-900 flex flex-col justify-center">
        <h3 className="text-yellow-500 text-lg mb-2">Contact</h3>
        <h1 className="text-3xl font-bold mb-4">Get In Touch</h1>
        <p className="text-sm lg:text-base leading-relaxed">
          Reach out to us for exceptional service tailored to meet your unique needs.
        </p>
      </div>

      {/* Right Side Form */}
      <div className="lg:w-1/2 h-full p-6 lg:p-8 bg-gray-900">
        <h2 className="text-yellow-500 text-2xl font-bold mb-4">Make An Appointment</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
              required
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
              required
            >
              <option value="">Select a Service</option>
              <option value="haircut">Haircut</option>
              <option value="beard_trim">Beard Trim</option>
              <option value="shave">Shave</option>
              <option value="facial">Facial</option>
              <option value="hair_color">Hair Coloring</option>
              <option value="hair_wash">Hair Wash</option>
            </select>
          </div>

          {/* Barber Selection Dropdown - NEWLY ADDED */}
          <select
            name="barber"
            value={formData.barber}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
            required
          >
            <option value="">Select a Barber</option>
            <option value="john_doe">John Doe</option>
            <option value="mike_smith">Mike Smith</option>
            <option value="james_williams">James Williams</option>
          </select>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 font-bold py-2 rounded"
          >
            Make an Appointment
          </button>
        </form>
      </div>
    </div>
  );
});

Form.displayName = "Form";
export default Form;


