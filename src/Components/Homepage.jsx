import React, { useEffect, useRef } from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import Navbar from "./Navbar";
import { AiFillApple } from "react-icons/ai";
import { TbBrandGooglePlay } from "react-icons/tb";
import { IoIosArrowDropright } from "react-icons/io";
import bg from "../Assets/Images/BG-2.png";
import "../Assets/styles/global.css";
import license from "../Assets/Images/Framelicense.png";
import logo from "../Assets/Images/Logo-2.png";
import front from "../Assets/Images/building1.png";
import back from "../Assets/Images/building2.png";
import store from "../Assets/Images/store-front.png";
import buldingBlock from "../Assets/Images/buildingBlock.png";
import girl from "../Assets/Images/girlSmiling.png";
import girl2 from "../Assets/Images/girlWorking.png";
import girl3 from "../Assets/Images/Img-visum.png";
import message from "../Assets/Images/message.png";
import spacebg from "../Assets/Images/spacebg.png";
import yellowline from "../Assets/Images/yellowline.png";
import bgCta from "../Assets/Images/BG-CTA.png";
import girlHoldingPhone from "../Assets/Images/girl2.png";
import girlWithPos from "../Assets/Images/girl-with-POS.png";
import front2 from "../Assets/Images/building3.png";
import back2 from "../Assets/Images/building4.png";
import manSinging from "../Assets/Images/manSinging.png";
import bgFrame from "../Assets/Images/Frame.png";
import ppt from "../Assets/Images/PPT.png";
import bgFrame2 from "../Assets/Images/BGCTA.png";
import search from "../Assets/Images/Search.png";
import fire from "../Assets/Images/fire.png";
import storeimage from "../Assets/Images/Store-image-download.png";
import rocket from "../Assets/Images/Rocket.png";
import Button from "./Button";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Typed from "react-typed";

