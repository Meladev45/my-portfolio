import React, { useState } from 'react'
import { work } from '../components/portfoilo'
import Card from '../components/Card'
import {motion} from 'framer-motion'
import { fadeIn } from '../components/utility'

const Portfolio = () => {
   const [active,setactive]=useState('All')

   const filtertabs = active==='All'?work:work.filter((card)=>card.category===active)

  return (
    <div className='container  ' id='portfolio'>
       <motion.div
        variants={fadeIn('down',0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}
        className='w-full text-center md:pb-16 md:pt-0'>
        <h1 className='text-3xl font-bold text-[--color-hover]'>Portfolio</h1>
        <p className='text-[--color-p]'>My Creative Works</p>
      </motion.div>

     <div className='flex items-center justify-center gap-2 pt-8 md:pt-0'>
      <button onClick={()=>setactive('All')} className={`px-4 p-1 font-medium text-tcolor border border-[var(--color-text)] rounded-lg hover:bg-[--color-primary] hover:text-white duration-75 ${active === 'All'?'bg-[--color-primary]':''}`}>All</button>
      <button onClick={()=>setactive('react')}  className={`px-4 p-1 font-medium text-tcolor border border-[var(--color-text)] rounded-lg hover:bg-[--color-primary] hover:text-white duration-75 ${active === 'react'?'bg-[--color-primary]':''}`}>React</button>
      <button onClick={()=>setactive('tailwind')}  className={`px-4 p-1 font-medium text-tcolor border border-[var(--color-text)] rounded-lg hover:bg-[--color-primary] hover:text-white duration-75 ${active === 'tailwind'?'bg-[--color-primary]':''}`}>Tailwind</button>
      <button onClick={()=>setactive('firebase')} className={`px-4 p-1 font-medium text-tcolor border border-[var(--color-text)] rounded-lg hover:bg-[--color-primary] hover:text-white duration-75 ${active === 'firebase'?'bg-[--color-primary]':''}`}>Firebase</button>
     </div>
     
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 pt-8'>
       {
          filtertabs.map((works,index)=>{
            return <Card works={works} key={index}/>
          })
        }
       </div>
    </div>
  )
}

export default Portfolio