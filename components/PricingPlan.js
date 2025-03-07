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

// Animation variants
const containerVariant = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.2, 
      delayChildren: 0.3 
    } 
  },
};

const cardVariantLeft = {
  hidden: { x: -100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

const cardVariantRight = {
  hidden: { x: 100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

const cardVariantUp = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 80 } },
};

export default function PricingPlan() {
  return (
    <div className="bg-[#faf5e8] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl text-center mb-10">Barbershop Pricing Plan</h2>
        <Image
          src="/images/mustache.png"
          alt="mustache image for page"
          width={100}
          height={100}
          priority
          className="ml-auto mr-auto"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pricingData.map((item, index) => (
            <motion.div
              key={index}
              variants={
                index === 0
                  ? cardVariantLeft
                  : index === 1
                  ? cardVariantRight
                  : cardVariantUp
              }
              className="flex flex-col justify-between p-4 bg-white rounded-lg shadow-md"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <span className="text-xl font-bold text-[#d4a44d]">
                  {item.price}
                </span>
              </div>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}


