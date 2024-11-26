// components/TeamSection.js
import Image from 'next/image';

export default function TeamSection() {
  return (
    <div className="specialist mt-0 mb-0 bg-yellow-100">
            <h1 className="text-center text-4xl text-amber-900 ">SPECIALISTS</h1>
            <h1 className="text-center text-6xl text-black mt-3">Our Team</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
              <div className="relative  w-full overflow-hidden rounded-lg">
                <div className="p-4 rounded-lg">
                  <Image
                    src="/images/stylist1.jpg"
                    alt="stylist1"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="bg-[#D4A537] text-white py-6 px-4 text-center">
                    <h2 className="text-2xl font-bold">DAVID</h2>
                    <p className="text-lg">Hair Cut Specilist</p>
                  </div>
                </div>
              </div>
              <div className="relative  w-full overflow-hidden rounded-lg">
                <div className="p-4">
                  <Image
                    src="/images/stylist2.jpg"
                    alt="stylist2"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="bg-[#D4A537] text-white py-6 px-4 text-center">
                    <h2 className="text-2xl font-bold">MAX</h2>
                    <p className="text-lg">Hair Cut Specilist</p>
                  </div>
                </div>
              </div>

              <div className="relative  w-full overflow-hidden rounded-lg">
                <div className="p-4">
                  <Image
                    src="/images/stylist3.jpg"
                    alt="stylist3"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="bg-[#D4A537] text-white py-6 px-4 text-center">
                    <h2 className="text-2xl font-bold">PAUL</h2>
                    <p className="text-lg">Hair Cut Specilist</p>
                  </div>
                </div>
              </div>
              <div className="relative  w-full overflow-hidden rounded-lg">
                <div className="p-4">
                  <Image
                    src="/images/stylist4.jpg"
                    alt="stylist4"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="bg-[#D4A537] text-white py-6 px-4 text-center">
                    <h2 className="text-2xl font-bold">CHARLIE</h2>
                    <p className="text-lg">Beard Expert</p>
                  </div>
                </div>
              </div>
              <div className="relative p-4 w-full overflow-hidden rounded-lg">
                <div className="">
                  <Image
                    src="/images/stylist5.jpg"
                    alt="stylist5"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="bg-[#D4A537] text-white py-6 px-4 text-center">
                    <h2 className="text-2xl font-bold">AVA</h2>
                    <p className="text-lg">Hair Color Expert</p>
                  </div>
                </div>
              </div>
              <div className="relative  w-full overflow-hidden rounded-lg">
                <div className="p-4">
                  <Image
                    src="/images/stylist6.jpg"
                    alt="stylist6"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="bg-[#D4A537] text-white py-6 px-4 text-center">
                    <h2 className="text-2xl font-bold">LIAM</h2>
                    <p className="text-lg">Beard Expert</p>
                  </div>
                </div>
              </div>
              <div className="relative  w-full overflow-hidden rounded-lg">
                <div className="p-4">
                  <Image
                    src="/images/stylist7.jpg"
                    alt="stylist7"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="bg-[#D4A537] text-white py-6 px-4 text-center">
                    <h2 className="text-2xl font-bold">OLIVIA</h2>
                    <p className="text-lg">Hair Stylist</p>
                  </div>
                </div>
              </div>
              <div className="relative  w-full overflow-hidden rounded-lg">
                <div className="p-4">
                  <Image
                    src="/images/stylist8.jpg"
                    alt="stylist8"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="bg-[#D4A537] text-white py-6 px-4 text-center">
                    <h2 className="text-2xl font-bold">JACKSON</h2>
                    <p className="text-lg">Hair Stylist</p>
                  </div>
                </div>
              </div>
              <div className="relative  w-full overflow-hidden rounded-lg">
                <div className="p-4">
                  <Image
                    src="/images/stylist9.jpg"
                    alt="stylist9"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="bg-[#D4A537] text-white py-6 px-4 text-center">
                    <h2 className="text-2xl font-bold">HARRY</h2>
                    <p className="text-lg">Hair Stylist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

 ) }