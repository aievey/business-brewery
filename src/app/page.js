import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black ">
        <Image
          className=""
          src="/business-brewery.png"
          alt="business-brewery logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center text-center ">
          <h1 className="w-65 mt-6 text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Business brewery.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 mb-10">
            <span className="text-amber-400">
              Ready to take your business to the next level?
            </span>
            {/* <br /> We can update/ renew your existing site to the next level{" "}
            <br /> with latest technologies you are looking for <br /> or even
            create it from scratch for you <br /> to{" "}
            <span className="text-amber-400">outshine your competition</span>. */}
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-46 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] "
            href=""
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/business-brewery.png"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Free inspection!
          </a>
          <a
            className="flex h-12 w-46 items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            href=""
            rel="noopener noreferrer"
          >
            Contact now
          </a>
        </div>
      </main>
    </div>
  );
}
