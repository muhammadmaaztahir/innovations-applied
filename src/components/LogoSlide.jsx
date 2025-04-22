import React from "react";
import Marquee from "react-marquee-slider";
import companyLogo1 from "../assets/companyLogo1.png";
import companyLogo2 from "../assets/companyLogo2.png";
import companyLogo3 from "../assets/companyLogo3.png";
import companyLogo4 from "../assets/companyLogo4.png";
import companyLogo5 from "../assets/companyLogo5.png";
import companyLogo6 from "../assets/companyLogo6.png";

const logos = [
  companyLogo1,
  companyLogo2,
  companyLogo3,
  companyLogo4,
  companyLogo5,
  companyLogo6,
];

const LogoSlide = () => {
  const handleInit = () => {
    console.log("Marquee initialized");
  };

  return (
    <div className="container mx-auto sm:mb-[80px] mb-10"
      style={{
        height: "70px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",

      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to right, rgba(232, 240, 240, 1) 0%, rgba(232, 240, 240, 0) 10%, rgba(232, 240, 240, 0) 90%, rgba(232, 240, 240, 1) 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div style={{ width: "100%", height: "100%" }}>
        <Marquee velocity={70} onInit={handleInit}>
          {logos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              style={{
                width: "300px",
                height: "70px",
                margin: "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={logo}
                alt={`Company Logo ${index + 1}`}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default LogoSlide;