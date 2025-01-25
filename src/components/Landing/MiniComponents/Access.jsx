import React from 'react'
import style from "../../../styles/Landing/MiniComponents/Access.module.css";
import "../../../App.css";
import check from "../../../assests/images/check.png";

const Access = ({point}) => {
  return (
    <div className={style.points}>
      <img src={check} alt={check} />
      <h2>{point}</h2>
    </div>
  )
}
 
export default Access
