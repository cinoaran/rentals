import Link from "next/link";
import React from "react";
import { IoBedOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className='bg-blue-900  h-50 mx-auto mt-5'>

      <div className="flex flex-row items-center justify-between p-5 w-full h-[110px]">
        <div className="text-white cursor-pointer ml-10">
          <Link href="/" className="flex flex-row items-center justify-center gap-3">
            <IoBedOutline size="3.8em" className="text-white" />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[20px] ">ARAN RENTALS</h1>
              <hr className="w-[40px] text-white" />
              <span className="text-[18px] font-bold tracking-[.10em]">
                World <b className="text-blue-900">&</b> Living
              </span>
            </div>
          </Link>
        </div>

        <div className="mr-10">
          <p className="text-white text-md">Copyright all right reserved {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
