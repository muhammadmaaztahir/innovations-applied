import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function ContactForm({ bgColor = "#f1f3f3" }) {
    return (
        <div className={`py-32`} style={{ backgroundColor: bgColor }}>
            <div className="flex flex-col container mx-auto md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <div className="relative sm:px-0 px-5">
                        <p className="uppercase font-bold sm:text-[52px] text-[28px] text-[#222222] ">
                            Contact Us To Get<br />
                            Highly expert{" "}
                            <br />
                            <span className="relative inline-block">
                                <span className="-rotate-1 absolute bg-[#67C598] sm:w-[625px] w-[342px] sm:h-[65px] h-[35px] top-[4px] right-[-5px] z-[10]"></span>
                                <span className="relative text-white z-[20]">Software Developer.</span>
                            </span>
                        </p>
                    </div>

                    <div className="mt-10 space-y-4 sm:px-0 px-5">
                        <div className="flex items-center">
                            <div className="sm:w-14 h-10 w-10 sm:h-14 bg-[#f471a6] rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <span className="text-[#344054]">+1 (555) 000-0000</span>
                        </div>
                        <div className="flex items-center">
                            <div className="sm:w-14 h-10 w-10 sm:h-14 bg-[#f471a6] rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="text-[#344054]">info.example@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 w-full sm:px-20 px-5">
                    <form
                        className="space-y-10"
                        action="https://formsubmit.co/example@gmail.com"
                        method="POST"
                    >
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="http://localhost:5173/thankyou" />

                        <div className="flex space-x-4 flex-col sm:flex-row gap-10 sm:gap-0">
                            <div className="sm:w-1/2 w-full">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First name"
                                    className="w-full p-3 border border-[#D0D5DD] bg-white text-[#667085] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="sm:w-1/2 w-full">
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last name"
                                    className="w-full p-3 border border-[#D0D5DD] bg-white text-[#667085] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full p-3 border border-[#D0D5DD] bg-white text-[#667085] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone number"
                                className="w-full p-3 border border-[#D0D5DD] bg-white text-[#667085] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Leave us a message..."
                                className="w-full p-3 border border-[#D0D5DD] bg-white text-[#667085] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                                required
                            />
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="privacy"
                                name="agreePrivacy"
                                className="h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                                required
                            />
                            <label htmlFor="privacy" className="ml-2 text-sm text-gray-700">
                                You agree to the friendly privacy policy.
                            </label>
                        </div>
                        <div>
                            <button type="submit" className='flex w-full bg-[#4EB3DE] items-center sm:gap-49 lg:gap-50 md:gap-6 gap-25  px-2 pe-5 py-2 rounded-full cursor-pointer'>
                                <div className='bg-white p-3 rounded-full'><IoIosArrowForward /></div>
                                <span className='text-white text-[18px]'>Submit Now</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
