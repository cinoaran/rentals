"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdClose, MdLogin, MdLogout, MdNotificationsNone, MdOutlineLocationOn, MdOutlinePersonAddAlt, MdOutlineDone } from "react-icons/md";
import { FaRegUser, FaRegBuilding } from "react-icons/fa6";
import { BsBuildingAdd } from "react-icons/bs";
import Link from "next/link";
import Tooltip from "@/components/tooltip/tooltip";

const LoginTab = () => {
  const [loginTableToggle, setLoginTableToggle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pathname = usePathname();


  return (
    <>
      {!isLoggedIn ? (
        <div className='relative flex items-center justify-center md:gap-5 gap-2'>

          <Link href='/login'>
            <Tooltip
              message='Login or Register'
              position='center'
            >
              <div className={`${pathname === '/login' ? 'border-slate-100' : 'border-slate-400'} bg-blue-900 border-[0.3px] border-white rounded-full p-2 hover:bg-gray-600 cursor-pointer`}>
                <MdLogin size='19' />
              </div>
            </Tooltip>

          </Link>

          <Link href='/properties'>
            <Tooltip
              message='All Properties'
              position='left'
            >
              <div className={`${pathname === '/properties' ? 'border-slate-100' : 'border-slate-400'} bg-blue-900 border-[0.3px] border-white rounded-full p-2 hover:bg-gray-600 cursor-pointer`}>
                <FaRegBuilding size='18' />
              </div>
            </Tooltip>
          </Link>

          <Link href='/locations'>
            <Tooltip
              message='Show Properties on Map'
              position='right'
            >
              <div className={`${pathname === '/locations' ? 'border-slate-100' : 'border-slate-400'} bg-blue-900 border-[0.3px] border-white rounded-full p-2 hover:bg-gray-600 cursor-pointer`}>
                <MdOutlineLocationOn size='20' />
              </div>
            </Tooltip>
          </Link>
        </div>
      ) : (
        <div className='relative flex items-center justify-center gap-5'>
          <Link href='/dashboard/admin/messages'>
            <Tooltip
              message={`You have ${5} New Messages`}
              position='center'
            >
              <div className={`${pathname === '/dashboard/admin/messages' ? 'border-slate-100' : 'border-slate-400'} bg-blue-900 border-[0.3px] border-white rounded-full p-2 hover:bg-gray-600 cursor-pointer`}>
                <span className="absolute bg-red-400 text-gray-300 px-2 py-1 text-xs font-bold rounded-full -top-2 -right-2 border-[0.3px] border-white w-5 h-5 flex items-center justify-center">5</span>
                <MdNotificationsNone size='20' />
              </div>
            </Tooltip>
          </Link>
          <div className={`${isLoggedIn ? 'border-slate-100' : 'border-slate-400'} bg-blue-900 border-[0.3px] border-white rounded-full p-2 hover:bg-gray-600 cursor-pointer`}>
            <span className="absolute bg-red-400 text-gray-300 text-xs font-bold rounded-full -top-2 -right-2 border-[0.3px] border-white w-5 h-5 flex items-center justify-center"><MdOutlineDone size="12" /></span>
            <FaRegUser
              size='20'
              onClick={() => setLoginTableToggle((prev) => !prev)}
            />
            {loginTableToggle && (
              <div
                className='absolute flex flex-col justify-center gap-3 top-[55px] right-0 text-sm text-white bg-blue-900 rounded-md p-5 w-60 h-auto z-50 shadow-md shadow-slate-800'
                onMouseLeave={() => setLoginTableToggle((prev) => !prev)}
              >
                <span
                  className='absolute top-2 right-2 rounded-full border border-black hover:border-white cursor-pointer'
                  onClick={() => setLoginTableToggle((prev) => !prev)}
                >
                  <MdClose />
                </span>
                <Link href='/dashboard/admin/profile' className='flex items-center gap-2 hover:font-bold'>
                  <MdOutlinePersonAddAlt size="20" /> Edit Profile
                </Link>
                <Link href='/dashboard/admin/add' className='flex items-center gap-2 hover:font-bold'>
                  <BsBuildingAdd size="15" />  Add Property
                </Link>
                <button className='flex items-center gap-2 hover:font-bold'>
                  <MdLogout size="16" className="scale-x-[-1]" /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LoginTab;
