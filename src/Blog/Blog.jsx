import React from 'react'

const Blog = () => {
  return (
    <div>
        <div className='flex flex-row py-4 px-10 justify-between bg-[#FFF] items-center'>
        <p className="text-3xl text-black">
            IMAJI <span className='text-[#A27B5C]'>Coffee.</span>
        </p>
        <div className="flex flex-row gap-4 items-center font-semibold">
            <p className="text-xl text-black">Home</p>
            <p className="text-xl text-black">Story</p>
            <p className="text-xl text-black">Menu</p>
            <p className="text-xl text-black">Space</p>
            <p className="text-xl text-black">Community</p>
            <p className="text-xl text-black">News</p>
            <button className='text-xl border bg-[#A27B5C] text-white px-4 py-2'>Order</button>
            <button className='text-xl border border-[#A27B5C] px-4 py-2 text-[#A27B5C]'>Sign In</button>
        </div>
    </div>
    <h1 className='text-center text-8xl my-10'>Our News</h1>
    <p className='text-center text-xl'>Get the latest updates and deeper coffee experience from IMAJI Coffee</p>
    <br />
    <img src="./Image1.png" alt="Coffee" className='w-3/4 ml-40 flex-1 0 0'/>
    <br />
    <div className="ml-1">
    <p className='font-semibold ml-40 text-2xl'>Collaboration to Develop Coffee and Beverage Industry Expertise in Indonesia</p>
    <div className='flex flex-row mx-28 mt-1'>
    <span className='text-[#717171] ml-10 pl-3'>4 Min</span>
    <span><img src="./dot.png" alt="dot" className='w-1 h-1 mt-3 mr-2 ml-2'/></span>
    <span className='text-[#717171]'>August 19, 2022</span>
    </div>
    </div>
    <br /><br /><br /><hr className='items-center border-[#A27B5C] mx-40'/>
    </div>
  )
}

export default Blog