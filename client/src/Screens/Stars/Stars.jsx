import React from "react";
import "./Stars.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Stars() {
  AOS.init();

  const shoot = () => {
    alert("Great Shot!");
  }

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
      <div className="guitars">
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
          alt="strat"
        ></img>

       
      </div>
       <div className="button-div">
       <button onClick={shoot}>Take the Shot!</button>
  
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
