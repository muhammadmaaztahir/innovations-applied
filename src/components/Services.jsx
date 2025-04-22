import React from 'react';
import { FaCheck } from "react-icons/fa";

const Services = ({ number, title, subtitle, points, bgColor, tickBgColor, tickColor, img }) => {
    return (
        <div className={`container mx-auto ${bgColor} flex flex-col  md:flex-row items-center justify-between p-10 rounded-3xl gap-10`}>
            <div className='flex flex-col sm:gap-5 gap-3 flex-2/3'>
                <p className='sm:text-2xl text-md  font-bold text-[#222222]'>{number}</p>
                <p className='sm:text-4xl text-[22px] font-bold text-[#222222] sm:w-2/3'>{title}</p>
                <p className='text-[#444444] sm:text-[18px] text-[14px] font-light capitalize sm:w-2/3'>{subtitle}</p>

                <ul className='flex flex-col gap-5 mt-5'>
                    {points.map((point, idx) => (
                        <li key={idx} className='flex items-center gap-5'>
                            <div className={`${tickBgColor} p-2 sm:p-3 rounded-full`}>
                                <FaCheck className={`${tickColor}`} />
                            </div>
                            <p className='font-semibold text-[14px] sm:text-[18px]'>{point}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <img className='sm:h-88 lg:h-88 md:h-65 w-100' src={img} alt={title} />
            </div>
        </div>
    );
};

export default Services;
