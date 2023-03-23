import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import bg from '../Assets/Images/BGabout.png'
import mission from '../Assets/Images/mission.png'
import vision from '../Assets/Images/vision.png'
import values from '../Assets/Images/values.png'
import '../Assets/styles/global.css'
import store from '../Assets/Images/Storeimage.png'
import ellipse from '../Assets/Images/Ellipse.png'
import visum from '../Assets/Images/visum.png'
import bgFrame from '../Assets/Images/Frame.png'
import bgFrame2 from '../Assets/Images/BG-CTA(1).png'
import Button from '../Components/Button';
import Footer from '../Components/Footer';
import manSinging from '../Assets/Images/manSinging.png'
import { AiFillApple } from "react-icons/ai";
import { TbBrandGooglePlay } from "react-icons/tb";
import { IoIosArrowDropright } from "react-icons/io";


const AboutUs = () => {
  return (
    <div>
        <div className='lg:h-screen' style={{backgroundImage: `url(${bg})`,backgroundSize:'cover'}}>
            <Navbar/>
            <header className='grid justify-center space-y-5 mt-[5em]' >
            <h1 className='h1 text-secondary-10 text-center'> About Us</h1>
            <div className='w-[60%] m-auto'>
            <p className='p2 text-secondary-10 text-center'>We are a modern digital bank leveraging technology to provide access to tools to support small and medium-scale businesses and individuals</p>

            </div>
            <img src={store} alt=""  className='m-auto'/>


            </header>

        </div>

        <div className='md:w-[55%] m-auto space-y-10 mt-[10em] px-[2em] md:px-0'>
            <p className='h3 text-white-30 text-center'>All the tools needed to transform your business</p>
            <p className='p1 text-white-30 text-center'>Receive payments through Card, USSD, Cash or transfer. With Build business, you can sell anywhere, anytime. Your staff at different points of your store can sell to customers on the spot.</p>
        </div>

        <body className='flex flex-col-reverse md:flex-row px-[2em] lg:px-[10em]  justify-between items-center bg-white-40 mt-[5em] '>
                <div className='md:w-1/2 space-y-5'>
                    <h1 className='h2 text-secondary-10'>Mission</h1>
                    <p className='p2 text-white-30'>
                    To ensure businesses and individuals have reliable access to financial solutions that help build wealth and ultimately lead to achieving their dreams.
                    </p>
                   
                </div>
                <div>
                    <img src={mission} alt="" />
                </div>
            </body>

            <body className='flex flex-col-reverse md:flex-row-reverse px-[2em] lg:px-[10em]  justify-between items-center bg-white-40 pt-[5em] '>
                <div className='md:w-1/2 space-y-5'>
                    <h1 className='h2 text-secondary-10'>Vision</h1>
                    <p className='p1 text-white-30'>
                    Build is a product of 3Line Card Management Limited, Nigeria’s premier provider of secure and affordable transaction channels for the unbanked and under- banked.
                    </p>
                    <p className='p2 text-white-30'>To build an inclusive financial platform that connects people to the future they desire.</p>
                   
                </div>
                <div>
                    <img src={vision} alt="" />
                </div>
            </body>

            <body className='flex flex-col-reverse md:flex-row px-[2em]  justify-between lg:px-[10em] m-auto items-center bg-white-40 pt-[5em] '>
                <div className='md:w-1/2 space-y-5'>
                    <h1 className='h2 text-secondary-10'>Vision</h1>
                    <div className='space-y-5'>
                        <p className='p1 text-white-30 flex'> <img src={ellipse} alt="" />Deliver Quality Experiences</p>
                        <p className='p1 text-white-30 flex'> <img src={ellipse} alt="" />Honour our Commitments</p>
                        <p className='p1 text-white-30 flex'> <img src={ellipse} alt="" />Customer Obession</p>
                        <p className='p1 text-white-30 flex'> <img src={ellipse} alt="" />Challenge the Status Quo</p>
                        <p className='p1 text-white-30 flex'> <img src={ellipse} alt="" />Make Life Simple</p>
                    </div>
                    
                   
                </div>
                <div>
                    <img src={values} alt="" />
                </div>
            </body>

            <body className='flex flex-col md:flex-row px-[2em] lg:px-[5em] md:h-fit-content py-[3em] rounded-[3em] mx-[2em] lg:mx-[5em] my-[2em] justify-between items-center bg-secondary-20 mt-[5em] 'style={{backgroundImage: `url(${bgFrame})`,backgroundSize:'cover'}}>
                <div>
                    <img src={visum} alt="" />
                </div>
                <div className='md:w-2/3 lg:w-1/2 space-y-5 grid justify-between items-top'>
                    <h1 className='h2 text-secondary-10'>We are building a tribe, interested ?</h1>
                    <p className='p2 text-white-10'>
                    We are a human-centered tribe with a positive <br /> can-do vibe, want to join the team ✌️
                    </p>
                    <a href="#" className='text-primary-100 p2'>Browse open Roles  &gt; </a>
                </div>
                
            </body>

            <div className='grid px-[2em] md:px-0 justify-center space-y-5 mt-[5em] md:w-[65%]  m-auto' style={{backgroundImage: `url(${bgFrame2})`,backgroundSize:'contain'}}>
            <h1 className='h1 text-secondary-10 text-center'> We are redefining how small and medium-scale businesses operate</h1>
            <div className=' m-auto'>
            <p className='h3 text-white-30 text-center'>🛠️ We are creating simple yet efficient tools for businesses to manage day-to-day business processes and  transactions without hurdles</p>

            </div>
            <div className='grid justify-center'>
                <Button text='Create business Account'/>

            </div>
            
            </div>

            <body className='flex flex-col md:h-fit-content space-y-[5em] p-[2em] lg:p-[6em] rounded-[3em] mx-[2em] lg:mx-[5em] my-[2em] justify-between bg-secondary-10 items-center mt-[10em] ' style={{backgroundImage: `url(${bgFrame2})`,backgroundSize:'contain'}} >
                    <div className='md:w-[60%] flex flex-col justify-center items-center m-auto'>

                        <h1 className='h2 text-center text-white-10'>Make the most of your dreams today</h1>
                    </div>
                    <div className=' grid justify-center'>

                    <Button text='Get Started' />
                    </div>
                
            </body>

            <div className='bg-primary-10 py-[7em] w-screen space-y-5 mt-[7em] '>
                <p className='p1 text-white-30 text-center'>Download Build mobile app</p>
                <div className='flex space-x-7 justify-center'>
                    <a href="#" className='border border-secondary-10 flex rounded-lg p-3 items-center w-[160px] space-x-2'>
                        <AiFillApple size='2em' />
                        <p className='text-white-30'>Get on the <br /> <span className='text-secondary-10'>App Store</span> </p>
                    </a>
                    <a href="#" className='border border-primary-50 bg-primary-50 flex rounded-lg p-3 items-center w-[160px] space-x-2'>
                        <TbBrandGooglePlay color='white' size='2em' />
                        <p className='text-white-30'>Get on the <br /> <span className='text-white-10'>App Store</span> </p>
                    </a>
                </div>
            </div>

            <body className='flex flex-col-reverse bg-secondary-20 md:flex-row px-[2em] lg:px-[5em] py-[3em] justify-between w-screen items-center bg-secondary-20' style={{backgroundImage: `url(${bgFrame})`,backgroundSize:'cover'}}>

                <div className='md:w-1/2 space-y-5'>
                    <h1 className='h2 text-secondary-10'>We are always here for you </h1>
                    <p className='p2 text-white-10'>
                    Send us a whatsapp message, or chat with us on the app. You can also reach us at <a href="" className='text-secondary-10'>info @build.com,</a>  
                    get instant feedback however you want
                    </p>
                    <Link className='flex items-center space-x-3'>Contact Us <IoIosArrowDropright/> </Link>                   
                </div>
                <div>
                    <img src={manSinging} alt="" />
                </div>
            </body>
        <Footer/>
    </div>
  )
}

export default AboutUs