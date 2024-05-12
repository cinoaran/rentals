import Image from "next/image";
import Link from "next/link";
import { FaClock } from "react-icons/fa";


const ListedProperties = ({ listedProperties }) => {
    return (
        <article className="flex flex-col items-center justify-start bg-slate-200/40 border-[0.3px] border-blue-900 rounded-md p-5 w-[100%] lg:w-1/3">

            {listedProperties.map((property) => (
                <div className="relative md:w-[100%] md:max-h-[330px] rounded-xl overflow-hidden shadow-lg bg-white p-2 mb-4" key={property._id} >
                    <Link
                        href={`/properties/${property._id}`}
                        className=" hover:bg-slate-600 text-gray-800 rounded-tr-lg  text-center text-sm text-bold"
                    >
                        <span
                            className="flex justify-center items-center gap-1 absolute top-[5px] right-[5px] bg-white p-2 rounded-bl-lg text-gray-900 text-xs font-bold text-right md:text-center lg:text-right"
                        >
                            {property.type} {property.square_feet} sqm
                        </span>
                        <div className="flex justify-center items-center gap-1 absolute bottom-[5px] left-[5px] bg-white p-2 rounded-tr-lg text-gray-900 text-xs font-bold text-right md:text-center lg:text-right">
                            <FaClock className="text-lg text-gray-900" />
                            <p className="text-center text-gray-900 text-shadow-md  font-bold text-shadow-md"> Latest properties</p></div>

                        <Image
                            src={`/properties/${property.images[0]}`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="Description"
                            className='w-full aspect-[16/9] object-cover rounded-lg'
                        />
                    </Link>
                </div>
            ))}
        </article>
    )
}

export default ListedProperties