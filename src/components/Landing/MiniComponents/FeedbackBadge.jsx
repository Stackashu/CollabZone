import React from "react";
import style from "../../../styles/Landing/MiniComponents/FeedbackBadge.module.css";
import "../../../App.css";
import men from "../../../assests/images/men.png";
import star from "../../../assests/images/star.png";
import halfstar from "../../../assests/images/halfstar.png";
const FeedbackBadge = () => {
  return (
    <div className={`${style.badge}`}>
      
      <div className={`${style.left}`}>
        <img src={men} alt="men" />
      </div>

      <div className={`${style.right}`}>

        <div className={`${style.rightup}`}>
          <h2>Ashish Verma</h2>
          <div className={`${style.stars}`}>
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={halfstar} alt="halfstar" />
          </div>
        </div>
        
        <div className={`${style.rightdown}`}>
          <h5>
            “Highly recommended! This task manager is professional and
            efficient, making my daily planning much easier.”
          </h5>
        </div>
      </div>
    </div>
  );
};

export default FeedbackBadge;
