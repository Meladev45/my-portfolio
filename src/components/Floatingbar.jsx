import React, { useEffect, useState } from 'react'
import { MdOutlineHome } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";

const Floatingbar = () => {
    const [activesec,setactivesec]=useState('home')

    const handlscroll=()=>{
        const sections =['home','about','skill','portfolio','contact']
        const scrollposition =window.scrollY + 100;

        sections.forEach(section =>{
            const element = document.getElementById(section)
            if(element){
                const offsetTop =element.offsetTop;
                const height = element.offsetHeight;
                if(scrollposition>=offsetTop && scrollposition < offsetTop + height){
                    setactivesec(section)
                }
            }
        })
    }
    useEffect(()=>{
        window.addEventListener('scroll',handlscroll);
        return()=>window.removeEventListener('scroll',handlscroll)
    },[]);

    const handleScrollTo =(targetId)=>{
        const targetElement = document.getElementById(targetId);
        if(targetElement){
            window.scrollTo({
                top:targetElement.offsetTop,
                behavior:'smooth'
            })
        }
    }
    console.log(activesec)
  return (
    
    
            <nav className='container bg-[rgba(0,0,0,0.3)] w-max flex gap-3 py-3 px-6 z-20 fixed bottom-8 left-[50%] -translate-x-[50%] rounded-[3rem] backdrop-blur-lg '>
            <a href="#home" className={`p-2 bg-transparent rounded-xl flex text-lg text-tcolor hover:bg-[--color-hover] hover:text-white ${activesec==='home'?'isActive':''}`}>
                <MdOutlineHome onClick={()=>{handleScrollTo('home')}}/>
            </a>
            <a href="#about" className={`p-2 bg-transparent rounded-xl flex text-lg text-tcolor hover:bg-[--color-hover] hover:text-white ${activesec === 'about'? 'isActive':''}`} >
                <AiOutlineUser onClick={()=>{handleScrollTo('about')}}/>
            </a>
            <a href="#skill" className={`p-2 bg-transparent rounded-xl flex text-lg text-tcolor hover:bg-[--color-hover] hover:text-white ${activesec === 'skill'? 'isActive':''}`} >
                <MdOutlineDesignServices/>
            </a>
            <a href="#portfolio" className={`p-2 bg-transparent rounded-xl flex text-lg text-tcolor hover:bg-[--color-hover] hover:text-white ${activesec === 'portfolio'? 'isActive':''}`} >
                <FaRegBookmark/>
            </a>
            <a href="#contact" className={`p-2 bg-transparent rounded-xl flex text-lg text-tcolor hover:bg-[--color-hover] hover:text-white ${activesec === 'contact'? 'isActive':''}`}>
                <MdOutlineMessage/>
            </a>
        </nav>
  
  )
}

export default Floatingbar