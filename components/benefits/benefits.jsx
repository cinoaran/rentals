import React from 'react'
import { FaHotel, FaMapMarkerAlt, FaUsers } from 'react-icons/fa'

const Benefits = () => {
    return (
        <div className="flex items-center justify-center gap-5 md:gap-20 py-10">
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <span className="relative flex items-center justify-center p-3 bg-blue-500 border-4 border-blue-900/70 text-white rounded-full mb-1">
                        <FaUsers className='text-[1.8em] md:text-[3.3em]' />
                    </span>
                    <h3 className="relative flex items-center justify-center">
                        <span className="text-center max-w-[150px] font-bold text-white text-sm">
                            1000+ Users
                        </span>
                    </h3>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <span className="relative flex items-center justify-center p-4 bg-blue-500  border-4 border-blue-900/70 text-white rounded-full mb-1">
                        <FaHotel className='text-[1.7em] md:text-[2.8em]' />
                    </span>
                    <h3 className="flex items-center justify-center flex-wrap">
                        <span className="text-center max-w-[220px] font-bold text-white text-sm">
                            7000+ Properties
                        </span>
                    </h3>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <span className="relative flex items-center justify-center p-3 bg-blue-500  border-4 border-blue-900/70 text-white rounded-full mb-1">
                    <FaMapMarkerAlt className='text-[1.8em] md:text-[2.8em]' />
                </span>
                <h3 className="flex items-center justify-center flex-wrap">
                    <span className="text-center max-w-[140px] font-bold text-white text-sm">
                        Map search!
                    </span>
                </h3>
            </div>
        </div>
    )
}

export default Benefits