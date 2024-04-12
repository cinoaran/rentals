import Image from "next/image";
import Link from "next/link";
import properties from "../../sample-data/properties.json";
import { LuBath, LuBedSingle } from "react-icons/lu";
import { MdOutlineDoorFront } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
const Properties = () => {
    return (

        <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-3 gap-4 place-items-center">

            {properties.length === 0 ? <h2 className="text-center bg-slate-300 text-shadow-md  text-3xl font-bold mb-8">There are no properties to show!</h2> : ''}
            {
                properties.map((property) => (

                    <div className="relative w-[100%] rounded-xl overflow-hidden shadow-lg bg-white" key={property._id}>
                        <span
                            className="flex justify-center items-center gap-1 absolute top-[10px] right-[10px] bg-white p-2 rounded-lg text-blue-500 text-sm font-bold text-right md:text-center lg:text-right"
                        >
                            {property.square_feet} sqm
                        </span>
                        <Image
                            src={`/properties/${property.images[0]}`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="Description"
                            className='w-full'
                        />
                        <div className="px-6 pt-4 pb-2">
                            <div className="text-left md:text-center lg:text-left mb-6">
                                <div className="text-gray-600">{property.type}</div>
                                <h3 className="h-20 text-xl font-bold">{property.name}</h3>
                            </div>

                            <div className="flex items-center justify-center gap-4 text-gray-500 h-20">
                                <p className="flex flex-col items-center justify-center gap-1 text-gray-900 p-2 ">
                                    <LuBedSingle size="30" />
                                    <span className="text-sm text-bold"> x {property.beds}</span>
                                </p>
                                <p className="flex flex-col items-center justify-center gap-1 text-gray-900 p-2">
                                    <LuBath size="30" />
                                    <span className="text-sm text-bold"> x {property.baths}</span>
                                </p>
                                <p className="flex flex-col items-center justify-center gap-1 text-gray-900 p-2">
                                    <MdOutlineDoorFront size="30" />
                                    <span className="text-sm text-bold"> x {property.rooms}</span>
                                </p>
                            </div>

                            <div className="flex  items-center  justify-center gap-2 h-28">
                                <p className="flex flex-col justify-center gap-1  text-gray-900 p-2 text-md"><span>Weekly</span> <span className="text-sm text-bold text-center">{property.rates.weekly > 0 ? `$ ${property.rates.weekly.toFixed(2)}` : '---'} </span></p>
                                <p className="flex flex-col justify-center gap-1  text-gray-900 p-2 text-md"><span>Monthly</span><span className="text-sm text-bold text-center">{property.rates.monthly > 0 ? `$ ${property.rates.monthly.toFixed(2)}` : '---'} </span></p>
                                <p className="flex flex-col justify-center gap-1  text-gray-900 p-2 text-md"><span>Nightly</span><span className="text-sm text-bold text-center">{property.rates.nightly > 0 ? `$ ${property.rates.nightly.toFixed(2)}` : '---'}</span></p>
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


                ))

            }

        </section>

    )
}

export default Properties