const Homepage = () => {
  const flavor = [
    {
      text: "Digital Banking",
      image: require("../Assets/Images/Icon-17.png"),
    },
    {
      text: "Savings",
      image: require("../Assets/Images/Icon-8.png"),
    },
    {
      text: "Payments & Collections",
      image: require("../Assets/Images/Icon-14.png"),
    },
    {
      text: "Business Banking",
      image: require("../Assets/Images/Icon-15.png"),
    },
    {
      text: "Business Investments",
      image: require("../Assets/Images/Icon-16.png"),
    },
    {
      text: "Loans",
      image: require("../Assets/Images/Icon-13.png"),
    },
  ];

  return (
    <div className="bg-white-40">
      <div
        className="h-screen home"
       
      >
        <Navbar className="text-white-10" logo={logo} />
        <header className=" flex flex-col justify-center mt-[3em] md:mt-[9em] md:space-y-5 text-white-10 px-[2em] max-w-[80em] lg:px-[5em] m-auto h-fit-content">
          <div className="flex flex-col gap-[5em] ">
            <div className="grid gap-[1em] ">
              <h1 className="h3 !font-bold text-center md:h1 md:text-left border-5 min-h-[6em] md:min-h-0">
                Do more than just banking, <br />
                Build a{" "}
                <Typed
                  className="text-primary-100"
                  strings={[
                    " sustainable finance",
                    " successful business",
                    " savings culture",
                  ]}
                  typeSpeed={120}
                  backSpeed={50}
                  loop
                ></Typed>
              </h1>
              <p className="p1 py-4 md:w-[75%] text-center md:text-left lg:w-[50%] px-3  ">
                End-to-end payments and financial management in a single
                solution. <br />
                Meet the right platform to help realize your dreams.
              </p>
              <div className=" m-auto md:m-0">
                <img src={license} alt="license" />
              </div>
            </div>
            <div className=" m-auto md:m-0">
              <Button text="Get Started" />
            </div>
          </div>
        </header>
      </div>

      <div className="flex flex-col-reverse md:flex-row max-w-[80em] m-auto px-[2em] lg:px-[5em] lg:h-screen mt-[2em] md:mt-0 justify-between items-center bg-white-40 ">
        <div className="lg:w-1/2 md:w-2/3 space-y-5">
            <p className="p3 text-white-30 mt-[2em] mt-0">about build bank</p>
          <div>
          <h1 className="h2 text-secondary-10">
            A bank that build’s your dream
          </h1>
            <div className="relative left-[20%] lg:left-0 top-[0] w-[30%]">
              <img src={yellowline} alt="" />
            </div>
          </div>
          <p className="p2 text-white-30">
            We are designed to solve payment and retail management problems of
            businesses and that’s exactly what happens when you choose TTMFB for
            your business.
          </p>
          <div className="space-y-2 p2 text-white-30 ">
            <div className="flex gap-1">
              <div className="">
                <img src={fire} alt="" />
              </div>
              <p>Make smarter business decisions</p>
            </div>
            <div className="flex gap-1">
              <div className="">
                <img src={search} alt="" />
              </div>
              <p>Keep track of your business financials</p>
            </div>
            <div className="flex gap-1">
              <div className="">
                <img src={rocket} alt="" />
              </div>
              <p>Increase business profit and revenue</p>
            </div>
            <div className="flex gap-1">
              <div className="">
                <img src={rocket} alt="" />
              </div>
              <p>Empower your business with smart POS collections</p>
            </div>
          </div>

          <Link to="/About" className="text-primary-50 mt-[1em]">
            more about us...
          </Link>
        </div>
        <div>
          <img src={storeimage} alt="" />
        </div>
      </div>

      <div className="bg-secondary-10 text-white-10 py-[7em]  mt-[3em] md:mt-0 ">
        <div className="px-[2em] max-w-[80em] m-auto lg:px-[10em] ">
          <div className="flex flex-col md:flex-row items-center gap-12 justify-between pb-[2.5em] ">
            <div className="flex gap-1 items-center">
              <p className="h5">₦1B</p>
              <p className=" h4 font-medium">
                Collections <br /> Processed
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <p className="h5">4</p>
              <p className=" h4 font-medium">
                months <br /> pace
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <p className="h5">98%</p>
              <p className=" h4 font-medium">Uptime</p>
            </div>
          </div>
          <div className="  m-auto">
            <p className="text-center h4">
              N1B collections made for our businesses just in 4 months with 98%
              uptime. We make payment collections fast and easy while also
              ensuring security.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white-40 height-fit-content max-w-[60em] m-auto py-[5em] space-y-10 grid justify-center items-center px-[2em] ">
        <div className="grid justify-end">
          <img src={buldingBlock} alt="" />
        </div>
        <p className="text-center h3 text-white-30">
          {" "}
          ️🛰️ We connect you to the future you desire . Don’t just imagine the
          future you want, build it.
        </p>
        <div className="grid justify-center">
          <Button text="Create an Account" />
        </div>
      </div>

      <div className="bg-primary-10 px-[2em] lg:px-[10em] py-[2em] md:h-screen">
        <h1 className="text-center h2 text-primary-300">Find your Flavor</h1>
        <div className="flex flex-wrap  justify-center space-y-5 md:space-y-0 gap-5 mt-[2em] max-w-[80em] m-auto ">
          {flavor.map((flavors) => (
            <div className="bg-white-10 rounded-[2em] grid justify-space-around md:w-1/3 w-full h-[264px] max-w-[17em] ">
              <div className="grid justify-center items-center ">
                <img src={flavors.image} alt="" />
              </div>
              <div className="grid justify-center ">
                <p className="p2 text-secondary-10 w-[90%] text-center ">
                  {flavors.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <body className="flex flex-col-reverse md:flex-row px-[2em] lg:px-[10em] md:h-screen justify-between items-center bg-white-40 max-w-[80em] m-auto  my-[2em] ">
        <div className="md:w-1/2 space-y-5">
          <p className="p3 text-white-30">Introducing Visum</p>
          <h1 className="h2 text-secondary-10">
            Enhance your business with POS collections
          </h1>
          <p className="p2 text-white-30">
            Beyond POS application, using <span className="text-primary-200">{' '} Visum</span>  assures you the visibility,
            simplicity, organization and growth you desire as a business owner
            with tools designed to take worry off your business
          </p>

          <Button text="Explore Visum" className="!bg-primary-200" />
        </div>
        <div>
          <img src={girl3} alt="" />
        </div>
      </body>

      <div className="max-w-[80em] m-auto ">
        <body
          className="flex flex-col md:flex-row px-5 lg:px-[5em] md:h-fit-content py-[5em] rounded-[3em] mx-[2em] lg:mx-[5em] my-[2em] md:my-0 justify-between items-center gap-[2em] bg-secondary-20 "
          style={{ backgroundImage: `url(${ppt})`, backgroundSize: "cover" }}
        >
          <div>
            <img src={girlWithPos} alt="" />
          </div>
          <div className="md:w-2/3 lg:w-1/2  space-y-5 grid items-top">
            <h1 className="h2 text-secondary-10">
              Get a POS in 48 hrs, hassle free
            </h1>
            <p className="p2 text-white-10">
              Request and get you POS delivered to you by our team....
            </p>
            <div>
              <Button text="Start Journey" className="!bg-primary-200" />
            </div>
          </div>
        </body>
      </div>

      <body className="flex flex-col-reverse md:flex-row px-[2em] lg:px-[10em] md:h-screen justify-between items-center bg-white-40 max-w-[80em] m-auto  ">
        <div className="md:w-1/2 space-y-5">
          <p className="p3 text-white-30">Savings</p>
          <h1 className="h2 text-secondary-10">Build a savings culture</h1>
          <p className="p2 text-white-30">
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not. Letter of on become he tended
            active enable to.
          </p>

          <Button text="Open an account" />
        </div>
        <div>
          <img src={girl} alt="" />
        </div>
      </body>

      <div className="max-w-[80em] m-auto ">
        <body className="flex flex-col md:flex-row px-5 lg:px-[5em] md:h-fit-content py-[5em] rounded-[3em] mx-[2em] lg:mx-[5em] my-[2em] md:my-0 justify-between items-center gap-[2em] bg-primary-200 ">
          <div>
            <img src={girl2} alt="" />
          </div>
          <div className="md:w-2/3 lg:w-1/2  space-y-5 grid items-top">
            <h1 className="h2 text-secondary-10">
              We help businesses and individuals reach their full potential
            </h1>
            <p className="p2 text-white-10">
              Access all the simple and advanced tools to grow your business as
              well improve your personal finances
            </p>
          </div>
        </body>
      </div>

      <body className="flex flex-col-reverse md:flex-row px-[2em] max-w-[80em] m-auto md:h-screen justify-between items-center bg-white-40 ">
        <div className="md:w-4/5 lg:w-1/2 justify-center space-y-5 grid items-center">
          <p className="p3 text-white-30">Payments</p>
          <h1 className="h2 text-secondary-10">
            Funds transfer, bills payment with ease
          </h1>
          <p className="p2 text-white-30">
            Send money to friends and family seamlessly on Build cross-country
            with our instant transfer, with the simple and intuitive processes,
            you can never get it wrong. Also pay bills and top up mobile airtime
            and data, cable, utility & transport bills.
          </p>
        </div>
        <div>
          <img src={message} alt="" />
        </div>
      </body>

      <div className=" flex flex-col px-[2em] top-0  mt-[3em] md:mt-0 space-y-0 lg:h-screen noBackground max-w-[80em] m-auto ">
        <p className="text-center p1 text-secondary-10 ">A Futuristic Bank</p>
        <div className="grid justify-center items-center m-auto  md:w-[60%] ">
          <h2 className="text-center h3 text-white-30 grid justify-center">
            We lead a forward thinking mindset geared at using technology to
            solve problems
          </h2>
        </div>
        <a href="#" className="text-center p1 text-primary-200 mb-0">
          Get Started!
        </a>
        <img src={spacebg} alt="" className="lg:hidden" />
      </div>

      <body className="flex flex-col-reverse md:flex-row-reverse px-[2em] md:h-screen justify-between items-center bg-white-40 gap-[2em] max-w-[80em] m-auto lg:px-[10em] ">
        <div className="md:w-1/2 space-y-5">
          <h1 className="h2 text-secondary-10">Choose us for your business</h1>
          <p className="p2 text-white-30">
            We build user-centric solutions that caters for your actual business
            needs and solve realistic problems for you.
          </p>

          <Button text=" Create business Account" />
        </div>
        <div>
          <img src={girlHoldingPhone} alt="" />
        </div>
      </body>

      <div className="max-w-[80em] m-auto">
        <body
          className="flex flex-col md:h-fit-content space-y-[5em] lg:p-[6em] rounded-[3em] mx-[2em] p-[2em] md:mx-[5em] my-[2em] md:my-0 justify-between items-center "
          style={{
            backgroundImage: `url(${bgFrame2})`,
            backgroundSize: "cover",
          }}
        >
          <div className="md:w-[60%] flex flex-col justify-center items-center m-auto">
            <h1 className="h2 text-center text-white-10">
              A Bank after your own heart, Build bank
            </h1>
          </div>
          <div className=" grid justify-center">
            <Button text="Get Started" />
          </div>
        </body>
      </div>

      <div className="bg-primary-10 py-[7em] w-screen space-y-5 mt-[7em]  ">
        <p className="p1 text-white-30 text-center">
          Download Build mobile app
        </p>
        <div className="flex space-x-7 justify-center">
          <a
            href="#"
            className="border-[.1em] border-secondary-10 flex rounded-[.5em] p-3 items-center w-[160px] space-x-2"
          >
            <AiFillApple size="2em" />
            <p className="text-white-30">
              Get on the <br />{" "}
              <span className="text-secondary-10">App Store</span>{" "}
            </p>
          </a>
          <a
            href="#"
            className="border border-primary-50 bg-primary-50 flex rounded-[.5em] p-3 items-center w-[160px] space-x-2"
          >
            <TbBrandGooglePlay color="white" size="2em" />
            <p className="text-white-10 ">
              <span className="opacity-75">
                Get on the <br />
              </span>
              App Store
            </p>
          </a>
        </div>
      </div>

      <body
        className=" bg-secondary-20  px-[2em] lg:px-[10em] py-[3em] md:pb-0 w-screen  "
        style={{ backgroundImage: `url(${bgFrame})`, backgroundSize: "cover" }}
      >
        <div className="max-w-[80em] m-auto flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="md:w-1/2 space-y-5 pb-[3em] md:pb-0">
            <h1 className="h2 text-secondary-10">
              We are always here for you{" "}
            </h1>
            <p className="p2 text-white-10">
              Send us a whatsapp message, or chat with us on the app. You can
              also reach us at{" "}
              <a href="mailTo:help@ttmfb.com" className="text-secondary-10">
                help@ttmfb.com,
              </a>
              get instant feedback however you want
            </p>
            <Link to="/contact" className="flex items-center space-x-3">
              Contact Us <IoIosArrowDropright />{" "}
            </Link>
          </div>
          <div className="justify-end items-end grid m-auto md:m-0">
            <img src={manSinging} alt="" />
          </div>
        </div>
      </body>

      <Footer />
    </div>
  );
};

export default Homepage;
