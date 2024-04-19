import React from 'react'
import Benefits from '../benefits/benefits'

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-blue-900 h-[660px] md:h-[650px] pt-2 text-white z-index-10">
            <div className="relative flex flex-col items-center justify-center">
                <h2 className="bg-none text-center md:text-5xl text-3xl text-white font-bold mb-10">Find The Perfect Rental</h2>
                <span className="relative max-w-[400px] text-1xl text-center text-white font-normal mb-5">Discover the perfect property that suits your needs.</span>
                <Benefits />
                <div className="flex items-center justify-center p-2 md:p-6 rounded-md w-full">
                    <form action="" className="flex flex-col md:flex-row items-center gap-4 text-gray-700">
                        <div className="w-full md:w-1/2">
                            <label htmlFor="location" className="sr-only">Location</label>
                            <input type="text" placeholder="Enter your location here" name="location" className="p-3  w-full rounded-md" id="location" />
                        </div>
                        <div className="w-full md:w-1/3 md:pl-5 md:pr-5">
                            <label htmlFor="location" className="sr-only">Property Type</label>
                            <select name="property-type" id="property-type" className="w-full p-3 rounded-md bg-white">
                                <option name="All">All</option>
                                <option name="Apartment">Apartment</option>
                                <option name="Studio">Studio</option>
                                <option name="Condo">Condo</option>
                                <option name="House">House</option>
                                <option name="Cabin or Cottage">Cabin or Cottage</option>
                                <option name="Loft">Loft</option>
                                <option name="Room">Room</option>
                                <option name="Other">Other</option>
                            </select>
                        </div>

                        <button type="submit" className="w-full md:w-1/4 px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500">
                            Search
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Hero