import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const ThankYou = () => {
  return (
    <div className="min-h-150 flex flex-col items-center justify-center bg-[#f1f3f3] px-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md">
        <FaCheckCircle className="text-[#4fb3de] text-5xl mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-[#222222] mb-2">Thank You!</h1>
        <p className="text-gray-600 mb-6">
          Your request has been submitted successfully. <br />
          We will get in touch with you shortly.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-[#4fb3de] text-white font-semibold rounded-md hover:bg-[#54b688] transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
