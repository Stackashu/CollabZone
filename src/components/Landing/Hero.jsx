import React from "react";
import "../../App.css";
import style from "../../styles/Landing/Hero.module.css";
import lady from "../../assests/images/lady.jpg";
import fb from "../../assests/images/fb.png";
import twitter from "../../assests/images/twitterx.png";
import linkedin from "../../assests/images/linkdedin.png"
import ig from "../../assests/images/ig.png";

const Hero = () => {
  return (
    <div className={`${style.outerhero}`}>
      <div className={`${style.innerhero}`}>

        <div className={`${style.left}`}>
          <img src={lady} alt="person" />
        </div>

        <div className={`${style.right}`}>
            {/* change this images to link for social media */}
           <div className={`${style.socialmedia}`}>
            <img className={`${style.media1}`} src={linkedin} alt="linkedin" />
            <img className={`${style.media}`} src={fb} alt="fb" />
            <img  className={`${style.media}`} src={ig} alt="ig" />
            <img className={`${style.media}`} src={twitter} alt="twitter" />
             </div>

          <h1>Welcome to CollabZone!</h1>
          <div className={`${style.para}`}>
            At CollabZone, we empower entreprenuers and innovators by providing
            a platform designed for collaboration. Connect with like-minded
            individuals, access essential resources, and streamline your startup
            journey.
          </div>
          <div className={`${style.join}`}>Join Us Today!</div>
          <div className={`${style.number}`}>
            <div className={`${style.innum}`}>
                <h2>1000+</h2>
                <h3>Active entrepreneurs</h3>
            </div>
            <div className={`${style.innum}`}>
                <h2>89%</h2>
                <h3>Average project success rate</h3>
            </div>
            <div className={`${style.innum}`}>
                <h2>24*7</h2>
                <h3>Technical support</h3>
            </div>
          </div>
         

        </div>
      </div>
    </div>
  );
};

export default Hero;
