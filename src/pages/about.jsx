import React from 'react'
import Profile from '../assets/images/profile.svg'

const about = () => {
    return (
        <div id='about' className='w-[80%] mx-auto md:my-5 h-[100vh] flex flex-col items-center justify-center'>
            <div><p className="text-[32px] mb-5 font-bold border-b-[5px] border-[#ED4C67] text-center">ABOUT ME</p></div>

            <div className='flex md:flex-row flex-col items-center gap-3 justify-center'>
                <div className='md:w-[50%]'>
                    <img src={Profile} alt="profile" />
                </div>
                <div className='md:w-[50%] flex gap-3 flex-col'>
                    <p className="mb-0 text-[30px] font-semibold">I'M KARTHIK</p>
                    <p className="mb-0 text-gray-500">A recent graduate with a passion for crafting visually appealing and user-friendly web interfaces. Proficient in HTML, CSS, JavaScript and React I am eager to apply my skills and creativity to contribute to dynamic projects. As a dedicated learner, I am excited about the opportunity to grow as a Front-End Developer or Full stack developer and contribute to innovative and collaborative teams.</p>
                </div>
            </div>


        </div>
    )
}

export default about