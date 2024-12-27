import React from 'react'
import "../../../App.css";
import style from "../../../styles/Landing/MiniComponents/Slide.module.css";


const Slide = ({image,heading,subHeading}) => {
  return (
    <div className={`${style.slide}`}> 
      <div  className={`${style.imgbox}`}>
        <img src={image} alt={image} />
      </div>
      <div className={`${style.text}`}>
        <h1>{heading}</h1>
        <h3>{subHeading}</h3>
      </div>
    </div>
  )
}

export default Slide
