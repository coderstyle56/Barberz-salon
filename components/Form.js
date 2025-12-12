// "use client";
// import React, { useState, forwardRef } from "react";

// const Form = forwardRef((props, ref) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     date: "",
//     time: "",
//     barber: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/appointments", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert(data.message);
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           service: "",
//           date: "",
//           time: "",
//           barber: "",
//         });
//       } else {
//         alert(data.message || "Error booking appointment!");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while booking.");
//     }
//   };

//   return (
//     <div ref={ref} className="flex flex-col lg:flex-row bg-gray-900 text-white">
//       {/* Left Side */}
//       <div className="lg:w-1/2 h-full p-6 lg:p-8 bg-gray-900 flex flex-col justify-center">
//         <h3 className="text-yellow-500 text-lg mb-2">Contact</h3>
//         <h1 className="text-3xl font-bold mb-4">Get In Touch</h1>
//         <p className="text-sm lg:text-base leading-relaxed">
//           Reach out to us for exceptional service tailored to meet your unique needs.
//         </p>
//       </div>

//       {/* Right Side Form */}
//       <div className="lg:w-1/2 h-full p-6 lg:p-8 bg-gray-900">
//         <h2 className="text-yellow-500 text-2xl font-bold mb-4">Make An Appointment</h2>
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
//               required
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
//               required
//             />
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
//               required
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               type="time"
//               name="time"
//               value={formData.time}
//               onChange={handleChange}
//               className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
//               required
//             />

//             <select
//               name="service"
//               value={formData.service}
//               onChange={handleChange}
//               className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
//               required
//             >
//               <option value="">Select a Service</option>
//               <option value="haircut">Haircut</option>
//               <option value="beard_trim">Beard Trim</option>
//               <option value="shave">Shave</option>
//               <option value="facial">Facial</option>
//               <option value="hair_color">Hair Coloring</option>
//               <option value="hair_wash">Hair Wash</option>
//             </select>
//           </div>

//           {/* Barber Selection Dropdown - NEWLY ADDED */}
//           <select
//             name="barber"
//             value={formData.barber}
//             onChange={handleChange}
//             className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
//             required
//           >
//             <option value="">Select a Barber</option>
//             <option value="john_doe">John Doe</option>
//             <option value="mike_smith">Mike Smith</option>
//             <option value="james_williams">James Williams</option>
//           </select>

//           <button
//             type="submit"
//             className="w-full bg-yellow-500 text-gray-900 font-bold py-2 rounded"
//           >
//             Make an Appointment
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// });

// Form.displayName = "Form";
// export default Form;

// "use client";
// import React, { useState, forwardRef } from "react";

// const Form = forwardRef((props, ref) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     date: "",
//     time: "",
//     barber: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     alert("Appointment booked!");
//   };

//   return (
//     <section ref={ref} className="bg-[#0f141b] text-white py-20 px-6 lg:px-16">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

//         {/* LEFT TEXT */}
//         <div className="flex flex-col justify-center">
//           <h3 className="text-yellow-500 text-lg mb-2">Contact</h3>
//           <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
//           <p className="text-gray-300 text-lg leading-relaxed">
//             Reach out for exceptional service tailored to your unique needs.
//           </p>
//         </div>

//         {/* RIGHT FORM */}
//         <div className="bg-[#141b23] p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-white/10">
//           <h2 className="text-yellow-500 text-3xl font-bold mb-6">Make An Appointment</h2>

//           <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

//             {/* INPUT STYLE */}
//             {/** Name */}
//             <input
//               name="name"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="form-input"
//               required
//             />

//             {/** Email */}
//             <input
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               className="form-input"
//               required
//             />

//             {/** Phone */}
//             <input
//               name="phone"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               className="form-input"
//               required
//             />

//             {/** Date */}
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               className="form-input"
//               required
//             />

//             {/** Time */}
//             <input
//               type="time"
//               name="time"
//               value={formData.time}
//               onChange={handleChange}
//               className="form-input"
//               required
//             />

//             {/** Service */}
//             <select
//               name="service"
//               value={formData.service}
//               onChange={handleChange}
//               className="form-input"
//               required
//             >
//               <option value="">Select Service</option>
//               <option value="haircut">Haircut</option>
//               <option value="beard">Beard Trim</option>
//               <option value="shave">Shaving</option>
//               <option value="facial">Facial</option>
//               <option value="color">Hair Coloring</option>
//             </select>

//             {/** Barber */}
//             <select
//               name="barber"
//               value={formData.barber}
//               onChange={handleChange}
//               className="form-input md:col-span-2"
//               required
//             >
//               <option value="">Choose a Barber</option>
//               <option value="james">James</option>
//               <option value="mike">Mike</option>
//               <option value="rahul">Rahul</option>
//             </select>

//             {/* SUBMIT BUTTON */}
//             <button
//               type="submit"
//               className="md:col-span-2 mt-4 bg-yellow-500 hover:bg-yellow-400
//                          text-gray-900 font-bold py-3 rounded-xl
//                          shadow-[0_4px_15px_rgba(255,204,0,0.4)] transition"
//             >
//               Make an Appointment
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// });

