import React from 'react'
import Toggle from '../components/Toggle'

const Navbar = () => {
  return (
    <div className='container fixed top-0 left-0 right-0 z-10 bg-all'>
        <div className="flex items-center justify-between h-[75px] ">
           <div>
            <h2 className='text-4xl font-bold text-[--color-hover]'>MELA</h2>
           </div>
           <div className='flex items-center gap-4'>
            <button className='hidden md:block p-1 border-[var(--color-text)] border-2  rounded-full text-[1rem] w-[100px] text-tcolor hover:bg-[--color-primary] duration-75 font-medium hover:text-white '>
               <a href="#contact"> Let`s Talk</a>
            </button>
            <Toggle/>
           </div>
        </div>
    </div>
  )
}

export default Navbar