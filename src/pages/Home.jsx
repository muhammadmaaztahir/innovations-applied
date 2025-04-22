import React from 'react'
import Hero from '../components/Hero'
import zoomImg1 from '../assets/zoomImg1.png'
import zoomImg2 from '../assets/zoomImg2.png'
import zoomImg3 from '../assets/zoomImg3.png'
import zoomImg4 from '../assets/zoomImg4.png'
import zoomImg5 from '../assets/zoomImg5.png'
import LogoSlide from '../components/LogoSlide'
import AppsDashboard from '../components/AppsDashboard'
import Logo from '../assets/Logo.png'
import Avatar1 from '../assets/Avatars/Avatar1.png'
import Avatar2 from '../assets/Avatars/Avatar2.png'
import Avatar3 from '../assets/Avatars/Avatar3.png'
import Avatar4 from '../assets/Avatars/Avatar4.png'
import Avatar5 from '../assets/Avatars/Avatar5.png'
import Avatar6 from '../assets/Avatars/Avatar6.png'
import Avatar7 from '../assets/Avatars/Avatar7.png'
import Avatar8 from '../assets/Avatars/Avatar8.png'
import Avatar9 from '../assets/Avatars/Avatar9.png'
import Avatar10 from '../assets/Avatars/Avatar10.png'
import { IoIosArrowForward } from "react-icons/io";
import tree from '../assets/tree.png'
import line from '../assets/line.png'
import Services from '../components/Services'
import ServicesImg1 from '../assets/servicesImg1.png'
import ServicesImg2 from '../assets/servicesImg2.png'
import ServicesImg3 from '../assets/servicesImg3.png'
import Testimonials from '../components/Testimonials'
import Blogs from '../components/Blogs'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import CalInlineEmbed from '../components/CalInlineEmbed'




const teamMembers = [
  { name: "Olivia Rhye", designation: "Director", img: Avatar1 },
  { name: "Demi Wilkinson", designation: "UX Designer", img: Avatar2 },
  { name: "Natali Craig", designation: "Database Operator", img: Avatar3 },
  { name: "Candice Wu", designation: "Associate Director", img: Avatar4 },
  { name: "Lionel C.", designation: "CEO", img: Avatar5 },
  { name: "Phoenix Baker", designation: "Marketing Manager", img: Avatar6 },
  { name: "Lana Steiner", designation: "Product Manager", img: Avatar7 },
  { name: "Drew Cano", designation: "Creative Head", img: Avatar8 },
  { name: "Robert L.", designation: "Sales Manager", img: Avatar9 },
  { name: "Annie Stanley", designation: "Business Analyst", img: Avatar10 },
];




