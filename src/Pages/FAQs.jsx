import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import mail from '../Assets/Images/Mail.png'
import '../Assets/styles/global.css'
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDropup } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import Button from '../Components/Button';
import bgFrame from '../Assets/Images/Frame.png'
import bgFrame2 from '../Assets/Images/BG-CTA(1).png'
import manSinging from '../Assets/Images/manSinging.png'
import { AiFillApple } from "react-icons/ai";
import { TbBrandGooglePlay } from "react-icons/tb";
import { IoIosArrowDropright } from "react-icons/io";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
import Footer from '../Components/Footer';


const FAQs = () => {
    const [show, setShow] =useState(false)
    const [customer, setCustomer] =useState(false)
    const [pos, setPos] =useState(false)
    const [start, setStart] =useState(false)
    const [price, setPrice] =useState(false)
    const [password, setPassword] =useState(false)
    const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <div>
        <Navbar/>
        <div className='space-y-10 mt-[5em] '>
            <h1 className='h2 text-center text-secondary-10'>Frequently asked questions</h1>
            <div className='w-[50%]  md:w-[30%] grid justify-center m-auto'>
                <input type="text" placeholder='Search your questions here' className='rounded-[5em] pl-[1em] border border-white-50 w-[300px] md:w-[518px] py-2 '  />
                <CiSearch className='relative top-[-1.8em] left-[90%] '/>

            </div>
        </div>

        <div className='flex flex-col md:flex-row mx-[2em] mt-[10em] lg:mx-[10em] justify-between md:gap-[2em] space-y-[5em] md:space-y-0 '>
            <div className='space-y-5 md:w-3/4'>
                <div className=' '>
                    <div className=' flex items-center justify-between px-5 py-1 bg-white-60'>
                        <p className='h4 text-secondary-10'>General</p>
                        {show?(<IoIosArrowDropup size='25px' onClick={()=>setShow(!show)}/>):
                        <IoIosArrowDropdown size='25px' onClick={()=>setShow(!show)}/>}
                    </div>

                    {show && (
                    <div className='mt-[1em] space-y-2'>
                        <Accordion open={open ===1} animate={customAnimation} className='space-y-2 px-5 py-1 border border-white-50 rounded-sm'>
                                        <AccordionHeader onClick={()=>handleOpen(1)}>
                                            <p className='p3 text-secondary-10'>The expense windows adapted sir. Wrong widen drawn.</p>
                                        </AccordionHeader>
                                            
                                        <AccordionBody>
                                            <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. </p>
                                        </AccordionBody>

                        </Accordion>

                        <Accordion open={open ===2} animate={customAnimation} className='space-y-2 px-5 py-1 border border-white-50 rounded-sm'>
                                        <AccordionHeader onClick={()=>handleOpen(2)}>
                                            <p className='p3 text-secondary-10'>Six curiosity day assurance bed necessary?</p>
                                        </AccordionHeader>
                                            
                                        <AccordionBody>
                                            <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. </p>
                                        </AccordionBody>

                        </Accordion>

                        <Accordion open={open ===3} animate={customAnimation} className='space-y-2 px-5 py-1 border border-white-50 rounded-sm'>
                                        <AccordionHeader onClick={()=>handleOpen(3)}>
                                            <p className='p3 text-secondary-10'>Produce say the ten moments parties?</p>
                                        </AccordionHeader>
                                            
                                        <AccordionBody>
                                            <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. </p>
                                        </AccordionBody>

                        </Accordion>

                        <Accordion open={open ===4} animate={customAnimation} className='space-y-2 px-5 py-1 border border-white-50 rounded-sm'>
                                        <AccordionHeader onClick={()=>handleOpen(4)}>
                                            <p className='p3 text-secondary-10'>Simple innate summer fat appear basket his desire joy?</p>
                                        </AccordionHeader>
                                            
                                        <AccordionBody>
                                            <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. </p>
                                        </AccordionBody>

                        </Accordion>

                        <Accordion open={open ===5} animate={customAnimation} className='space-y-2 px-5 py-1 border border-white-50 rounded-sm'>
                                        <AccordionHeader onClick={()=>handleOpen(5)}>
                                            <p className='p3 text-secondary-10'>Outward clothes promise at gravity do excited?</p>
                                        </AccordionHeader>
                                            
                                        <AccordionBody>
                                            <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. </p>
                                        </AccordionBody>

                        </Accordion>
                    </div>)}

                </div>

                <div className=''>
                    <div className=' flex items-center justify-between px-5 py-1 bg-white-60'>
                        <p className='h4 text-secondary-10'>Customers</p>
                        {show?(<IoIosArrowDropup size='25px' onClick={()=>setCustomer(!customer)}/>):
                        <IoIosArrowDropdown size='25px' onClick={()=>setCustomer(!customer)}/>}
                    </div>

                    {customer && (
                    <div className='mt-[1em] space-y-2'>
                    <Accordion open={open ===6} animate={customAnimation} className='space-y-2 px-5 py-1 border border-white-50 rounded-sm'>
                                    <AccordionHeader onClick={()=>handleOpen(6)}>
                                        <p className='p3 text-secondary-10'>Six curiosity day assurance bed necessary?</p>
                                    </AccordionHeader>
                                        
                                    <AccordionBody>
                                        <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. </p>
                                    </AccordionBody>

                    </Accordion>

                    <Accordion open={open ===7} animate={customAnimation} className='space-y-2 px-5 py-1 border border-white-50 rounded-sm'>
                                    <AccordionHeader onClick={()=>handleOpen(7)}>
                                        <p className='p3 text-secondary-10'>Produce say the ten moments parties?</p>
                                    </AccordionHeader>
                                        
                                    <AccordionBody>
                                        <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. </p>
                                    </AccordionBody>

                    </Accordion>

                    <Accordion open={open ===8} animate={customAnimation} className='space-y-2 px-5 py-1 border border-white-50 rounded-sm'>
                                    <AccordionHeader onClick={()=>handleOpen(8)}>
                                        <p className='p3 text-secondary-10'>Simple innate summer fat appear basket his desire joy?</p>
                                    </AccordionHeader>
                                        
                                    <AccordionBody>
                                        <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. </p>
                                    </AccordionBody>

                    </Accordion>
                    </div>)}

                </div>

                <div className=''>
                    <div className=' flex items-center justify-between px-5 py-1 bg-white-60'>
                        <p className='h4 text-secondary-10'>Getting Started</p>
                        {start?(<IoIosArrowDropup size='25px' onClick={()=>setStart(!start)}/>):
                        <IoIosArrowDropdown size='25px' onClick={()=>setStart(!start)}/>}
                    </div>

                    {start && (
                    <div className='mt-[1em] space-y-2'>
                    <Accordion open={open ===9} animate={customAnimation} className='space-y-2 px-5 py-1 border border-white-50 rounded-sm'>
                                    <AccordionHeader onClick={()=>handleOpen(9)}>
                                        <p className='p3 text-secondary-10'>The expense windows adapted sir. Wrong widen drawn.</p>
                                    </AccordionHeader>
                                        
                                    <AccordionBody>
                                        <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. </p>
                                    </AccordionBody>

                    </Accordion>
                    </div>)}

                </div>

                <div className=''>
                    <div className=' flex items-center justify-between px-5 py-1 bg-white-60'>
                        <p className='h4 text-secondary-10'>Requesting a POS Terminal</p>
                        {show?(<IoIosArrowDropup size='25px' onClick={()=>setPos(!pos)}/>):
                        <IoIosArrowDropdown size='25px' onClick={()=>setPos(!pos)}/>}
                    </div>

                    {pos && (
                    <div className='mt-[1em] space-y-2'>
                    <Accordion open={open ===10} className='space-y-2 px-5 py-1 border border-white-50 rounded-sm'>
                                    <AccordionHeader onClick={()=>handleOpen(10)}>
                                        <p className='p3 text-secondary-10'>The expense windows adapted sir. Wrong widen drawn.</p>
                                    </AccordionHeader>
                                        
                                    <AccordionBody>
                                        <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. </p>
                                    </AccordionBody>

                    </Accordion>
                    </div>)}

                </div>

                <div className=''>
                    <div className=' flex items-center justify-between px-5 py-1 bg-white-60'>
                        <p className='h4 text-secondary-10'>What is the price for POS?</p>
                        {price?(<IoIosArrowDropup size='25px' onClick={()=>setPrice(!price)}/>):
                        <IoIosArrowDropdown size='25px' onClick={()=>setPrice(!price)}/>}
                    </div>

                    {price && (
                    <div className='mt-[1em] space-y-2'>
                    <Accordion open={open ===11} className='space-y-2 px-5 py-1 border border-white-50 rounded-sm'>
                                    <AccordionHeader onClick={()=>handleOpen(11)}>
                                        <p className='p3 text-secondary-10'>The expense windows adapted sir. Wrong widen drawn.</p>
                                    </AccordionHeader>
                                        
                                    <AccordionBody>
                                        <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. </p>
                                    </AccordionBody>

                    </Accordion>
                    </div>)}

                </div>

                <div className=''>
                    <div className=' flex items-center justify-between px-5 py-1 bg-white-60'>
                        <p className='h4 text-secondary-10'>How can i reset my password?</p>
                        {password?(<IoIosArrowDropup size='25px' onClick={()=>setPassword(!password)}/>):
                        <IoIosArrowDropdown size='25px' onClick={()=>setPassword(!password)}/>}
                    </div>

                    {password && (
                    <div className='mt-[1em] space-y-2'>
                    <Accordion open={open ===12} className='space-y-2 px-5 py-1 border border-white-50 rounded-sm'>
                                    <AccordionHeader onClick={()=>handleOpen(12)}>
                                        <p className='p3 text-secondary-10'>The expense windows adapted sir. Wrong widen drawn.</p>
                                    </AccordionHeader>
                                        
                                    <AccordionBody>
                                        <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. </p>
                                    </AccordionBody>

                    </Accordion>
                    </div>)}

                </div>
            </div>


            <div className='border border-white-50 grid px-4 space-y-5 md:w-[30%] max-h-[500px] lg:h-[30%] py-10 rounded-lg'>
                <img src={mail} alt="" className='m-auto' />
                <div className='text-center'>
                    <h1>Do you have more questions?</h1>
                    <p>End-to-end payments and business management in a single solution. Meet the right platform to help realize your business dreams.</p>

                </div>
                <div className='grid w-full'>
                    <Button text='Shoot a Direct Mail' />
                </div>
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
                    <Link to='/contact' className='flex items-center space-x-3'>Contact Us <IoIosArrowDropright/> </Link>                   
                </div>
                <div>
                    <img src={manSinging} alt="" />
                </div>
            </body>
        <Footer/>
    </div>
  )
}

export default FAQs