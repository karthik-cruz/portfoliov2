import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';



const Contact = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        onSubmit: values => {
            const templateParams = {
                to_name: "Karthik",
                from_email: values?.email,
                from_name: values.name,
                email: values.email,
                message: values.message
            };

            emailjs.send('service_zl3g4wc', 'template_nfagjqj', templateParams, '6tV5HXKB-M_qOZpYF')
                .then((response) => {
                    toast.success("Email sent successfully")
                    formik.resetForm()
                }, (error) => {
                    toast.error(error.text)
                });


        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            message: Yup.string()
                .max(100, 'Must be 100 characters or less')
                .required('Required'),
        })
    })



    return (
        <div id='contact' className='bg-gray-100 flex flex-col items-center pt-5 pb-20' >
            <div><p className="text-[32px] mb-4 font-bold  border-b-[5px] border-[#ED4C67] text-center">CONTACT</p></div>
            <p className='mb-0 text-center text-[20px] font-medium text-gray-500'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>

            <div className=' shadow border rounded md:w-[50%] mt-5 mx-auto p-4 items-end  flex flex-col gap-5'>

                <div className='w-full'>
                    <label htmlFor="name" className='text-[18px] font-medium'>Name </label> <br />
                    <input value={formik.values.name} name='name' onChange={formik.handleChange} className={` ${formik.touched.name && formik.errors.name ? 'border-red-500 border-1' : ''} w-full bg-gray-200  p-3 outline-none rounded mt-1`} type="text" id='name' placeholder='Enter your name' />
                </div>
                <div className='w-full'>
                    <label className='text-[18px] font-medium' htmlFor="email">Email </label><br />
                    <input value={formik.values.email} name='email' onChange={formik.handleChange} className={`w-full bg-gray-200 p-3 outline-none rounded mt-1 ${formik.touched.email && formik.errors.email ? 'border-red-500 border-1' : ''}`} type="text" id='email' placeholder='Enter your email' />
                </div>
                <div className='w-full'>
                    <label className='text-[18px] font-medium' htmlFor="message">Message </label><br />
                    <textarea value={formik.values.message} name='message' onChange={formik.handleChange} className={`w-full bg-gray-200 p-3 outline-none rounded resize-none mt-1 ${formik.touched.message && formik.errors.message ? 'border-red-500 border-1' : ''}`} rows="7" cols="50" id='message' placeholder='Enter your message... ' />
                </div>


                <div onClick={() => { formik.handleSubmit() }} className='rounded  hover:-translate-y-0.5 hover:transition-all hover:bg-red-400 bg-[#ED4C67] text-white py-3 px-16 text-[20px] font-medium cursor-pointer'>
                    Submit
                </div>

            </div>

        </div >
    )
}

export default Contact