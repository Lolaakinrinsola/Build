import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../Assets/Images/Logo.png";
import { AiFillApple } from "react-icons/ai";
import { TbBrandGooglePlay } from "react-icons/tb";
import "../Assets/styles/global.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="grid justify-center  gap-[3em] lg:space-y-0 lg:grid-cols-4 md:grid-cols-2 py-[4em] px-[2em] lg:px-[10em] m-auto ">
        <div className="gap-[3em] ">
          <p className="text-secondary-10 p3">Company</p>
          <ul>
            <Link to="/About">
              <li className="text-white-30 p3">About Us</li>
            </Link>
            <Link to="/contact">
              <li className="text-white-30 p3">Contact</li>
            </Link>
            <Link>
              <li className="text-white-30 p3">Partners</li>
            </Link>
            <Link to="/stories">
              <li className="text-white-30 p3">Blog</li>
            </Link>
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-secondary-10 p3">Products</p>
          <ul>
            <Link>
              <li className="text-white-30 p3">Personal Accounts</li>
            </Link>
            <Link>
              <li className="text-white-30 p3">Build for business</li>
            </Link>
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-secondary-10 p3">Resources</p>
          <ul>
            <Link>
              <li className="text-white-30 p3">Help Center</li>
            </Link>
            <Link>
              <li className="text-white-30 p3">Privacy Policy</li>
            </Link>
            <Link to="/FAQs">
              <li className="text-white-30 p3">FAQs</li>
            </Link>
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-secondary-10 p3">Connect with us</p>
          <div>
            <p className="text-white-30 p3">
              <span className="text-secondary-10 p3">Address: </span> <br />
              7a, Idejo Street, Victoria Island, Lagos. <br />
              <span className="text-secondary-10 p3">Email:</span> <br />
              contactus@ttmfb.com
            </p>
          </div>

          <div className="flex space-x-3">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-5 md:space-y-0 lg:flex-row gap-[1em] justify-between mx-[2em] lg:mx-[10em] border-t-[3] border-white-40  py-[4em] items-center">
        <div>
          <img src={logo} alt="" className="m-auto md:m-0" />
        </div>
        <div className="flex space-x-7 justify-center">
          <a
            href="#"
            className="border bg-secondary-10 flex rounded-2xl p-3 items-center w-[160px] space-x-2"
          >
            <AiFillApple size="2em" color="white" />
            <p className="text-white-30">
              Get on the <br />{" "}
              <span className="text-white-10">App Store</span>{" "}
            </p>
          </a>
          <a
            href="#"
            className="border border-primary-50 bg-primary-50 flex rounded-2xl p-3 items-center w-[160px] space-x-2"
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
        <p className="text-center md:text-left">
          © 2023 TTMF bank. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
