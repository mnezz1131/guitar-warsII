import React from "react";
import "./Stars.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Stars() {
  AOS.init();
  return (
    <div className="stars-main">
      <h1
        className="glow"
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="2200"
        data-aos-duration="3000"
      >
        Guitar Wars
      </h1>
      <div className="gutiars">
        <img
          className="les-paul"
          src="./images/les-paul.png"
          data-aos="fade-up-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="3000"
          alt="les-paul"
        ></img>
        <img
          className="strat"
          src="./images/strat1.png"
          data-aos="fade-up-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="3000"
          // data-aos-easing="ease-in"
          alt="strat"
        ></img>
        
        <button className=" btn button-enter">
          Get Shredding
        </button>

      </div>
      <div id="space">
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
      </div>
    </div>
  );
}

export default Stars;
