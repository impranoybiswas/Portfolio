"use client"
import React from 'react'

export default function Test() {
    const [open, setOpen] = React.useState(false);
  return (
    <div 
    onClick={() => setOpen(!open)}
    className='size-20 relative'>
      <div className={`${open ? '-rotate-45 top-1/2 -translate-y-1/2': 'top-0'} bg-white w-full h-[20%] rounded-full absolute transition-all duration-600 ease-in-out`}/>
      <div className={`${open ? 'opacity-0' : 'opacity-100'} bg-white w-full h-[20%] rounded-full absolute top-1/2 -translate-y-1/2 transition-all duration-400 ease-in-out`}/>
      <div className={`${open ? 'rotate-45 bottom-1/2 translate-y-1/2': 'bottom-0'} bg-white w-full h-[20%] rounded-full absolute transition-all duration-600 ease-in-out`}/>
    </div>
  )
}
