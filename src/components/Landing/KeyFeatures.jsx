import React from "react";
import "../../App.css";
import style from "../../styles/Landing/keyFeatures.module.css";
import keyFeature from "../../assests/images/keyFeature.png";
import keyarrow from "../../assests/images/keyarrow.png";
import Access from "./MiniComponents/Access"; 

const KeyFeatures = () => {

    const  points = [
        "Key Features Available for Free",
        "Project Management Tools",
        "Real-Time Collaboration",
        "Resource Library",
        "Community Engagement",
        "Secure Data Management",
        "Customizable Notifications"
    ]

  return (
    <div className={`${style.box}`}>
      <div className={`${style.innerbox}`}>


        <div className={`${style.left}`}>
          <h1><span>100% </span>Free Access!</h1>
          <p>
            Enjoy all the powerful features of CollabZone at no cost. Connect,
            collaborate, and grow your startup without any financial barriers,
            making it the perfect platform for entrepreneurs and innovators.
          </p>
          <img src={keyFeature} alt={keyFeature}/>
        </div>

        <div className={`${style.right}`}>
            <h3>Key Features Available for Free</h3>

            <div className={`${style.access}`}>
               {
                points.map((point, index) => {
                    return <Access key={index} point={point}/>
               })}
            </div>

           <div className={`${style.button}`}>
            <h2>Try For FREE</h2>
            <img src={keyarrow} alt={keyarrow}/>
           </div>

        </div>

      </div>
    </div>
  );
};

export default KeyFeatures;
