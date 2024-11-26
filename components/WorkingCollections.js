import Image from "next/image";

export default function WorkingCollections() {
  return (
    <div className="work mt-8 mb-20 bg-white">
      <h1 className="text-center text-6xl text-black">Our Work</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
        <div className="p-2 border-4 border-yellow-700">
          <Image
            src="/images/model1.jpg"
            alt="Model 1"
            width={400}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="border-4 border-yellow-700 p-2">
          <Image
            src="/images/model2.jpeg"
            alt="Model 2"
            width={400}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="border-4 border-yellow-700 p-2">
          <Image
            src="/images/model3.jpeg"
            alt="Model 3"
            width={400}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="border-4 border-yellow-700 p-2">
          <Image
            src="/images/model4.jpeg"
            alt="Model 4"
            width={400}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="border-4 border-yellow-700 p-2">
          <Image
            src="/images/model5.jpeg"
            alt="Model 5"
            width={400}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="border-4 border-yellow-700 p-2">
          <Image
            src="/images/model6.jpg"
            alt="Model 6"
            width={400}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
