import React, { useContext } from 'react'
import {HiSun,HiMoon} from 'react-icons/hi'
import { ThemeContext } from '../Context/Theme'

const Toggle = () => {
    const {theme,setTheme}=useContext(ThemeContext)
  return (
    <div className=''>
        {
            theme === 'dark'? (
                <div className='flex items-center cursor-pointer' onClick={()=>setTheme(theme === 'dark'?'light':'dark')}>
                    <HiMoon className=' text-2xl mr-2 text-tcolor'/>
                </div>
            ):(
               
                 <div className='flex items-center cursor-pointer' onClick={()=>setTheme(theme === 'dark'?'light':'dark')}>
                 <HiSun className=' text-2xl mr-2 text-tcolor'/>
             </div>
            )
        }
    </div>
  )
}

export default Toggle