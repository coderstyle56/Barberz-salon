// "use client";
// import Image from "next/image";

// export default function WorkingCollections() {
//   return (
//     <div className="work mt-8 mb-20 bg-white">
//       <h1 className="text-center text-6xl text-black">Our Work</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
//         <div className="p-2 border-4 border-yellow-700">
//           <Image
//             src="/images/model1.jpg"
//             alt="Model 1"
//             width={400}
//             height={400}
//             className="w-full h-full object-cover"
//             priority
//           />
//         </div>
//         <div className="border-4 border-yellow-700 p-2">
//           <Image
//             src="/images/model2.jpeg"
//             alt="Model 2"
//             width={400}
//             height={400}
//             className="w-full h-full object-cover"
//             priority
//           />
//         </div>
//         <div className="border-4 border-yellow-700 p-2">
//           <Image
//             src="/images/model3.jpeg"
//             alt="Model 3"
//             width={400}
//             height={400}
//             className="w-full h-full object-cover"
//             priority
//           />
//         </div>
//         <div className="border-4 border-yellow-700 p-2">
//           <Image
//             src="/images/model4.jpeg"
//             alt="Model 4"
//             width={400}
//             height={400}
//             className="w-full h-full object-cover"
//             priority
//           />
//         </div>
//         <div className="border-4 border-yellow-700 p-2">
//           <Image
//             src="/images/model5.jpeg"
//             alt="Model 5"
//             width={400}
//             height={400}
//             className="w-full h-full object-cover"
//             priority
//           />
//         </div>
//         <div className="border-4 border-yellow-700 p-2">
//           <Image
//             src="/images/model6.jpg"
//             alt="Model 6"
//             width={400}
//             height={400}
//             className="w-full h-full object-cover"
//             priority
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";

export default function WorkingCollections() {
  const images = [
    "/images/model1.jpg",
    "/images/model2.jpeg",
    "/images/model3.jpeg",
    "/images/model4.jpeg", // ← FIX HERE
    "/images/model5.jpeg",
    "/images/model6.jpg",
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">

      <h1 className="text-center text-4xl md:text-6xl font-bold text-gray-900 mb-10 sm:mb-12 lg:mb-14">
        Our Work
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                      gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6">

        {images.map((src, index) => (
          <div
            key={index}
            className="group rounded-xl overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.12)]
                       hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-all duration-300 
                       border border-[#C89226]/30"
          >
            <Image
              src={src}
              alt={`Model ${index + 1}`}
              width={600}
              height={400}
              className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover 
                         group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
}

