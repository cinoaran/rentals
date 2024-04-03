import Image from 'next/image'
import React from 'react'

const Reviews = () => {
    return (
        <div className='flex flex-col items-center justify-center md:w-1/2 w-full  border-[0.3px] border-blue-900 rounded-md p-5'>
            <h1 className="text-3xl font-semibold text-center text-white py-5">User Reviews</h1>
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
                                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
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
                                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                                </div>
                                <p className="text-xs leading-5 text-white">Online</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Reviews