import React from 'react'
import Mela2 from '../assets/Mela2.png'
import {motion} from 'framer-motion'
import { fadeIn } from '../components/utility'

const About = () => {
  return (
    <div className='container  md:pt-16 ' id='about'>

      <motion.div
       variants={fadeIn('down',0.2)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false,amount:0.7}}
       className='w-full text-center md:pb-20 md:pt-0'>
        <h1 className='text-3xl font-bold text-[--color-hover]'>About Me</h1>
        <p className='text-[--color-p]'>what I do</p>
      </motion.div>

      <div className='grid grid-cols-1 md:grid-cols-[35%,65%] gap-4 md:gap-3'>
       {/* img */}
       <div className='w-full h-[300px] md:w-[90%] md:h-[400px] pt-4'>
        <motion.img
         variants={fadeIn('right',0.2)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false,amount:0.7}}
         src={Mela2} alt="" className='w-full h-full object-cover overflow-hidden rounded-xl'/>
       </div>
       {/* About */}
       <div>
        <h3 className='font-bold text-lg text-tcolor md:pb-4 text-center md:text-left'>I`m a FrontEnd Web Developer</h3>
        <motion.p
         variants={fadeIn('left',0.2)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false,amount:0.7}}
         className='text-[--color-p] pt-3 md:pt-0 md:w-full'>
          Hi, I`m Chiemela Emmanuel officially known as Mela Dev, a FrontEnd Web Developer. I have a diverse range of experience having worked across various fields and industries, also dedicated to crafting visiually engaging user-friendly and responsive website with clean code.
        </motion.p>
        <motion.p
         variants={fadeIn('left',0.2)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false,amount:0.7}}
         className='text-[--color-p] pt-8 w-full'>
          Whether it`s optimizing performance, enhancing accessibility or pixel-perfect design, I`m committed to making the web a better place for everyone, having acquired alot of skill and knowledge neccessary to make your project a success. 
        </motion.p>
        <div className='flex flex-col md:flex-row gap-2 md:gap-4 pt-4 md:pt-8'>
          {/* work years */}
          <motion.div
          initial={{opacity:0, x:10}}
          whileInView={{opacity:1, x:0}}
           className='p-[1.5rem] bg-[--color-box] flex items-center justify-center gap-2 rounded-lg shadow-lg'>
          <h2 className='text-4xl font-bold text-[--color-primary] '>03</h2>
          <p className='text-tcolor text-[1rem] font-bold w-full md:w-[8rem]'>Years Of Experience</p>
          </motion.div>

          <motion.div
          initial={{opacity:0, x:10}}
          whileInView={{opacity:1, x:0}}
           className='p-[1.5rem] bg-[--color-box] flex items-center justify-center gap-2 rounded-lg shadow-lg'>
          <h2 className='text-4xl font-bold text-[--color-primary] '>10</h2>
          <p className='text-tcolor text-[1rem] font-bold w-full md:w-[8rem]'>Complete Projects</p>
          </motion.div>

          <motion.div
          initial={{opacity:0, x:10}}
          whileInView={{opacity:1, x:0}}
           className='p-[1.5rem] bg-[--color-box] flex items-center justify-center gap-2 rounded-lg shadow-lg'>
            <h2 className='text-4xl font-bold text-[--color-primary] '>09</h2>
            <p className='text-tcolor text-[1rem] font-bold w-full md:w-[8rem]'>Satisfed Clients</p>
          </motion.div>
        </div>
        <motion.div
        variants={fadeIn('right',0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}
         className='pt-4 md:mt-4 flex gap-2 items-center justify-center md:justify-start md:gap-4 '>
          {/* download cv btn */}
          <button className=' p-2  rounded-full text-[1rem] w-[100px] text-tcolor font-medium bg-[--color-primary] duration-75 hover:bg-transparent hover:border border-[var(--color-text)]'>
            <a href="#contact">Hire Me R</a>
          </button>
          <button className='border-2 p-2 w-[140px] rounded-full font-medium text-tcolor border-[var(--color-text)] hover:bg-[--color-hover] hover:text-white'>Download CV</button>
        </motion.div>
       </div>
      </div>
    </div>
  )
}

export default About