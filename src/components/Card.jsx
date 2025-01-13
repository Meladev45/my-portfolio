import React from 'react'
import { motion } from 'framer-motion'


const Card = ({works}) => {
  return (
    <motion.div
    initial={{opacity:0, x:10}}
    whileInView={{opacity:1, x:0}}
     className='p-4 border rounded-lg bg-[--color-box] border-transparent hover:bg-transparent hover:border-[var(--color-primary)] duration-75 shadow-2xl'>
        <div className='w-[98%]  mx-auto'>
            <img src={works.img} alt="workimg"  className='w-full object-contain rounded-md'/>
        </div>
        <h3 className='pt-2 text-xl font-semibold text-tcolor'>{works.name}</h3>
        <div className='flex gap-2 pt-4'>
        <button className=' py-1 px-4 w-[70px]  rounded text-tcolor font-medium bg-[--color-primary] duration-75 hover:bg-transparent hover:border border-[var(--color-text)]'>
            <a href={works.live}>Live</a>
          </button>
          <button className='border py-1 px-4 w-[80px] rounded font-medium hover:text-white text-tcolor border-[var(--color-text)] hover:bg-[--color-hover] '>
            <a href={works.code}>Code</a>
          </button>
        </div>
    </motion.div>
  )
}

export default Card