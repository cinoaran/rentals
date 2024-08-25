import Image from "next/image";
import Link from "next/link";
import { LuBath, LuBedSingle } from "react-icons/lu";
import { MdOutlineDoorFront } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const AllProperties = ({ properties }) => {
    return (
        <article className="w-full bg-white pb-10">
            <h3 className="text-center text-shadow-md text-3xl mb-8 text-gray-700 pt-10">All Properties</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center px-3 md:px-10">

                {properties.map((property) => (
                    <div className="relative border-[0.3px] border-blue-900 w-full md:w-[100%] rounded-xl overflow-hidden shadow-lg bg-white" key={property._id}>
                        <p
                            className="flex justify-center items-center gap-1 absolute top-[0px] right-[0px] bg-slate-200/40 p-1 rounded-bl-lg "
                        >
                            <span className="bg-blue-800 text-white p-2 rounded-bl-md rounded-tr-lg text-sm">{property.square_feet} sqm</span>
                        </p>
                        <Image
                            src={`/properties/${property.images[0]}`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="Description"
                            className='w-full h-64 object-cover'
                        />
                        <div className="absolute top-16 left-0 right-0">
                            <div className="flex items-center justify-center gap-5 text-sm leading-5 mt-5">
                                <div className="flex flex-col items-center justify-between gap-2 bg-slate-200/40 p-2 rounded-md">
                                    <p className=" bg-blue-800 text-white p-3  rounded-md"><LuBedSingle className="text-white text-[1.4em]" /><span className="text-xs text-white">x {property.rooms}</span> </p>
                                </div>
                                <div className="flex flex-col items-center justify-between gap-2 bg-slate-200/40 p-2 rounded-md">
                                    <p className=" bg-blue-800 text-white p-3  rounded-md"><LuBath className="text-white text-[1.4em]" /><span className="text-xs text-white">x {property.rooms}</span> </p>
                                </div>

                                <div className="flex flex-col items-center justify-between gap-2 bg-slate-200/40 p-2 rounded-md">
                                    <p className=" bg-blue-800 text-white p-3  rounded-md"><MdOutlineDoorFront className="text-white text-[1.4em]" /><span className="text-xs text-white">x {property.rooms}</span> </p>
                                </div>
                            </div>
                        </div>

                        <div className="px-6 pt-4 pb-2">
                            <div className="text-left md:text-center lg:text-left">
                                <div className="text-gray-600">{property.type}</div>
                                <h3 className="h-20 text-xl font-bold">{property.name}</h3>
                            </div>



                            <div className="flex  items-center  justify-center gap-2 h-28">
                                <p className="flex flex-col items-center justify-center gap-1  text-gray-900 p-2 text-[14px] text-semibold "><span>Weekly</span> <span className="text-[13px] text-semibold text-center">{property.rates.weekly > 0 ? `$ ${property.rates.weekly.toFixed(2)}` : '---'} </span></p>
                                <p className="flex flex-col items-center justify-center gap-1  text-gray-900 p-2 text-[14px] text-semibold"><span>Monthly</span><span className="text-[13px] text-semibold text-center">{property.rates.monthly > 0 ? `$ ${property.rates.monthly.toFixed(2)}` : '---'} </span></p>
                                <p className="flex flex-col items-center justify-center gap-1  text-gray-900 p-2 text-[14px] text-semibold"><span>Nightly</span><span className="text-[13px] text-semibold text-center">{property.rates.nightly > 0 ? `$ ${property.rates.nightly.toFixed(2)}` : '---'}</span></p>
                            </div>

                            <div className="border border-gray-100 mb-5"></div>

                            <div className="flex flex-col lg:flex-row justify-between mb-4">
                                <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                                    <FaMapMarkerAlt size="20" className="inline text-orange-700" />
                                    <span className="text-orange-700">{property.location.city} {property.location.state}</span>
                                </div>
                                <Link
                                    href={`/properties/${property._id}`}
                                    className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                                >
                                    Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </article>
    )

}

export default AllProperties