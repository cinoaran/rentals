import Image from "next/image";
import Link from "next/link";
import { LuBath, LuBedSingle } from "react-icons/lu";
import { MdOutlineDoorFront } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const FeaturedProperties = ({ featuredProperties }) => {
    return (
        <article className="w-full lg:w-1/3 flex flex-col items-center justify-start border-[0.3px] border-blue-900 rounded-md p-5"><h3 className="text-center text-white text-shadow-md text-3xl font-bold mb-8">Recent Properties</h3>
            {featuredProperties.map((property) => (
                <div className="relative md:w-[80%] rounded-xl overflow-hidden shadow-lg bg-white p-2 mb-4" key={property._id} >
                    <Link
                        href={`/properties/${property._id}`}
                        className="bg-white hover:bg-slate-600 text-gray-800 rounded-tr-lg  text-center text-sm text-bold"
                    >
                        <span
                            className="flex justify-center items-center gap-1 absolute top-[5px] right-[5px] bg-white p-2 rounded-bl-lg text-gray-900 text-xs font-bold text-right md:text-center lg:text-right"
                        >
                            {property.type} {property.square_feet} sqm
                        </span>
                        <Image
                            src={`/properties/${property.images[0]}`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="Description"
                            className='w-full'
                        />
                    </Link>
                </div>

            ))}

        </article>
    )
}

export default FeaturedProperties