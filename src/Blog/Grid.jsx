import React from 'react'

const Grid = () => {
  return (
    <div>
        <div>Grid Basics</div>
        <div className='grid grid-row gap-5'>
            <div className='bg-green-600 row-span-1'>01</div>
            <div className='bg-green-600 row-span-1'>02</div>
            <div className='bg-green-600 row-span-1'>03</div>
            <div className='bg-green-600 row-span-1'>04</div>
            <div className='bg-green-600 row-span-1'>05</div>
            <div className='bg-green-600 row-span-1'>06</div>
            <div className='bg-green-600 row-span-1'>07</div>
        </div>
    </div>
  )
}

export default Grid