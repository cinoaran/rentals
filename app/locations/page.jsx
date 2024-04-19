import Image from 'next/image'

const LocationsPage = () => {
    return (
        <div className="w-full  bg-gray-500 p-5">
            <section className="grid grid-cols-12 grid-rows-5 gap-4">
                <div className="col-span-3 h-full">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <Image className="w-full" width={0} height={0} sizes='100vw' src="/properties/a1.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 h-full">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <Image className="w-full" width={0} height={0} sizes='100vw' src="/properties/a2.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div></div>
                <div className="col-span-3">
                    <div className=" h-full max-w-sm rounded overflow-hidden shadow-lg">
                        <Image className="w-full" width={0} height={0} sizes='100vw' src="/properties/a3.jpg" alt="Sunset in the mountains" />
                        <div className="flex flex-col flex-between">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 flex-stretch">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base">
                                    Exercitationem praesentium nihil.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div></div>
                    </div></div>
                <div className="col-span-3">
                    <div className="max-w-sm flex flex-col h-full rounded overflow-hidden shadow-lg">
                        <Image className="w-full" width={0} height={0} sizes='50vw' src="/properties/a3.jpg" alt="Sunset in the mountains" />
                        <div className="flex flex-col justify-between  h-full">
                            <div className="bg-gray-300">
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2 flex-stretch">The Coldest Sunset</div>
                                    <p className="text-gray-700 text-base">
                                        Exercitationem praesentium nihil.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-300">
                                <div className="flex justify-between px-6 py-4">
                                    <p>Boston MA</p>
                                    <button>Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default LocationsPage