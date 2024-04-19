import Image from "next/image"
import { FaRegFileAlt } from "react-icons/fa"

import { MdOutlineMarkEmailRead } from "react-icons/md"

const OwnerToClient = () => {
    return (

        <div className="w-full lg:w-1/3 flex flex-col items-center justify-start border-[0.3px] border-blue-900 rounded-md p-5">
            <h3 className="text-center text-white text-shadow-md text-3xl font-bold mb-8">Rent your property</h3>
            <div className="flex items-start justify-center  min-h-[100px]">
                <div className="flex items-center justify-center gap-10 text-white w-full h-full p-5">

                    <div>
                        <h3 className="font-bold text-2xl mb-1">For Renters</h3>
                        <p className="text-slate-200">Find your dream rental property. Bookmark properties and contact owners directly.</p></div>
                </div>
            </div>
            <div className="flex items-center justify-between mx-auto w-[40%] h-[100px]">
                <div className="flex items-start justify-center w-[0.2px] bg-gray-900/20">
                    <div className="flex items-start justify-start h-[100px] bg-transparent animate-topToBottom">  <MdOutlineMarkEmailRead className="text-3xl" /></div>
                </div>
                <div className="flex items-start justify-center w-[0.2px] bg-gray-900/20">
                    <div className="flex items-end justify-end h-[100px] delay-300 animate-bottomToTop">  <FaRegFileAlt className="text-3xl text-gray-900" /></div>
                </div>
            </div>

            <div className="flex items-start justify-center min-h-[100px]">
                <div className="flex items-center justify-center gap-10 text-white w-full h-full p-5">
                    <div className="text-right w-full">
                        <h3 className="font-bold text-2xl mb-1 text-right">For Owners</h3>
                        <p className="text-slate-200">Get your property information  and your conformation in your inbox. </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OwnerToClient