import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import {motion} from 'framer-motion'
import { SlideLeft } from './utility'

const Faqs = ({question,answer}) => {
    const [plus,setplus] = useState(false)
  return (
         <motion.div
         variants={SlideLeft(0.5)}
         initial='hidden'
         whileInView={'visible'}
         viewport={{once:true}}
          className='bg-[--color-box] shadow-2xl rounded-lg p-4'  onClick={()=>{setplus(!plus)}}>
                <div className='flex justify-between items-center text-tcolor font-semibold'>
                    <h2 >{question}</h2>
                    {plus ? <AiOutlineMinus/>: <AiOutlinePlus/>}
                </div>
                {plus &&  <p className='text-[--color-p]'>{answer}</p>}
            </motion.div>
    
  )
}

export default Faqs