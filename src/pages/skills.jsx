import React from 'react'
import applogiqLogo from '../assets/images/applogiqLogo.jpg'
const skills = () => {

    const skillList = ["HTML", "CSS", "JavaScript", "React", "GIT and GitHub", "NextJS",
        "TailwindCss", "BootStrap", "MySQL", "TypeScript"
    ]



    return (
        <div className='flex flex-col items-center ' id='skills'>
            <div><p className='text-[32px] mb-5 font-bold border-b-[5px] border-[#ED4C67] text-center'>SKILLS</p></div>

            <div className='flex md:w-[70%] px-3 md:p-0 mx-auto gap-3 flex-wrap items-center'>

                {skillList.map((skill) => (
                    <div className='rounded text-[25px] font-medium  px-3  py-3 bg-gray-200 '>{skill}</div>
                ))}
            </div>


            <div className='mt-5'><p className='text-[32px]  font-bold border-b-[5px] border-[#ED4C67] text-center'>WORK EXPERIENCE</p></div>

            <p className="mb-0 text-center text-[20px] font-medium text-gray-500">
                I am happy to collaborate with this company
            </p>



            <div className='w-[80%] rounded  my-5 flex flex-col items-center gap-2 '>

                <div className=' items-center flex gap-1 '>
                    <p className="mb-0 font-bold text-[30px]">Applogi<span className='text-[#ed4c67]'>Q</span></p>
                    <img src={applogiqLogo} width={50} alt="" />
                </div>

                <div className=''>
                    <p className="mb-0 text-center text-[18px] font-medium text-gray-500"> I have 5 months of experience as a Front-End Developer</p>

                    <div className='text-[18px]  mt-2 mx-auto font-medium text-gray-500'>
                        <span className='text-[20px] text-center text-black font-bold'>World Archives</span>- I worked on a React project named 'World Archives,' where I
                        handled the half front-end and functionality of the project,
                        dynamically rendering content
                    </div>
                </div>
            </div>



        </div>
    )
}

export default skills