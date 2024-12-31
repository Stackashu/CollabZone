import React, { useState } from "react";
import "../../App.css";
import style from "../../styles/Landing/Testimonials.module.css";
import FeedbackBadge from "../Landing/MiniComponents/FeedbackBadge.jsx";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const leftbutton = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : 4));
  };

  const rightbutton = () => {
    setIndex((prev) => (prev <= 3 ? prev + 1 : 0));
  };
  const Eclipse1 = () => {
    setIndex(0);
  };
  const Eclipse2 = () => {
    setIndex(2);
  };
  const Eclipse3 = () => {
    setIndex(4);
  };
  return (
    <div className={style.box}>
      <h2 className={style.heading}>Testimonial</h2>

      <div className={style.slider}>
        <div onClick={leftbutton} className={style.leftarrow}></div>

        <div className={`${style.carouselcontainer}`}>
          <div className={`${style.carousel}`} style={{  transform: `translateX(-${  index *  (window.innerWidth < 768  ? window.innerWidth < 480 ? 17 : 40  : window.innerWidth < 1024? 50 : 17) }%)`,}}>
            <FeedbackBadge />
            <FeedbackBadge />
            <FeedbackBadge />
            <FeedbackBadge />
            <FeedbackBadge />
            <FeedbackBadge />
          </div>
        </div>

        <div onClick={rightbutton} className={style.rightarrow}></div>
      </div>

      <div className={`${style.circlecontainer}`}>
        <div onClick={Eclipse1} className={`${style.circle}`}></div>
        <div onClick={Eclipse2} className={`${style.circle}`}></div>
        <div onClick={Eclipse3} className={`${style.circle}`}></div>
      </div>
    </div>
  );
};

export default Testimonials;
