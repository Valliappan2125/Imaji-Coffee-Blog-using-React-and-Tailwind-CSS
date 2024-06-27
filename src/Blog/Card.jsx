import React from 'react'
import '../Blog/styles.css'

const Card = ({title, time, date}) => {
  return (
    <div>
    <div className='mt-10'>
        <div className='flex flex-row ml-40 mb-10 items-center'>
            <img src="./image 15.png" className='w-60'/>
            <div className='flex flex-col'>
            <span className='pl-10 font-bold text-4xl'>{title}</span>
            <br />
            <div className='flex flex-row'>
            <span className='text-[#717171] ml-7 pl-3 text-xl'>{time} Min</span>
            <span><img src="./dot.png" alt="dot" className='w-1 ml-2 mt-4'/></span>
            <span className='text-[#717171] ml-2 text-xl'>{date}</span>
            </div>
            </div>
        </div>
        <hr className='items-center border-[#A27B5C] mx-40 mb-10'/>
        {/* <div className='flex flex-row ml-40 mb-10 items-center'>
            <img src="./image 15 (1).png" className='w-60'/>
            <div className='flex flex-col'>
            <span className='pl-10 font-bold text-4xl'>Cold Brew Coffee, How to Drink Cold <br /> Coffee is More Enjoyable</span>
            <br />
            <div className='flex flex-row'>
            <span className='text-[#717171] ml-7 pl-3 text-xl'>4 Min</span>
            <span><img src="./dot.png" alt="dot" className='w-1 ml-2 mt-4'/></span>
            <span className='text-[#717171] ml-2 text-xl'>August 19, 2022</span>
            </div>
            </div>
        </div>
        <hr className='items-center border-[#A27B5C] mx-40 mb-10'/>
        <div className='flex flex-row ml-40 mb-10 items-center'>
            <img src="./image 15 (2).png" className='w-60'/>
            <div className='flex flex-col'>
            <span className='pl-10 font-bold text-4xl'>Meet Coffee Tonic, the Sensation of <br /> Drinking Coffee-Flavored Soda</span>
            <br />
            <div className='flex flex-row'>
            <span className='text-[#717171] ml-7 pl-3 text-xl'>4 Min</span>
            <span><img src="./dot.png" alt="dot" className='w-1 ml-2 mt-4'/></span>
            <span className='text-[#717171] ml-2 text-xl'>August 19, 2022</span>
            </div>
            </div>
        </div>
        <hr className='items-center border-[#A27B5C] mx-40 mb-10'/>
        <div className='flex flex-row ml-40 mb-10 items-center'>
            <img src="./image 15 (3).png" className='w-60'/>
            <div className='flex flex-col'>
            <span className='pl-10 font-bold text-4xl'>Workshop Coffee Sharing Session</span>
            <br />
            <div className='flex flex-row'>
            <span className='text-[#717171] ml-7 pl-3 text-xl'>4 Min</span>
            <span><img src="./dot.png" alt="dot" className='w-1 ml-2 mt-4'/></span>
            <span className='text-[#717171] ml-2 text-xl'>August 19, 2022</span>
            </div>
            </div>
        </div>
        <hr className='items-center border-[#A27B5C] mx-40 mb-10'/>
        <div className='flex flex-row ml-40 mb-10 items-center'>
            <img src="./image 15 (4).png" className='w-60'/>
            <div className='flex flex-col'>
            <span className='pl-10 font-bold text-4xl'>Workshop Coffee Brewing</span>
            <br />
            <div className='flex flex-row'>
            <span className='text-[#717171] ml-7 pl-3 text-xl'>4 Min</span>
            <span><img src="./dot.png" alt="dot" className='w-1 ml-2 mt-4'/></span>
            <span className='text-[#717171] ml-2 text-xl'>August 19, 2022</span>
            </div>
            </div>
        </div> */}
    </div>
    </div>
  )
}

export default Card