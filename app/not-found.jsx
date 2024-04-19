import Link from 'next/link'
import { TbError404 } from "react-icons/tb";

const NotFound = () => {
    return (
        <section className="bg-blue-600/70 p-10">
            <div className='w-1/2 flex flex-col items-center justify-center gap-20 mx-auto'>

                <TbError404 size="120" className="text-center text-gray-900/60 text-shadow-md font-bold" />
                <Link href="/" className="text-center bg-blue-900/60 text-white rounded-md px-5 py-2 text-shadow-md text-2xl font-bold">Back to Home</Link>
                <p className="text-center text-gray-900/60 text-shadow-md text-lg font-bold">Uuups, Page you are looking for does not exist!</p>
            </div>

        </section>
    )
}

export default NotFound