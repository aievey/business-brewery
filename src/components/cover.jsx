import Image from "next/image";
export default function Cover() {
  return (
    <div className="relative w-full center max-w-480 h-[94vh] max-h-270 bg-black md:flex justify-center items-center">
      {/* leftcolumn */}
      <div className="h-3/10 md:h-full md:w-4/10 flex justify-center items-center md:justify-end">
        <div className="">
          <h2 className="text-center md:text-right text-white font-bold py-5 text-4xl md:text-4xl/1">
            Business Brewery
          </h2>
          <h1 className="text-center md:text-right text-amber-400 font-extralight text-2xl italic">
            I help local businesses get more customer inquiries.
          </h1>
        </div>
      </div>
      {/* right Column */}
      <div className="relative h-7/10 md:h-full md:w-6/10 ">
        <div className="relative h-full overflow-hidden">
          <Image
            src="/business-brewery-cover-main.avif"
            height={1200}
            width={1200}
            priority
            alt="business-brewery-cover "
            className="aspect-auto h-full object-cover z-0"
          />
        </div>
        <div className="w-full absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center items-center text-l shadow bg-white/90 h-1/11 py-10 xl:p-0 rounded-2xl z-10 md:w-1/2 backdrop-blur-[5px]">
          <p className="text-center px-10">
            Turn your business into a high-speed revenue engine.
          </p>
        </div>
      </div>
    </div>
  );
}
