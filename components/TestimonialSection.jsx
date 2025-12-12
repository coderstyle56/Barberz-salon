"use client";
import { FaStar } from "react-icons/fa";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "James Walker",
      role: "Business Executive",
      review:
        "Absolutely the best grooming experience I’ve ever had. Precision, professionalism, and a truly luxurious environment!",
      stars: 5,
    },
    {
      name: "Arun Mehta",
      role: "Entrepreneur",
      review:
        "The barbers truly understand style. My haircut looked sharp, modern, and boosted my confidence instantly.",
      stars: 5,
    },
    {
      name: "Michael Carter",
      role: "Designer",
      review:
        "Super clean place, friendly staff, and world-class service. They pay attention to every small detail!",
      stars: 5,
    },
    {
      name: "Rohit Kumar",
      role: "Software Engineer",
      review:
        "Loved the premium service! The attention to detail is unmatched. Highly recommended for every gentleman.",
      stars: 5,
    },
    {
      name: "David Patel",
      role: "Model",
      review:
        "Best grooming studio in the city. Their styles are modern, classy, and incredibly precise.",
      stars: 5,
    },
  ];

  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-[#fff7e6] py-24 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-16">
        <h3 className="text-amber-600 text-xl tracking-[0.3em] font-semibold">
          TESTIMONIALS
        </h3>

        <h2 className="text-5xl font-extrabold text-gray-900 mt-2 drop-shadow-lg">
          What Our Clients Say
        </h2>
      </div>

      {/* Infinite Scroller */}
      <div className="relative w-full">
        <div className="flex gap-10 animate-scrollInfinite">
          {loopTestimonials.map((t, index) => (
            <div
              key={index}
              className="
                min-w-[360px] max-w-[360px] 
                backdrop-blur-xl bg-white/40 
                border border-white/60 
                shadow-[0_8px_25px_rgba(0,0,0,0.10)] 
                rounded-3xl p-6 
                inline-flex flex-col justify-between 
                h-[300px]
              "
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array(t.stars)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} className="text-amber-500 text-lg" />
                  ))}
              </div>

              {/* Review */}
              <p className="
                text-gray-800 italic leading-relaxed text-[15px]
                break-words 
                mb-6 
                line-clamp-5
              ">
                “{t.review}”
              </p>

              {/* Name + Role */}
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  {t.name}
                </h3>
                <p className="text-sm text-gray-600">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

