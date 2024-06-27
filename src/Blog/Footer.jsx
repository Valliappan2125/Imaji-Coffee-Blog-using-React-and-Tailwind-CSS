import React from 'react'

const Footer = () => {
  return (
    <div>
      <button className='btn'>Load More</button>
    <br /><br />
        <div className='mb-10'>
            <footer className='bg-black'>
                <p className='text-white text-center text-4xl pt-10'>Our Location</p>
                <p className='text-white text-center text-xl pt-5'>Jl. Bangkringan No 19, RT.11/RW.2, Kota Surabaya, 60124</p>
                <p className='text-white text-center text-xl pt-3'>Customer Service +6282-2876-6862</p>
                <p className='text-white text-center text-xl pt-3'>We Are Open from Sun - Mon 10 AM - 22 PM</p>
            <br />
            <hr className='h-1'/>
            br
            <div className='flex flex-row justify-between'>
                <span><img src="./social Media.png" className='h-7 ml-2'/></span>
                <span><img src="./delivery order.png" className='h-7 mr-4'/></span>
            </div>
            <br /><br />
            <div className='flex flex-row justify-between'>
            <span className='text-[#A27B5C] ml-2'>© 2023 IMAJI COFFEE, All rights reserved</span>
            <span className='text-[#A27b5C] mr-4 pb-3'>Terms and Conditions | Privacy Policy</span>
            </div>
            </footer>
        </div>
    </div>
  )
}

export default Footer