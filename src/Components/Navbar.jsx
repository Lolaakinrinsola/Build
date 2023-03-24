import React, { useEffect, useState } from 'react'
import logo from '../Assets/Images/Logo.png'
import fb from '../Assets/Icons/facebook.png'
import circle from '../Assets/Icons/circle.png'
import linkedin from '../Assets/Icons/in.png'
import line from '../Assets/Icons/line.png'
import '../Assets/styles/global.css'
import ig from '../Assets/Icons/instagram.png'
import twitter from '../Assets/Icons/Twitter.png'
import {Link} from 'react-router-dom'
import Button from './Button'
import {GiHamburgerMenu} from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { IoIosArrowDown,IoIosArrowUp } from 'react-icons/io'

const Navbar = () => {
    const [open, setOpen]=useState(false)
    const [options, setOptions]= useState(false)
  return (
    <div className=''>
    <div className='flex w-screen max-w-[100em] m-auto justify-between items-center py-5 md:pl-[5em] px-[2em] md:pr-[10em]'>
        <Link to='/'>
            <img src={logo} alt="logo" />
        </Link>
        <div className='hidden md:flex gap-[2em] '>
            <div className=''>
                <Link to='/business'>Business</Link>
            </div>
            <div onClick={()=>setOptions(!options)} className='' >
                <p className='flex items-center gap-1'>Company 
                {options?<IoIosArrowUp/>:<IoIosArrowDown/>}
                </p>
                {options? <div className='bg-white-10 absolute mt-[1em] rounded-xl '>
                    <div className='flex flex-col p-[3em]  gap-[2em]'>
                        <Link to='/'>Company</Link>
                        <Link to='/business'>Business</Link>
                        <Link to='/About'>About Us</Link>
                        <Link to='/stories'>Blog</Link>
                        <Link to='/FAQs'>FAQs</Link>

                    </div>
                </div>:null}
            </div>
        </div>
        
        <GiHamburgerMenu size='30px' onClick={()=>setOpen(!open)} className='md:hidden'/>
    

        {open?(
            <div className=' pb-[2em] w-2/3 bg-white-10 absolute top-0 right-0 rounded-2xl'>
                <div className='mt-[2em] grid justify-end items-end mr-[2em]'>
                    <AiOutlineClose size='30px' onClick={()=>setOpen(!open)} />
                </div>
                <div className='h-screen flex flex-col h4 text-secondary-10 text:hover-primary-50 space-y-5 px-[2em] pt-[2em]'>
                    <Link to='/business'>Business</Link>
                    <Link to='/'>Company</Link>
                    <Link to='/About'>About Us</Link>
                    <Link to='/stories'>Blog</Link>
                    <Link to='/FAQs'>FAQs</Link>
                    <div className='flex justify-between items-center '>
            <a href="#"><img src={fb} alt="line" /></a>
            <a href="#"><img src={ig} alt="facebook" /></a>
            <a href="#"><img src={twitter} alt="facebook" /></a>
            <a href="#"><img src={linkedin} alt="facebook" /></a>

                    </div>
                </div>
            </div>
        ):null}
        
       <Button text='Get started' className='hidden md:block'/>
    </div>
    <div className='hidden md:block absolute top-[0%] right-[0%] py-7 pr-[5em] justify-center items-center max-w-[80em] m-auto '>
        <div className=" flex flex-col items-center space-y-4">
            <img src={circle} alt="facebook"  className='pb-20'/>
            <a href="#"><img src={fb} alt="line" /></a>
            <a href="#"><img src={line} alt="facebook" /></a>
            <a href="#"><img src={ig} alt="facebook" /></a>
            <a href="#"><img src={line} alt="facebook" /></a>
            <a href="#"><img src={twitter} alt="facebook" /></a>
            <a href="#"><img src={line} alt="facebook" /></a>
            <a href="#"><img src={linkedin} alt="facebook" /></a>

        </div>
    </div>
    </div>
  )
}

export default Navbar