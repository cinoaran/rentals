import Tooltip from "@/components/tooltip/tooltip";
import { FaInstagram } from "react-icons/fa";

import { FaRegBookmark, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { MdOutlineShare } from "react-icons/md";
const ShareOrBookmark = () => {
    return (
        <div className="absolute bottom-0 right-0 flex items-center justify-center p-2">
            <div className="flex items-center justify-center">
                <div className="flex flex-row items-center justify-center gap-2">
                    <span className="relative flex items-center justify-center gap-3 bg-blue-500 border-[0.3px] border-gray-500 text-white rounded-full">
                        <Tooltip
                            message='Share this property'
                            position='center'
                        >
                            <div className="border-[0.3px] bg-slate-200/40 border-white text-white p-1 rounded-full hover:bg-gray-600 cursor-pointer">
                                <MdOutlineShare className='text-[0.9em]' />
                            </div>
                        </Tooltip>
                        <FaFacebookF className='text-[1.8em] md:text-[2.4em] border-[0.3px] border-white rounded-full p-1 md:p-2 ' />
                        <Tooltip
                            message='Bookmark this property'
                            position='center'
                        >
                            <div className="border-[0.3px] bg-slate-200/40 border-white text-white p-1 rounded-full hover:bg-gray-600 cursor-pointer">
                                <FaRegBookmark className='text-[0.9em]' />
                            </div>
                        </Tooltip>
                    </span>
                    <span className="relative flex items-center justify-center gap-3 bg-blue-500 border-[0.3px] border-gray-500 text-white rounded-full">
                        <Tooltip
                            message='Share this property'
                            position='center'
                        >
                            <div className="border-[0.3px] bg-slate-200/40 border-white text-white p-1 rounded-full hover:bg-gray-600 cursor-pointer">
                                <MdOutlineShare className='text-[0.9em]' />
                            </div>
                        </Tooltip>
                        <FaXTwitter className='text-[1.8em] md:text-[2.4em] border-[0.3px] border-white rounded-full p-1 md:p-2 ' />
                        <Tooltip
                            message='Bookmark this property'
                            position='center'
                        >
                            <div className="border-[0.3px] bg-slate-200/40 border-white text-white p-1 rounded-full hover:bg-gray-600 cursor-pointer">
                                <FaRegBookmark className='text-[0.9em]' />
                            </div>
                        </Tooltip>
                    </span>
                    <span className="relative flex items-center justify-center gap-3 bg-blue-500 border-[0.3px] border-gray-500 text-white rounded-full">
                        <Tooltip
                            message='Share this property'
                            position='center'
                        >
                            <div className="border-[0.3px] bg-slate-200/40 border-white text-white p-1 rounded-full hover:bg-gray-600 cursor-pointer">
                                <MdOutlineShare className='text-[0.9em]' />
                            </div>
                        </Tooltip>
                        <FaInstagram className='text-[1.8em] md:text-[2.4em] border-[0.3px] border-white rounded-full p-1 md:p-2 ' />
                        <Tooltip
                            message='Bookmark this property'
                            position='center'
                        >
                            <div className="border-[0.3px] bg-slate-200/40 border-white text-white p-1 rounded-full hover:bg-gray-600 cursor-pointer">
                                <FaRegBookmark className='text-[0.9em]' />
                            </div>
                        </Tooltip>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ShareOrBookmark