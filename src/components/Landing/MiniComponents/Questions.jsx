import React, { useState } from "react";
import style from "../../../styles/Landing/MiniComponents/Questions.module.css";
import "../../../App.css";
import arrow from "../../../assests/images/arrow.png";

const Questions = ({question,answer}) => {
    const [up, setUp] = useState(false)
 
    const openQs = ()=>{
        setUp((prev)=>!prev)
    }
  
  return (
    <div className={`${style.container}`}>
      <div className={`${style.quest}`}>
        <h2 style={{fontSize:"1.3"}}>{question}</h2>
       <img onClick={openQs} style={{ transform: up ? 'rotate(-90deg)' : 'rotate(90deg)' } } src={arrow} alt="arrow" />
      </div>
      <div  className={`${style.ans} ${up ? style.show : ''}`}>
       <p style={{display:up? "": "none", }}>{answer}</p>
      </div>
    </div>
  );
};
 
export default Questions;
  