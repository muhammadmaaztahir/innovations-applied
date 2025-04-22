import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Avatar from '../assets/Avatars.png'

const RequestAQuote = () => {
  return (
    <div>
    <div className='sm:pb-30 pb-10'>
            <div className='bg-[rgba(78,179,222,0.06)] flex-wrap justify-center w-fit mx-auto px-4 py-4 rounded-full flex items-center gap-5 outline-[#4eb3de2c] outline-2 mt-12'>
              <div><img className='w-30 sm:w-full ' src={Avatar} alt="" /></div>
              <div className='text-[#4EB3DE] font-semibold sm:text-[18px] text-sm'>Your Vision is Within Reach</div>
            </div>
            <div className="relative text-center ">
              <p className="uppercase font-bold xl:text-[64px] text-[36px] text-[#222222] mt-6">
                Request{" "}
                <span className="relative inline-block">
                  <span className="-rotate-1 absolute bg-[#67C598] w-[170px] sm:w-[295px] sm:h-[80px] h-[41px] top-[6px] right-[-10px] z-[10]"></span>
                  <span className="relative text-white z-[20]">A Quote</span>
                </span>
              </p>
            </div>
          </div>
      <div>
        <ContactForm bgColor="#ffffff" />
      </div>
      <div>
        <Footer bgColor="bg-[#f4f5f5]" />
      </div>
    </div>
  )
}

export default RequestAQuote
