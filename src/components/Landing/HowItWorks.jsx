import React from "react";
import "../../App.css";
import style from "../../styles/Landing/HowItWorks.module.css";
import guidevideo from "../../assests/images/guidevideo.jpg";
import playbutton from "../../assests/images/playbutton.png";
const HowItWorks = () => {
  return ( 
    <div className={`${style.guide}`}>
      {/* following bgdiv is for the background image of the guide section for prevention for doing low opacity and affect on the other elemnts also*/}
      <div className={`${style.bgdiv}`}></div>

      <div className={`${style.maindiv}`}>
        <div className={`${style.heading}`}>
          Your Guide to a Seamless Experience
        </div>
        <div className={`${style.video}`}>
          <div className={`${style.tag}`}>#CollabZone</div>

          <img loading="lazy" className={`${style.play}`} src={playbutton} alt={playbutton} />
          {/* change this image to video */}
          <img loading="lazy" src={guidevideo} alt="video"></img>
          <div className={`${style.description}`}>
            Welcome to CollabZone! This video tutorial is tailored for new
            users, guiding you through the platform. In just a few minutes,
            learn how to set up your profile, connect with entrepreneurs, and
            access key features to enhance your collaboration experience.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
