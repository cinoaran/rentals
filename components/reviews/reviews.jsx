import Image from 'next/image'
import React from 'react'

const Reviews = () => {
    return (
        <div className='w-full lg:w-1/3 flex flex-col items-center justify-start border-[0.3px] border-gray-100 rounded-md p-5'>
            <div className='bg-blue-600/60 p-5 rounded-md w-full'>
                <h3 className="text-center text-white text-shadow-md text-3xl font-bold mb-8">User Reviews</h3>
                <div className='w-full'>
                    <ul role="list" className="divide-y divide-gray-100">
                        <li className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <Image className="h-12 w-12 flex-none rounded-full bg-gray-50" width="40" height="40" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-slate-200">Leslie Alexander</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-white">leslie.alexander@example.com</p>
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-slate-200">Co-Founder / CEO</p>
                                <p className="mt-1 text-xs leading-5 text-white">Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time></p>
                            </div>
                        </li>
                        <li className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" width="40" height="40" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-slate-200">Michael Foster</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-white">michael.foster@example.com</p>
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-slate-200">Co-Founder / CTO</p>
                                <p className="mt-1 text-xs leading-5 text-white">Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time></p>
                            </div>
                        </li>
                        <li className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" width="40" height="40" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-slate-200">Dries Vincent</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-white">dries.vincent@example.com</p>
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-slate-200">Business Relations</p>
                                <div className="mt-1 flex items-center gap-x-1.5">
                                    <div className="flex-none rounded-full bg-blue-950 p-1">
                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                                    </div>
                                    <p className="text-xs leading-5 text-white">Online</p>
                                </div>
                            </div>
                        </li>
                        <li className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" width="40" height="40" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-slate-200">Dries Vincent</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-white">dries.vincent@example.com</p>
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-slate-200">Business Relations</p>
                                <div className="mt-1 flex items-center gap-x-1.5">
                                    <div className="flex-none rounded-full bg-blue-950 p-1">
                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                                    </div>
                                    <p className="text-xs leading-5 text-white">Online</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Reviews