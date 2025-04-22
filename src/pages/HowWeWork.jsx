import React from 'react'
import Avatar from '../assets/Avatars.png'
import Services from '../components/Services'
import ServicesImg1 from '../assets/servicesImg1.png'
import ServicesImg2 from '../assets/servicesImg2.png'
import ServicesImg3 from '../assets/servicesImg3.png'
import ServicesImg4 from '../assets/servicesImg4.png'
import ServicesImg5 from '../assets/servicesImg5.png'
import ServicesImg6 from '../assets/servicesImg6.png'
import ServicesImg7 from '../assets/servicesImg7.png'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const HowWeWork = () => {
  return (
    <div>
      <div className='sm:pb-30'>
        <div className='bg-[rgba(78,179,222,0.06)] flex-wrap justify-center w-fit mx-auto px-4 py-4 rounded-full flex items-center gap-5 outline-[#4eb3de2c] outline-2 mt-12'>
          <div><img className='w-30 sm:w-full ' src={Avatar} alt="" /></div>
          <div className='text-[#4EB3DE] font-semibold sm:text-[18px] text-sm'>Your Vision is Within Reach</div>
        </div>
        <div className="relative text-center ">
          <p className="uppercase font-bold xl:text-[64px] text-[36px] text-[#222222] mt-6">
            How{" "}
            <span className="relative inline-block">
              <span className="-rotate-1 absolute bg-[#67C598] w-[190px] sm:w-[330px] sm:h-[80px] h-[41px] top-[6px] right-[-10px] z-[10]"></span>
              <span className="relative text-white z-[20]">We Work</span>
            </span>
          </p>
        </div>
      </div>
      <div className='sm:pt-30 bg-white  mt-15 px-5 pt-10 sm:mx-0 pb-20 flex justify-center items-center flex-col gap-15'>
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
        <Services
          number="04."
          title="UX & UI Design"
          subtitle=" is a well designed and tested user experience and interface. UX/UI discovery and design is a core part of our service."
          points={[

          ]}
          bgColor="bg-[rgba(78,179,222,0.1)]"
          tickBgColor="bg-[rgba(78,179,222,0.1)]"
          tickColor="text-[#47B5E3]"
          img={ServicesImg4}
        />
        <Services
          number="05."
          title="Software & Web App Development"
          subtitle="Full stack software & web development for tele-medicine, live interactive media, conferencing, custom applications, web sites, and engaging visitor experiences, utilizing modern frameworks and technologies."
          points={[
            'Add video conferencing and live streaming to your brand.',
          ]}
          bgColor="bg-[rgba(158,229,201,0.1)]"
          tickBgColor="bg-[rgba(158,229,201,0.1)]"
          tickColor="text-[#3BB58A]"
          img={ServicesImg5}
        />
        <Services
          number="06."
          title="Marketing Automation and Communication"
          subtitle="We integrate open source marketing automation and live chat systems from leading platforms like Mautic.org and Live Helper Chat in addition to commercial offerings from MailChimp, HubSpot, ActiveCampaign and others to ensure your customers have access to easy and managed communication channels."
          points={[
            'Rise above the noise.',
          ]}
          bgColor="bg-[rgba(243,182,182,0.1)]"
          tickBgColor="bg-[rgba(243,182,182,0.1)]"
          tickColor="text-[#EA7C7C]"
          img={ServicesImg6}
        />
        <Services
          number="07."
          title="Consulting"
          subtitle="Agile project management, IT process improvement, Linux server administration, systems analysis, hosting, technology consultancy, and a cloud-based suite of managament tools at your disposal."
          points={[
            'Our team at your service!',
          ]}
          bgColor="bg-[rgba(78,179,222,0.1)]"
          tickBgColor="bg-[rgba(78,179,222,0.1)]"
          tickColor="text-[#47B5E3]"
          img={ServicesImg7}
        />
      </div>
      <div>
        <ContactForm bgColor="#f1f3f3" />
      </div>
      <div>
      <Footer bgColor="bg-[#ffffff]" />
      </div>
    </div>
  )
}

export default HowWeWork
