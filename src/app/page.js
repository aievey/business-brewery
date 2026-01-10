import Image from "next/image";
import { Button } from "@/components/ui/button";
import FlipClock from "@/components/ui/flip-clock";
import HeroSection from "@/components/hero-sections-05";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 ">
        <Image
          className=""
          src="/business-brewery.png"
          alt="business-brewery logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center text-center ">
          <h1 className="w-65 mt-6 text-3xl font-semibold leading-10 tracking-tight text-black">
            Business brewery.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 mb-10">
            <span className="text-amber-400">
              Ready to take your business to the next level?
            </span>
            
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <FlipClock />
          <a
            className="flex h-12 w-46 items-center justify-center gap-2 rounded-full px-5 text-background transition-colors bg-amber-400 hover:bg-amber-300"
            href=""
            rel="noopener noreferrer"
          >
            <Image
              src="/business-brewery.png"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Free inspection!
          </a>
          <a
            className="flex h-12 w-46 items-center justify-center rounded-full border border-solid border-amber-400 px-5 transition-colors hover:bg-amber-300"
            href=""
            rel="noopener noreferrer"
          >
            Contact now
          </a>
        </div>
      </main> */}
    </>
  );
}
