import Image from "next/image";
import Link from "next/link";
import { FaClock } from "react-icons/fa";


const ListedProperties = ({ listedProperties }) => {
    return (
        <article className="flex flex-col items-center justify-center gap-3 border-[0.3px] border-gray-100 rounded-md p-5 lg:w-1/3">
            {listedProperties.map((property) => (

                <div className="relative w-full bg-blue-600/60 rounded-xl overflow-hidden shadow-lg p-5" key={property._id}>
                    <Link
                        href={`/properties/${property._id}`}
                    >
                        <span
                            className="flex justify-center items-center gap-1 absolute top-0 right-0 bg-blue-600 p-3 rounded-bl-lg rounded-tr-lg text-white text-xs md:text-sm text-center"
                        >
                            {property.type} {property.square_feet} sqm
                        </span>
                        <div className="flex justify-center items-center gap-2 absolute bottom-0 left-0 bg-blue-600 p-3 rounded-bl-lg rounded-tr-lg text-white text-xs md:text-sm text-center">
                            <FaClock className="text-lg" />
                            <p className="text-center text-shadow-md text-shadow-md"> Latest Properties</p></div>

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