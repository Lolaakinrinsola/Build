import React, { useEffect, useState } from "react";
import fb from "../Assets/Icons/facebook.png";
import circle from "../Assets/Icons/circle.png";
import linkedin from "../Assets/Icons/in.png";
import line from "../Assets/Images/Lines.png";
import "../Assets/styles/global.css";
import ig from "../Assets/Icons/instagram.png";
import twitter from "../Assets/Icons/Twitter.png";
import { Link } from "react-router-dom";
import {LinksToPage} from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState(false);
  return (
    <div className="">
      <div
        className={`flex w-screen max-w-[100em] m-auto justify-between items-center py-5 md:pl-[5em] px-[2em] md:pr-[10em] + ${props.className}`}
      >
        <Link to="/" className="items-center">
          <img src={props.logo} alt="logo" />
        </Link>
        <div className="hidden md:flex gap-[2em] ">
          <div className="">
            <Link to="/business">Business</Link>
          </div>
          <div onClick={() => setOptions(!options)} className="">
            <p className="flex items-center gap-1">
              Company
              {options ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </p>
            {options ? (
              <div className="bg-white-10 absolute mt-[1em] rounded-xl ">
                <div className="flex flex-col p-[3em] text-black gap-[2em]">
                  <Link to="/">Company</Link>
                  <Link to="/business">Business</Link>
                  <Link to="/About">About Us</Link>
                  <Link to="/stories">Blog</Link>
                  <Link to="/FAQs">FAQs</Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <GiHamburgerMenu
          size="30px"
          onClick={() => setOpen(!open)}
          className="md:hidden"
        />

        {open ? (
          <div>

          <div className="absolute h-full w-screen top-0 left-0 bg-[#000000] bg-opacity-[60%]" onClick={()=> setOpen(!open)}>
          </div>
          <div className=" pb-[2em] w-2/3 bg-white-10 absolute top-0 right-0 rounded-2xl">
            <div className="mt-[2em] grid justify-end items-end mr-[2em] ">
              <AiOutlineClose
                size="30px"
                color="black"
                onClick={() => setOpen(!open)}
              />
            </div>
            <div className="h-screen flex flex-col h4 text-secondary-10 text:hover-primary-50 space-y-5 px-[2em] pt-[2em]">
              <Link to="/business">Business</Link>
              <Link to="/">Company</Link>
              <Link to="/About">About Us</Link>
              <Link to="/stories">Blog</Link>
              <Link to="/FAQs">FAQs</Link>
              <div className="flex justify-between items-center ">
                <a href="#">
                  <img src={fb} alt="line" />
                </a>
                <a href="#">
                  <img src={ig} alt="facebook" />
                </a>
                <a href="#">
                  <img src={twitter} alt="facebook" />
                </a>
                <a href="#">
                  <img src={linkedin} alt="facebook" />
                </a>
              </div>
            </div>
          </div>

          </div>
        ) : null}

        <LinksToPage link='/comingSoon' text="Get started" divClassName="hidden md:flex" />
      </div>
      <div className="hidden md:block absolute top-[0%] right-[0%] py-7 pr-[5em] justify-center items-center max-w-[80em] m-auto ">
        <div className=" flex flex-col items-center space-y-4">
          <img src={circle} alt="facebook" className="pb-[9em] " />
          <a href="#">
            <FaFacebookF color="white" size="1.5em" />
          </a>
          <a href="#">
            <img src={line} alt="facebook" size="1.5em" />
          </a>
          <a href="#">
            <FaInstagram color="white" size="1.5em" />
          </a>
          <a href="#">
            <img src={line} alt="facebook" />
          </a>
          <a href="#">
            <FaTwitter color="white" size="1.5em" />
          </a>
          <a href="#">
            <img src={line} alt="facebook" />
          </a>
          <a href="#">
            <FaLinkedin color="white" size="1.5em" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
