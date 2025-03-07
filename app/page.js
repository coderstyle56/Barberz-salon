"use client";

import Image from "next/image";
import ServiceSection from "@/components/ServiceSection";
import TeamSection from "@/components/TeamSection";
import PricingPlan from "@/components/PricingPlan";
import Form from "@/components/Form";
import WorkingCollections from "@/components/WorkingCollections";
import { useRef } from "react";

export default function Home() {
  const formRef = useRef(null);

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[100vh]">
        <Image
          src="/images/Maincover2.jpg"
          alt="Main Cover Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
          <h1 className="text-white text-5xl md:text-6xl font-bold drop-shadow-lg">
            Welcome to Barberz Salon !!
          </h1>
          <p className="text-yellow-500 text-2xl md:text-xl mt-4 max-w-md drop-shadow-md">
            Our barbershop is the territory created purely for males who appreciate premium quality, time, and flawless looks.
          </p>
          <button
            onClick={handleScrollToForm}
            className="bg-orange-700 text-white px-8 py-3 mt-24 mb-10 hover:bg-orange-600 hover:scale-110"
          >
            MAKE AN APPOINTMENT
          </button>
        </div>
      </div>

      {/* Other Sections */}
      <ServiceSection />
      <WorkingCollections />
      <PricingPlan />
      <Form ref={formRef} />
      <TeamSection />
      
      
    </div>
  );
}






