import { Link } from "lucide-react";
import Image from "next/image";
const NavigationBar = () => {
  return (
    <ul className="flex bg-amber-300/5 fixed top-0 shadow w-full backdrop-blur-2xl py-2">
      <div className="h-10 w-10 mx-2.5">
        <Image
          alt="business-brewery-logo"
          width={200}
          height={200}
          src={"/business-brewery.png"}
          className="aspect-square"
        />
      </div>

      <li className="mx-1 py-2">Home</li>
      <li className="mx-1 py-2">Customs</li>
    </ul>
  );
};

export default NavigationBar;
