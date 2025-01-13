import React, { useState } from 'react'
import { faq } from '../components/faq'
import Faqs from '../components/Faqs'
import {motion} from 'framer-motion'
import { fadeIn } from '../components/utility'

const FAQ = () => {
  return (
    <div>
         <motion.div 
          variants={fadeIn('down',0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.7}}
         className='md:w-[45%] mx-auto text-center pt-20'>
        <h1 className='text-2xl md:text-3xl font-bold text-[--color-hover]'>Frequently Asked Questions</h1>
        <p className=' container text-[--color-p] mt-4 text-center w-[96%]'>Here are some questions I usually get. Click to toggle the answer and if you still have some more questions shoot me a message from the contact section</p>
      </motion.div>

    {/* Faqs section */}

    <div className=' container grid grid-cols-1 md:grid-cols-2 gap-4 mt-12'>
      {
        faq.map((data)=>{
            return (
               <Faqs key={data.id} question={data.question} answer={data.answer}/>
            )
        })
      }
    </div>

    </div>
  )
}

export default FAQ