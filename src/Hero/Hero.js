import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-bg-text">
        <p>
          DEVELOPER <br /> DESIGNER
        </p>
      </div>
      <div className="main-text">
        <p>
          hello<span className="dot">.</span> <br />
          i'm <span className="text-sanjay">SANJAY</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
