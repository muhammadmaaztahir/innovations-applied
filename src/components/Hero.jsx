import React from 'react'
import Avatar from '../assets/Avatars.png'

const Hero = () => {
  return (
    <>
      <div className='bg-[rgba(78,179,222,0.06)] flex-wrap justify-center w-fit mx-auto px-4 py-4 rounded-full flex items-center gap-5 outline-[#4eb3de2c] outline-2 mt-12'>
        <div><img className='w-30 sm:w-full ' src={Avatar} alt="" /></div>
        <div className='text-[#4EB3DE] font-semibold sm:text-[18px] text-sm'>Your Vision is Within Reach</div>
      </div>
      <div className="relative text-center">
        <p className="uppercase font-bold xl:text-[64px] text-[36px] text-[#222222] mt-6">
          Seamless{" "}
          <span className="relative inline-block">
            <span className="-rotate-1 absolute bg-[#67C598] w-[370px] md:w-[367px] xl:w-[645px] xl:h-[80px] md:h-[44px] sm:h-[40px] h-[41px] top-[6px] right-[-10px] z-[10]"></span>
            <span className="relative text-white z-[20]">Zoom Integration</span>
          </span>
          <br /> for your Business
        </p>
      </div>
    </>
  )
}

export default Hero
