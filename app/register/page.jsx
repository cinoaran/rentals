import Link from 'next/link'
import React from 'react'

const Register = () => {
    return (
        <div className="w-full py-5 bg-white">
            <form className='border-[0.3px] border-gray-100 rounded-md p-5 w-full lg:w-1/3 mx-auto'>
                <h2 className="text-3xl text-center font-semibold mb-6">
                    Create An Account
                </h2>
                <div className="mb-4">
                    <label htmlFor='name' className="block text-gray-700 font-bold mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="border rounded w-full py-2 px-3 mb-2"
                        placeholder="Full name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='email' className="block text-gray-700 font-bold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="border rounded w-full py-2 px-3 mb-2"
                        placeholder="Email address"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='password' className="block text-gray-700 font-bold mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="border rounded w-full py-2 px-3 mb-2"
                        placeholder="Password"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='confirmPassword' className="block text-gray-700 font-bold mb-2"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="border rounded w-full py-2 px-3 mb-2"
                        placeholder="Confirm Password"
                        required
                    />
                </div>
                <div className='mb-4'>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Register
                    </button>
                </div>
                <div className='text-center'>Already an account ? <Link href='/login' className='text-blue-500'>Login</Link></div>
            </form>
        </div>
    )
}

export default Register