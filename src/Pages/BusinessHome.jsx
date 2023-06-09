import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import license from "../Assets/Images/Framelicense.png";
import {LinksToPage } from "../Components/Button";
import bg from "../Assets/Images/BG-4.png";
import icon18 from "../Assets/Images/Icon-18.png";
import "../Assets/styles/global.css";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import CardFlavor from "../Components/CardFlavor";
import bgFrame from "../Assets/Images/Frame.png";
import girl2 from "../Assets/Images/businessgirl.png";
import inage from "../Assets/Images/inage.png";
import inage1 from "../Assets/Images/Inage1.png";
import girlHoldingPhone from "../Assets/Images/girl2.png";
import inage2 from "../Assets/Images/Inage2.png";
import womansmile from "../Assets/Images/womansmile.png";
import logo from "../Assets/Images/Logo-2.png";
import womansmile2 from "../Assets/Images/womansmile2.png";
import manSinging from "../Assets/Images/manSinging.png";
import Typed from "react-typed";
import { IoIosArrowDropright } from "react-icons/io";

const BusinessHome = () => {
  const tools = [
    {
      image: require("../Assets/Images/MaskGroup.png"),
      title: "Collect Payments with Ease and get settled instantly",
      text: "Receive payments through Card, USSD, Cash or transfer.With Build business, you can sell anywhere, anytime.Your staff at different points of your store can sell to customers on the spot.",
    },
    {
      image: require("../Assets/Images/MaskGroup(1).png"),
      title: "Access business loans to expand your business",
      text: "Get access to flexible capital focused loans that help your business grow. As a customer-centric bank, you can access loans with low interests without collateral, isn’t that awesome👍",
    },
    {
      image: require("../Assets/Images/MaskGroup(2).png"),
      title: "Track business performance & generate reports in real-time",
      text: "See how money moves in and out of your business in real-time, you get access to a simplified dashboard that breaks down your business performance and generate all reports on the go...",
    },
    {
      image: require("../Assets/Images/MaskGroup(3).png"),
      title: "Manage multiple branches remotely from your app",
      text: "Our system helps you create and manage all your branches in one place.  This will also help eliminate fraud and a lack of an overview of your businesses",
    },
  ];
  return (
    <div className="font-sans">
      <div
        className="min-h-[100vh]"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >
        <Navbar className="text-white-10" logo={logo} />
        <header className=" flex flex-col justify-center mt-[3em] md:mt-[9em] md:space-y-5 text-white-10 px-[2em] max-w-[80em] lg:px-[5em] m-auto h-fit-content">
          <div className="flex flex-col gap-[5em] ">
            <div className="grid gap-[1em] ">
              <h1 className="text-[2em] !font-bold text-center md:text-[3.2em]  md:text-left border-5 min-h-[6em] md:min-h-0">
                Managing your business made <br />
                easy,{" "}
                <Typed
                  className="text-primary-100"
                  strings={[" make money", " spend money", " manage money"]}
                  typeSpeed={120}
                  backSpeed={50}
                  loop
                ></Typed>
              </h1>
              <p className="p1 py-4 md:w-[75%] text-center md:text-left lg:w-[50%] px-3  ">
                We are a modern digital bank making use of technology to provide
                access to <br className="hidden md:block" /> tools that support
                corporate, small/medium scale businesses and individuals.
              </p>
              <div className=" m-auto md:m-0 ">
                <img src={license} alt="license" />
              </div>
            </div>
            <div className=" m-auto md:m-0">
              <LinksToPage link='/comingSoon' text="Create a Business Account" className="mb-[2em]" />
            </div>
          </div>
        </header>
      </div>

      <div className="bg-white-10 height-fit-content space-y-10 grid m-auto max-w-[80em] mt-[5em] justify-center items-center px-[2em] ">
        <img src={icon18} alt="" className="m-auto" />
        <p className="text-center h3 text-white-30">
          {" "}
          ️Grow your business with simple and efficient management tools. {" "}
        </p>
        <div className="flex space-x-7 justify-center ">
          <a
            href="#"
            className="border border-secondary-10 flex rounded-2xl p-3 items-center w-[160px] space-x-2 bg-secondary-10"
          >
            <AiFillApple size="2em" color="white" />
            <p className="text-white-30">
              Get on the <br />
              <span className="text-white-10">App Store</span>
            </p>
          </a>
          <a
            href="#"
            className="border border-primary-50 bg-primary-50 flex rounded-2xl p-3 items-center w-[160px] space-x-2"
          >
            <FaGooglePlay color="white" size="2em" />
            <p className="text-white-10">
              <span className="opacity-70">Get on the</span>
              <br /> <span className="text-white-10">App Store</span>{" "}
            </p>
          </a>
        </div>
      </div>

      <body className="flex flex-col-reverse md:flex-row px-[2em]  justify-between my-[5em] items-center bg-white-10 m-auto max-w-[80em] lg:px-[10em] ">
        <div className="md:w-1/2 space-y-5">
          <h1 className="h2 text-secondary-10 text-center md:text-left">
            More than just <br className="hidden md:block" /> a POS
          </h1>
          <p className="p2 text-white-30">
            Build business is designed to solve retail management problems,
            asides payment collections, you can track all transactions done on
            your POS with your mobile phone and web application dedicated to
            you.
          </p>
        </div>
        <div>
          <img src={inage} alt="" />
        </div>
      </body>

      <div className="mt-[5em]  grid items-center justify-between px-[2em] space-y-10 m-auto max-w-[80em] ">
        <h1 className="h2 text-secondary-10 text-center">
          Simple tools designed to help you take worry off your business
        </h1>
        <div className="space-y-[10em]  grid md:grid-cols-2 justify-center items-center m-auto md:gap-[10em] md:space-y-0">
          {tools.map((tool) => (
            <CardFlavor
              coverImg={tool.image}
              title={tool.title}
              text={tool.text}
            />
          ))}
        </div>
      </div>

      <div className="m-auto max-w-[80em]">
        <div
          className="bg-secondary-20    md:rounded-[3em]  md:mx-[2em] lg:mx-[5em] "
          style={{
            backgroundImage: `url(${bgFrame})`,
            backgroundSize: "cover",
          }}
        >
          <body className="flex flex-col-reverse md:flex-row  lg:px-[5em] md:h-fit-content pt-[3em] md:pt-0 md:pt-[2em] mx-[2em] my-[2em] justify-between items-center  mt-[5em] ">
            <div>
              <img src={girl2} alt="" />
            </div>
            <div className="lg:w-1/2 space-y-5 grid justify-between items-top">
              <h1 className="h2 text-secondary-10">
                Get a POS in 48 hrs, hassle free
              </h1>
              <p className="p2 text-white-10">
                Request and get you POS delivered to <br /> you by our team....
              </p>
            </div>
          </body>
        </div>
      </div>

      <body className="flex flex-col-reverse md:flex-row-reverse px-[2em]  gap-[2em]  justify-between items-center my-[5em] bg-white-10 m-auto max-w-[80em] lg:px-[10em]">
        <div className="md:w-1/2 space-y-5">
          <h1 className="h2 text-secondary-10">
            Comprehensive Real- <br className="hidden md:block"/> time reports
          </h1>
          <p className="p2 text-white-30">
            Forget about weekly updates or monthly reports, get the information
            you need when you need it with comprehensive reports that are
            automatically updated round-the-clock.
          </p>
          <p className="h3 text-white-30">360 degrees view of your business</p>
        </div>
        <div>
          <img src={inage1} alt="" />
        </div>
      </body>

      <body className="flex flex-col-reverse md:flex-row px-[2em]  gap-[2em] my-[5em] justify-between items-center bg-white-10 m-auto max-w-[80em] lg:px-[10em]">
        <div className="md:w-1/2 space-y-5">
          <h1 className="h2 text-secondary-10">
            Seamless Dispute <br className="hidden md:block"/> Resolutions
          </h1>
          <p className="p2 text-white-30">
            With Build, you don’t get to worry about chargeback hassles. Sit
            back and watch disputes resolved in perfect time.
          </p>
        </div>
        <div>
          <img src={inage2} alt="" />
        </div>
      </body>

      <div className="m-auto max-w-[80em] ">
        <body className="flex flex-col md:flex-row px-[2em] lg:px-[5em] md:h-fit-content py-[3em] md:py-0 md:rounded-[3em] gap-[2em] md:mx-[2em] lg:mx-[5em] my-[2em] justify-between items-center bg-secondary-10 mt-[5em] ">
          <div>
            <img src={girlHoldingPhone} alt="" />
          </div>
          <div className="md:w-1/2 space-y-5 grid justify-between items-top">
            <h1 className="h2 text-secondary-20">Get Settled Instantly!</h1>
            <ul className="p2 text-white-10">
              <li className="list-disc">
                No need waiting for a lifetime to receive money into your
                account as all transactions are settled instantly
              </li>
              <li className="list-disc">
                No more seeing POS alerts and settlement next day.{" "}
              </li>
              <li className="list-disc">
                No more delaying customers to confirm alerts from Madam
              </li>
            </ul>
            <div>
              <LinksToPage link='/comingSoon' text="Get Started" />
            </div>
          </div>
        </body>
      </div>

      <body className="flex flex-col-reverse md:flex-row px-[2em]  my-[5em] justify-between items-center bg-white-10 m-auto max-w-[80em] lg:px-[10em]">
        <div className="md:w-1/2 space-y-5">
          <h1 className="h2 text-secondary-10 text-center md:text-left">
            Position your business <br className="hidden md:block" /> for growth
          </h1>
          <p className="p2 text-white-30">
            Become the preferred choice, optimize service delivery with improved
            processes, multi-channel payments, customer insights and fraud
            management.
          </p>
        </div>
        <div>
          <img src={womansmile} alt="" />
        </div>
      </body>

      <div className="gap-[2em] max-w-[80em] m-auto ">
        <h1 className="h2 text-secondary-10 text-center">
          PStay relaxed all day, every day with <br /> end-to-end automation
        </h1>
        <body className="flex flex-col-reverse md:flex-row-reverse  px-[2em] justify-between items-center bg-white-10 lg:px-[10em] gap-[2em] mt-[2em]">
          <div className="md:w-1/2 space-y-5">
            <p className="h4 text-white-30">
              Solve all your business problems with one smart integration to
              Build. Reduce wait time, improve customer experience, block
              leakages, manage inventory and automate payments at your business
              loca
            </p>
          </div>
          <div>
            <img src={womansmile2} alt="" />
          </div>
        </body>
        <div className="grid justify-center mt-[2em]">
          <LinksToPage link='/comingSoon' text="Create business Account" />
        </div>
      </div>

      <div className="bg-primary-10 py-[7em] w-screen space-y-5 mt-[7em] ">
        <p className="p1 text-white-30 text-center">
          Download Build mobile app
        </p>
        <div className="flex space-x-7 justify-center">
          <a
            href="#"
            className="border bg-secondary-10 flex rounded-2xl p-3 items-center w-[160px] space-x-2"
          >
            <AiFillApple size="2em" color="white" />
            <p className="text-white-30">
              Get on the <br /> <span className="text-white-10">App Store</span>{" "}
            </p>
          </a>
          <a
            href="#"
            className="border border-primary-50 bg-primary-50 flex rounded-2xl p-3 items-center w-[160px] space-x-2"
          >
            <FaGooglePlay color="white" size="2em" />
            <p className="text-white-30">
              Get on the <br /> <span className="text-white-10">App Store</span>{" "}
            </p>
          </a>
        </div>
      </div>

      <body
        className=" bg-secondary-20  px-[2em] lg:px-[10em] pt-[3em] md:pb-0 w-screen  "
        style={{ backgroundImage: `url(${bgFrame})`, backgroundSize: "cover" }}
      >
        <div className="max-w-[80em] m-auto flex flex-col md:flex-row justify-between items-center">
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

export default BusinessHome;
