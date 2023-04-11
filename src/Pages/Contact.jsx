import React from 'react'
import Navbar from '../Components/Navbar';
import '../Assets/styles/global.css'
import Button from '../Components/Button';
import mail from '../Assets/Images/Mail.png'
import icon3 from '../Assets/Images/Icon-3.png'
import icon4 from '../Assets/Images/Icon-4.png'
import icon5 from '../Assets/Images/Icon-5.png'
import icon6 from '../Assets/Images/Icon-6.png'
import icon7 from '../Assets/Images/Icon-7.png'
import bg from '../Assets/Images/Rectangle89.png'
import logo from '../Assets/Images/Logo.png'
import Footer from '../Components/Footer';
import bgFrame1 from "../Assets/Images/BGCTA.png";


const Contact = () => {
  return (
    <div >
        <Navbar logo={logo}/>

        <div className='m-auto max-w-[80em] '>
            <header className=' items-center flex flex-col md:flex-row mx-[2em] lg:mx-[5em] md:mx-[10em] lg:space-x-[10em] mt-[5em] '>
                <div className='text-center md:text-left gap-[2em]  md:w-2/3 lg:w-1/2'>
                    <p className='h2 text-secondary-10'>Talk to Us</p>
                    <p className='p3 text-white-30 md:w-[80%] '>Let’s help you get started and sort whatever brings you here today. Please fill in the fields below, we will reach out to you very soon</p>
                </div>
                <div className='border border-white-50 grid px-4 space-y-5 w-[60%] lg:w-[30%] mt-[2em] md:mt-0 md:h-[30%] py-10 rounded-lg'>
                    <img src={mail} alt="" className='m-auto' />
                    <div className='text-center'>
                        <h1>Check FAQ</h1>
                        <p>Who knows, your questions might have been answered before. Visum provides a community to support it’s users</p>

                    </div>
                    <div className='grid w-full'>
                        <Button text='Go to FAQ' />
                    </div>
                </div>
            </header>

        </div>

        <div className='flex flex-col md:flex-row px-[2em] lg:px-[5em] md:space-x-[3em] mt-[5em] max-w-[80em] m-auto '>
            <div className='md:w-full md:h-fit-content space-y-[1em] m-auto md:m-0 py-[3em] px-[2em] md:px-[5em] md:pt-[7em] ' style={{backgroundImage: `url(${bg})`,backgroundSize:'cover'}}>
                <p className='flex items-center'> <img src={icon6} alt="" /> Total Trust Microfinance Bank </p>
                <p className='flex items-center'><img src={icon7} alt="" className='flex'/>7A Idejo Street Victora Island, Lagos Nigeria </p>
                <p className='flex items-center'><img src={icon3} alt="" />+234 1 7642825   |   +234 1 7642582 </p>
                <p className='flex items-center'><img src={icon4} alt="" /> help@ttmfb.com </p>
                <p className='flex items-center'><img src={icon5} alt="" />www.ttmfb.com</p>
            </div>
            <div className='w-full mt:[2em] flex flex-col space-y-5'>
                <div className='flex w-full flex-col md:flex-row mt-[3em] space-y-[1em] md:space-x-3 md:space-y-0'>
                    <input type="text" className='border border-white-50 rounded-lg w-full text-white-50 px-[2em] py-[1em]' placeholder='First Name'/>
                    <input type="text" className='border border-white-50 rounded-lg w-full text-white-50 px-[2em] py-[1em]' placeholder='Last Name'/>
                </div>
                <input type="email" className='border border-white-50 rounded-lg text-white-50 px-[2em] py-[1em]' placeholder='Email address' />
                <input type="text" className='border border-white-50 rounded-lg text-white-50 px-[2em] py-[1em]' placeholder='Subject of your message'/>
                <textarea className='border border-white-50 rounded-lg text-white-50 px-[2em] py-[1em]' placeholder='Subject of your message' name="" id="" cols="30" rows="10"></textarea>

                <div>
                    <Button text='Submit'/>
                </div>
            </div>
        </div>

        <div className="max-w-[80em] m-auto ">
        <body
          className="flex flex-col md:h-fit-content space-y-[5em] p-[2em] lg:p-[6em] md:rounded-[3em] md:mx-[2em] lg:mx-[5em] my-[2em] justify-between bg-secondary-10 items-center mt-[10em] "
          style={{
            backgroundImage: `url(${bgFrame1})`,
            backgroundSize: "cover",
          }}
        >
          <div className="md:w-[60%] flex flex-col justify-center items-center m-auto">
            <h1 className="h2 text-center text-white-10">
              Make the most of your dreams today
            </h1>
          </div>
          <div className=" grid justify-center">
            <Button text="Get Started" />
          </div>
        </body>
      </div>


        <Footer/>
    </div>
  )
}

export default Contact