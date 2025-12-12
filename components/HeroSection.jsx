"use client";

import Image from "next/image";

export default function HeroSection({ handleScrollToForm }) {
  return (
    <div className="relative w-full min-h-screen pt-20">
      {/* Background Image */}
      <Image
        src="/images/Maincover2.jpg"
        alt="Salon interior with barber chairs"
        fill
        style={{ objectFit: "cover" }}
        className="absolute inset-0 -z-10"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 -z-5" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-20 max-w-3xl mx-auto">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-[0_4px_14px_rgba(0,0,0,0.6)] tracking-tight">
          Welcome to Barberz Salon !!
        </h1>

        <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl mt-4 sm:mt-5 max-w-xl leading-relaxed drop-shadow">
          Our barbershop is the territory created purely for males who
          appreciate premium quality, time, and flawless looks.
        </p>

        <button
          onClick={handleScrollToForm}
          className="bg-[#C84B1E] text-white font-semibold px-7 sm:px-8 py-3 mt-6 sm:mt-8 lg:mt-10 rounded-md shadow-lg
                     hover:scale-[1.05] hover:brightness-110 transition"
        >
          MAKE AN APPOINTMENT
        </button>

        <span className="mt-2 sm:mt-3 text-sm text-white/70">
          Quick booking — No signup required
        </span>
      </div>
    </div>
  );
}
