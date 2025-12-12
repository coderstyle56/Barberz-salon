// "use client";

// import Image from "next/image";
// import ServiceSection from "@/components/ServiceSection";
// import TeamSection from "@/components/TeamSection";
// import PricingPlan from "@/components/PricingPlan";
// import Form from "@/components/Form";
// import WorkingCollections from "@/components/WorkingCollections";
// // import { useRef } from "react";

// // export default function Home() {
// //   const formRef = useRef(null);

// //   const handleScrollToForm = () => {
// //     formRef.current?.scrollIntoView({ behavior: "smooth" });
// //   };

// //   return (
// //     <div className="relative w-full min-h-screen overflow-hidden">
// //       {/* Hero Section */}
// //       <div className="relative w-full h-[100vh]">
// //         <Image
// //           src="/images/Maincover2.jpg"
// //           alt="Main Cover Image"
// //           layout="fill"
// //           objectFit="cover"
// //           className="absolute inset-0"
// //           priority
// //         />
// //         <div className="absolute inset-0 bg-black/50"></div>

// //         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
// //           <h1 className="text-white text-5xl md:text-6xl font-bold drop-shadow-lg">
// //             Welcome to Barberz Salon !!
// //           </h1>
// //           <p className="text-yellow-500 text-2xl md:text-xl mt-4 max-w-md drop-shadow-md">
// //             Our barbershop is the territory created purely for males who appreciate premium quality, time, and flawless looks.
// //           </p>
// //           <button
// //             onClick={handleScrollToForm}
// //             className="bg-orange-700 text-white px-8 py-3 mt-24 mb-10 hover:bg-orange-600 hover:scale-110"
// //           >
// //             MAKE AN APPOINTMENT
// //           </button>
// //         </div>
// //       </div>
// <div className="relative w-full h-screen">
//   {/* Background Image */}
//   <Image
//     src="/images/Maincover2.jpg"
//     alt="Salon interior with barber chairs"
//     fill
//     style={{ objectFit: "cover" }}
//     className="absolute inset-0 -z-10"
//     priority
//   />

//   {/* Overlay with stronger contrast + slight gradient for readability */}
//   <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 -z-5" />

//   {/* Content */}
//   <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
//     {/* HERO HEADING */}
//     <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-[0_4px_14px_rgba(0,0,0,0.6)] tracking-tight max-w-5xl">
//       Welcome to Barberz Salon !!
//     </h1>

//     {/* SUBTITLE — changed to readable white/90 + responsive size */}
//     <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl mt-5 max-w-xl leading-relaxed drop-shadow">
//       Our barbershop is the territory created purely for males who appreciate
//       premium quality, time, and flawless looks.
//     </p>

//     {/* CTA BUTTON — improved spacing, hover effect, accessibility */}
//     <button
//       onClick={handleScrollToForm}
//       aria-label="Scroll to appointment form"
//       className="bg-[#C84B1E] text-white font-semibold px-8 py-3 mt-10 rounded-md shadow-lg 
//                  transition-transform duration-150 ease-out 
//                  hover:scale-[1.05] hover:brightness-110 
//                  focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-offset-2"
//     >
//       MAKE AN APPOINTMENT
//     </button>

//     {/* Optional small hint (UX touch) */}
//     <span className="mt-3 text-sm text-white/70">
//       Quick booking — No signup required
//     </span>
//   </div>

//   {/* Other Sections */}
//   <ServiceSection />
//   <WorkingCollections />
//   <PricingPlan />
//   <Form ref={formRef} />
//   <TeamSection />
// </div>;

"use client";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import TeamSection from "@/components/TeamSection";
import PricingPlan from "@/components/PricingPlan";
import Form from "@/components/Form";
import WorkingCollections from "@/components/WorkingCollections";

import { useRef } from "react";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  const formRef = useRef(null);

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeroSection handleScrollToForm={handleScrollToForm} />
      <ServiceSection />
      <WorkingCollections />
      <PricingPlan />
      <div ref={formRef}>
        <Form />
      </div>
      <TestimonialSection />
      <TeamSection />
    </>
  );
}
