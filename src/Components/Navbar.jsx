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

const Navbar = () => {
    const [open, setOpen]=useState(false)

  return (
    <div className=''>
    <div className='flex w-screen justify-between items-center py-5 md:pl-[5em] px-[2em] md:pr-[10em]'>
        <Link to='/'>
            <img src={logo} alt="logo" />
        </Link>
        <div className='hidden md:block flex space-x-3'>
            <Link to='/business'>Business</Link>
            <select name="" id="">
                <option value="">Company</option>
                <option value=""><Link to='/stories'>Our Stories</Link></option>
            </select>
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
                    <Link to='about'>About Us</Link>
                    <Link to='stories'>Blog</Link>
                    <Link to='FAQs'>FAQs</Link>
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
    <div className='hidden md:block absolute top-[0%] right-[0%] py-7 pr-[5em] justify-center items-center'>
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