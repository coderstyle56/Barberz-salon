// "use client" directive for Client Component
"use client";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import ServiceSection from "@/components/ServiceSection";
import WorkingCollections from "@/components/WorkingCollections";
import PricingPlan from "@/components/PricingPlan";
import Form from "@/components/Form";
import { useRef } from "react";

// Remove the `metadata` export
export default function RootLayout({ children }) {
  const formRef = useRef(null); // Reference for the form section

  // Scroll handler
  const handleScrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the form section
  };

  return (
    <html lang="en">
      <body>
        <div className="relative w-full min-h-screen overflow-hidden">
          <Navbar />
          {/* Image Section */}
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

            {/* Text and Button Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
              <h1 className="text-white text-5xl md:text-6xl font-bold drop-shadow-lg">
                Welcome to Barberz Salon !!
              </h1>
              <p className="text-yellow-500 text-2xl md:text-xl mt-4 max-w-md drop-shadow-md">
                Our barbershop is the territory created purely for males who
                appreciate premium quality, time, and flawless looks.
              </p>

              <button
                onClick={handleScrollToForm} // Scroll to form on click
                className="bg-orange-700 text-white px-8 py-3 mt-24 mb-10 
             transition duration-300 ease-in-out 
             hover:bg-orange-600 hover:scale-110 focus:outline-none"
              >
                MAKE AN APPOINTMENT
              </button>
            </div>
          </div>

          <div className="introduce mt-12 py-0 mb-0 flex items-start">
            <div className="mr-4">
              <h1 className="md:text-3xl text-center text-orange-600">
                INTRODUCING
              </h1>
              <div className="text-lg">
                <div className="text-5xl text-center m-5">
                  <p>BARBERZ..The Barbershop</p>
                  <br />
                  <p>since 1990</p>
                </div>
                <Image
                  src="/images/mustache.png"
                  alt="mustache image for page"
                  width={100}
                  height={100}
                  priority
                  className="ml-auto mr-auto"
                />
                <div className="md:text-xl m-10 flex justify-center items-center">
                  <p className="w-3/5 text-lg leading-relaxed text-justify text-slate-950">
                    Introducing BARBERZ..The Barbershop Since 1990. A barber is
                    a person whose occupation is mainly to cut, dress, groom,
                    style, and shave men's and boys' hair. A barber's place of
                    work is known as a "barbershop" or a "barber's". Barbershops
                    are also places of social interaction and public discourse.
                    In some instances, barbershops are also public forums.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sections of the page */}
          <ServiceSection />
          <TeamSection />
          <PricingPlan />

          {/* Form Section with ref */}
          <Form ref={formRef} />

          <WorkingCollections />
          <Footer />
        </div>
      </body>
    </html>
  );
}