// Form.displayName = "Form";
// export default Form;

"use client";

import React, { useState, useEffect, forwardRef } from "react";
import { motion } from "framer-motion";
import PremiumMultiSelect from "./PremiumMultiSelect";
import { toast } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaCut,
  FaRegCalendarAlt,
  FaUserTie,
} from "react-icons/fa";

const Form = forwardRef((props, ref) => {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [],
    date: "",
    time: "",
    barberId: "",
  });

  const [loading, setLoading] = useState(false);

  // Prefill name/email if user is logged in
  useEffect(() => {
    if (session?.user) {
      setFormData((p) => ({
        ...p,
        name: session.user.name ?? p.name,
        email: session.user.email ?? p.email,
      }));
    }
    // Do not depend on session only — keep non-logged users unaffected
  }, [session]);

  const [services, setServices] = useState([]);

  useEffect(() => {
    async function loadServices() {
      const res = await fetch("/api/services");
      const data = await res.json();
      setServices(data);
    }
    loadServices();
  }, []);

  const [barbers, setBarbers] = useState([]);
  useEffect(() => {
    async function loadBarbers() {
      const res = await fetch("/api/barbers");
      const data = await res.json();
      setBarbers(data);
    }
    loadBarbers();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleMultiServiceChange = (e) => {
    const selected = Array.from(e.target.selectedOptions).map((o) => o.value);
    setFormData((prev) => ({ ...prev, services: selected }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic client-side validation (you already had required on inputs)
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill name, email and phone.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // If backend says unauthorized, redirect to signin
      if (res.status === 401) {
        toast.error("Please sign in to complete booking.");
        // redirect to signin, maintain callback to return to current page
        const callback = encodeURIComponent(pathname || "/");
        router.push(`/auth/signin?callbackUrl=${callback}`);
        setLoading(false);
        return;
      }

      const data = await res.json();

      // Handle slot conflict (barber already booked)
      if (res.status === 409) {
        toast.error(
          data?.error ||
            "This time slot is already booked. Please pick another time.",
          {
            style: {
              background: "#1c1f26",
              color: "#fff",
              border: "1px solid #ff4d4d",
            },
          }
        );
        setLoading(false);
        return;
      }

      // General error handling
      if (!res.ok) {
        toast.error(data?.error || "Booking failed. Try again.", {
          style: {
            background: "#1c1f26",
            color: "#fff",
            border: "1px solid #ff4d4d",
          },
        });
        setLoading(false);
        return;
      }

      // success
      toast.success(data?.message || "Appointment booked successfully!", {
        style: {
          background: "#1c1f26",
          color: "#fff",
          border: "1px solid #FFC300",
        },
      });

      // clear form (but keep name/email if logged in)
      setFormData({
        name: session?.user?.name ?? "",
        email: session?.user?.email ?? "",
        phone: "",
        services: [],
        date: "",
        time: "",
        barberId: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="appointment-form"
      ref={ref}
      className="bg-[#0f141b] text-white py-20 px-6 lg:px-16"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-yellow-500 text-lg mb-2">Contact</h3>
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            We’re committed to delivering premium grooming services. Book your
            appointment with ease.
          </p>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#141b23] p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-white/10"
        >
          <h2 className="text-yellow-500 text-3xl font-bold mb-6">
            Make An Appointment
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* INPUT WRAPPER */}
            <div className="flex items-center gap-3 form-group">
              <FaUser className="text-yellow-500 text-xl" />
              <input
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="flex items-center gap-3 form-group">
              <FaEnvelope className="text-yellow-500 text-xl" />
              <input
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                type="email"
                required
              />
            </div>

            <div className="flex items-center gap-3 form-group">
              <FaPhone className="text-yellow-500 text-xl" />
              <input
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="flex items-center gap-3 form-group">
              <FaRegCalendarAlt className="text-yellow-500 text-xl" />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="flex items-center gap-3 form-group">
              <FaClock className="text-yellow-500 text-xl" />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="flex items-center gap-3 form-group">
              <FaCut className="text-yellow-500 text-xl" />
              {/* <select
                name="services"
                multiple
                value={formData.services}
                onChange={handleMultiServiceChange}
                className="form-input"
              >
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select> */}
              <PremiumMultiSelect
                services={services}
                selected={formData.services}
                setSelected={(val) =>
                  setFormData((prev) => ({ ...prev, services: val }))
                }
              />
            </div>

            <div className="flex items-center gap-3 form-group md:col-span-2">
              <FaUserTie className="text-yellow-500 text-xl" />
              <select
                name="barberId"
                value={formData.barberId}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="">Choose a Barber</option>
                {barbers.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name} - {b.specialty}
                  </option>
                ))}
              </select>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="md:col-span-2 mt-4 bg-yellow-500 hover:bg-yellow-400 
                         text-gray-900 font-bold py-3 rounded-xl 
                         shadow-[0_4px_15px_rgba(255,204,0,0.4)] transition disabled:opacity-60"
            >
              {loading ? "Booking..." : "Make an Appointment"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
});

Form.displayName = "Form";
export default Form;
