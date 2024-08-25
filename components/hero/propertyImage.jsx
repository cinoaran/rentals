import Image from "next/image";
import { FaRegImages, FaRulerCombined } from "react-icons/fa";
import Details from "../details/details";
import ShareOrBookmark from "../social/shareOrBookmark";



const PropertyImage = ({ property }) => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full h-full md:max-h-[550px] aspect-[16/9] rounded-3x pb-10">
            <Image
                src={`/properties/${property.images[0]}`} alt="Hero Image"
                fill
                sizes=" 100vw"
                priority
                className="object-cover"
                as="picture"
            />
            <div className="absolute top-0 right-0 ">
                <div className="text-white  bg-slate-200/40 rounded-bl-lg p-1">
                    <p className="flex items-center">
                        <span className=" text-white bg-blue-600 p-2 rounded-bl-md rounded-tr-md text-md">{property.type} {property.square_feet} sqm</span>
                    </p>
                </div>
            </div>
            <Details property={property} />
            {/*  <ShareOrBookmark /> */}
        </div>
    )
}

export default PropertyImage