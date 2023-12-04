import React from "react";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";

function HeroSection() {
  return (
    <div className="hero-section">
      <section className="top">
        <div className="logo">
          <img src={logo} alt="" className="logo" />
          <img src={logotext} alt="" />
        </div>
        <button>
          Plan a trip with Zon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="10"
            viewBox="0 0 36 21"
            fill="none"
          >
            <path
              d="M24 0C24 1.113 25.0995 2.775 26.2125 4.17C27.6435 5.97 29.3535 7.5405 31.314 8.739C32.784 9.6375 34.566 10.5 36 10.5M36 10.5C34.566 10.5 32.7825 11.3625 31.314 12.261C29.3535 13.461 27.6435 15.0315 26.2125 16.8285C25.0995 18.225 24 19.89 24 21M36 10.5H0"
              stroke="white"
              stroke-width="1.5"
            />
          </svg>
        </button>
      </section>

      <section className="middle">
        <h1>The World is wide, life is short, several adventures await you</h1>

        <p>
          Horizon is a web 5 platform incoporated with artificial intelligence,
          aimed at making your travel dreams become a reality.
        </p>

        <button className="start">Get Started</button>
      </section>

      <div className="bottom-right">
        <p>
          <span>04</span>-12-23
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
