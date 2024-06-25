import React from 'react'

const contact = () => {
    return (
        <div id='contact' className='bg-gray-100 flex flex-col items-center pt-5 pb-20'>
            <div><p className="text-[32px] mb-4 font-bold  border-b-[5px] border-[#ED4C67] text-center">CONTACT</p></div>
            <p className='mb-0 text-center text-[20px] font-medium text-gray-500'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>

            <div className=' shadow border rounded md:w-[50%] mt-5 mx-auto p-4 items-end  flex flex-col gap-5'>

                <div className='w-full'>
                    <label htmlFor="name" className='text-[18px] font-medium'>Name </label> <br />
                    <input className='w-full bg-gray-200 p-3 outline-none rounded mt-1' type="text" id='name' placeholder='Enter your name' />
                </div>
                <div className='w-full'>
                    <label className='text-[18px] font-medium' htmlFor="email">Email </label><br />
                    <input className='w-full bg-gray-200 p-3 outline-none rounded mt-1' type="text" id='email' placeholder='Enter your email' />
                </div>
                <div className='w-full'>
                    <label className='text-[18px] font-medium' htmlFor="message">Message </label><br />
                    <textarea className='w-full bg-gray-200 p-3 outline-none rounded resize-none mt-1' rows="7" cols="50" id='message' placeholder='Enter your message... ' />
                </div>


                <div className='rounded  hover:-translate-y-0.5 hover:transition-all hover:bg-red-400 bg-[#ED4C67] text-white py-3 px-16 text-[20px] font-medium cursor-pointer'>
                    Submit
                </div>

            </div>

        </div>
    )
}

export default contact