"use client";

import Image from "next/image";
import Link from "next/link";
import { FaUsers, FaClock, FaAward } from "react-icons/fa";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function AboutPage() {
  const stats = [
    { icon: <FaClock />, value: "10+", label: "Years Experience" },
    { icon: <FaUsers />, value: "5000+", label: "Happy Clients" },
    { icon: <FaAward />, value: "12", label: "Industry Awards" },
  ];

  const milestones = [
    { year: "2015", text: "Barberz founded — started as a single shop." },
    {
      year: "2018",
      text: "Expanded to 3 locations and launched premium services.",
    },
    { year: "2021", text: "Awarded 'Best Grooming Studio' in the region." },
    { year: "2024", text: "Started Barberz Academy & community outreach." },
  ];

  const team = [
    { name: "David", role: "Master Barber", img: "/images/stylist1.jpg" },
    { name: "Max", role: "Style Specialist", img: "/images/stylist2.jpg" },
    { name: "Paul", role: "Beard Expert", img: "/images/stylist3.jpg" },
  ];

  return (
    <main className="bg-[#fffaf0] text-gray-900">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Text Side */}
        <div className="lg:col-span-6">
          <p className="text-amber-600 font-semibold tracking-widest">
            ABOUT US
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            We craft premium grooming experiences — refined, timeless, and
            tailored.
          </h1>

          <p className="mt-6 text-gray-700 text-lg max-w-xl">
            Barberz was built on a simple belief: grooming should elevate
            confidence. We combine masterful techniques, premium products, and a
            modern environment to create a space where every client leaves
            looking and feeling their best.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#appointment-form"
              className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg shadow-md transition inline-block"
            >
              Book an Appointment
            </Link>

            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Image Side */}
        <div className="lg:col-span-6 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/about-hero.jpg"
            alt="Barber interior"
            fill
            style={{ objectFit: "cover" }}
            className="object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#fffaf0]/70 pointer-events-none" />
        </div>
      </section>

      {/* =======================
          🔥 ANIMATED COUNTERS
      ======================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-4"
            >
              {/* ICON */}
              <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-amber-100 text-amber-700 text-xl">
                {s.icon}
              </div>

              {/* COUNTER */}
              <AnimatedCounter value={s.value} label={s.label} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* OUR STORY / TIMELINE */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-bold">Our Story</h2>

            <p className="mt-4 text-gray-700">
              From a humble shop to a trusted grooming brand — our journey
              reflects craft, passion, and commitment to excellence.
            </p>

            <ul className="mt-8 space-y-6">
              {milestones.map((m, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="min-w-[56px] flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center font-semibold">
                      {m.year}
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">{m.year}</p>
                    <p className="text-gray-600 mt-1">{m.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="text-xl font-bold mb-3">Our Values</h3>

            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Craftsmanship</strong> — We perfect our skills through
                continuous training.
              </p>
              <p>
                <strong>Comfort & Hygiene</strong> — A clean, welcoming
                environment comes first.
              </p>
              <p>
                <strong>Client-first</strong> — We customize every experience.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-sm text-gray-500 uppercase tracking-wide">
                Trusted by
              </h4>
              <div className="mt-4 flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">4.9</div>
                  <div className="text-sm text-gray-500">Average Rating</div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold">50k+</div>
                  <div className="text-sm text-gray-500">Appointments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <h3 className="text-amber-600 text-sm tracking-widest font-semibold text-center">
          SPECIALISTS
        </h3>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mt-2">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {team.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md"
            >
              <div className="relative h-56">
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="object-center"
                  priority
                />
              </div>

              <div className="py-6 px-6 bg-amber-600 text-white text-center">
                <h4 className="font-bold text-lg">{t.name}</h4>
                <p className="mt-1 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

//////////////////////
// ANIMATED COUNTER //
//////////////////////

function AnimatedCounter({ value, label }) {
  const isK = value.includes("k");
  const isPlus = value.includes("+");

  const numericValue = isK ? parseInt(value) * 1000 : parseInt(value);

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(motionValue, numericValue, {
      duration: 1.5,
      ease: "easeOut",
    });
    return controls.stop;
  }, [numericValue]);

  return (
    <div>
      <motion.div className="text-2xl font-bold flex items-baseline gap-1">
        <motion.span>{rounded}</motion.span>
        <span>
          {isK && "k"}
          {isPlus && "+"}
        </span>
      </motion.div>

      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}
