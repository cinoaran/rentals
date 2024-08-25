import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaRegImages } from "react-icons/fa";
import { MdInfoOutline, MdOutlineDoorFront } from "react-icons/md";
import Amenities from "../amenities/amenities";
import { LuBath, LuBedSingle } from "react-icons/lu";
import Tooltip from "../tooltip/tooltip";
import ScrollToTop from "../scroll/toTop";


const Details = ({ property }) => {
    return (
        <>
            <ScrollToTop />
            <div className="relative flex items-center justify-center shadow-md rounded-lg bg-slate-200/40 p-5 mt-16">
                <div className='md:w-[600px] w-full rounded-lg bg-blue-600/90 p-5'>
                    <ul role="list" className="divide-y divide-blue-900 text-sm">
                        <li className="flex flex-col items-center justify-center gap-x-4 space-y-2">
                            <div className="flex items-center justify-center min-w-0 gap-x-4 md:gap-x-10">
                                <Image className="h-24 w-24 flex-none rounded-full bg-gray-50" width="120" height="120" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <div className="min-w-0 flex-auto">
                                    <div className="flex items-center justify-center gap-2 text-sm leading-5 mt-2 text-center">

                                        <div className="flex flex-col items-center justify-between gap-2 p-2 rounded-md">
                                            <Tooltip
                                                message={`This property has ${property.beds} beds`}
                                                position='center'
                                            >
                                                <p className=" bg-blue-700 text-white p-3 rounded-md"><LuBedSingle className="text-white text-[1.6em]" /><span className="text-xs text-white">x {property.beds}</span> </p>
                                            </Tooltip>
                                        </div>

                                        <div className="flex flex-col items-center justify-between gap-2 p-2 rounded-md">
                                            <Tooltip
                                                message={`This property has ${property.baths} bathrooms`}
                                                position='center'

                                            >
                                                <p className=" bg-blue-700 text-white p-3  rounded-md"><LuBath className="text-white text-[1.6em]" /><span className="text-xs text-white">x {property.baths}</span> </p>
                                            </Tooltip>
                                        </div>
                                        <div className="flex flex-col items-center justify-between gap-2 p-2 rounded-md">
                                            <Tooltip
                                                message={`This property has ${property.rooms} rooms`}
                                                position='center'

                                            >
                                                <p className=" bg-blue-700 text-white p-3  rounded-md"><MdOutlineDoorFront className="text-white text-[1.7em]" /><span className="text-xs text-white">x {property.rooms}</span> </p>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full text-white text-sm md:text-md lg:text-lg">
                                <h3 className="flex items-center justify-start gap-3 border-b-[0.3px] border-gray-700  text-white p-2">
                                    <span><MdInfoOutline size="20" /></span> {property.seller_info.name}`s {property.type} Rates
                                </h3>
                                <div className="flex items-center justify-center gap-2 pt-3">
                                    <p className="flex flex-col items-center justify-center gap-1 bg-blue-700 p-2 rounded-lg w-1/3">
                                        <span>Nightly</span>
                                        <span>{property.rates.nightly > 0 ? `$ ${property.rates.nightly}` : "------"}</span>
                                    </p>
                                    <p className="flex flex-col items-center justify-between gap-1 bg-blue-700 p-2 rounded-lg w-1/3">
                                        <span>Weekly</span>
                                        <span>{property.rates.weekly > 0 ? `$ ${property.rates.weekly}` : "------"}</span>
                                    </p>
                                    <p className="flex flex-col items-center justify-between gap-1 bg-blue-700 p-2 rounded-lg w-1/3">
                                        <span>Monthly</span>
                                        <span>{property.rates.monthly > 0 ? `$ ${property.rates.monthly}` : "------"}</span>
                                    </p>
                                </div>
                            </div>
                            <Amenities amenities={property.amenities} />
                        </li>
                        <li className="flex flex-col items-center justify-center pt-5 text-white">
                            <div className="flex items-center justify-center gap-5">
                                <Link href="/properties" className="flex items-center justify-center gap-3 border-[0.3px] border-gray-700 bg-blue-700 hover:bg-blue-900 text-md rounded-md p-2 cursor-pointer">
                                    <FaChevronLeft className="text-[1.2em]" />
                                    <span className="text-md capitalize text-bold">Back to list</span>
                                </Link>
                                <p className="flex items-center justify-center gap-3 border-[0.3px] border-gray-700 bg-blue-700 hover:bg-blue-900 text-md rounded-md p-2 cursor-pointer">
                                    <FaRegImages className="text-[1.4em]" />
                                    <span className="text-md capitalize text-bold">show gallery</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Details