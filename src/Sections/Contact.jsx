import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaMailBulk, FaLinkedinIn } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa6'
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import {motion} from 'framer-motion'
import { fadeIn } from '../components/utility';

const Contact = () => {

  const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tp2p51z', 'template_fvdz9nn', form.current, {
        publicKey: '3fwEO5SxFK0BUbRGz',
      }).then(
        () => {
          e.target.reset()
          alert('Your Message Successfully Sent!')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='container' id='contact'>
       <motion.div
       variants={fadeIn('down',0.2)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false,amount:0.7}}
        className='w-full text-center pt-[8rem]'>
        <h1 className='text-3xl font-bold text-[--color-hover]'>Contact Me</h1>
        <p className='text-[--color-p]'>Get in Touch</p>
      </motion.div>

      {/* Main Contact Section */}
      <div className='grid grid-cols-1 md:grid-cols-[20%,70%] gap-[4%] md:gap-[10%] mt-12'>
        {/* contact info */}
        <motion.div
         variants={fadeIn('right',0.2)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false,amount:0.7}}
         className=' mx-auto w-full'>
         <h3 className='text-tcolor uppercase font-bold text-md pt-5 text-center md:text-left'>contact info</h3>

     <div className='flex flex-col mx-auto w-[50%] md:w-full'>
         <div className='flex items-center gap-4 py-6 pb-5'>
        <span className='p-4 text-[--color-primary] bg-[--color-box] text-xl rounded font-medium shadow-2xl hover:border hover:bg-transparent hover:border-[--color-primary] duration-75'>
        <FaMailBulk/>
        </span>
          <span className='flex flex-col items-left justify-center'>
            <p className='text-[--color-p] text-[0.8rem]'>E-mail</p>
            <h3 className='text-tcolor font-semibold text-[0.8rem]'>meladev45@gmail.com</h3>
           <button className='text-[--color-p] text-left text-[0.8rem] flex items-center'>
           <a href="mailto:meladev45@gmail.com" target='_blank'>Send</a>
           <CiLocationArrow1 />
           </button>
          </span>
         </div>

         <div className='flex items-center gap-4 py-2 pb-5'>
        <span className='p-4 text-[--color-primary] bg-[--color-box] text-xl rounded font-medium shadow-2xl hover:border hover:bg-transparent hover:border-[--color-primary] duration-75'>
        <FaFacebookMessenger />
        </span>
          <span className='flex flex-col items-left justify-center'>
            <p className='text-[--color-p] text-[0.8rem]'>Messerger</p>
            <h3 className='text-tcolor font-semibold text-[0.8rem]'>Mela dev</h3>
           <button className='text-[--color-p] text-left text-[0.8rem] flex items-center'>
            <a href="https://www.messenger.com/e2ee/t/8270499379661421/" target='_blank'>Send</a>
            <CiLocationArrow1 />
           </button>
          </span>
         </div>

         <div className='flex items-center gap-4 py-2 pb-5'>
        <span className='p-4 text-[--color-primary] bg-[--color-box] text-xl rounded font-medium shadow-2xl hover:border hover:bg-transparent hover:border-[--color-primary] duration-75'>
        <FaWhatsapp />
        </span>
          <span className='flex flex-col items-left justify-center'>
            <p className='text-[--color-p] text-[0.8rem]'>Whatsapp</p>
            <h3 className='text-tcolor font-semibold text-[0.8rem]'>+234 8067 176 266</h3>
           <button className='text-[--color-p] text-left text-[0.8rem] flex items-center'>
            <a href="https://wa.link/h0hecy">Send</a>
            <CiLocationArrow1 />
           </button>
          </span>
         </div>
         </div>

         <div className='flex flex-col items-center justify-center'>
         <h3 className='text-tcolor uppercase font-bold text-md pb-5 text-center md:text-left w-full'>social info</h3>

         <div className='flex gap-4'>
         <span>
         <a href="https://web.facebook.com/profile.php?id=100095018356786"  className='bg-[--color-box] text-[--color-primary] p-4 rounded-[100%] flex items-center justify-center font-medium text-xl hover:bg-[--color-primary] hover:text-white scale-100 hover:scale-90 shadow-2xl duration-75'>
            <FaFacebook/>
          </a>
         </span>

         <span>
         <a href="https://x.com/Mela_dev45"  className='bg-[--color-box] text-[--color-primary] p-4 rounded-[100%] flex items-center justify-center font-medium text-xl hover:bg-[--color-primary] hover:text-white scale-100 hover:scale-90 shadow-2xl duration-75'>
         <BsTwitterX />
          </a>
         </span>

         <span>
         <a href="https://www.linkedin.com/in/chiemela-emmanuel-b7a67728a/"  className='bg-[--color-box] text-[--color-primary] p-4 rounded-[100%] flex items-center justify-center font-medium text-xl hover:bg-[--color-primary] hover:text-white scale-100 hover:scale-90 shadow-2xl duration-75'>
         <FaLinkedinIn />
          </a>
         </span>
         </div>
         </div>

        </motion.div>

        {/* contact form */}

        <motion.div
         variants={fadeIn('left',0.2)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false,amount:0.7}}
         className='bg-[--color-box] rounded-xl md:w-[90%] px-8 py-4 shadow-2xl'>
            <h2 className='text-2xl md:text-3xl font-bold uppercase text-tcolor'>let`s works <span className='text-[--color-hover]'>together.</span></h2>
            <p className='py-4 text-[--color-p]'>Please fill out the form on this section to contact with me or  chat me </p>

            <form ref={form} onSubmit={sendEmail}>
             <div>
             <input type="text" name='name' placeholder='Name*' className='w-full p-2 mt-4 rounded text-[--color-p] bg-[--color-input] focus outline-none focus:ring-2 focus:ring-[--color-hover] shadow'/>
             </div>
             <div>
             <input type="email" name='email' placeholder='Email*' className='w-full p-2 mt-4 rounded text-[--color-p] bg-[--color-input] focus outline-none focus:ring-2 focus:ring-[--color-hover] shadow'/>
             </div>
             <div>
             <input type="text"  name='subject' placeholder='Subject*'className='w-full p-2 mt-4 rounded text-[--color-p] bg-[--color-input] focus outline-none focus:ring-2 focus:ring-[--color-hover] shadow'/>
             </div>
              <textarea name="message" id="" placeholder='Your Message*' className='w-full h-[100px] rounded p-2 mt-4 resize-none text-[--color-p] bg-[--color-input] focus outline-none focus:ring-2 focus:ring-[--color-hover] shadow'></textarea>

              <button type='submit' value='Send' className='border-2 mt-5 p-2 w-[140px] rounded-full font-medium border-[var(--color-hover)] bg-[--color-hover] hover:bg-transparent text-tcolor'>Send Message</button>
            </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact