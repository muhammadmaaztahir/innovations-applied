import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='flex w-full py-5 px-10 sm:px-10 items-center justify-between container mx-auto '>
        <div><a href="/"><img src={Logo} alt="" /></a></div>
        
        <div className='hidden md:block'>
          <ul className='flex gap-10 text-[#444444]'>
            <Link to="/">Home</Link>
            <Link to="/howwework">How we work</Link>
            <Link to="about">About us</Link>
          </ul>
        </div>

        <Link to="/requestaquote" className='hidden md:flex bg-[#4EB3DE] items-center gap-3 px-2 pe-5 py-2 rounded-full cursor-pointer'>
          <div className='bg-white p-3 rounded-full'><IoIosArrowForward /></div>
          <span className='text-white'>Request A Quote</span>
        </Link>

        <button 
          className='md:hidden flex items-center justify-center p-2'
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? 
            <FiX size={32} className="text-gray-800" /> : 
            <FiMenu size={32} className="text-gray-800" />
          }
        </button>
      </div>

      {isMenuOpen && (
        <div className='md:hidden w-full bg-white py-5 px-5 shadow-lg absolute top-20 left-0 z-50'>
          <ul className='flex flex-col gap-4 text-[#444444] text-lg'>
            <Link to="/" onClick={toggleMenu} className="py-2">Home</Link>
            <Link to="/howwework" onClick={toggleMenu} className="py-2">How we work</Link>
            <Link to="about" onClick={toggleMenu} className="py-2">About us</Link>
            
            <Link 
              to="/requestaquote" 
              onClick={toggleMenu}
              className='flex bg-[#4EB3DE] items-center gap-3 px-2 pe-5 py-2 rounded-full cursor-pointer w-fit mt-4'
            >
              <div className='bg-white p-3 rounded-full'><IoIosArrowForward /></div>
              <Link to='/requestaquote' className='text-white'>Request A Quote</Link>
            </Link>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar