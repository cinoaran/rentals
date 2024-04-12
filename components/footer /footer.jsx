import Link from "next/link";
import { IoBedOutline, IoListOutline } from "react-icons/io5";
import { MdChecklist, MdEmail } from "react-icons/md";
import { GiInjustice } from "react-icons/gi";
import { FaSitemap, FaUserShield, FaUsers } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-blue-900 mx-auto'>

      <div className="flex flex-col md:flex-row flex-wrap md:justify-between  p-5 gap-5">
        <div className="flex flex-col md:flex-row flex-wrap items-center md:items-start justify-between gap-10 w-full md:divide-none divide-y divide-dashed p-10">
          <div className="flex items-center justify-center w-full md:w-[auto]">
            <Link href="/" className="flex flex-row items-center justify-center gap-3 text-white cursor-pointer flex-1">
              <IoBedOutline size="3.8em" className="text-white" />
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-[20px] ">ARAN RENTALS</h1>
                <hr className="w-[40px] text-white" />
                <span className="text-[18px] font-bold tracking-[.10em]">
                  World <b className="text-blue-600">&</b> Living
                </span>
              </div>
            </Link>
          </div>
          <div className="pt-10 md:pt-1 w-full md:w-[auto]">
            <ul className="flex flex-col items-start justify-start gap-10">
              <li className="flex flex-row items-center justify-center gap-2 text-white text-sm ">
                <span><FaUsers size="20" /></span><Link href="/contact">Contact</Link>
              </li>
              <li className="flex flex-row items-center justify-center gap-2 text-white text-sm ">
                <span><GiInjustice size="20" /></span> <Link href="/terms">Terms & Conditions</Link>
              </li>
              <li className="flex flex-row items-center justify-center gap-2 text-white text-sm ">
                <span><MdChecklist size="20" /></span> <Link href="/disclaimer">Disclaimer</Link>
              </li>
              <li className="flex flex-row items-center justify-center gap-2 text-white text-sm ">
                <span><IoListOutline size="20" /></span> <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="pt-10 md:pt-1 w-full md:w-[auto]">
            <ul className="flex flex-col items-start justify-start gap-10">
              <li className="flex flex-row items-center justify-center gap-2 text-white text-sm "><span><FaRegBuilding size="20" /></span> <Link href="/about"></Link>About us</li>
              <li className="flex flex-row items-center justify-center gap-2 text-white text-sm "><span><FaUserShield size="20" /></span> <Link href="/policy"></Link>Privacy Policy</li>
              <li className="flex flex-row items-center justify-center gap-2 text-white text-sm "><span><FaSitemap size="20" /></span> <Link href="/sitemap"></Link>Sitemap</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center w-full border-t border-dashed">
          <p className="text-white text-sm md:divide-none divide-y divide-dashed p-10">Copyright all right reserved {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
