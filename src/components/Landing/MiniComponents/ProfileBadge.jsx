import React from 'react'
import Human from "../../../assests/images/human.png";
import style from "../../../styles/Landing/MiniComponents/ProfileBadge.module.css";
import "../../../App.css";
import Badgepic from "../../../assests/images/badgepic.png";

const ProfileBadge = ({pic , headline}) => {
  return (
    <span className={`${style.box}`}>
      <img loading="lazy"  className={`${style.pic}`} src={pic} alt='pic' />
      <h4>{headline}</h4>
     <div className={`${style.downarrow}`}></div>
      <img className={`${style.profile}`} src={Badgepic} alt='badgepic'/>
    </span>
  )
}

export default ProfileBadge
