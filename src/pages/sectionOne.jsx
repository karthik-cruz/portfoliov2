import React from 'react'
import backgroundImg from "../assets/images/background.jpg"
import CV from "../assets/files/karthikResumeV2.pdf"
import { BiDownArrowAlt } from "react-icons/bi";
import { ImLinkedin } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";


const sectionOne = () => {


    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = CV;
        link.download = 'KarthikResume.pdf';
        link.click();
    }



    return (
        <div id='home' style={{ background: `url(${backgroundImg})`, backgroundSize: "cover", backgroundPosition: "center", }} className='h-[90vh]'>
            <div className='flex items-center justify-center h-full'>

                <div className='flex items-center justify-center gap-10 md:w-[60%] mx-auto flex-col'>
                    <div>
                        <p className='mb-0 md:text-[60px] text-[40px] tracking-wide font-bold'>HEY, I'M KARTHIK</p>
                        <p className="mb-0 text-center text-[20px] md:text-[32px] font-semibold text-[#ED4C67]">FRONT END DEVELOPER</p>
                    </div>
                    <p className='mb-0 text-center text-[20px] font-medium text-gray-500'>
                        A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product.
                    </p>
                    <div onClick={() => handleDownload()} className='rounded hover:-translate-y-0.5 hover:transition-all hover:bg-red-400 bg-[#ED4C67] text-white py-3 px-10 text-[20px] font-medium cursor-pointer'>
                        Download CV
                    </div>
                </div>
            </div>

            <BiDownArrowAlt size={25} color='#ED4C67' className='absolute animate-bounce bottom-10 right-2.5 -translate-x-1/2' />

            <div className='absolute flex items-center gap-3 bottom-10 left-1/2 -translate-x-1/2'>

                <ImLinkedin onClick={() => window.open("https://www.linkedin.com/in/karthik-s-20b0a9276/", "_blank")} size={25} className='cursor-pointer hover:text-[#ed4c67]' />


                <GrInstagram onClick={() => window.open("https://www.instagram.com/_.mr_cruzz/", "_blank")} size={25} className='cursor-pointer hover:text-[#ed4c67]' />

                <FaGithub onClick={() => window.open("https://github.com/karthik-cruz", "_blank")} size={25} className='cursor-pointer hover:text-[#ed4c67]' />

            </div>
        </div>
    )
}

export default sectionOne