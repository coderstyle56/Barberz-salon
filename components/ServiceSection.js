// "use client";

// // components/ServicesSection.js
// import { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import Link from "next/link";

// const services = [
//   {
//     title: "Haircut",
//     description: "Get a stylish haircut tailored to your preferences by our professional barbers with precision and care."
//   },
//   {
//     title: "Shaving",
//     description: "Experience a smooth, clean shave with premium products for ultimate comfort and a refreshing look."
//   },
//   {
//     title: "Hair Color",
//     description: "Revamp your style with vibrant hair colors, applied with expert techniques for lasting results."
//   },
//   {
//     title: "Beard Trim",
//     description: "Maintain a sharp, well-groomed beard with our precise trimming and shaping services."
//   }
// ];

// export default function ServicesSection() {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

//   useEffect(() => {
//     if (inView) controls.start("visible");
//   }, [inView, controls]);

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
//   };

//   return (
//     <motion.section
//       ref={ref}
//       id="services"
//       variants={sectionVariants}
//       initial="hidden"
//       animate={controls}
//       className="services mt-0 bg-pink-100 py-20"
//     >
//       <h1 className="text-center text-yellow-700 text-2xl md:text-3xl mb-2">SERVICES</h1>
//       <h1 className="text-center text-4xl text-black font-medium mb-12">Our Services</h1>

//       <div className="servicecard flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-14">
//         {services.map(({ title, description }, index) => (
//           <motion.div
//             key={index}
//             className="h-96 w-72 md:w-64 bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 200 }}
//           >
//             <h3 className="text-2xl font-semibold text-center text-gray-800">{title}</h3>
//             <p className="text-center mt-4 text-gray-600 leading-relaxed px-4 md:px-6">
//               {description}
//             </p>
//             <div className="flex justify-center">
//               <Link href="#services" scroll={true} legacyBehavior>
//                 <a className="mt-6 px-4 py-2 border-2 border-orange-700 rounded-md text-orange-700 hover:bg-orange-700 hover:text-white transition-colors duration-300">
//                   Read More
//                 </a>
//               </Link>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// }

"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const services = [
  {
    title: "Haircut",
    description:
      "Get a stylish haircut tailored to your preferences by our professional barbers with precision and care.",
  },
  {
    title: "Shaving",
    description:
      "Experience a smooth, clean shave with premium products for ultimate comfort and a refreshing look.",
  },
  {
    title: "Hair Color",
    description:
      "Revamp your style with vibrant hair colors, applied with expert techniques for lasting results.",
  },
  {
    title: "Beard Trim",
    description:
      "Maintain a sharp, well-groomed beard with our precise trimming and shaping services.",
  },
];

export default function ServicesSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      id="services"
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      className="w-full py-16 sm:py-20 lg:py-24 bg-[#FFF6F0]"
    >
      <h1 className="text-center text-[#C89226] text-xl md:text-2xl tracking-wide">
        SERVICES
      </h1>

      <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mt-1 mb-12 sm:mb-14">
        Our Services
      </h2>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 px-4">

        {services.map(({ title, description }, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-64 md:w-72 min-h-[380px] bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.1)]
                       p-6 flex flex-col justify-between transition-all"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3 className="text-2xl font-semibold text-center text-gray-800">
              {title}
            </h3>

            <p className="text-center mt-4 text-gray-600 leading-relaxed px-2">
              {description}
            </p>

            <div className="flex justify-center mt-6">
              <Link
                href="/services"
                className="px-5 py-2 rounded-md border border-[#C84B1E] text-[#C84B1E]
                           font-medium hover:bg-[#C84B1E] hover:text-white transition-all duration-300"
              >
                Read More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}






