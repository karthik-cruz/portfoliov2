import React from 'react'
import { ImLinkedin } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";



const footer = () => {
    return (
        <div className='bg-[#ED4C67]'>
            <div className='w-[80%] mx-auto py-5 flex justify-between border-b text-white text-[20px]'>

                <div className='w-[50%]'>
                    <p className="mb-0 font-bold">KARTHIK</p>
                    <p className="mb-0 text-[15px] text-gray-50 mt-2">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <p className="mb-0 font-semibold">SOCIAL</p>
                    <div className='flex items-center gap-3'>
                        <ImLinkedin onClick={() => window.open("https://www.linkedin.com/in/karthik-s-20b0a9276/", "_blank")} className='cursor-pointer' />
                        <GrInstagram className='cursor-pointer' />
                        <FaGithub className='cursor-pointer' />
                    </div>
                </div>
            </div>

            <p className='text-center text-white text-[15px] py-3 mb-0'>© 2024 KARTHIK</p>
        </div>
    )
}

export default footer