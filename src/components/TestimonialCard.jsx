import React from "react";

const TestimonialCard = ({
  name,
  quote,
  imageSrc,
  className,
  verified = true,
  hasBackground = false,
}) => {
  return (
    <div
      className={`rounded-lg p-4 shadow-sm border border-gray-100 w-[400px] mx-3 ${
        hasBackground ? "bg-white" : "bg-transparent"
      } ${className || ""}`}
    >
      <div className="flex items-start mb-2">
        <img
          src={imageSrc}
          alt={`${name} avatar`}
          className="h-8 w-8 rounded-full object-cover mr-2.5"
        />
        <div>
          <h3 className="font-medium text-gray-900 text-sm">{name}</h3>
          {verified && (
            <div className="flex items-center">
              <div className="bg-blue-500 w-2.5 h-2.5 rounded-full flex items-center justify-center mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="text-xs text-gray-500">Verified</span>
            </div>
          )}
        </div>
      </div>

      <p className="text-gray-700 text-xs line-clamp-3">{quote}</p>
    </div>
  );
};

export default TestimonialCard;
