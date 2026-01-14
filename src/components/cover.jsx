export default function Cover() {
  return (
    <div className="relative w-full h-[94vh] bg-gray-900 md:flex justify-center items-center">
      <div className="h-1/5 md:h-9/10 md:w-4/10 flex justify-center items-center">
        <div className="mt-10">
          <h2 className="text-center md:text-right text-white font-bold py-5 text-3xl/1">
            Business Brewery
          </h2>
          <h1 className="text-center md:text-right text-amber-400 font-extralight text-2xl">
            I help local businesses get more customer inquiries.
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-end h-4/5 md:h-9/10 md:w-6/10 ">
        <p className="text-center text-xl bg-white font-light p-4 md:p-6 border-0 border-black -mb-4 rounded-2xl">
          Turn your business into a high-speed revenue engine.
        </p>
      </div>
    </div>
  );
}
