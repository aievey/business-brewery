import { Sun } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 lg:py-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="mx-auto max-w-xl space-y-6 text-center lg:mx-0 lg:text-start">
            <div className="flex justify-center sm:justify-start            ">
              <Image
                className=""
                src="/business-brewery.png"
                alt="business-brewery logo"
                width={100}
                height={20}
                priority
              />
            </div>

            <h1 className="text-5xl lg:text-6xl">
              <span>Welcome to the</span> <br />
              <span className="text-chart-4 italic">Business</span>
              <span className="text-chart-4 not-italic"> Brewery</span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Step into our innovation oasis, where groundbreaking ideas bloom,
              and every click is a step into a world of endless possibilities.
            </p>
          </div>

          <div className="flex justify-center gap-4 lg:justify-start">
            <Button size="lg" className="rounded-full">
              Free inspection
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Book now
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 space-y-6">
          <div className="space-y-6">
            <Card className="mt-8 aspect-4/3 overflow-hidden border-none p-0 shadow-none">
              <Image
                width={500}
                height={500}
                src="/cover-demo.jpeg"
                alt="Mobile app"
                className="aspect-4/3 w-full h-full object-cover"
              />
            </Card>
            <Card className="aspect-4/3 border-none shadow-none relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-25 h-25 bg-amber-400 rounded-full blur-3xl" />
              <div className="absolute top-0 right-0 w-25 h-25 bg-blue-500 rounded-full blur-3xl" />
              <CardContent className="flex h-full flex-col justify-end">
                <div>
                  <div className="mb-2 text-2xl">2x</div>
                  <div className="text-muted-foreground">Revenue</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="-mb-8 space-y-6">
            <Card className="aspect-4/3 border-none shadow-none relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-25 h-25 bg-rose-600 rounded-full blur-3xl" />
              <div className="absolute top-0 right-0 w-25 h-25 bg-blue-600 rounded-full blur-3xl" />
              <CardContent className="flex h-full flex-col justify-end">
                <div>
                  <div className="mb-2 text-2xl">+60%</div>
                  <div className="text-muted-foreground">Reach</div>
                </div>
              </CardContent>
            </Card>
            <Card className="aspect-4/3 border-none shadow-none relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-25 h-25 bg-rose-600/80 rounded-full blur-3xl" />
              <div className="absolute top-0 right-0 w-25 h-25 bg-pink-100/50 rounded-full blur-3xl" />
              <CardContent className="flex h-full flex-col justify-end">
                <div>
                  <div className="mb-2 text-2xl">A+</div>
                  <div className="text-muted-foreground">Loading time</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
