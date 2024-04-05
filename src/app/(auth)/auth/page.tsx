'use client'
import bgless from '@/../public/bgless.png';
import Image from 'next/image';

const page = () => {
  return (
    <div className=" h-[100vh] flex flex-col overflow-hidden gap-y-4 ">
        <div className="">
            <div className='relative md:left-40 md:top-5'>
                <Image src={bgless} alt="logo" width={100} height={100} className=' w-48' />
            </div>
        </div>
        <div className=" flex justify-center items-center md:h-5/6">
            <div className='flex flex-col border border-slate-400 md:w-1/3 rounded-md'>
                <div className='flex flex-col gap-y-5'>
                    <h3 className=' text-center font-semibold mt-3 text-3xl'>Login to HandyNeighbor</h3>
                    <div className='flex justify-center'>
                        <input type="email" name="email" placeholder='email' className='p-3 m-3 w-1/2 rounded-md border border-slate-200' />
                    </div>
                    <div className='flex justify-center'>
                        <button type='submit' className='bg-[#ff006e] w-3/6 px-10 py-1 text-white font-semibold rounded-md hover:bg-[#ce4983] hover:scale-105 active:scale-100'>Continue</button>
                    </div>
                </div>
                <div className="border-t border-gray-300 mt-3 mb-3"></div>
                <div className='flex flex-col gap-6'>
                    <div className='flex justify-center'>
                        <button type='submit' className=' bg-blue-700 px-10 w-3/6 py-1 text-white font-semibold rounded-md hover:bg-blue-600 hover:scale-105 active:scale-100'>Continue with Google</button>
                    </div><div className='flex justify-center'>
                        <button type='submit' className=' bg-slate-950 px-10 py-1 w-3/6 text-white font-semibold rounded-md hover:bg-slate-800 hover:scale-105 active:scale-100'>Continue with Github</button>
                    </div>
                </div>
                <div className="border-t border-gray-300 mt-3"></div>
                <div>
                    <h3 className=' text-slate-500 text-center mt-4 mb-5'>Don&apos;t have an handyneighbor account?</h3>
                    <div className='flex justify-center'>
                        <button type='submit' className='border mb-6 border-[#ff006e] px-10 py-1 font-semibold rounded-md hover:scale-105 active:scale-100'>Signup</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page