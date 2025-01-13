import React from 'react'
import { FaStar } from 'react-icons/fa6'
import {motion} from 'framer-motion'
import { fadeIn } from '../components/utility'

const Skill = () => {
  return (
    <div className='container mx-auto md:h-screen py-[6rem] md:pt-16' id='skill'>
       <motion.div
        variants={fadeIn('down',0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}
        className='w-full text-center md:pb-16 md:pt-0 pb-8'>
        <h1 className='text-3xl font-bold text-[--color-hover]'>Skills</h1>
        <p className='text-[--color-p]'>My techincal level</p>
      </motion.div>

      <motion.div
      initial={{opacity:0.5,scale:0.5}}
      whileInView={{opacity:1,scale:1}}
      transition={{type:"spring", stiffness:100, delay:0.2}}
       className='md:w-[400px] text-center mx-auto bg-[--color-box] shadow-lg p-8 rounded-lg hover:bg-transparent hover:border border-[--color-box] duration-75'>
        <h3 className='text-tcolor pb-4 text-xl font-medium'>Frontend developer</h3>

        <div className='flex justify-between pb-4'>
          <span className='flex gap-3'>
            <FaStar className='text-[--color-primary] translate-y-1'/>
            <div className='flex flex-col'>
              <h2 className='text-tcolor text-lg font-semibold'>HTML</h2>
              <p className='text-[--color-p] text-[0.7rem] font-normal text-left'>Basic</p>
            </div>
          </span>
          <span className='flex gap-3'>
            <FaStar className='text-[--color-primary] translate-y-1'/>
            <div className='flex flex-col'>
              <h2 className='text-tcolor text-lg font-semibold'>PURE CSS</h2>
              <p className='text-[--color-p] text-[0.7rem] font-normal text-left'>Advanced</p>
            </div>
          </span>
        </div>

        <div className='flex justify-between pb-4'>
          <span className='flex gap-3'>
            <FaStar className='text-[--color-primary] translate-y-1'/>
            <div className='flex flex-col'>
              <h2 className='text-tcolor text-lg font-semibold'>JAVASCRIPTS</h2>
              <p className='text-[--color-p] text-[0.7rem] font-normal text-left'>Basic</p>
            </div>
          </span>
          <span className='flex gap-3'>
            <FaStar className='text-[--color-primary] translate-y-1'/>
            <div className='flex flex-col'>
              <h2 className='text-tcolor text-lg font-semibold'>REACT JS</h2>
              <p className='text-[--color-p] text-[0.7rem] font-normal text-left'>Advanced</p>
            </div>
          </span>
        </div>

        <div className='flex justify-between pb-4'>
          <span className='flex gap-3'>
            <FaStar className='text-[--color-primary] translate-y-1'/>
            <div className='flex flex-col'>
              <h2 className='text-tcolor text-lg font-semibold'>TAILWIND CSS</h2>
              <p className='text-[--color-p] text-[0.7rem] font-normal text-left'>Advanced</p>
            </div>
          </span>
          <span className='flex gap-3'>
            <FaStar className='text-[--color-primary] translate-y-1'/>
            <div className='flex flex-col'>
              <h2 className='text-tcolor text-lg font-semibold'>FIREBASE</h2>
              <p className='text-[--color-p] text-[0.7rem] font-normal text-left'>Basic</p>
            </div>
          </span>
        </div>
      </motion.div>

    </div>
  )
}

export default Skill