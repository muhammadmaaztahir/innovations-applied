import React from 'react'
import Avatar from '../assets/Avatars.png'
import LogoSlide from '../components/LogoSlide'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import { IoIosArrowForward } from "react-icons/io";
import aboutImg1 from '../assets/aboutImg1.png'
import aboutImg2 from '../assets/aboutImg2.png'
import aboutImg3 from '../assets/aboutImg3.png'
import aboutImg4 from '../assets/aboutImg4.png'
import teamImg1 from '../assets/teamImg1.png'
import teamImg2 from '../assets/teamImg2.png'
import teamImg3 from '../assets/teamImg3.png'
import teamImg4 from '../assets/teamImg4.png'
import teamImg5 from '../assets/teamImg5.png'
import teamImg6 from '../assets/teamImg6.png'
import teamImg7 from '../assets/teamImg7.png'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { Link } from "react-router-dom"

const About = () => {
    return (
        <>
            <div className='sm:pb-30 pb-15'>
                <div className='bg-[rgba(78,179,222,0.06)] flex-wrap justify-center w-fit mx-auto px-4 py-4 rounded-full flex items-center gap-5 outline-[#4eb3de2c] outline-2 mt-12'>
                    <div><img className='w-30 sm:w-full ' src={Avatar} alt="" /></div>
                    <div className='text-[#4EB3DE] font-semibold sm:text-[18px] text-sm'>Your Vision is Within Reach</div>
                </div>
                <div className="relative text-center ">
                    <p className="uppercase font-bold xl:text-[64px] text-[36px] text-[#222222] mt-6">
                        About{" "}
                        <span className="relative inline-block">
                            <span className="-rotate-1 absolute bg-[#67C598] w-[65px] sm:w-[105px] sm:h-[80px] h-[41px] top-[6px] right-[-10px] z-[10]"></span>
                            <span className="relative text-white z-[20]">us</span>
                        </span>
                    </p>
                </div>
            </div>

            <div className='container mx-auto grid px-10 gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0'>

                <div className='mx-auto mb-25'>
                    <div className='flex flex-col gap-4'>
                        <img className='w-fit' src={teamImg1} alt="" />
                        <p className='text-[#101828] text-[20px] font-semibold uppercase'>Olivia Rhye</p>
                        <p className='text-[#47B5E3] font-medium text-[17px]'>Founder & CEO</p>
                        <div className='flex gap-5'>
                            <FaTwitter className='text-[#98A2B3] text-[24px]' />
                            <FaLinkedin className='text-[#98A2B3] text-[24px]' />
                            <FaDribbble className='text-[#98A2B3] text-[24px]' />
                        </div>
                    </div>
                </div>
                <div className='mx-auto mb-25'>
                    <div className='flex flex-col gap-4'>
                        <img className='w-fit' src={teamImg2} alt="" />
                        <p className='text-[#101828] text-[20px] font-semibold uppercase'>Phoenix Baker</p>
                        <p className='text-[#47B5E3] font-medium text-[17px]'>Engineering Manager</p>
                        <div className='flex gap-5'>
                            <FaTwitter className='text-[#98A2B3] text-[24px]' />
                            <FaLinkedin className='text-[#98A2B3] text-[24px]' />
                            <FaDribbble className='text-[#98A2B3] text-[24px]' />
                        </div>
                    </div>
                </div>
                <div className='mx-10 sm:mx-auto sm:mb-0 mb-25 bg-white rounded-4xl h-fit py-8'>
                    <div className='flex flex-col gap-4 text-center px-6'>
                        <p className='text-[#222222] text-[30px]  font-bold uppercase'>about the team</p>
                        <p className='text-[#475467] font-medium text-[17px]'>Each member of our team puts their soul and knowledge into each project so that you can confidently call your home your dream home</p>
                        <Link to='/requestaquote' type="submit" className='flex w-full bg-[#EC79A7] items-center justify-between pe-17 sm:pe-20 px-2  py-2 rounded-full cursor-pointer'>
                            <div className='bg-white p-3 rounded-full'><IoIosArrowForward /></div>
                            <span className='text-white text-[18px]'>Request A Quote</span>
                        </Link>
                    </div>
                </div>
                <div className='mx-auto mb-25'>
                    <div className='flex flex-col gap-4'>
                        <img className='w-fit' src={teamImg3} alt="" />
                        <p className='text-[#101828] text-[20px] font-semibold uppercase'>Lana Steiner</p>
                        <p className='text-[#47B5E3] font-medium text-[17px]'>Product Manager</p>
                        <div className='flex gap-5'>
                            <FaTwitter className='text-[#98A2B3] text-[24px]' />
                            <FaLinkedin className='text-[#98A2B3] text-[24px]' />
                            <FaDribbble className='text-[#98A2B3] text-[24px]' />
                        </div>
                    </div>
                </div>
                <div className='mx-auto mb-25'>
                    <div className='flex flex-col gap-4'>
                        <img className='w-fit' src={teamImg4} alt="" />
                        <p className='text-[#101828] text-[20px] font-semibold uppercase'>Candice Wu</p>
                        <p className='text-[#47B5E3] font-medium text-[17px]'>Backend Developer</p>
                        <div className='flex gap-5'>
                            <FaTwitter className='text-[#98A2B3] text-[24px]' />
                            <FaLinkedin className='text-[#98A2B3] text-[24px]' />
                            <FaDribbble className='text-[#98A2B3] text-[24px]' />
                        </div>
                    </div>
                </div>
                <div className='mx-auto mb-25'>
                    <div className='flex flex-col gap-4'>
                        <img className='w-fit' src={teamImg5} alt="" />
                        <p className='text-[#101828] text-[20px] font-semibold uppercase'>Drew Cano</p>
                        <p className='text-[#47B5E3] font-medium text-[17px]'>UX Researcher</p>
                        <div className='flex gap-5'>
                            <FaTwitter className='text-[#98A2B3] text-[24px]' />
                            <FaLinkedin className='text-[#98A2B3] text-[24px]' />
                            <FaDribbble className='text-[#98A2B3] text-[24px]' />
                        </div>
                    </div>
                </div>
                <div className='mx-auto mb-25'>
                    <div className='flex flex-col gap-4'>
                        <img className='w-fit' src={teamImg6} alt="" />
                        <p className='text-[#101828] text-[20px] font-semibold uppercase'>Olivia Rhye</p>
                        <p className='text-[#47B5E3] font-medium text-[17px]'>Founder & CEO</p>
                        <div className='flex gap-5'>
                            <FaTwitter className='text-[#98A2B3] text-[24px]' />
                            <FaLinkedin className='text-[#98A2B3] text-[24px]' />
                            <FaDribbble className='text-[#98A2B3] text-[24px]' />
                        </div>
                    </div>
                </div>
                <div className='mx-auto mb-25'>
                    <div className='flex flex-col gap-4'>
                        <img className='w-fit' src={teamImg7} alt="" />
                        <p className='text-[#101828] text-[20px] font-semibold uppercase'>Orlando Diggs</p>
                        <p className='text-[#47B5E3] font-medium text-[17px]'>Customer Success</p>
                        <div className='flex gap-5'>
                            <FaTwitter className='text-[#98A2B3] text-[24px]' />
                            <FaLinkedin className='text-[#98A2B3] text-[24px]' />
                            <FaDribbble className='text-[#98A2B3] text-[24px]' />
                        </div>
                    </div>
                </div>

            </div>


            <div className='px-0 bg-white mx-auto py-15 sm:py-30 pb-50 sm:pb-30 sm:px-0 '>
                <div className="container mx-auto relative mb-15 px-10">
                    <p className="uppercase font-bold sm:text-[52px] text-[36px] text-[#222222] mb-6">
                        About{" "}
                        <br />
                        <span className="relative inline-block">
                            <span className="-rotate-1 absolute bg-[#67C598] w-[375px] h-[42px] sm:w-[545px] sm:h-[62px] top-[6px] right-[-2px] z-[10]"></span>
                            <span className="relative text-white z-[20]">Innovation Applied</span>
                        </span>
                    </p>
                </div>
                <div className='container mx-auto px-10 pb-30 flex flex-wrap sm:flex-nowrap sm:gap-30'>
                    <img className='sm:w-1/2' src={aboutImg1} alt="" />
                    <div className='sm:w-1/2 flex flex-col gap-30 relative'>
                        <p className='sm:w-2/3  text-[18px] pt-10 text-[#444444]'>Over the past 20 years, our founder has lead teams that have created trend setting industrial distribution and supply chain automation for the cutting tool industry, built a proprietary remote controlled video streaming encoder and cloud management service, provided live video interactive training and event streaming for automotive companies such as Ford, Toyota, & Honda, and built and maintained global video conferencing networks.</p>
                        <img className='absolute -bottom-60 sm:-bottom-30 sm:-left-6' src={aboutImg2} alt="" />
                    </div>


                </div>
            </div>
            <div className='sm:mt-20 mt-10 text-center'>
                <p className='text-[#475467] sm:text-xl text-sm mb-10'>Join 4,000+ companies already growing</p>
                <LogoSlide />
            </div>

            <div className='bg-white  mx-auto py-15 sm:py-30 pb-20 sm:pb-30 sm:px-0 '>
                <div className='container px-10 flex flex-wrap sm:flex-nowrap sm:gap-20  gap-10 mx-auto '>
                    <div className=" sm:w-1/2 flex flex-col gap-10 mx-auto relative">
                        <p className="uppercase font-bold sm:text-[52px] text-[36px] text-[#222222] mb-6">
                            Our{" "}

                            <span className="relative inline-block">
                                <span className="-rotate-1 absolute bg-[#67C598] w-[127px] h-[42px] sm:w-[180px] sm:h-[62px] top-[6px] right-[-2px] z-[10]"></span>
                                <span className="relative text-white z-[20]">Goals</span>
                            </span>
                        </p>
                        <img className='sm:w-full' src={aboutImg3} alt="" />
                    </div>


                    <div className='sm:w-1/2 flex flex-col gap-20'>
                        <p className='sm:w-2/3  text-[18px] pt-10 text-[#444444]'>We develop engaging custom apps and web sites for a variety of clients. Technologies may have changed, but delivering on time and on budget never goes out of style.  Our goal is your complete satisfaction.</p>
                        <img className='-bottom-60 sm:-bottom-30 sm:-left-6' src={aboutImg4} alt="" />
                    </div>



                </div>
            </div>
            <div>
                <Testimonials />
            </div>
            <div>
                <ContactForm bgColor="#ffffff" />
            </div>
            <div>
                <Footer bgColor="bg-[#f4f5f5]" />
            </div>
        </>
    )
}

export default About
