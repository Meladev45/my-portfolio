import React, { useState } from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { testi } from '../components/testimonal';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import {motion} from 'framer-motion'
import { fadeIn } from '../components/utility';

const Testimonial = () => {
    const [index,setindex] = useState(0)
    const {id, text, } = testi[index]
    const prevTesti = ()=>{
        setindex(index - 1)

        if(index <= 0){
            setindex(testi.length - 1)
        }
      }    

      const nextTesti = ()=>{

        setindex(index + 1)

         if(index >= testi.length - 1){
            setindex(0)
         }
        

      }    
  return (
    <div className='container'>
         <motion.div
         variants={fadeIn('down',0.2)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false,amount:0.7}}
          className='w-full text-center pt-20'>
        <h1 className='text-3xl font-bold text-[--color-hover]'>Testimonial</h1>
        <p className='text-[--color-p]'>what client says about me</p>
      </motion.div>

<motion.div
initial={{opacity:0.5,scale:0.5}}
whileInView={{opacity:1,scale:1}}
transition={{type:"spring", stiffness:100, delay:0.2}}
 className='bg-[--color-box] md:w-[400px] mx-auto mt-8 px-4 rounded-lg relative shadow-2xl  py-8'>
 
           <div className='flex justify-center'>
           <span className='absolute -top-3 text-3xl text-[--color-hover]'>
            <FaQuoteLeft />
            </span>
            <span className='absolute -top-3   text-3xl text-[--color-hover]'>
            <FaQuoteLeft />
            </span>
           </div>
            
            <p className="text-xl font-medium text-[--color-p] w-[90%] text-center">{text}</p>
            <div className="absolute -bottom-2 mt-16 -translate-x-5 text-2xl flex items-center justify-center w-full text-[--color-hover] ">
                <button className="" onClick={prevTesti}><IoIosArrowDropleftCircle/></button>
                <button className="" onClick={nextTesti}><IoIosArrowDroprightCircle/></button>
            </div>
         </motion.div>

        
    </div>
  )
}

export default Testimonial