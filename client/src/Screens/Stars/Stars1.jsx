import React from "react";
import "./Stars1.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom"
import useSound from "use-sound"
import gtr02 from "./gtr02.mp3"

function Stars(props) {
  AOS.init();
  const navigate = useNavigate();
  const [play] = useSound(gtr02)
  
  const btnClick = () => {
    console.log("Great Shot!");
    setTimeout(()=> navigate("/home"), 2*1000)
    
  }

  return (
    <div className="stars-main">
         <div id="space">
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
      </div>
      <h1
        className="glow"
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
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
          data-aos-delay="2550"
          data-aos-duration="3000"
          alt="les-paul"
        ></img>
        <img
          className="strat"
          src="./images/strat1.png"
          data-aos="fade-up-left"
          data-aos-offset="200"
          data-aos-delay="2300"
          data-aos-duration="3000"
          alt="strat"
        ></img>

       
      </div>
       <div className="button-div">
        <button onClick={(e) => { btnClick(); play() } }  >Get Shredding</button>
  
      </div>
      
   

     
    </div>
  );
}

export default Stars;
