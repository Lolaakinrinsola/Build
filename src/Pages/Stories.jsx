import React from 'react'
import {Link} from 'react-router-dom'
import store from '../Assets/Images/Storeimage.png'
import logo from '../Assets/Images/Logo.png'
import Navbar from '../Components/Navbar'
import '../Assets/styles/global.css'
import { CiSearch } from "react-icons/ci";
import blogPic from '../Assets/Images/Blogcard.png'
import blog from '../Assets/Images/Imageframe.png'
import Footer from '../Components/Footer'

const Stories = () => {

    const words=['All','Money','Tech','People']
  return (
    <div>
        <Navbar logo={logo} />
        <div className='space-y-10 mt-[5em] '>
            <h1 className='h2 text-center text-secondary-10'>Our Stories</h1>
            <div className='w-[50%]  md:w-[30%] grid justify-center m-auto'>
                <input type="text" placeholder='Search your questions here' className='rounded-[5em] pl-[1em] border border-white-50 w-[300px] md:w-[518px] py-2 '  />
                <CiSearch className='relative top-[-1.8em] left-[90%] '/>

            </div>
        </div>

        <div className='max-w-[80em] m-auto'>
            <div className='mx-[2em] md:mx-[10em] grid grid-cols-2 md:flex mt-[5em] gap-[2em] justify-center  '>
                {words.map((word,i)=>{
                    return (<div className='rounded-2xl flex bg-primary-10 text-center text-primary-50 items-center justify-center p-[3em] w-full md:w-1/4'>
                        <p key={i}>{word}</p>
                    </div>
                    )
                })}
            </div>

        </div>

        <div className='m-auto max-w-[80em] '>
            <div className='mx-[2em] lg:mx-[10em] mt-[5em] '>
                <p className='h3 text-white-30'>Recent Stories</p>

                <Link to='/blog'>
                    <img src={blogPic} alt="" />
                </Link>
            </div>

        </div>

        <div className='max-w-[80em] m-auto '>
            <div className='m-[2em] lg:m-[10em] mt-[5em]  '>
                <p className='h3 text-white-30 text-center md:text-left'>Our Stories</p>

                <div className='flex flex-col justify-center items-center md:flex-row justify-center gap-[2em] md:justify-between space-y-[2em] md:space-y-0 ' >
                    <div className=' md:w-1/3 rounded-2xl space-y-2 max-w-[300px] '>
                        <img src={blog} alt="" />
                        <div className='flex space-x-2 p4'>
                            <p className='text-primary-50'>Business</p>
                            <p className='text-white-30'>Client-Experience</p>
                        </div>
                        <p className='p2 text-secondary-10'>A smart way to deal with your business clients</p>
                        <p className='p3'>
                        There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand...
                        </p>
                        <p className='p4 text-white-30'>September 13, 2022</p>
                    </div> 
                    <div className=' md:w-1/3 rounded-2xl space-y-2 max-w-[300px] '>
                        <img src={blog} alt="" />
                        <div className='flex space-x-2 p4'>
                            <p className='text-primary-50'>Business</p>
                            <p className='text-white-30'>Client-Experience</p>
                        </div>
                        <p className='p2 text-secondary-10'>A smart way to deal with your business clients</p>
                        <p className='p3'>
                        There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand...
                        </p>
                        <p className='p4 text-white-30'>September 13, 2022</p>
                    </div> 
                    <div className=' md:w-1/3 rounded-2xl space-y-2 max-w-[300px] '>
                        <img src={blog} alt="" />
                        <div className='flex space-x-2 p4'>
                            <p className='text-primary-50'>Business</p>
                            <p className='text-white-30'>Client-Experience</p>
                        </div>
                        <p className='p2 text-secondary-10'>A smart way to deal with your business clients</p>
                        <p className='p3'>
                        There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand...
                        </p>
                        <p className='p4 text-white-30'>September 13, 2022</p>
                    </div>    
                </div>         
            </div>

        </div>

        <Footer/>
    </div>
  )
}

export default Stories