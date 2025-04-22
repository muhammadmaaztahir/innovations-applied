import React from 'react'
import Marquee from "react-fast-marquee";
import TestimonialCard from "./TestimonialCard";
import testimonialImg1 from '../assets/testimonialImg1.png'

const testimonials = [
    {
        id: 1,
        name: "Olivia Rhye",
        quote:
            "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
        imageSrc: testimonialImg1,
        hasBackground: true,
    },
    {
        id: 2,
        name: "Olivia Rhye",
        quote:
            "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
        imageSrc: testimonialImg1,
        hasBackground: false,
    },
    {
        id: 3,
        name: "Olivia Rhye",
        quote:
            "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
        imageSrc: testimonialImg1,
        hasBackground: true,
    },
    {
        id: 4,
        name: "Olivia Rhye",
        quote:
            "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
        imageSrc: testimonialImg1,
        hasBackground: false,
    },
    {
        id: 5,
        name: "Olivia Rhye",
        quote:
            "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
        imageSrc: testimonialImg1,
        hasBackground: true,
    },
    {
        id: 6,
        name: "Olivia Rhye",
        quote:
            "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
        imageSrc: testimonialImg1,
        hasBackground: false,
    },
    {
        id: 7,
        name: "Olivia Rhye",
        quote:
            "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
        imageSrc: testimonialImg1,
        hasBackground: true,
    },
    {
        id: 8,
        name: "Olivia Rhye",
        quote:
            "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
        imageSrc: testimonialImg1,
        hasBackground: false,
    },
];


const Testimonials = () => {
    return (
        <div>
            <div className='bg-[#f5f5f5]'>
                <div className="container relative w-full mx-auto text-center pt-28 pb-4 px-5 sm:px-0" >
                    <p className="uppercase font-bold sm:text-[52px] text-[28px] text-[#222222] mb-6">
                        What Our{" "}
                        <span className="relative inline-block">
                            <span className="-rotate-1 absolute bg-[#67C598] sm:w-[608px] w-[333px] sm:h-[67px] h-[34px] top-[3px] right-[-4px] z-[10]"></span>
                            <span className="relative text-white z-[20]">Clients Say About Us</span>
                        </span>
                    </p>
                </div>
                <div>
                    <div className="py-8  overflow-hidden">
                        <div className="mb-6">
                            <Marquee gradient={false} speed={100} pauseOnHover={true}>
                                {testimonials.slice(0, 4).map((testimonial) => (
                                    <TestimonialCard
                                        key={testimonial.id}
                                        name={testimonial.name}
                                        quote={testimonial.quote}
                                        imageSrc={testimonial.imageSrc}
                                        hasBackground={testimonial.hasBackground}
                                    />
                                ))}
                            </Marquee>
                        </div>

                        <div className="mb-6">
                            <Marquee
                                gradient={false}
                                speed={100}
                                pauseOnHover={true}
                                direction="right"
                            >
                                {testimonials.slice(4, 8).map((testimonial) => (
                                    <TestimonialCard
                                        key={testimonial.id}
                                        name={testimonial.name}
                                        quote={testimonial.quote}
                                        imageSrc={testimonial.imageSrc}
                                        hasBackground={!testimonial.hasBackground}
                                    />
                                ))}
                            </Marquee>
                        </div>

                        <div>
                            <Marquee gradient={false} speed={100} pauseOnHover={true}>
                                {testimonials.map((testimonial, index) => (
                                    <TestimonialCard
                                        key={`additional-${testimonial.id}`}
                                        name={testimonial.name}
                                        quote={testimonial.quote}
                                        imageSrc={testimonial.imageSrc}
                                        hasBackground={index % 2 === 0}
                                    />
                                ))}
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Testimonials
