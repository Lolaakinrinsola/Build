import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import logo from "../Assets/Images/Logo-2.png";
import { Link } from "react-router-dom";
import { Button } from "../Components/Button";
import comingSoon from '../Assets/Images/Image.png'
import icon1 from '../Assets/Images/Icon1.png'
import icon2 from '../Assets/Images/Icon2.png'

const ComingSoon = () => {
  return (
    <div>
      <div className="bg-secondary-10 lg:h-screen text-white-10">
        <Navbar className="text-white-10" logo={logo} />

        <div className="max-w-[80em] py-[2em] px-[2em] md:px-[5em] md:py-[5em] flex flex-col-reverse lg:flex-row justify-between m-auto">
          <div className="lg:w-1/2 justify-between grid  ">
            <div className="space-y-[1em]">
            <h1 className="font-bold text-[3em] text-center md:text-left">
              Our product <br className="hidden lg:block" /> is launching soon
            </h1>
            <p className="text-[0.8em] text-center md:text-left w-[80%] md:w-full m-auto">
              Using Visum assures you the visibility, simplicity, organization
              and growth you desire as a business owner. Be the first to know
              when it’s Live, please enter your email below to get notified.
            </p>
            <div className="flex flex-col md:flex-row space-y-5 md:space-x-4 md:space-y-0 items-center justify-center">
                <div className="w-full md:w-2/3 grid items-center ">
                <input type="text" className="w-full border-white-10 rounded-[16px] border-[.1px] border-opacity-[80%] px-[1em] py-[1em] bg-secondary-10 " placeholder="Email"/>

                </div>
                <div className="w-full md:w-1/3">
                <Button text='Get Notified' className='w-full'/>

                </div>
            </div>

            </div>


            <div className="flex items-center justify-between mt-[2em] ">
                <div className="flex items-center space-x-2 md:space-x-5">
                    <img src={icon1} alt="" className="" />
                    <p>98% Uptime <br /> in 4 months</p>
                </div>
                <div className="flex items-center space-x-2  md:space-x-5">
                <img src={icon2} alt="" />
                <p>2bn naira <br /> processed already</p>
                </div>
            </div>
          </div>
          <div>

          <img src={comingSoon} alt=""  className="m-auto"/>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComingSoon;
