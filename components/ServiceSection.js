// components/ServicesSection.js
import Image from "next/image";

export default function ServicesSection() {
  return (
    <div className="services mt-0 bg-pink-100">
      <h1 className="text-center text-yellow-700 text-2xl md:text-3xl">
        SERVICES
      </h1>
      <h1 className="text-center text-4xl text-black font-medium mt-1">
        Our Services
      </h1>
      {/* Use flex-wrap and gap adjustments to control responsiveness */}
      <div className="servicecard mt-14 flex flex-wrap gap-6 justify-center md:gap-10 lg:gap-16">
        <div className="Card1 h-96 w-72 md:w-64 bg-white mb-6 text-wrap">
          <h3 className="text-2xl font-semibold mt-3 text-center">Hair Cut</h3>
          <p className="text-center text-pretty mt-3">
            Experience precision and style with haircuts tailored to enhance
            your unique look, delivered by expert stylists committed to your
            satisfaction. From trendy cuts to classic trims, we ensure a
            personalized touch that brings out the best in you.
          </p>
          <div className="servicebtn flex justify-center">
            <button className="bg-white border-2 mt-8 border-orange-700 rounded-md px-4 py-2 transform transition-transform duration-300 hover:scale-110">
              Read More
            </button>
          </div>
        </div>

        {/* Repeat the same structure for other cards */}
        <div className="Card2 h-96 w-72 md:w-64 bg-white mb-6 text-wrap">
          <h3 className="text-2xl font-semibold mt-3 text-center">Shaving</h3>
          <p className="text-center  text-pretty mt-3">
            Enjoy a clean, refreshing shave crafted by skilled barbers who
            prioritize precision and comfort. From traditional shaves to modern
            grooming techniques, we ensure a smooth, tailored experience that
            revitalizes your skin and provides you with lasting confidence.
          </p>
          <div className="servicebtn flex justify-center">
            <button className="bg-white border-2 mt-8 border-orange-700 rounded-md px-4 py-2 transform transition-transform duration-300 hover:scale-110">
              Read More
            </button>
          </div>
        </div>

        <div className="Card3 h-96 w-72 md:w-64 bg-white mb-6 text-wrap">
          <h3 className="text-2xl font-semibold mt-3 text-center">
            Hair Color
          </h3>
          <p className="text-center text-pretty mt-3">
            Transform your look with vibrant hair color applied by our expert
            stylists. Whether you desire a bold change or subtle highlights, we
            provide customized color solutions that enhance your personality and
            perfectly complement your unique style and look.
          </p>
          <div className="servicebtn flex justify-center">
            <button className="bg-white border-2 mt-8 border-orange-700 rounded-md px-4 py-2 transform transition-transform duration-300 hover:scale-110">
              Read More
            </button>
          </div>
        </div>
        <div className="Card4 mb-6 h-96 w-72 md:w-64 bg-white text-wrap">
          <h3 className="text-2xl font-semibold mt-3 text-center">
            Beard Trim
          </h3>
          <p className="text-center text-pretty mt-3">
            Achieve a well-groomed, stylish beard with our precision trimming
            services. Our barbers expertly create a unique look tailored to your
            face shape, balancing style and definition to give you a sharp,
            polished appearance that perfectly suits you.
          </p>
          <div className="servicebtn flex justify-center">
            <button className="bg-white border-2 mt-8 border-orange-700 rounded-md px-4 py-2 transform transition-transform duration-300 hover:scale-110">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
