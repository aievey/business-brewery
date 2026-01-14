import Image from "next/image";
export default function Cover() {
  return (
    <div className="relative w-full h-[94vh] bg-black md:flex justify-center items-center">
      <div className="h-3/10 md:h-9/10 md:w-4/10 flex justify-center items-center">
        <div className="">
          <h2 className="text-center md:text-right text-white font-bold py-5 text-4xl md:text-4xl/1">
            Business Brewery
          </h2>
          <h1 className="text-center md:text-right text-amber-400 font-extralight text-2xl italic">
            I help local businesses get more customer inquiries.
          </h1>
        </div>
      </div>
      <div className=" h-7/10 md:h-9/10 md:w-6/10 ">
        <div className="relative aspect-6/4 overflow-hidden">
          <Image
            src="/cover-main.avif"
            height={500}
            width={500}
            priority
            alt="business-brewery-cover aspect-auto"
            className="aspect-6/4 h-full w-full object-cover"
          />
        </div>
        <p className="text-center text-l shadow bg-amber-100 p-4 md:p-6 border-0 -mb-4 rounded-2xl">
          Turn your business into a high-speed revenue engine.
        </p>
      </div>
    </div>
  );
}
