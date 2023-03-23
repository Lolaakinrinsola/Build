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
import bg from "../Assets/Images/BG.png";
import "../Assets/styles/global.css";
import license from "../Assets/Images/small.png";
import front from "../Assets/Images/building1.png";
import back from "../Assets/Images/building2.png";
import store from "../Assets/Images/store-front.png";
import buldingBlock from "../Assets/Images/buildingBlock.png";
import girl from "../Assets/Images/girlSmiling.png";
import girl2 from "../Assets/Images/girlWorking.png";
import message from "../Assets/Images/message.png";
import spacebg from "../Assets/Images/spacebg.png";
import bgCta from "../Assets/Images/BG-CTA.png";
import girlHoldingPhone from "../Assets/Images/girl2.png";
import front2 from "../Assets/Images/building3.png";
import back2 from "../Assets/Images/building4.png";
import manSinging from "../Assets/Images/manSinging.png";
import bgFrame from "../Assets/Images/Frame.png";
import Button from "./Button";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Typed from "react-typed";

const Homepage = () => {
  const flavor = [
    {
      text: "Digital Banking",
      image: require("../Assets/Icons/Icon.png"),
    },
    {
      text: "Savings",
      image: require("../Assets/Images/Icon-8.png"),
    },
    {
      text: "Payments",
      image: require("../Assets/Images/Icon-9.png"),
    },
    {
      text: "Loans",
      image: require("../Assets/Images/Icon-10.png"),
    },
    {
      text: "Business Investments",
      image: require("../Assets/Images/Icon-11.png"),
    },
  ];

  return (
    <div className="bg-white-40">
      <div
        className="md:h-screen + 20px"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >
        <Navbar />
        <header className=" flex flex-col justify-center m-auto items-center md:mt-[7em] md:space-y-5 ">
          <h1 className="h1 text-secondary-10 text-center w-[80%]">
            Do more than just banking, <br />
            <Typed
              className="text-primary-100"
              strings={[
                " Sustainable Finance",
                " Sustainable business",
                " Savings Culture",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            ></Typed>
          </h1>
          <p className="p1 text-secondary-10 text-center md:w-[40%] px-[2em] md:px-0">
            End-to-end payments and financial management in a single solution.
            Meet the right platform to help realize your dreams.
          </p>
          <img src={license} alt="" />
          <Button text="Get Started" />

          <div className="relative  lg:absolute bottom-[-1%] ">
            <div className="flex justify-end ">
              <div className="height-[20%] grid items-end  ">
                <img src={back} alt="" className="height-[20%]" />
              </div>
              <div className="height-[20%] grid items-end  ">
                <img src={front} alt="" className="height-[20%]" />
              </div>
            </div>
          </div>
        </header>
      </div>

      <div className="flex flex-col-reverse md:flex-row px-[2em] lg:px-[5em] lg:h-screen mt-[2em] md:mt-0 justify-between items-center bg-white-40">
        <div className="lg:w-1/2 md:w-2/3 space-y-5">
          <p className="p3 text-white-30 mt-[2em] mt-0">about build bank</p>
          <h1 className="h2 text-secondary-10">
            A bank that build’s your dream 💛
          </h1>
          <p className="p2 text-white-30">
            Build is designed to solve payment and retail management problems of
            businesses and that’s exactly what happens when you use Build for
            your business
          </p>
          <div className="space-y-2">
            <p className="p2 text-white-30">Make smarter business decisions</p>
            <p className="p2 text-white-30">
              Keep track of your business financials
            </p>
            <p className="p2 text-white-30">
              {" "}
              Increase business profit and revenue
            </p>
          </div>

          <Link to="/About" className="text-primary-50">
            more about us...
          </Link>
        </div>
        <div>
          <img src={store} alt="" />
        </div>
      </div>

      <div className="bg-white-40 height-fit-content py-[5em] space-y-10 grid justify-center items-center px-[2em] lg:px-[20em]">
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
        <h1 className="text-center h2 text-secondary-10">Find your Flavor</h1>
        <div className="grid md:grid-cols-3 justify-center space-y-5 md:space-y-0 gap-5 mt-[2em]  ">
          {flavor.map((flavors) => (
            <div className="bg-white-10 rounded-[2em] grid justify-space-around  h-[264px] ">
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

      <body className="flex flex-col-reverse md:flex-row px-[2em] lg:px-[10em] md:h-screen justify-between items-center bg-white-40">
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

      <body className="flex flex-col md:flex-row px-5 lg:px-[5em] md:h-fit-content py-[5em] rounded-[3em] mx-[2em] lg:mx-[5em] my-[2em] md:my-0 justify-between items-center gap-[2em] bg-primary-200">
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

      <body className="flex flex-col-reverse md:flex-row px-[2em] lg:px-[10em] md:h-screen justify-between items-center bg-white-40 ">
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
        <div >
          <img src={message} alt="" />
        </div>
      </body>

      <div
        className=" flex flex-col px-[2em] top-0  mt-[3em] md:mt-0 space-y-0 lg:h-screen noBackground"
      >
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
        <img src={spacebg} alt=""  className="lg:hidden"/>
      </div>

      <body className="flex flex-col-reverse md:flex-row-reverse px-[2em] md:h-screen justify-between items-center bg-white-40 gap-[2em] ">
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

      <body className="flex flex-col md:h-fit-content space-y-[5em] lg:p-[6em] rounded-[3em] mx-[2em] p-[2em] md:mx-[5em] my-[2em] md:my-0 justify-between items-center bg-secondary-10">
        <div className="md:w-[60%] flex flex-col justify-center items-center m-auto">
          <h1 className="h2 text-center text-white-10">
            A Bank after your own heart, Build bank
          </h1>
        </div>
        <div className=" grid justify-center">
          <Button text="Get Started" />
        </div>
      </body>

      <div className="bg-primary-10 py-[7em] w-screen space-y-5 mt-[7em] ">
        <p className="p1 text-white-30 text-center">
          Download Build mobile app
        </p>
        <div className="flex space-x-7 justify-center">
          <a
            href="#"
            className="border border-secondary-10 flex rounded-lg p-3 items-center w-[160px] space-x-2"
          >
            <AiFillApple size="2em" />
            <p className="text-white-30">
              Get on the <br />{" "}
              <span className="text-secondary-10">App Store</span>{" "}
            </p>
          </a>
          <a
            href="#"
            className="border border-primary-50 bg-primary-50 flex rounded-lg p-3 items-center w-[160px] space-x-2"
          >
            <TbBrandGooglePlay color="white" size="2em" />
            <p className="text-white-30">
              Get on the <br /> <span className="text-white-10">App Store</span>{" "}
            </p>
          </a>
        </div>
      </div>

      <body
        className="flex flex-col-reverse bg-secondary-20 md:flex-row px-[2em] lg:px-[5em] py-[3em] justify-between w-screen items-center "
        style={{ backgroundImage: `url(${bgFrame})`, backgroundSize: "cover" }}
      >
        <div className="md:w-1/2 space-y-5">
          <h1 className="h2 text-secondary-10">We are always here for you </h1>
          <p className="p2 text-white-10">
            Send us a whatsapp message, or chat with us on the app. You can also
            reach us at{" "}
            <a href="" className="text-secondary-10">
              info @build.com,
            </a>
            get instant feedback however you want
          </p>
          <Link className="flex items-center space-x-3">
            Contact Us <IoIosArrowDropright />{" "}
          </Link>
        </div>
        <div>
          <img src={manSinging} alt="" />
        </div>
      </body>

      <Footer />
    </div>
  );
};

export default Homepage;
