// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const pricingData = [
//   { title: "Hair Cut", price: "$10", description: "Professional haircut for a fresh look." },
//   { title: "Hair Styling", price: "$25", description: "Customized styling for any occasion." },
//   { title: "Hair Trimming", price: "$30", description: "Maintain style with precise trimming." },
//   { title: "Kids Hair Cut", price: "$15", description: "Fun, stylish cuts for kids." },
//   { title: "Shaving", price: "$40", description: "Smooth shave with precision and care." },
//   { title: "Beard Trimming", price: "$25", description: "Sharp and stylish beard shaping." },
//   { title: "Face Cleaning", price: "$60", description: "Deep cleansing for refreshed skin." },
//   { title: "Mustache Trim", price: "$12", description: "Clean, sharp mustache trimming." },
// ];

// // Animation variants
// const containerVariant = {
//   hidden: { opacity: 0 },
//   show: { 
//     opacity: 1, 
//     transition: { 
//       staggerChildren: 0.2, 
//       delayChildren: 0.3 
//     } 
//   },
// };

// const cardVariantLeft = {
//   hidden: { x: -100, opacity: 0 },
//   show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
// };

// const cardVariantRight = {
//   hidden: { x: 100, opacity: 0 },
//   show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
// };

// const cardVariantUp = {
//   hidden: { y: 50, opacity: 0 },
//   show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 80 } },
// };

// export default function PricingPlan() {
//   return (
//     <div className="bg-[#faf5e8] py-10 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-4xl text-center mb-10">Barbershop Pricing Plan</h2>
//         <Image
//           src="/images/mustache.png"
//           alt="mustache image for page"
//           width={100}
//           height={100}
//           priority
//           className="ml-auto mr-auto"
//         />

//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8"
//           variants={containerVariant}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {pricingData.map((item, index) => (
//             <motion.div
//               key={index}
//               variants={
//                 index === 0
//                   ? cardVariantLeft
//                   : index === 1
//                   ? cardVariantRight
//                   : cardVariantUp
//               }
//               className="flex flex-col justify-between p-4 bg-white rounded-lg shadow-md"
//             >
//               <div className="flex justify-between items-center">
//                 <h3 className="text-lg font-semibold">{item.title}</h3>
//                 <span className="text-xl font-bold text-[#d4a44d]">
//                   {item.price}
//                 </span>
//               </div>
//               <p className="text-gray-600 text-sm mt-2">{item.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const pricingData = [
  { title: "Hair Cut", price: "$10", description: "Professional haircut for a fresh look." },
  { title: "Hair Styling", price: "$25", description: "Customized styling for any occasion." },
  { title: "Hair Trimming", price: "$30", description: "Maintain style with precise trimming." },
  { title: "Kids Hair Cut", price: "$15", description: "Fun, stylish cuts for kids." },
  { title: "Shaving", price: "$40", description: "Smooth shave with precision and care." },
  { title: "Beard Trimming", price: "$25", description: "Sharp and stylish beard shaping." },
  { title: "Face Cleaning", price: "$60", description: "Deep cleansing for refreshed skin." },
  { title: "Mustache Trim", price: "$12", description: "Clean, sharp mustache trimming." },
];

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80 },
  },
};

export default function PricingPlan() {
  return (
    <section className="w-full bg-[#faf5e8] py-16 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Barbershop Pricing Plan
        </h2>

        {/* Mustache Icon */}
        <Image
          src="/images/mustache.png"
          alt="mustache image"
          width={80}
          height={80}
          priority
          className="mx-auto mb-6 opacity-90"
        />

        {/* Animated Cards */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-10"
        >
          {pricingData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              className="p-5 bg-white rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.1)]
                         hover:shadow-[0_16px_32px_rgba(0,0,0,0.15)] transition-all duration-300
                         hover:-translate-y-1 border border-[#d4c7a0]/30"
            >
              {/* Title + Price */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <span className="text-xl md:text-2xl font-bold text-[#C89226]">
                  {item.price}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


