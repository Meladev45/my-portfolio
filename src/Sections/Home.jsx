import React from 'react'
import { FaFacebook, FaChevronDown,FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Mela from '../assets/Mela1.png'
import {motion} from 'framer-motion'
import {SlideLeft, SlideUp} from '../components/utility'
const Home = () => {
  return (
    <div className='container pt-24 md:pt-64  ' id='home'>
        <div className='grid md:grid-cols-[20%,50%,20%] w-full gap-[3rem]'>
            <motion.div
             variants={SlideUp(0.5)}
             initial='hidden'
             whileInView={'visible'}
             viewport={{once:true}}
             className='hidden pl-2 md:flex flex-col gap-4 py-4 items-start  justify-center  '>
               <span className='w-[3px] h-[5rem] bg-slate-400 flex rounded-xl ml-2'></span>
               <a href="https://web.facebook.com/profile.php?id=100095018356786">
                <FaFacebook className='text-xl hover:text-[--color-primary] text-tcolor'/>
               </a>
               <a href="https://x.com/Mela_dev45">
                <BsTwitterX className='text-xl hover:text-[--color-primary] text-tcolor'/>
               </a>
               <a href="https://www.linkedin.com/in/chiemela-emmanuel-b7a67728a/">
                <FaLinkedinIn className='text-xl hover:text-[--color-primary] text-tcolor '/>
               </a>
            </motion.div>
            <div className=' flex flex-col-reverse md:flex-row gap-8'>
               <div className=''>
               <div className='w-full md:w-[400px] h-[300px] overflow-hidden'>
                    <motion.img
                     initial={{opacity:0.5,scale:0.5}}
                     whileInView={{opacity:1,scale:1}}
                     transition={{type:"spring", stiffness:100, delay:0.2}}
                     src={Mela} alt=""  className='w-full h-full object-cover rounded-xl'/>
                </div>
                <button className='md:hidden block items-center justify-center border-2 border-[var(--color-text)] w-24 bg-[--color-primary] rounded-xl text-lg font-medium mt-8 p-1 hover:bg-transparent hover:text-tcolor '>
                  <a href="#contact">Hire Me</a>
                </button>
                <div className='md:hidden pt-4 flex justify-center gap-4 '>
                <a href="https://web.facebook.com/profile.php?id=100095018356786" target='_blank'>
                <FaFacebook className='text-xl hover:text-[--color-primary] text-tcolor'/>
               </a>
               <a href="">
                <BsTwitterX className='text-xl hover:text-[--color-primary] text-tcolor'/>
               </a>
               <a href="">
                <FaLinkedinIn className='text-xl hover:text-[--color-primary] text-tcolor '/>
               </a>
                </div>

               </div>
                <div
                 className='pt-24 text-center md:text-left md:pt-16 flex flex-col gap-1 w-full'>
                    <p className='text-[--color-p] font-medium text-sm'>Hello, I`m</p>
                    <h2 className='text-3xl text-tcolor font-bold'>Mela Dev</h2>
                    <p className='w-full md:w-[15rem] text-[--color-p] font-semibold'>A Web Engineer & Developer</p>

                    <motion.button
                     variants={SlideLeft(1.5)}
                     initial='hidden'
                     animate='visible'
                     className='hidden md:flex border-2 border-[var(--color-text)] w-24 bg-[--color-primary] rounded-xl text-lg font-medium text-tcolor mt-8 p-1 hover:bg-transparent hover:text-tcolor items-center justify-center '>
                      <a href="#contact">Hire Me</a>
                    </motion.button>
                </div>
            </div>

            <a href="#footer">
            <div
             className='hidden lg:absolute right-32 md:grid justify-items-center gap-12 mt-20 cursor-pointer animate-bounce text-[--color-p]'>
              
              <p className=' rotate-90'> Scroll Down</p>
               <FaChevronDown/>
               <FaChevronDown/>
               <FaChevronDown/>
            </div>
            </a>
        </div>

    </div>
  )
}

export default Home