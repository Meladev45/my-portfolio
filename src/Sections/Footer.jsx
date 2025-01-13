import React from 'react'
import {FaChevronDown, FaChevronUp} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='py-12 bg-[--color-box] flex items-center justify-center mt-16 w-full' id='footer'>
        <div>
        <h2 className='text-4xl font-bold text-[--color-hover] text-center py-8'>MELA DEV</h2>
        <div className='flex gap-4 md:gap-12'>
            <a href="#about" className='text-[--color-hover] font-bold text-md uppercase'>About</a>
            <a href="#about" className='text-[--color-hover] font-bold text-md uppercase'>Skill</a>
            <a href="#about" className='text-[--color-hover] font-bold text-md uppercase'>Portfolio</a>
            <a href="#about" className='text-[--color-hover] font-bold text-md uppercase'>Contact</a>
        </div>
        <p className='pt-7 text-[--color-p]'> &copy;All righ reserved by Chiemela Emmanuel, 2025</p>
        </div>
        <div className='hidden lg:absolute right-32 md:grid justify-items-center gap-4  cursor-pointer animate-bounce text-[--color-hover]'>
             <a href="#home"> <FaChevronUp/></a>
             <a href="#home"> <FaChevronUp/></a>
             <a href="#home"> <FaChevronUp/></a>
            </div>
    </div>
  )
}

export default Footer