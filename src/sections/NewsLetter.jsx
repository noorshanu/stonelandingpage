import React from 'react'

function NewsLetter() {
  return (
    <section>
        <div  className=' container-wrapper '
        
        data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine">
            <h1 className=' text-center'>Receive our Newsletter
            </h1>
            <p className=' text-center'>
            Sign up to receive updates and announcements
            </p>
         <div className=' flex justify-center'>
         <a href="/" className=' px-4 bg-[#000] py-1 font-medium text-lg text-white rounded-full text-center mx-auto  '>
            Sign Up
            </a>
         </div>
        </div>
    </section>
  )
}

export default NewsLetter