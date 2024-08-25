import Image from "next/image";
import Link from "next/link";
import { MdStars } from "react-icons/md";


const FeaturedProperties = ({ featuredProperties }) => {
    return (
        <article className="flex flex-col items-center justify-start gap-3 border-[0.3px] border-gray-100 rounded-md p-5 w-[100%] lg:w-1/3">
            {featuredProperties.map((property) => (
                <div className="relative w-full  bg-blue-600/60 rounded-xl overflow-hidden shadow-lg p-5" key={property._id} >
                    <Link
                        href={`/properties/${property._id}`}
                    >
                        <span
                            className="flex justify-center items-center gap-1 absolute top-0 right-0 bg-blue-600 p-3 rounded-bl-lg rounded-tr-lg text-white text-xs md:text-sm  text-right md:text-center lg:text-right"
                        >
                            {property.type} {property.square_feet} sqm
                        </span>
                        <div className="flex justify-center items-center gap-1 absolute bottom-0 left-0 bg-blue-600 p-3 rounded-bl-lg rounded-tr-lg text-white text-xs md:text-sm text-right md:text-center lg:text-right">
                            <MdStars className="text-lg" />
                            <p className="text-center text-shadow-md text-shadow-md"> Top rated</p></div>

                        <Image
                            src={`/properties/${property.images[0]}`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="Description"
                            className='w-full aspect-[16/9] object-contain rounded-lg'
                        />

                    </Link>
                </div>
            ))}
        </article>
    )
}

export default FeaturedProperties