import React from 'react';
import Logo from '../assets/Logo.png';
import { IoIosArrowForward } from "react-icons/io";

const Footer = ({ bgColor = "bg-white" }) => {
  return (
    <div>
      <div className={`${bgColor} rounded-3xl md:px-10`}>
        <div className='container mx-auto'>
          <div className='flex px-5 sm:px-0 flex-wrap sm:flex-nowrap gap-20 pt-20 pb-10'>
            <div className='sm:w-[40%] w-full flex flex-col gap-7'>
              <a href="/"><img src={Logo} alt="Logo" /></a>
              <p className='text-[#475467]'>
                Over the past 20 years, our founder has led teams that have created trend-setting industrial distribution and supply chain automation for the cutting tool industry, built a proprietary remote-controlled video streaming encoder...
              </p>
            </div>
            <div className='sm:w-[15%] w-[35%] flex flex-col gap-5'>
              <p className='font-semibold text-[#222222]'>Useful Links</p>
              <ul className='flex flex-col gap-2 text-[#444444]'>
                <li>Home</li>
                <li>How We Work</li>
                <li>About Us</li>
                <li>Request a Quote</li>
              </ul>
            </div>
            <div className='sm:w-[15%] w-[35%] flex flex-col gap-5'>
              <p className='font-semibold text-[#222222]'>Follow Us</p>
              <ul className='flex flex-col gap-2 text-[#444444]'>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
              </ul>
            </div>
            <div className='sm:w-[30%] w-full flex flex-col gap-5'>
              <p className='font-semibold text-[#222222]'>Stay Up to date</p>
              <input
                className='bg-white rounded-xl shadow-sm/20 h-10 outline-1 px-4 outline-gray-400'
                placeholder='Enter your email'
                type="text"
              />
              <button type="submit" className='flex w-full bg-[#67c598] items-center gap-23 md:gap-5 lg:gap-23 px-2 pe-5 py-2 rounded-full cursor-pointer'>
                <div className='bg-white p-3 rounded-full'><IoIosArrowForward /></div>
                <span className='text-white text-[18px] font-light'>Subscribe Now</span>
              </button>
            </div>
          </div>
          <div className='border-t-1 border-gray-200 py-10 text-center sm:px-0 px-5 sm:text-left'>
            <p className='text-[#475467]'>Copyright © 2025 Innovation Applied. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
