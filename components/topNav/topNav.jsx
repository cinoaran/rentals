"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { IoBedOutline } from "react-icons/io5";
import Image from "next/image";
import LoginTab from "./loginTab/loginTab";
import Hero from "../hero/hero";


const TopNavComponent = () => {

  const pathname = usePathname();

  return (
    <header className='relative w-full h-[max-content] bg-blue-600/70 '>
      <Image
        src="/navImages/sony-center.png"
        layout="fill"

        className="absolute md:max-w-[70%] max-w-[100%] max-h-full object-cover aspect-video opacity-20 mr-0 ml-auto"
        style={{ clipPath: "circle(75% at 90% 30%)" }}
        alt="hero" />
      <nav className="flex flex-row items-center justify-between p-5 w-full h-[110px]">
        <div className="relative text-white cursor-pointer">
          <Link href="/" className="flex flex-row items-center justify-center gap-3">
            <IoBedOutline size="3.8em" className="text-blue-900" />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[20px] ">ARAN RENTALS</h1>
              <hr className="w-[40px] text-white" />
              <span className="text-[18px] font-bold tracking-[.10em]">
                World <b className="text-blue-900">&</b> Living
              </span>
            </div>
          </Link>
        </div>
        <ul className="flex flex-row items-center gap-20 text-white">
          <li>
            <LoginTab />
          </li>
        </ul>
      </nav>
      {pathname === '/' && <Hero />}
    </header>
  );
};

export default TopNavComponent;
