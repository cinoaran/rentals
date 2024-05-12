
import { FaCheck } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";


const Amenities = ({ amenities }) => {
  return (

    <div className="w-full text-white text-sm">
      <h3 className="flex items-center justify-start gap-3 text-lg border-b-[0.3px] border-gray-700  text-white py-2 px-2">
        <span><MdInfoOutline size="20" /></span> Amenities
      </h3>
      <ul
        className="grid grid-cols-2 md:grid-cols-3 gap-2  items-start justify-center list-none w-full py-3"
      >
        {
          amenities.map((amenity, index) => (
            <li
              key={index}
              className="rounded-md bg-blue-700 p-1"
            >
              <span className="p-1">{amenity}</span>
            </li>
          ))
        }
      </ul>
    </div>

  )
}

export default Amenities