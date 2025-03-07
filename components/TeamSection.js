// components/TeamSection.js
import Image from "next/image";

export default function TeamSection() {
  return (
    <div className="specialist mt-0 mb-0 bg-yellow-100">
      <h1 className="text-center text-4xl text-amber-900 mt-5">SPECIALISTS</h1>
      <h1 className="text-center text-6xl text-black mt-3">Our Team</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
        {[
          { name: "DAVID", role: "Hair Cut Specialist", img: "stylist1" },
          { name: "MAX", role: "Hair Cut Specialist", img: "stylist2" },
          { name: "PAUL", role: "Hair Cut Specialist", img: "stylist3" },
          { name: "CHARLIE", role: "Beard Expert", img: "stylist4" },
          { name: "AVA", role: "Hair Color Expert", img: "stylist5" },
          { name: "LIAM", role: "Beard Expert", img: "stylist6" },
          { name: "OLIVIA", role: "Hair Stylist", img: "stylist7" },
          { name: "JACKSON", role: "Hair Stylist", img: "stylist8" },
          { name: "HARRY", role: "Hair Stylist", img: "stylist9" },
        ].map(({ name, role, img }, index) => (
          <div
            key={index}
            className="relative w-full overflow-hidden rounded-lg group cursor-pointer"
          >
            <div className="p-4 transform transition-transform duration-300 group-hover:scale-105">
              <Image
                src={`/images/${img}.jpg`}
                alt={img}
                width={400}
                height={400}
                className={`w-full object-cover rounded-lg ${
                  img === "stylist5" || img === "stylist6" ? "h-[320px]" : "h-full"
                }`}
                priority
              />
              <div className="bg-[#D4A537] text-white py-6 px-4 text-center transition-colors duration-300 group-hover:bg-[#b6892e]">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-lg">{role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