const Home = () => {


  const firstColumn = teamMembers.slice(0, 5);
  const secondColumn = teamMembers.slice(5, 10);
  return (
    <>
      <Hero />
      <div className='flex flex-col sm:gap-14 gap-5 mt-10 container mx-auto'>
        <div className='flex justify-between gap-5 sm:mx-0 mx-5'>
          <div><img src={zoomImg1} alt="" /></div>
          <div className='flex flex-col justify-between'>
            <div><img src={zoomImg2} alt="" /></div>
            <div><img src={zoomImg3} alt="" /></div>
            <div><img src={zoomImg4} alt="" /></div>
          </div>
        </div>
        <div className='mx-5 sm:mx-0' ><img className='w-full' src={zoomImg5} alt="" /></div>
      </div>
      <div className='sm:mt-20 mt-10 text-center'>
        <p className='text-[#475467] sm:text-xl text-sm mb-10'>Join 4,000+ companies already growing</p>
        <LogoSlide />
      </div>
      <div className='bg-white w-full'>
        <AppsDashboard />
      </div>
      <div className='container mx-auto sm:py-30 py-15 px-5'>
        <div className='flex  sm:flex-nowrap flex-col lg:flex-row items-center gap-10 justify-between'>
          <div className="relative sm:w-1/2 md:w-full">
            <p className="uppercase font-bold sm:text-[52px] text-[36px] text-[#222222] mb-6">
              About{" "}
              <br />
              <span className="relative inline-block">
                <span className="-rotate-1 absolute bg-[#67C598] w-[222px] h-[42px] sm:w-[320px] sm:h-[62px] top-[6px] right-[-2px] z-[10]"></span>
                <span className="relative text-white z-[20]">Innovation</span>
              </span>
              Applied
            </p>
            <p className='mt-3 text-[#475467] text-sm mb-10'>Over the past 20 years, our founder has lead teams that have created trend setting industrial distribution and supply chain automation for the cutting tool industry, built a proprietary remote controlled video streaming encoder and cloud management service, provided live video interactive training and event streaming for automotive companies such as Ford, Toyota, & Honda, and built and maintained global video conferencing networks.</p>

            <Link to="/about" className='flex w-fit bg-[#4EB3DE] items-center gap-3 px-2 pe-5 py-2 rounded-full cursor-pointer'>
              <div className='bg-white p-3 rounded-full'><IoIosArrowForward /></div>
              <span className='text-white'>Read More</span>
            </Link>

          </div>
          <div className='sm:w-2/3 md:w-full w-full sm:p-10 p-0 pt-20 mx-auto flex flex-col justify-center items-center'>
            <div className='flex  border-[#67C598] border-2 bg-white items-center gap-3  px-12 pe-5 py-4 rounded-full cursor-pointer w-fit'>

              <img src={Logo} alt="" />
            </div>
            <img className='w-54 sm:w-120' src={tree} alt="" />
            <div className="flex  mt-2 w-full justify-between">

              <div className="flex flex-col gap-3">
                {firstColumn.map((member, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center"
                  >
                    <div className="flex bg-white border-[#67C598] border-2 items-center w-full gap-5 px-2 pe-0 py-2 rounded-full">
                      <div className="bg-white rounded-full">
                        <img src={member.img} alt={member.name} />
                      </div>
                      <div className="flex flex-col pr-2 sm:pr-20">
                        <p className="font-semibold text-[12px] sm:text-[16px]">{member.name}</p>
                        <p className="font-light text-sm text-[9px] sm:text-[14px]">{member.designation}</p>
                      </div>
                    </div>

                    {index !== firstColumn.length - 1 && (
                      <img className="h-10 w-0.5" src={line} alt="" />
                    )}
                  </div>
                ))}
              </div>



              <div className="flex flex-col gap-3">
                {secondColumn.map((member, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center"
                  >
                    <div className="flex bg-white border-[#67C598] border-2 items-center w-full gap-5 px-2 pe-0 py-2 rounded-full">
                      <div className="bg-white rounded-full">
                        <img src={member.img} alt={member.name} />
                      </div>
                      <div className="flex flex-col pr-3 sm:pr-20">
                        <p className="font-semibold text-[12px] sm:text-[16px]">{member.name}</p>
                        <p className="font-light text-sm text-[9px] sm:text-[14px]">{member.designation}</p>
                      </div>
                    </div>

                    {index !== firstColumn.length - 1 && (
                      <img className="h-10 w-0.5" src={line} alt="" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>


        </div>
      </div>
      <div className='sm:pt-20 pt-15 bg-white rounded-4xl'>
        <div className="container relative w-full mx-auto text-center">
          <p className="uppercase font-bold text-[36px] sm:text-[52px] text-[#222222] mb-6">
            Services{" "}
            <span className="relative inline-block">
              <span className="-rotate-1 absolute bg-[#67C598] sm:w-[270px] w-[185px] sm:h-[62px] h-[41px] top-[6px] right-[-2px] z-[10]"></span>
              <span className="relative text-white z-[20]">We Offer</span>
            </span>
          </p>
        </div>
        <div className='sm:mt-20 mt-15 mx-5 sm:mx-0 pb-20 flex justify-center items-center flex-col gap-15'>
          <Services

            number="01."
            title="Zoom Integration"
            subtitle="Embed phone and conferencing in apps and web sites"
            points={[
              'Highlight AI Offerings From Zoom',
              'Zoom Contact Center',
              'Zoom Rooms',
              'Zoom Meetings'
            ]}
            bgColor="bg-[rgba(78,179,222,0.1)]"
            tickBgColor="bg-[rgba(78,179,222,0.1)]"
            tickColor="text-[#47B5E3]"
            img={ServicesImg1}

          />
          <Services
            number="02."
            title="Jitsi Integration"
            subtitle="Embed Meeting Experiences in Apps and Web Sites"
            points={[
              'SIP Phone Integration',
              'WebRTC Video Conferencing',
              'Recording And Live Streaming'
            ]}
            bgColor="bg-[rgba(158,229,201,0.1)]"
            tickBgColor="bg-[rgba(158,229,201,0.1)]"
            tickColor="text-[#3BB58A]"
            img={ServicesImg2}
          />

          <Services
            number="03."
            title="VoIP Systems"
            subtitle="Cost Effective Hosted Phone Systems"
            points={[
              'Free SWITCH',
              'Free PBX',
              'Asterisk',
              'Custom VoIP and Business Phone Systems'
            ]}
            bgColor="bg-[rgba(243,182,182,0.1)]"
            tickBgColor="bg-[rgba(243,182,182,0.1)]"
            tickColor="text-[#EA7C7C]"
            img={ServicesImg3}
          />
          <Link to='/howwework' className='flex w-fit bg-[#4EB3DE] items-center gap-3 px-2 pe-5 py-2 rounded-full cursor-pointer'>
            <div className='bg-white p-3 rounded-full'><IoIosArrowForward /></div>
            <span className='text-white'>View More</span>
          </Link>
        </div>

      </div>

      <div className='py-30 px-5 sm:px-0'>
      <div className="container relative w-full mx-auto mb-20 text-center">
          <p className="uppercase font-bold text-[36px] sm:text-[52px] text-[#222222] mb-6">
            Schedule a{" "}
            <span className="relative inline-block">
              <span className="-rotate-1 absolute bg-[#67C598] sm:w-[235px] w-[165px] sm:h-[62px] h-[41px] top-[6px] right-[-2px] z-[10]"></span>
              <span className="relative text-white z-[20]">Meeting</span>
            </span>
          </p>
        </div>
        <CalInlineEmbed />
      </div>
      
      <div>
        <Testimonials />
      </div>
      <div className='bg-white rounded-4xl pt-20'>
        <div className="container relative w-full mx-auto text-center">
          <p className="uppercase font-bold sm:text-[52px] text-[36px] text-[#222222] mb-6">
            Our{" "}
            <span className="relative inline-block">
              <span className="-rotate-1 absolute bg-[#67C598] sm:w-[180px] w-[124px] sm:h-[62px] h-[40px] top-[6px] right-[-2px] z-[10]"></span>
              <span className="relative text-white z-[20]">Blogs</span>
            </span>
          </p>
        </div>
        <div>
          <Blogs />
        </div>
      </div>
      <div id='contactForm'>
        <ContactForm bgColor="#f1f3f3" />
      </div>
      <div>
        <Footer bgColor="bg-[#ffffff]" />
      </div>
    </>
  )
}

export default Home
