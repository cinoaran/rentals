import ShareOrBookmark from "@/components/social/shareOrBookmark";
import { FaRegPaperPlane } from "react-icons/fa";

const RequestForm = () => {
    return (
        <div className="w-full md:w-3/4 ">
            <div className="flex flex-col items-center justify-center gap-5 my-1 p-10 border-[0.3px] bg-white border-blue-900 rounded-md">
                <div className="w-full ">
                    <h3 className="text-xl text-left font-bold mb-2">Contact Property Manager</h3>
                </div>
                <form className="w-full h-full">
                    <div className='mb-4'>
                        <label
                            className='block text-gray-700 text-sm font-bold mb-2'
                            htmlFor='name'
                        >
                            Name:
                        </label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='name'
                            type='text'
                            placeholder='Enter your name'
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            className='block text-gray-700 text-sm font-bold mb-2'
                            htmlFor='phone'
                        >
                            Phone:
                        </label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='phone'
                            type='text'
                            placeholder='Enter your phone number'
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="message"
                        >
                            Message:
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline"
                            id="message"
                            placeholder="Enter your message"
                        ></textarea>
                    </div>
                    <div>
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
                            type="submit"
                        >
                            <FaRegPaperPlane className="mr-4" /> Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RequestForm